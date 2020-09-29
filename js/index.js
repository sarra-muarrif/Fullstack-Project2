import Header from "./Header.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import animals from "./data.js";

let shownData = [];
document.querySelector("header").innerHTML = Header();
document.querySelector("footer").innerHTML = Footer();

//Router
function renderPage() {
  var page;
  switch (window.location.hash) {
    case "#/":
    case "":
      page = Home();
      break;
    case "#meetYourMatch":
      return;
    default:
      page = "<h1 class='not-found-page'>Not Found Page!</h1>";
      break;
  }
  document.querySelector("header").innerHTML = Header();
  document
    .querySelector(".burger")
    .addEventListener("click", () =>
      document.querySelector("header").classList.toggle("is-active")
    );
  document.querySelector("#root").innerHTML = page;
  return page;
}
window.onhashchange = renderPage;
renderPage();
/*****************************************************************/
//searching
document.getElementById("searchButton").addEventListener("click", (e) => {
  e.preventDefault();
  const resultArea = document.querySelector(".animalsGroups");
  const inputSearch = document.getElementById("search");
  filterItem(animals);
  if (shownData.length === 0) {
    resultArea.innerHTML = " ";
    createItem();
  }
  inputSearch.value = " ";
});
// filter items
function filterItem(animals) {
  const inputSearch = document.getElementById("search").value.toLowerCase();
  if (inputSearch.trim().length === 0) {
    alert("You have to enter value to search for!");
  } else {
    shownData = animals.filter((animal) => {
      return animal.city.toLowerCase().indexOf(inputSearch.trim()) !== -1;
    });
    addItem(shownData);
  }
}
// add items
function addItem(data) {
  const animallist = document.querySelector(".animalsGroups");
  const animals = data
    .map((animal) => {
      return `<div class="widget">
    <div class="widget__image">
        <img class="animalImg"src=${animal.url} >
    </div>
   <div class="widget__desc">
       <h4>${animal.name}</h4>
        <p>${animal.gender} | ${animal.age}</p>
         <p>${animal.city}</p>
     </div>
  </div>
  `;
    })
    .join("");
  animallist.innerHTML = animals;
}
// create new item 'no data found'
function createItem() {
  const resultArea = document.querySelector(".animalsGroups");
  const resultText = document.createElement("p");
  const newText = document.createTextNode("No Data Found!");
  resultText.className = ".widget__note";
  resultText.style.color = "red";
  resultText.style.fontSize = "30px";
  resultText.appendChild(newText);
  resultArea.appendChild(resultText);
}
/*****************************************************************/
//show Stories
const items = document.getElementsByClassName("link");
Array.from(items).forEach(function (item) {
  item.addEventListener("click", () => {
    const showStories = document.getElementById(item.id);
    if (showStories.style.display == "block") {
      showStories.setAttribute("style", "display:none;");
      item.textContent = "Read More";
    } else {
      showStories.setAttribute("style", "display:block;");
      item.textContent = "Close";
    }
  });
});
