"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { formURLQuery, removeKeysFromURLQuery } from "@/lib/url";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

const filters = [
  {
    name: "React",
    value: "react",
  },
  {
    name: "Javascript",
    value: "javascript",
  },
];

function HomeFilter() {
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter") ?? "";
  const pathname = usePathname();
  const router = useRouter();

  const [active, setActive] = useState(filterParams);

  function handleTypeClick(filter: string) {
    let newURL = "";
    if (filter === active) {
      setActive("");
      newURL = removeKeysFromURLQuery({
        keysToRemove: ["filter"],
      });
      router.push(newURL, { scroll: false });
    } else {
      setActive(filter);
      newURL = formURLQuery({
        key: "filter",
        value: filter.toLowerCase(),
      });
    }
    if (
      newURL !== `${pathname}${searchParams.toString()}`
        ? `?${searchParams.toString()}`
        : ""
    )
      router.push(newURL, { scroll: false });
  }

  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          className={cn(
            "body-medium rounded-lg px-6 py-3 capitalize shadow-none",
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
}

export default HomeFilter;
