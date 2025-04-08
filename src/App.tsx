import { AppRoutes } from "./routes/routes"
import AppProviders from "./contexts/appProvider"

function App() {
  return (
    <AppProviders>
      <AppRoutes/>
    </AppProviders>
  )
}

export default App
