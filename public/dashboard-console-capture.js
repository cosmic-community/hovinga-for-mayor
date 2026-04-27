(function () {
  if (window.self === window.top) return;

  var logs = [];
  var MAX_LOGS = 500;

  var originalConsole = {
    log: console.log.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console),
    info: console.info.bind(console),
    debug: console.debug.bind(console),
  };

  function serialize(arg) {
    if (typeof arg === 'object' && arg !== null) {
      try {
        return JSON.stringify(arg, function (key, value) {
          if (typeof value === 'function') return '[Function]';
          if (value instanceof Error) return value.toString();
          return value;
        });
      } catch (e) {
        return '[Object]';
      }
    }
    return String(arg);
  }

  function captureLog(level, args) {
    var timestamp = new Date().toISOString();
    var message = Array.prototype.slice.call(args).map(serialize).join(' ');
    var logEntry = { timestamp: timestamp, level: level, message: message, url: window.location.href };
    logs.push(logEntry);
    if (logs.length > MAX_LOGS) logs.shift();
    try {
      window.parent.postMessage({ type: 'console-log', log: logEntry }, '*');
    } catch (e) {}
  }

  ['log', 'warn', 'error', 'info', 'debug'].forEach(function (level) {
    console[level] = function () {
      originalConsole[level].apply(console, arguments);
      captureLog(level, arguments);
    };
  });

  window.addEventListener('error', function (event) {
    captureLog('error', [event.message + (event.filename ? ' (' + event.filename + ':' + event.lineno + ')' : '')]);
  });

  window.addEventListener('unhandledrejection', function (event) {
    captureLog('error', ['Unhandled Promise Rejection: ' + serialize(event.reason)]);
  });

  function sendReady() {
    try {
      window.parent.postMessage({ type: 'console-capture-ready', url: window.location.href, timestamp: new Date().toISOString() }, '*');
    } catch (e) {}
    sendRouteChange();
  }

  function sendRouteChange() {
    try {
      window.parent.postMessage({
        type: 'route-change',
        route: {
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
          href: window.location.href,
        },
        timestamp: new Date().toISOString(),
      }, '*');
    } catch (e) {}
  }

  if (document.readyState === 'complete') {
    sendReady();
  } else {
    window.addEventListener('load', sendReady);
  }

  // Route change monitoring
  var _pushState = history.pushState;
  var _replaceState = history.replaceState;

  history.pushState = function () {
    _pushState.apply(history, arguments);
    sendRouteChange();
  };

  history.replaceState = function () {
    _replaceState.apply(history, arguments);
    sendRouteChange();
  };

  window.addEventListener('popstate', sendRouteChange);
  window.addEventListener('hashchange', sendRouteChange);
})();