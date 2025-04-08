import { ExpenseProvider } from "./expensesContext"
import { CategoryProvider } from "./categoryContext"

export default function AppProviders({ children }: { children: React.ReactNode }) {
    return (
      <ExpenseProvider>
        <CategoryProvider>
          {children}
        </CategoryProvider>
      </ExpenseProvider>
    );
  }
  