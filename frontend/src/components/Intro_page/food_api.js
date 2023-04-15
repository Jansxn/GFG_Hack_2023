const fetch = require('node-fetch');
const apiKey = "kjKK1U9RcHDspOzqgDhcAQcghxz3doZQXBY6Bgao";
const foodSearchUrl = "https://api.nal.usda.gov/fdc/v1/search";

async function searchFoodItems(query) {
  const searchParams = new URLSearchParams({
    api_key: apiKey,
    query: query
  });
  const response = await fetch(`${foodSearchUrl}?${searchParams}`);
  const data = await response.json();
  return data;
}

function searchNutrients(foodName){
    searchFoodItems(`${foodName}`).then(data => {
        return data.foods[0].foodNutrients;
      }).catch(error => {
        console.error(error);
      });
}

export {searchNutrients};
