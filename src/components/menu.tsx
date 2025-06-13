import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Startseite", href: "/" },
    { name: "Impressum", href: "/Impressum" },
    { name: "Datenschutz", href: "/Datenschutz" },
    { name: "Fernwartung", href: "/Fernwartung" },
  ];

  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex h-16 items-center jusitfy-center px-4">
        <nav className="flex w-full max-w-3xl items-center justify-between">
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="mt-8 flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="justify-start text-lg"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={item.href}>{item.name}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Desltop Navigation */}
          <div className="hidden w-full justify-center lg:flex">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
