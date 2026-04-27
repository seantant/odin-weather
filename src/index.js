import "./style.css";

const apiKey = "EF4EBER2PES3PG44HZHE9CRQY";
const urlPrefix =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";


async function getWeather(location) {
    let url =
      urlPrefix +
      location +
      "?key=" +
      apiKey;

    let response = await fetch(url);

    console.log("Requested data:")
    console.log(data);

    return response;
}

function parseData(response) {
    
}

getWeather("berlin");