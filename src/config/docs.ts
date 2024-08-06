import { NavItem } from "@/types/nav";

interface docsConfig {
  title: string;
  items: NavItem[];
}

export const docsConfig: docsConfig[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "Theming",
        href: "/docs/theming",
      },
      {
        title: "Figma",
        href: "/docs/figma",
      },
      {
        title: "Typography",
        href: "/docs/typography",
      },
      {
        title: "Color",
        href: "/docs/color",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Button",
        href: "/docs/components/button"
      },
      {
        title: "Text field",
        href: "/docs/components/textField"
      }
    ],
  },
];
