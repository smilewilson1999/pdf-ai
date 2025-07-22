import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>DEEP PDF</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-gray-100"
              asChild
            >
              <Link href="/pricing">Pricing</Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-gray-100"
              asChild
            >
              <LoginLink>Login</LoginLink>
            </Button>
            <Button
              variant="link"
              size="sm"
              effect="expandIcon"
              icon={ArrowRight}
              iconPlacement="right"
              className="rounded-xs hover:bg-gray-100"
              asChild
            >
              <RegisterLink>Get started</RegisterLink>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
