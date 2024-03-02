"use client";

import { SIDEBAR_ITEM } from "./constants/sidebar-item";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export function MenuSiderItem() {
  const sideBarItems = SIDEBAR_ITEM;
  const path = usePathname();
  const pathItem = path?.split("/");

  return (
    <div className="flex flex-col pl-2 pt-4 pr-8 w-full gap-3.5">
      {sideBarItems.map((sideBarItem) =>
        sideBarItem?.hasChildren ?? false ? (
          <Accordion
            key={sideBarItem.title}
            type="single"
            collapsible
            className="w-full"
            defaultValue={`${
              path?.includes(sideBarItem.href) ?? false ? sideBarItem.title : ""
            }`}
          >
            <AccordionItem
              value={`${sideBarItem.title}`}
              className={`border-b-0 px-4 rounded-md ${
                path === sideBarItem.href
                  ? "bg-secondary hover:bg-none"
                  : "bg-none hover:bg-secondary"
              }`}
            >
              <AccordionTrigger>
                <div className="flex flex-row gap-4">
                  {sideBarItem.icon != null && (
                    <sideBarItem.icon className={`h-6 w-6 `} />
                  )}
                  <p
                    className={`text-sm capitalize ${
                      pathItem !== undefined &&
                      pathItem[1] !== "" &&
                      sideBarItem.href.includes(pathItem[1]) &&
                      (sideBarItem.hasChildren ?? false)
                        ? "font-semibold"
                        : "font-normal"
                    }`}
                  >
                    {sideBarItem.title}
                  </p>
                </div>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 `}
                />
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col px-6">
                  {sideBarItem.children?.map((subItem) => (
                    <Link
                      key={`${sideBarItem.title}-${subItem.title}`}
                      href={subItem.href}
                      className={`flex items-center w-full h-11 text-sm px-4 capitalize rounded-md ${
                        path === subItem.href
                          ? "hover:bg-none"
                          : "bg-none hover:bg-popover"
                      }`}
                    >
                      <p
                        className={`${
                          path === subItem.href
                            ? "font-semibold"
                            : "font-normal"
                        }`}
                      >
                        {subItem.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Link
            key={sideBarItem.title}
            href={sideBarItem.href}
            className={`flex flex-row gap-4 w-full h-11 px-4 rounded-md items-center ${
              path === sideBarItem.href
                ? "bg-secondary hover:bg-none"
                : "bg-none hover:bg-secondary"
            }`}
          >
            {sideBarItem.icon != null && (
              <sideBarItem.icon className={`h-6 w-6 `} />
            )}
            <p
              className={`text-sm capitalize ${
                path === sideBarItem.href ? "font-semibold" : "font-normal"
              }`}
            >
              {sideBarItem.title}
            </p>
          </Link>
        )
      )}
    </div>
  );
}
