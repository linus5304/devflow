import Image from "next/image";
import Link from "next/link";

import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

import { buttonVariants } from "../ui/button";
import NavLinks from "./navbar/nav-links";

async function LeftSidebar() {
  const session = await auth();

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border dark:shadow-non sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>

      <div className="flex flex-col gap-3">
        {session?.user ? (
          <div>
            <Link href={ROUTES.SIGN_IN} className="flex gap-2 px-4">
              <Image
                src="/icons/logout.svg"
                width={20}
                height={20}
                alt="logout"
              />
              <form
                className="max-lg:hidden"
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Logout</button>
              </form>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <Link
              href={ROUTES.SIGN_IN}
              className={buttonVariants({
                className:
                  "small-medium btn-secondary min-h-[41px] rounded-lg px-4 py-3 shadow-none",
              })}
            >
              <Image
                src="/icons/account.svg"
                alt="account"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">Login</span>
            </Link>
            <Link
              href={ROUTES.SIGN_UP}
              className={buttonVariants({
                className:
                  "small-medium btn-tertiary text-dark400_light900 min-h-[41px] rounded-lg border light-border-2 px-4 py-3 shadow-none",
              })}
            >
              <Image
                src="/icons/sign-up.svg"
                alt="sign-up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign up</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default LeftSidebar;
