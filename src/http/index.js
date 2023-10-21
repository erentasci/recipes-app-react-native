import axios from "axios";

export const getRecipes = async (tags = null) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: {
      from: "0",
      size: "20",
      tags,
    },
    headers: {
      "X-RapidAPI-Key": "d78953005amsha56b286ab9f3a19p1c5290jsn4d6b13b46339",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  return await axios.request(options);
};
