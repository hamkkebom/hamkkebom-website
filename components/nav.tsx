"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">{SITE_NAME}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) =>
            "children" in item ? (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    pathname.startsWith("/services") &&
                      "bg-accent text-accent-foreground"
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div className="invisible absolute left-0 top-full pt-1 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="rounded-md border bg-popover p-1 shadow-md">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-sm px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap",
                          pathname === child.href &&
                            "bg-accent text-accent-foreground"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href && "bg-accent text-accent-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
          <Button asChild size="sm" className="ml-2">
            <Link href="/contact">무료 상담</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">메뉴</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-1 pt-6">
              {NAV_ITEMS.map((item) =>
                "children" in item ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setServiceOpen(!serviceOpen)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          serviceOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {serviceOpen && (
                      <div className="ml-4 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                              pathname === child.href &&
                                "bg-accent text-accent-foreground"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                      pathname === item.href &&
                        "bg-accent text-accent-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Button asChild className="mt-4">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  무료 상담
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
