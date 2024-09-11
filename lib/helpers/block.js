export const blockExistChecker = (blocks, keys) => {
  if (blocks) {
    return keys.some((key) => blocks.some((block) => block.key === key));
  }
  return false;
};
