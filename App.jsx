import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sidebar from './components/layout/Sidebar'
import Topbar from './components/layout/Topbar'
import { ErrorBoundary } from './components/ui/ErrorBoundary'

// Lazy loaded pages
const Dashboard    = lazy(() => import('./pages/Dashboard/Dashboard'))
const BreachChecker = lazy(() => import('./pages/BreachChecker/BreachChecker'))
const IPLookup     = lazy(() => import('./pages/IPLookup/IPLookup'))
const ThreatFeed   = lazy(() => import('./pages/ThreatFeed/ThreatFeed'))
const PasswordAudit = lazy(() => import('./pages/PasswordAudit/PasswordAudit'))
const Settings     = lazy(() => import('./pages/Settings/Settings'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-48">
      <div className="flex gap-1.5">
        {[0, 1, 2].map(i => (
          <span key={i} className="w-2 h-2 bg-cyber-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    </div>
  )
}

function AppLayout() {
  const sidebarOpen = useSelector(s => s.ui.sidebarOpen)

  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar />
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-60' : 'lg:ml-16'}`}>
        <Topbar />
        <main className="p-6 max-w-6xl">
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/"         element={<Dashboard />} />
                <Route path="/breach"   element={<BreachChecker />} />
                <Route path="/ip"       element={<IPLookup />} />
                <Route path="/threats"  element={<ThreatFeed />} />
                <Route path="/password" element={<PasswordAudit />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
