const getBranchSize = (tree, index) => {
  // return 0 if node is non-existent
  if (index > tree.length - 1) return 0; // index is outside array
  if (tree[index] === -1) return 0; // node value is -1 (representing non-existent node)

  const leftNode = 2 * index + 1;
  const rightNode = 2 * index + 2;

  const leftBranchSize = getBranchSize(tree, leftNode);
  const rightBranchSize = getBranchSize(tree, rightNode);

  return tree[index] + leftBranchSize + rightBranchSize;
};

const findLargerBranch = (tree) => {
  const leftBranch = getBranchSize(tree, 1);
  const rightBranch = getBranchSize(tree, 2);

  if (leftBranch > rightBranch) return 'Left';
  if (rightBranch > leftBranch) return 'Right';
  return '';
};

module.exports = findLargerBranch;
