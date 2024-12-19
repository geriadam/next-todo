<h1 align="center">
  Next Todo
</h1>
<p align="center">
  Opensource nextjs, radixui, tailiwnd, tanstack query, supabase, typescript
</p>

![preview](./public/ogImage.png)

## Live Preview

[Next Todo](https://next-todo-ashen-six.vercel.app/)

## Tech Stack

- [Next.js](https://nextjs.org) - React framework for building performant apps with the best developer experience.
- [TypeScript](https://typescriptlang.org) - Static type checker for end-to-end typesafety.
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework for rapid UI development.
- [Radix UI](https://www.radix-ui.com/) - Primitives like drawer, button, etc. to build a stellar user experience.
- [Tanstack Query](https://tanstack.com/query/latest) - Powerful asynchronous state management for TS/JS, React, Solid, Vue, Svelte and Angular.
- [Supabase](https://supabase.com/) - Supabase is an open source Firebase alternative.

## Running Locally

### Setting Supabase

#### Sql tabel
```sql
-- Create category table
CREATE TABLE IF NOT EXISTS public.category (
    id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY, -- Add PRIMARY KEY
    name TEXT NOT NULL
);

-- Insert some sample data into the category table
INSERT INTO category (name)
VALUES
    ('todo'),
    ('doing'),
    ('done');

-- Enable row-level security for the category table
ALTER TABLE category ENABLE ROW LEVEL SECURITY;

-- Create todo table
CREATE TABLE IF NOT EXISTS public.todo (
    id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR NOT NULL,
    image VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    category_id uuid REFERENCES category(id), -- Reference the primary key
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
```

<b> Results </b><br>
<img width="736" alt="image" src="https://github.com/user-attachments/assets/a783736d-37ad-4a63-8d74-9b7d305e879d" />


#### Create Policy Table

<img width="275" alt="image" src="https://github.com/user-attachments/assets/3f2b4acb-e829-409c-8a64-89207158f75d" />


#### [Create Storage](https://supabase.com/docs/guides/storage)

<b> Policy Storage </b><br>
<img width="314" alt="image" src="https://github.com/user-attachments/assets/3b514466-de34-430c-a7d3-18c5dd6e4721" />


### Settting .env.local

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SUPABASE_BUCKET_NAME=
BASE_URL=
```

### Command

```bash
$ git clone https://github.com/geriadam/next-todo.git
$ cd next-todo
$ npm install
$ npm run dev
```
