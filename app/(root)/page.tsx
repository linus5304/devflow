import Link from "next/link";

import HomeFilter from "@/components/filters/home-filter";
import LocalSearch from "@/components/search/local-search";
import { buttonVariants } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const questions = [
  {
    _id: "1",
    title: "How to learn React",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "react" },
      { _id: "2", name: "javascript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn javascript",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "2", name: "javascript" },
      { _id: "1", name: "React" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

export default async function Home({ searchParams }: SearchParams) {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query?.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;

    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-dark100_light900 h1-bold">All questions</h1>
        <Link
          href={ROUTES.ASK_QUESTIONS}
          className={buttonVariants({
            className:
              "primary-gradient min-h-[46px] px-4 py-3 !text-light-900",
          })}
        >
          Ask a question
        </Link>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          className=""
        />
        <HomeFilter />
      </section>
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
}
