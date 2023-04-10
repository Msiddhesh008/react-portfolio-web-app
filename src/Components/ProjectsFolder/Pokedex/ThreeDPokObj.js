const pokemon = [
    { id: 0, name: "Charlizard", type: "fire", base_exp: 75},
    { id: 1, name: "Pikachu", type: "electric", base_exp: 62},
    { id: 2, name: "Blastoise", type: "leaves", base_exp: 25},
    { id: 3, name: "Balbasour", type: "bug", base_exp: 78},
    { id: 4, name: "Mewtoo", type: "flying", base_exp: 112},
    { id: 5, name: "Squirtle", type: "water", base_exp: 45},
    { id: 6, name: "Jigglypuff", type: "sleep", base_exp: 78},
    { id: 7, name: "Genger", type: "poison", base_exp: 94}
    ]


const randomArray = (arr) => {
      let randomArray = [];
      while (randomArray.length < arr.length) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        if (!randomArray.includes(arr[randomIndex])) {
          randomArray.push(arr[randomIndex]);
        }
      }
      return randomArray;
    }

export default randomArray(pokemon);

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/199.png

