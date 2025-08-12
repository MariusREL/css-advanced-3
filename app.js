const header = document.querySelector("#header");
console.log(header);

function giveStarsClass(num) {
  if (num == 1 || num == 5 || num == 9) {
    return "starBlink1";
  } else if (num == 2 || num == 7 || num == 10) {
    return "starBlink2";
  } else {
    return "starBlink3";
  }
}

const numStars = 10; // Adjust number of stars
let starsHTML = "";

for (let i = 1; i <= numStars; i++) {
  starsHTML += `
        <img
            src="./img/Astrocat_04.svg"
            alt="a shining star"
            class="star star${i} ${giveStarsClass(i)}"
           
        />
    `;
}

header.innerHTML = `<div>${starsHTML}</div>`;
