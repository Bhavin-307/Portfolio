import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavbarItemProps {
  label: string;
  href: string;
}

export default function NavbarItemMB({ label, href }: NavbarItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === href;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <li>
      <Link
        href={href}
        onClick={toggleMenu}
        className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold  ${
          isActive ? "underline underline-offset-4 " : ""
        }`}
      >
        <span className="ml-3 text-base font-medium text-slate-900 dark:text-slate-100">
          {label}
        </span>
      </Link>
    </li>
  );
}
