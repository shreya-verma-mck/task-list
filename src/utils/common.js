// utils purpose: Map, find, processing/common functions
// Test this separately
// Reusability

export const getItemBasedOnId = (itemList, idToSelect) =>
  itemList?.find((item) => item.id === parseInt(idToSelect));
