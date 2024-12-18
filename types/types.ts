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