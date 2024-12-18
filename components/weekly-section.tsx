"use client"

import * as React from "react"
import { getCurrentWeekDates } from "@/lib/date";
import { ScrollArea, Flex } from '@radix-ui/themes';
import TodoCard from "@/components/todo/todo-card";
import { Todo } from "@/types/types";

type WeeklySectionProps = {
  todos: Todo[],
  onClick: (id: string) => void;
}

const WeeklySection: React.FC<WeeklySectionProps> = ({ todos, onClick }) => {
  const weekDates = getCurrentWeekDates();

  const filteredTodos = (todo, day: string) => {
    return new Date(todo?.created_at).toDateString() === new Date(day).toDateString()
  };

  return (
    <div className="px-0 py-8 border rounded-sm w-full">
      <ScrollArea type="hover" scrollbars="horizontal" className="w-full h-screen">
        <Flex gap="4" p="2">
          {weekDates.map((day) => (
            <div key={day} className="space-y-6">
              <h3 className="text-md text-center font-semibold">{day}</h3>
              <div className="flex flex-wrap gap-4 justify-start min-w-48 max-w-48 max-h-80">
                <ScrollArea type="hover" scrollbars="vertical" className="w-full h-screen pb-10">
                  {todos.map((todo) =>
                    filteredTodos(todo, day) ? (
                      <TodoCard
                        key={todo.id}
                        todo={todo}
                        onClick={() => onClick(todo.id)}
                      />
                    ) : null
                  )}
                </ScrollArea>
              </div>
            </div>
          ))}
        </Flex>
      </ScrollArea>
    </div>
  );
};

export default WeeklySection;
