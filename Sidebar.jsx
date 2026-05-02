import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../../store/slices/uiSlice'

const NAV = [
  { to: '/', label: 'Dashboard', icon: '⬡', exact: true },
  { to: '/breach', label: 'Breach Checker', icon: '◈' },
  { to: '/ip', label: 'IP Reputation', icon: '◎' },
  { to: '/threats', label: 'CVE Feed', icon: '◆' },
  { to: '/password', label: 'Password Audit', icon: '⬡' },
  { to: '/settings', label: 'Settings', icon: '◇' },
]

export default function Sidebar() {
  const open = useSelector(s => s.ui.sidebarOpen)
  const dispatch = useDispatch()

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}

      <aside className={`
        fixed top-0 left-0 h-full z-30 flex flex-col
        bg-gray-950 border-r border-gray-800
        transition-all duration-300 ease-in-out
        ${open ? 'w-60' : 'w-0 lg:w-16 overflow-hidden'}
      `}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-800 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-cyber-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
            CW
          </div>
          {open && (
            <div>
              <div className="text-sm font-bold text-white tracking-wide">CyberWatch</div>
              <div className="text-[10px] text-gray-500 font-mono">THREAT INTELLIGENCE</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 space-y-0.5 overflow-y-auto">
          {NAV.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group
                ${isActive
                  ? 'bg-cyber-900/60 text-cyber-400 border border-cyber-800/50'
                  : 'text-gray-400 hover:bg-gray-800/60 hover:text-gray-100'
                }`
              }
            >
              <span className="text-base shrink-0">{icon}</span>
              {open && <span className="truncate">{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Status indicator */}
        {open && (
          <div className="p-4 border-t border-gray-800 shrink-0">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-slow" />
              <span className="font-mono">FEEDS ACTIVE</span>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
