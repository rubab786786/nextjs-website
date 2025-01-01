'use client'

import React, { createContext, useState } from "react";

// Create a context for managing the menu status.
export const MenuContext = createContext();

// MenuContextProvider component manages the menu status and provides it to child components.
const MenuContextProvider = ({ children }) => {
  // Define a state variable to hold the menu status.
  const [menuStatus, setMenuStatus] = useState(false);

  // Function to update the menu status.
  const updateMenuStatus = (newStatus) => {
    setMenuStatus(newStatus);
  };

  // Provide the menu status and update function through the context to child components.
  return (
    <MenuContext.Provider value={{ menuStatus, updateMenuStatus }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
