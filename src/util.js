const dietMap = {
  "High Protein": "high-protein",
  "Low Carb": "low-carb",
  Veg: "vegetarian",
  Vegan: "vegan",
};

export const formatParams = (searchTerm, diet) => {
  let dietQuery = dietMap[diet];
  let searchTermQuery = searchTerm.toLowerCase();
  return { dietQuery, searchTermQuery };
};
