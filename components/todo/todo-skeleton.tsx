"use client"

import * as React from "react"
import { getCurrentWeekDates } from "@/lib/date";
import { ScrollArea, Flex, Skeleton, Box, Card, Text, Heading, IconButton, Badge } from '@radix-ui/themes';

const TodoSkeleton: React.FC = () => {
  const todos = 5;
  const weekDates = getCurrentWeekDates();

  return (
    <div className="px-0 py-8 border rounded-sm w-full">
      <ScrollArea type="hover" scrollbars="horizontal" className="w-full h-screen">
        <Flex gap="4" p="2">
          {weekDates.map((day) => (
            <div key={day} className="space-y-6">
              <h3 className="text-md text-center font-semibold">{day}</h3>
              <div className="flex flex-wrap gap-4 justify-start min-w-48 max-w-48 max-h-80">
                <ScrollArea type="hover" scrollbars="vertical" className="w-full h-screen pb-10">
                  {Array.from({ length: todos }).map((_, index) => (
                    <Card size="1" className='my-4 border-gray-500'>
                      <Flex mb="2" position="relative">
                        <Skeleton width="100%" height="270px" />
                      </Flex>

                      <Skeleton width="50px" height="15px" className="mb-2" />
                      <Skeleton width="50%" height="10px" className="mb-4" />
                      <Skeleton width="100%" height="10px" />
                    </Card>
                  ))}
                </ScrollArea>
              </div>
            </div>
          ))}
        </Flex>
      </ScrollArea>
    </div>
  );
};

export default TodoSkeleton;
