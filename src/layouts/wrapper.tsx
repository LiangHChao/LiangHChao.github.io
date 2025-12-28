import { ReactNode } from "react";

export default function WrapperBody({ children }: { children: ReactNode | Array<ReactNode> }) {
  return (
    <div className="h-full m-auto max-w-[1440px] border-l border-r border-dashed border-zinc-800 p-8">
      {children}
    </div>
  )
}