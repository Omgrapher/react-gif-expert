/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Naruto",
    "Inazuma Eleven",
    "Jujutsu Kaisen",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
