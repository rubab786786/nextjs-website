import { SearchContext } from "@/context/search-context";
import { useContext } from "react";

export default function useSearch(){
    return useContext(SearchContext)
}