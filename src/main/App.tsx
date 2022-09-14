import NavBar from './component/NavBar'
import Drawer from './component/Drawer'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <div data-testid="app" className="h-screen w-screen flex flex-col">
      <NavBar />
      <div className="grow flex flex-row min-h-0">
        <Drawer />
        <main className="grow overflow-hidden min-w-0">
          {/* todo: wrap an ErrorBoundary with a fallback component */}
          <AppRoutes />
        </main>
      </div>
    </div>
  )
}

export default App
