import games from "./game.json";

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://api.the-odds-api.com/v4/sports/upcoming/odds",
  params: {
    api_key: "27aaf07e97205d4dd7293be3e305f210",
    regions: "us",
    markets: "h2h,spreads",
    oddsFormat: "decimal",
    dateFormat: "iso",
  },
};

export function run() {
  const apiKey = "27aaf07e97205d4dd7293be3e305f210";

  const sportKey = "upcoming"; // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports

  const regions = "us"; // uk | us | eu | au. Multiple can be specified if comma delimited

  const markets = "h2h,spreads"; // h2h | spreads | totals. Multiple can be specified if comma delimited

  const oddsFormat = "decimal"; // decimal | american

  const dateFormat = "iso"; // iso | unix

  /*
      First get a list of in-season sports
          the sport 'key' from the response can be used to get odds in the next request
  
  */
  axios
    .get(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds`, {
      params: {
        apiKey,
        regions,
        markets,
        oddsFormat,
        dateFormat,
      },
    })
    .then((response) => {
      // response.data.data contains a list of live and
      //   upcoming events and odds for different bookmakers.
      // Events are ordered by start time (live events are first)
      console.log(JSON.stringify(response.data));

      // Check your usage
      console.log(
        "Remaining requests",
        response.headers["x-requests-remaining"]
      );
      console.log("Used requests", response.headers["x-requests-used"]);
    })
    .catch((error) => {
      console.log("Error status", error.response.status);
      console.log(error.response.data);
    });
}
