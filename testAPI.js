async function fetchData() {
  const url = "https://api-nba-v1.p.rapidapi.com/games?date=2022-03-07";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4cfecbde77msh57baceea9d7c0e7p138824jsneaab2127d667",
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
// const gameUrl = `${baseNbaUrl}games?date=${date}`;
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "4cfecbde77msh57baceea9d7c0e7p138824jsneaab2127d667",
//     "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
//   },
// };

// const fetchGame = async () => {
//   try {
//     const response = await fetch(gameUrl, options);
//     const result = await response.text();
//     setNbaGames(result);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchGame();

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((response) => response.json())
//   .then((data) => {
//     // Assuming the API response is an array of NBA teams
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching NBA data:", error);
//   });
