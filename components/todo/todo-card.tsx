"use client"

import * as React from "react"
import { Box, Card, Text, Flex, Heading, IconButton, Badge } from '@radix-ui/themes';
import {
  PlusCircledIcon,
  CheckCircledIcon
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Todo } from "@/types/types";

interface TodoCardProps {
  todo: Todo;
  onClick: () => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, onClick }) => {

  // Badge color mapping based on status
  const getBadgeColor = (status: string) => {
    switch (status) {
      case "doing":
        return "blue";
      case "todo":
        return "orange";
      case "done":
        return "green";
      default:
        return "gray"; // Fallback color
    }
  };

  return (
    <Card size="1" className={cn('my-4', todo.is_completed ? 'border border-green-600' : 'border-gray-500')}>
      <Flex mb="2" position="relative">
        <img
          width="280"
          height="270"
          src={todo.image}
          style={{ borderRadius: "var(--radius-1)" }}
        />
        <Flex
          align="center"
          justify="center"
          position="absolute"
          bottom="0"
          right="0"
          width="32px"
          height="32px"
          style={{ borderRadius: "var(--radius-3)" }}
          m="2"
        >
          <IconButton
            size="2"
            color="gray"
            variant="ghost"
            highContrast={todo.is_completed}
            onClick={onClick}
          >
            {todo.is_completed ? (
              <CheckCircledIcon color="green" className="cursor-pointer" />
            ) : (
              <PlusCircledIcon color="white" className="cursor-pointer" />
            )}
          </IconButton>
        </Flex>
      </Flex>

      <Flex align="end" justify="between" mb="2">
        <Box>
          <Flex mb="1">
            <Badge size="1" color={getBadgeColor(todo.categories.name)} variant="solid">
              {todo.categories.name}
            </Badge>
          </Flex>

          <Heading as="h3" size="3">
            {todo.title}
          </Heading>
        </Box>
      </Flex>

      <Text as="p" size="2" color="gray" mb="4">{todo.description}</Text>
    </Card>
  );
};

export default TodoCard;