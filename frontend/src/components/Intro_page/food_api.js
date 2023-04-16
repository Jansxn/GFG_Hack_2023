import {AppState} from './intro_data.js';
import React from 'react';

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

async function searchNutrients(foodName){
  var userData = {
      calories: 0,
      protein: 0,
      fat: 0,
      carbs: 0
  }
  try {
      const data = await searchFoodItems(`${foodName}`);
      var k = data.foods[0].foodNutrients.map((nutrient) => {
          return ([nutrient.nutrientName, nutrient.value])
      });
      console.log(data.foods[0])
      k.forEach((nutrient) => {
          if (nutrient[0] === "Energy"){
              userData.calories = nutrient[1];
          }
          if (nutrient[0] === "Protein"){
              userData.protein = nutrient[1];
          }
          if (nutrient[0] === "Total lipid (fat)"){
              userData.fat = nutrient[1];
          }
          if (nutrient[0] === "Carbohydrate, by difference"){
              userData.carbs = nutrient[1];
          }
      });
      return userData;
  } catch (error) {
      console.error(error);
  }
}


export {searchNutrients};
