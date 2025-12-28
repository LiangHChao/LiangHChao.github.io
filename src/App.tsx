import Homepage from "./pages/homepage"
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Homepage />
    </ThemeProvider>
  )
}

export default App