import { type Children } from "lume/plugins/jsx_preact.ts";

type Props = {
  level: 1 | 2 | 3;
  className?: string;
  children: Children;
};

export const Heading = ({ level, className, children }: Props) => {
  if (level === 1) {
    return <h1 class={`text-2xl font-bold ${className}`}>{children}</h1>;
  }
  if (level === 2) {
    return <h2 class={`text-3xl font-bold ${className}`}>{children}</h2>;
  }
  if (level === 3) {
    return <h3 class={`text-2xl font-bold ${className}`}>{children}</h3>;
  }
  return <span class={className}>{children}</span>;
};
