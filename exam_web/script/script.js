    
// Об'єкт зберігання міста для кожної країни
const citiesByCountry = {
    aus: ["Kyiv", "Kharkiv", "Odesa", "Donetsk"],
    jap: ["Warsaw", "Krakow", "Gdansk", "Katowice"],
    sar: ["Washington", "New York", "Los Angeles", "Chicago"]
};
  
// Функція для оновлення спадного списку міст на основі вибраної країни
function updateCities() {
    const countrySelect = document.getElementById("country");
    const citiesSelect = document.getElementById("cities");
    const selectedCountry = countrySelect.value;
  
// Очищення спадного списку міст
citiesSelect.innerHTML = '<option value="" disabled selected>Виберіть місто</option>';
  
// Додавання нового міста на основі вибраної країни
if (selectedCountry && citiesByCountry[selectedCountry]) {
    citiesByCountry[selectedCountry].forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citiesSelect.appendChild(option);
        });
    }
}

// Функція відображення вибраної країни та міста
function displaySelection() {
    const countrySelect = document.getElementById("country");
    const citiesSelect = document.getElementById("cities");
    const output = document.getElementById("output");
  
    const countryText = countrySelect.options[countrySelect.selectedIndex].text;
    const cityText = citiesSelect.options[citiesSelect.selectedIndex].text;
     
    // Відображення вибраної країни та міста
    output.textContent = `Ви обрали: ${countryText}, ${cityText}`;
}