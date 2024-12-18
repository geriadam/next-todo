export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export type TodoFilterCategoryType = {
  category_id?: string;
  created_at?: string;
};

export interface Category {
  id: string;
  name: string;
}

export interface Todo {
  id: string;
  title: string;
  image: string;
  description: string;
  is_completed: boolean;
  created_at: string;
  category_id: string;
  categories: Category;
}