import { ReactNode } from "react";
import Header from "./header";
import { useTheme } from "../contexts/ThemeContext";

export default function Layout({ children }: { children: ReactNode | Array<ReactNode> }) {
  const { theme } = useTheme();
  
  return (
    <main className={`relative min-h-screen ${theme === 'dark' ? 'bg-zinc-950' : 'bg-white'}`}>
      <Header />
      <div className="w-full">
        {children}
      </div>
    </main>
  )
}