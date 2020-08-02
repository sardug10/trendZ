// JAVASCRIPT FOR TYPING-EFFECT
const afterTexts = [
  "Find your dream bridal trousseau",
  "Makeover your custom closet",
  "Unleash wide range of clothing desings",
];

words = "";
letters = "";

index = 0;
count = 0;

(function type() {
  if (index === afterTexts.length) {
    index = 0;
  }
  words = afterTexts[index];
  letters = words.slice(0, ++count);
  document.querySelector(".hero__tagline").textContent = letters;
  if (letters.length === words.length) {
    index++;
    count = 0;
  }
  setTimeout(type, 300);
})();

//JAVASCRIPT FOR CAROUSEL

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  cellAlign: "left",
  containe: true,
  autoPlay: 1500,
  pageDots: false,
  wrapAround: true,
  pauseAutoPlayOnHover: true,
  imagesLoaded: true,
  prevNextButtons: false,
});

elem.addEventListener("mouseleave", () => {
  flkty.playPlayer();
});

// COLLAPSIBLE MENU BAR
const menuButton = document.querySelector(".fa-bars");
const menu = document.querySelector(".navbar__list");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

// JAVASCRIPT FOR MAPS

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FydGhhazEwZCIsImEiOiJja2RieDhxbXYwd2FxMnByeHBxOWtqemZwIn0.rc5k_5BeD33xqdgomIhv-g";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/sarthak10d/ckdbxok2p07su1iqv7vpov4bj",
  scrollZoom: false,
  center: [77.1631307, 28.6929011],
  zoom: 15,
});

const loc = "Ashok Vihar,Delhi,India 110052";
const el = document.createElement("div");
el.className = "marker";

const bounds = new mapboxgl.LngLatBounds();

// Add marker
new mapboxgl.Marker({
  element: el,
  anchor: "bottom",
})
  .setLngLat([77.1631307, 28.6929011])
  .addTo(map);

// Add popup
new mapboxgl.Popup({
  offset: 30,
})
  .setLngLat([77.1631307, 28.6929011])
  .setHTML(`<p>${loc}</p>`)
  .addTo(map);

// Extend map bounds to include current location
bounds.extend([77.1631307, 28.6929011]);

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
