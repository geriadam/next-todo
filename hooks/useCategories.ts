import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/supabase/client";

const fetchCategories = async () => {
  const supabase = createClient();

  let query = supabase.from("categories").select("*");

  const { data, error } = await query;

  if (error) throw new Error(error.message);
  return data;
};

export const useCategories = () => {
  return useQuery<any>({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
  });
};
