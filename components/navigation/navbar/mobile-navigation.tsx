import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";

import NavLinks from "./nav-links";

function MobileNavigation() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="Menu"
            className="sm:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="background-light900_dark200 border-none"
        >
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/site-logo.svg"
              alt="logo"
              width={23}
              height={23}
            />
            <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
              Dev<span className="text-primary-500">Flow</span>
            </p>
          </Link>
          <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16">
                <NavLinks isMobileNav />
              </section>
            </SheetClose>

            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link
                  href={ROUTES.SIGN_IN}
                  className={buttonVariants({
                    className:
                      "small-medium btn-secondary min-h-[41px] rounded-lg px-4 py-3 shadow-none",
                  })}
                >
                  <span className="primary-text-gradient">Login</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={ROUTES.SIGN_UP}
                  className={buttonVariants({
                    className:
                      "small-medium btn-tertiary text-dark400_light900 min-h-[41px] rounded-lg border light-border-2 px-4 py-3 shadow-none",
                  })}
                >
                  Sign up
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavigation;
