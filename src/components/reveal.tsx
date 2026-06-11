import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
};

export function Reveal({ children, as: Tag = "div", className }: RevealProps) {
  const Component = Tag as ElementType;
  return <Component className={className}>{children}</Component>;
}
