 const apikey = "26abbc4954ee6340f06a00e417bea009";
 const apiCountryURL = "https://countryflagsapi.com/png/br"

 const cityInput = document.querySelector("#city-input");
 const searchBtn = document.querySelector("#search");




//eventos

 searchBtn.addEventListener("click", (e) => {
    //e.preventDefault();

    const city = cityInput.value;

    console.log(city);
});


