import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar, toggleDarkMode } from '../../store/slices/uiSlice'
import { useLocation } from 'react-router-dom'

const PAGE_TITLES = {
  '/': 'Security Overview',
  '/breach': 'Breach Checker',
  '/ip': 'IP Reputation Lookup',
  '/threats': 'CVE Threat Feed',
  '/password': 'Password Auditor',
  '/settings': 'Settings',
}

export default function Topbar() {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const darkMode = useSelector(s => s.ui.darkMode)
  const sidebarOpen = useSelector(s => s.ui.sidebarOpen)

  const now = new Date()
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <header className="sticky top-0 z-10 flex items-center gap-4 px-6 py-3 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="btn-ghost p-2 rounded-lg"
        aria-label="Toggle sidebar"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          {sidebarOpen
            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      <div>
        <h1 className="text-sm font-semibold text-white">{PAGE_TITLES[pathname] || 'CyberWatch'}</h1>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <div className="hidden sm:flex flex-col items-end">
          <span className="font-mono text-xs text-cyber-400">{timeStr}</span>
          <span className="text-[10px] text-gray-600">{dateStr}</span>
        </div>

        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="btn-ghost p-2 rounded-lg text-gray-400"
          title="Toggle theme"
        >
          {darkMode ? '☀' : '☾'}
        </button>

        <div className="flex items-center gap-2 pl-3 border-l border-gray-800">
          <div className="w-7 h-7 rounded-full bg-cyber-800 flex items-center justify-center text-xs font-bold text-cyber-300">
            SC
          </div>
        </div>
      </div>
    </header>
  )
}
