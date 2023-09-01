import react, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  function DoFilter(event) {
    setSelectedCategory(event.target.value);
  }

  const FilterAll = items.filter((item) => {
    if (selectedCategory === "all") {
      return true;
    } else return item.category === selectedCategory;
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={DoFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {FilterAll.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
