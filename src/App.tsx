import { AppRoutes } from "./routes/routes"
import { ExpenseProvider } from "./contexts/expensesContext"

function App() {
  return (
    <ExpenseProvider>
      <AppRoutes/>
    </ExpenseProvider>
  )
}

export default App
