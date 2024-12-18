'use client'

import React from "react";
import TodoFilterCategory from "@/components/todo/todo-filter-categories";
import { TodoFilterCategoryType } from "@/types/types";
import { Button } from "@radix-ui/themes";

export default function IndexPage() {
  const [filter, setFilter] = React.useState<TodoFilterCategoryType>({});

  const onResetFilter = () => {
    setFilter({});
  }

  const onFilter = (newFilter: TodoFilterCategoryType) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ...newFilter,
    }));
  };

  return (
    <div className="mx-auto flex flex-col items-center gap-2 py-4 md:py-6 md:pb-8 lg:py-18 lg:pb-20">
      <h1 className="text-center text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:text-4xl">TODO API</h1>
      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-4 gap-2">
        <div className="flex flex-row gap-2 w-full md:flex-auto">
          <div className="w-1/2 md:w-auto">
            <TodoFilterCategory onChange={onFilter} filter={filter} />
          </div>
          <div className="w-1/2 md:w-auto">
            <Button
              color="red"
              onClick={onResetFilter}
              className="cursor-pointer w-full"
            >
              Reset Filter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
