export default function favorites() {

for (let i = 0; i < faves.length; i++) {
  faves[i].addEventListener("click", displayCheck);
}

function displayCheck(e) {
  if (e.target.checked) {
    favorites[e.target.id] = {
      name: e.target.name,
      value: e.target.value
    };
  } 
  else {
    delete favorites[e.target.id];
  }
}