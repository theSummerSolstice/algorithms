var leafSimilar = function(root1, root2) {
  const root1Stack = [];
  const root2Stack = [];

  function dfs (node, stack) {
      if (!node.left && !node.right) {
          stack.push(node.val);
          return;
      }

      node.left && dfs(node.left, stack);
      node.right && dfs(node.right, stack);
  }

  dfs(root1, root1Stack);
  dfs(root2, root2Stack);

  return root1Stack.join(',') === root2Stack.join(',');
};
