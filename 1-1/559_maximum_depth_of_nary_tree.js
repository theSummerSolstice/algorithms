var maxDepth = function(root) {
  if (!root) return 0;

  const stack = [];
  let localDepth = 0;
  let maxDepth = 0;

  stack.push(root);
  recursive(root);

  function recursive (node) {
      const children = node.children;

      if (!children.length) {
          localDepth = stack.length;
          if (localDepth > maxDepth) {
              maxDepth = localDepth;
          }
          stack.pop();
          return;
      }

      for (let i = 0; i < children.length; i++) {
          stack.push(children[i]);
          recursive(children[i]);
      }

      stack.pop();
  }

  return maxDepth;
};
