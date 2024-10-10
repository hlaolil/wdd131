// Same footer as home page, so same JavaScript.
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// get the current year for footer
const date = new Date();
year.innerHTML = date.getFullYear();

// get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;

document.addEventListener("DOMContentLoaded", () => {
    // Data values for Cape Town
    const data = {
        area: "2,461 sq km",
        population: "4.6 million",
        state: "Western Cape",
        languages: "English, Afrikaans, Xhosa",
        currency: "South African Rand (ZAR)",
        timezone: "UTC+2",
        callingCode: "+27",
        internetTLD: ".za"
    };

    const weather = {
        temperature: 48, // Fahrenheit
        conditions: "Sunny", // Change this to change the icon
        windSpeed: 12 // mph
    };

    function calculateWindChill(temp, speed) {
        return (
            35.74 +
            0.6215 * temp -
            35.75 * Math.pow(speed, 0.16) +
            0.4275 * temp * Math.pow(speed, 0.16)
        ).toFixed(1);
    }

    let windChillValue = "N/A"; // Default value if the below condition is not met
    if (weather.temperature <= 50 && weather.windSpeed > 3) {
        windChillValue = `${calculateWindChill(weather.temperature, weather.windSpeed)} °F`;
    }

    // Update data values
    document.getElementById("area").textContent = data.area;
    document.getElementById("population").textContent = data.population;
    document.getElementById("state").textContent = data.state;
    document.getElementById("languages").textContent = data.languages;
    document.getElementById("currency").textContent = data.currency;
    document.getElementById("timezone").textContent = data.timezone;
    document.getElementById("callingCode").textContent = data.callingCode;
    document.getElementById("internetTLD").textContent = data.internetTLD;

    // Update weather values
    document.getElementById("temperature").textContent = `${weather.temperature} °F`;
    document.getElementById("conditions").textContent = weather.conditions;
    document.getElementById("wind").textContent = `${weather.windSpeed} mph`;
    document.getElementById("windChill").textContent = windChillValue;

    
    
});
