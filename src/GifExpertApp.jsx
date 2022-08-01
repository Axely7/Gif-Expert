import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (
      !categories.some(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      setCategories([newCategory, ...categories]);
    // setCategories([...categories, "one piece"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
