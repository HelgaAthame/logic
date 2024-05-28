import Image from "next/image";
import { apiurl } from "@/consts/apiurl";
import { useMemo } from "react";
import { Course } from "@/types/Course";
import { Content } from "@/components/Content";

async function getCourses(): Promise<Course[]> {
  const res = await fetch(apiurl);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getCourses();
  
  return (
    <Content courses={data} />
  );
}
