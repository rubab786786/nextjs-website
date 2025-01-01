import { MenuContext } from "@/context/menu-context";
import { useContext } from "react";

export default function useMenu() {
  return useContext(MenuContext);
}

