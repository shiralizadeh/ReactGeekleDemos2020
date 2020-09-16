import _ from "lodash";

const comicCharacters = ["Spider Man", "Iron Man", "Black Panther", "Deadpool"]; // ❤️ Chadwick Boseman 
const blackPantherIndex = _.findIndex(comicCharacters, (item) => item == "Black Panther");

console.log(blackPantherIndex);
