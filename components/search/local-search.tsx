"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { InputHTMLAttributes, useEffect, useState } from "react";

import { formURLQuery, removeKeysFromURLQuery } from "@/lib/url";
import { cn } from "@/lib/utils";

import { Input } from "../ui/input";

interface LocalSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  route: string;
  imgSrc: string;
}
function LocalSearch({
  route,
  imgSrc,
  placeholder,
  className,
  ...props
}: LocalSearchProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newURL = formURLQuery({
          key: "query",
          value: searchQuery,
        });

        if (
          newURL !==
          `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`
        ) {
          router.push(newURL, { scroll: false });
        }
      } else {
        if (pathname === route) {
          const newURL = removeKeysFromURLQuery({
            keysToRemove: ["query"],
          });
          if (
            newURL !==
            `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`
          ) {
            router.push(newURL, { scroll: false });
          }
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, route, router, searchParams, pathname]);

  return (
    <div
      className={cn(
        "background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4",
        className
      )}
    >
      <Image
        src={imgSrc}
        width={24}
        height={24}
        alt="search"
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={cn(
          "paragraph-regular no-focus placeholder:text-dark400_light700 border-none shadow-none outline-none"
        )}
        {...props}
      />
    </div>
  );
}

export default LocalSearch;
