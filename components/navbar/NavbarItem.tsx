import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  label: string;
  href: string;
}

export default function NavbarItem({ label, href }: NavbarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`inline-flex items-center text-lg font-bold px-2  dark:hover:text-slate-500 hover:text-slate-400 transition-all ease-in-out duration-150 ${
          isActive ? "underline underline-offset-4 " : ""
        }`}
      >
        {label}
        <span>
          <ChevronDown className="ml-1 h-4 w-4" />
        </span>
      </Link>
    </li>
  );
}
