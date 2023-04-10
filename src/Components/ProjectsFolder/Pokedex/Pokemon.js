const pokemon = [
    { id: 21, name: "CHARMENDER", type: "fire", base_exp: 62},
    { id: 58, name: "SQUIRTLE", type: "water", base_exp: 25},
    { id: 11, name: "METAPOD", type: "bug", base_exp: 78},
    { id: 12, name: "BUTTERFREE", type: "flying", base_exp: 112},
    { id: 25, name: "PIKACHU", type: "electric", base_exp: 45},
    { id: 39, name: "JIGGLYPUFF", type: "normal", base_exp: 78},
    { id: 94, name: "GENGER", type: "poison", base_exp: 94},
    { id: 36, name: "RAICHU", type: "mental", base_exp: 75},
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

