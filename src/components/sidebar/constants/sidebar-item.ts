import {
  LayoutDashboard,
  Users,
  type LucideIcon,
  Sheet,
  User,
  Layers,
} from "lucide-react";

export interface SIDEBAR_ITEM_TYPE {
  title: string;
  href: string;
  icon?: LucideIcon;
  hasChildren?: boolean;
  children?: SIDEBAR_ITEM_TYPE[];
}
export const SIDEBAR_ITEM: SIDEBAR_ITEM_TYPE[] = [
  {
    title: "home",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "User",
    href: "/user",
    icon: Users,
    hasChildren: true,
    children: [
      {
        title: "Create User",
        href: "/user/create",
      },
      {
        title: "User List",
        href: "/user/list",
      },
    ],
  },
  {
    title: "Customer",
    href: "/customer",
    icon: User,
    hasChildren: true,
    children: [
      {
        title: "Create Customer",
        href: "/customer/create",
      },
      {
        title: "Customer List",
        href: "/customer/list",
      },
    ],
  },
  {
    title: "User List",
    href: "/report/user",
    icon: Sheet,
  },
  {
    title: "Report Sample",
    href: "/report/sample",
    icon: Layers,
  },
];
