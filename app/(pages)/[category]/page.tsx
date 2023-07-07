"use client";
import CategoryProducts from "@/components/Common/CategoryProducts/CategoryProducts";
import { newSlug } from "@/utils/functions";
import { usePathname } from "next/navigation";

const Category = () => {
  const slug = usePathname();
  console.log("router", slug);
  return <CategoryProducts />;
};

export default Category;
