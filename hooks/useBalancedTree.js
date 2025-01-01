import { useState } from 'react';
import AVLTree from 'avl'; // Assuming you have a library for AVL trees

// Custom hook for managing a self-balancing BST
function useBalancedTree(initialData = []) {
  const [tree, setTree] = useState(() => {
    // Initialize the tree with initial data
    const avlTree = new AVLTree();
    initialData.forEach((item) => avlTree.insert(item));
    return avlTree;
  });

  // Function to insert data into the tree
  const insert = (data) => {
    setTree((prevTree) => {
      const newTree = new AVLTree(prevTree);
      newTree.insert(data);
      return newTree;
    });
  };

  // Function to delete data from the tree
  const remove = (data) => {
    setTree((prevTree) => {
      const newTree = new AVLTree(prevTree);
      newTree.remove(data);
      return newTree;
    });
  };

  // Function to retrieve sorted data (ascending order)
  const getSortedDataAscending = () => {
    return tree.toArray();
  };

  // Function to retrieve sorted data (descending order)
  const getSortedDataDescending = () => {
    return tree.toArray({ reverse: true });
  };

  return {
    insert,
    remove,
    getSortedDataAscending,
    getSortedDataDescending,
  };
}

export default useBalancedTree;
