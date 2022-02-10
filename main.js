const residentBtn = document.querySelector(".residents");
const getAlderaan = () => {
  console.log("Button Clicked");
  axios.get("https://swapi.dev/api/planets?search=Alderaan").then(res => {
    console.log("res", res.data.results[0].residents);
    const aldResidents = res.data.results[0].residents;
    for (let i = 0; i < aldResidents.length; i++) {
      axios.get(aldResidents[i])
      .then(resName => {
        const name = resName.data.name
        let header = document.createElement("h2");
        header.textContent = name;
        document.body.appendChild(header);
      });
    }
  });
};
residentBtn.addEventListener("click", getAlderaan);
