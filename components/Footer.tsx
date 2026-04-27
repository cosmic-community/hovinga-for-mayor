export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 px-6" style={{ backgroundColor: '#0A1628' }}>
      <div className="content-max">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p
              className="text-sm font-bold tracking-widest uppercase mb-1"
              style={{ color: '#F5A623', letterSpacing: '0.18em' }}
            >
              HOVINGA FOR MAYOR
            </p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Jeff Hovinga for Mayor of Grand Rapids
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Paid for by Hovinga for Mayor Committee
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
              © {year} Hovinga for Mayor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}