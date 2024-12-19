import { createClient } from "@/supabase/client";
import faker from "faker";

const supabase = createClient();

async function uploadRandomImage(): Promise<string> {
  const randomImageUrl = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
  const response = await fetch(randomImageUrl);
  const imageBlob = await response.blob();
  const fileName = `images/todo-${Date.now()}.jpg`;
  const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME || '';

  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(fileName, imageBlob, {
      contentType: "image/jpeg",
    });

  if (error) {
    console.error("Error uploading image:", error.message);
    throw new Error("Failed to upload image");
  }

  const { data: file } = supabase.storage.from(bucketName).getPublicUrl(fileName);
  console.log(file)
  return file?.publicUrl;
}

async function getRandomCategoryId(): Promise<number> {
  const { data, error } = await supabase.from("categories").select("id");

  if (error) {
    console.error("Error fetching categories:", error.message);
    throw new Error("Failed to fetch categories");
  }

  if (!data || data.length === 0) {
    throw new Error("No categories found");
  }

  const randomCategory = data[Math.floor(Math.random() * data.length)];
  return randomCategory.id;
}

export async function generateTodoData() {
  try {
    const title = faker.lorem.words(3);
    const description = faker.lorem.sentence();
    const image = await uploadRandomImage();
    const categoryId = await getRandomCategoryId();
    const isCompleted = false;

    return {
      title,
      image,
      description,
      category_id: categoryId,
      is_completed: isCompleted,
    };
  } catch (error) {
    console.error("Error generating todo data:", error);
    throw error;
  }
}

export async function insertTodo() {
  try {
    const todoData = await generateTodoData();

    const { data, error } = await supabase.from("todos").insert([todoData]);

    if (error) {
      console.error("Error inserting todo:", error.message);
      throw new Error("Failed to insert todo");
    }

    console.log("Todo inserted successfully:", data);
    return data;
  } catch (error) {
    console.error("Error in insertTodo:", error);
    throw error;
  }
}