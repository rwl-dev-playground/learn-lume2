import { Children } from "lume/plugins/jsx_preact.ts";

type Props = {
  className?: string;
  href: string;
  external?: boolean;
  children: Children;
};

export const TextLink = ({ className, href, external, children }: Props) => {
  return (
    <a
      class={className}
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
    >
      {children}
    </a>
  );
};
