import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage"
import DataVisualization from "./pages/data-visualization"
import { ThemeProvider } from "./contexts/ThemeContext";

// 获取 base 路径，与 vite.config.ts 中的 base 保持一致
// 如果是用户主页 (username.github.io) 使用 '/'
// 如果是项目仓库 (username.github.io/repo-name) 使用 '/repo-name/'
const getBasePath = () => {
  // 从环境变量或默认值获取
  const base = import.meta.env.BASE_URL || '/';
  // 确保 base 以 / 开头和结尾（除非是根路径）
  return base === '/' ? '/' : base.endsWith('/') ? base : base + '/';
};

function App() {
  const basename = getBasePath();
  
  return (
    <ThemeProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/data" element={<DataVisualization />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App