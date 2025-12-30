import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage"
import DataVisualization from "./pages/data-visualization"
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/data" element={<DataVisualization />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App