import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [OnLight, setOnLight] = useState(false);

  function handleclick() {
    setOnLight((OnLight) => !OnLight);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = OnLight ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleclick} className={appClass}>
          {" "}
          {appClass}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
