import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/supabase/client";

const supabase = createClient();

const fetchTodos = async (filter: { category_id?: string; created_at?: string }) => {

  let query = supabase
    .from("todos")
    .select("id, title, image, description, is_completed, created_at, category_id, categories(*)");

  // Conditionally apply filters based on the provided filter object
  if (filter.category_id) {
    query = query.eq("category_id", filter.category_id);
  }

  if (filter.created_at) {
    query = query.eq("created_at", filter.created_at);
  }

  const { data, error } = await query;

  if (error) throw new Error(error.message);

  return data;
};

export async function setCompletedTodo(id) {
  try {
    const { data, error } = await supabase
      .from("todos")
      .update({ is_completed: true })
      .eq("id", id);;

    if (error) {
      console.error("Error update is_completed todo:", error.message);
      throw new Error("Failed to update is_completed todo");
    }

    console.log("Update inserted successfully:", data);
    return data;
  } catch (error) {
    console.error("Error in setCompletedTodo:", error);
    throw error;
  }
}

export const useTodos = (filter: { category_id?: string; created_at?: string }) => {
  return useQuery<any>({
    queryKey: ['todos', filter],
    queryFn: () => fetchTodos(filter),
  });
};
