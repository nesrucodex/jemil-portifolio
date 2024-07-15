import Link from "next/link";
import { MdCardGiftcard, MdMenu } from "react-icons/md";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between px-4 lg:px-6">
      <Link
        href="#"
        className="flex items-center justify-center gap-3 text-primary"
      >
        <MdCardGiftcard className="h-6 w-6" />
        <span>Custom Cards</span>
        <span className="sr-only">Print Pro</span>
      </Link>
      <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          Contact
        </Link>
      </nav>
      {/* Mobile Nav */}
      <Button size="icon" variant="ghost">
        <MdMenu className="md:hidden" size={20} />
      </Button>
    </header>
  );
};

export default Header;
