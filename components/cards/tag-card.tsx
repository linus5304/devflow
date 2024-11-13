import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";
import { getDevIconClassName } from "@/lib/utils";

import { Badge } from "../ui/badge";
import Image from "next/image";

interface TagCardProps {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}
function TagCard({
  _id,
  compact,
  name,
  showCount,
  questions,
  remove,
  isButton,
  handleRemove,
}: TagCardProps) {
  const iconClass = getDevIconClassName(name);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
  }

  const content = (
    <>
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase flex flex-row gap-2">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`}></i>
          <span>{name}</span>
        </div>
        {remove && (
          <Image
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="close icon"
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove}
          />
        )}
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </>
  );

  return isButton ? (
    <button
      onClick={(e) => handleClick(e)}
      className="flex justify-between gap-2"
    >
      {content}
    </button>
  ) : (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
      {content}
    </Link>
  );
}

export default TagCard;
