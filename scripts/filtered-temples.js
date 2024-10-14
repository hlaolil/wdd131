//Same footer as home page, so same JavaScript.
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// get the current year for footer
const date = new Date();
year.innerHTML = date.getFullYear();

//get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;

//hamburger button event
const hamButton = document.querySelector(".ham-button");
const menu = document.querySelector("nav")

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("active");
    menu.classList.toggle("active");
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-thumb.jpg"
      },
      {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 25",
        area: 19184,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-43596-thumb.jpg"
      },
      {
        templeName: "Harare Zimbabwe",
        location: "Harare, Zimbabwe",
        dedicated: "2020, December, 12",
        area: 17250,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-51322-thumb.jpg"
      },
  ];

  function renderTemples(filteredTemples) {
    const templeList = document.getElementById('temples-list');
    templeList.innerHTML = '';
    filteredTemples.forEach(temple => {
      const templeCard = document.createElement('figure');
      templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy" width="400" height="250">
        <figcaption>${temple.templeName}</figcaption>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq. ft.</p>
      `;
      templeList.appendChild(templeCard);
    });
  }
  

function filterTemples(filter) {
  switch (filter) {
    case 'old':
      return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    case 'new':
      return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    case 'large':
      return temples.filter(temple => temple.area > 90000);
    case 'small':
      return temples.filter(temple => temple.area < 10000);
    default:
      return temples;
  }
}

function updateCenteredText(filter) {
  switch (filter) {
    case 'old':
      centeredTextH2.textContent = 'Old Temples';
      centeredTextH3.textContent = 'Temples dedicated before 1900.';
      break;
    case 'new':
      centeredTextH2.textContent = 'New Temples';
      centeredTextH3.textContent = 'Temples dedicated after 2000.';
      break;
    case 'large':
      centeredTextH2.textContent = 'Large Temples';
      centeredTextH3.textContent = 'Temple area is greater than 90,000 square feet.';
      break;
    case 'small':
      centeredTextH2.textContent = 'Small Temples';
      centeredTextH3.textContent = 'Temple area is less than 10,000 square feet.';
      break;
    default:
      centeredTextH2.textContent = 'All Temples';
      centeredTextH3.textContent = 'Displaying all temples without any filter.';
      break;
  }
}

document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const filter = event.target.dataset.filter;
    document.querySelectorAll('#nav-menu a').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
    renderTemples(filterTemples(filter));
    updateCenteredText(filter);
  });
});

renderTemples(temples);
updateCenteredText('all');