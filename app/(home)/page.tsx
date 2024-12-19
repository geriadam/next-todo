'use client'

import React from "react";
import WeeklySection from "@/components/weekly-section";
import FilterCategories from "@/components/todo/todo-filter-categories";
import { TodoFilterCategoryType } from "@/types/types";
import { useTodos, setCompletedTodo } from "@/hooks/useTodos";
import { insertTodo } from "@/hooks/useRandomData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@radix-ui/themes";
import TodoSkeleton from "@/components/todo/todo-skeleton";

export default function IndexPage() {
  const [filter, setFilter] = React.useState<TodoFilterCategoryType>({});

  const queryClient = useQueryClient();
  const { data: todos, isLoading } = useTodos(filter);

  console.log(todos)

  const mutationTodoAdd = useMutation({
    mutationFn: () => {
      return insertTodo()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos', filter]
      });
    }
  })

  const mutationTodoIsCompleted = useMutation({
    mutationFn: (id) => {
      return setCompletedTodo(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos', filter]
      });
    }
  })

  const onGenerateRandomData = async () => {
    mutationTodoAdd.mutate();
  }

  const onResetFilter = () => {
    setFilter({});
    queryClient.invalidateQueries({
      queryKey: ['todos', filter]
    });
  }

  const onFilter = (newFilter: TodoFilterCategoryType) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ...newFilter,
    }));
  };

  const handleSelectCard = (id: any) => {
    mutationTodoIsCompleted.mutate(id);
  };

  return (
    <div className="mx-auto flex flex-col items-center gap-2 py-4 md:py-6 md:pb-8 lg:py-18 lg:pb-20">
      <h1 className="text-center text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:text-4xl">TODO API</h1>
      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-4 gap-2">
        <div className="flex flex-row gap-2 w-full md:flex-auto">
          <div className="w-1/2 md:w-auto">
            <FilterCategories onChange={onFilter} filter={filter} />
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
        <div className="flex flex-row justify-center gap-2 w-full md:w-auto">
          <Button
            loading={mutationTodoAdd.isPending}
            onClick={onGenerateRandomData}
            className="cursor-pointer w-full md:w-auto"
          >
            Generate Random Todo
          </Button>
        </div>
      </div>
      {
        isLoading ? (
          <TodoSkeleton />
        ) : (
          <WeeklySection todos={todos ?? []} onClick={handleSelectCard} />
        )
      }
    </div>
  );
}
