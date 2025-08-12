const header = document.querySelector("#header");
console.log(header);

const numStars = 10; // Adjust number of stars
let starsHTML = "";

for (let i = 1; i <= numStars; i++) {
  starsHTML += `
        <img
            src="./img/star-shine-svgrepo-com.svg"
            alt="a shining star"
            class="star star${i}"
           
        />
    `;
}

header.innerHTML = `<div>${starsHTML}</div>`;
