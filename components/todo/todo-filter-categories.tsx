import { Select } from '@radix-ui/themes';
import { useCategories } from "@/hooks/useCategories";
import { TodoFilterCategoryType } from "@/types/types";

interface TodoFilterCategoryProps {
  onChange: (filter: TodoFilterCategoryType) => void;
  filter: TodoFilterCategoryType
}

const TodoFilterCategory: React.FC<TodoFilterCategoryProps> = ({ onChange, filter }) => {
  const { data: categories } = useCategories();

  const handleCategoryChange = (value: string) => {
    onChange({ category_id: value });
  };

  return (
    <Select.Root onValueChange={handleCategoryChange} value={filter.category_id || ''}>
      <Select.Trigger className="w-full" value='placeholder' aria-label="category-filter" placeholder="Filter by Category" />
      <Select.Content className="w-full">
        {(
          categories?.map((category) => (
            <Select.Item key={category.id} value={category.id} className="capitalize">
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </Select.Item>
          ))
        )}
      </Select.Content>
    </Select.Root>
  );
};

export default TodoFilterCategory;
