import { AppRoutes } from "./routes/routes"
import AppProviders from "./contexts/appProvider"
import ToastComp from "./components/toast/toast"

function App() {
  return (
    <AppProviders>
      <AppRoutes/>
      <ToastComp/>
    </AppProviders>
  )
}

export default App
