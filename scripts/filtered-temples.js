const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Get the current year for footer
const date = new Date();
year.textContent = date.getFullYear();

// Get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.textContent = `Last Modified: ${lastMod}`;

// Hamburger button event
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const centeredTextH2 = document.querySelector('.centered-text h2');
  const centeredTextH3 = document.createElement('h3');
  centeredTextH3.style.marginTop = '0.5rem';
  centeredTextH2.insertAdjacentElement('afterend', centeredTextH3);
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.innerHTML = hamburger.classList.contains('active') ? 'X' : '&#9776;';
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.innerHTML = '&#9776;';
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.innerHTML = '&#9776;';
    }
  });

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005-08-07",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
      alt: "Aba Nigeria Temple"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888-05-21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
      alt: "Manti Utah Temple"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015-06-07",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
      alt: "Payson Utah Temple"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020-05-02",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
      alt: "Yigo Guam Temple"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974-11-19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
      alt: "Washington D.C. Temple"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986-01-10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
      alt: "Lima Perú Temple"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983-12-02",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
      alt: "Mexico City Mexico Temple"
    },
    {
      templeName: "Durban South Africa",
      location: "Durban, South Africa",
      dedicated: "2020-02-16",
      area: 19860,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-thumb.jpg",
      alt: "Durban South Africa Temple"
    },
    {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg, South Africa",
      dedicated: "1985-08-25",
      area: 19184,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-43596-thumb.jpg",
      alt: "Johannesburg South Africa Temple"
    },
    {
      templeName: "Harare Zimbabwe",
      location: "Harare, Zimbabwe",
      dedicated: "2020-12-12",
      area: 17250,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-51322-thumb.jpg",
      alt: "Harare Zimbabwe Temple"
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
        return temples.filter(temple => new Date(temple.dedicated) < new Date('1900-01-01'));
      case 'new':
        return temples.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
      case 'large':
        return temples.filter(temple => temple.area > 90000);
      case 'small':
        return temples.filter(temple => temple.area < 10000);
      default:
        return temples;
    }
  }

  function updateCenteredText(filter) {
    const centeredTextH2 = document.querySelector('.centered-text h2');
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
      const filteredTemples = filterTemples(filter);
      renderTemples(filteredTemples);
      updateCenteredText(filter);
    });
  });

  // Initial render of all temples
  renderTemples(temples);
});

