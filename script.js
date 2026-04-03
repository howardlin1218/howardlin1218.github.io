document.addEventListener("touchstart", function() {}, true);

// Select all elements you want to be "sticky"
const projCards = document.querySelectorAll('.card-img-overlay');

projCards.forEach(projCard => {
    projCard.addEventListener('touchstart', function() {
        // 1. Remove the class from all other cards
        projCards.forEach(c => {
            if (c !== this) c.classList.remove('is-triggered');
        });
        
        // 2. Toggle the class on the one you just tapped
        this.classList.toggle('is-triggered');
    });
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu.classList.contains("open")) {
        menu.classList.toggle("close");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    } else if (menu.classList.contains("close")){
        menu.classList.toggle("open");
        icon.classList.toggle("open");
        menu.classList.toggle("close");
    } else {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
}

let lastClicked = document.querySelector('.nav-links a');
function activeSection(clickedLink) {
  lastClicked.classList.remove('active-section');
  clickedLink.classList.add('active-section');

  lastClicked = clickedLink;
}

function toggleMenuTwo() {
    const menu = document.querySelector(".menu-links-two");
    const icon = document.querySelector(".hamburger-icon-two");
    if (menu.classList.contains("open")) {
        menu.classList.toggle("close");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    } else if (menu.classList.contains("close")){
        menu.classList.toggle("open");
        icon.classList.toggle("open");
        menu.classList.toggle("close");
    } else {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const names = ['Software Engineer.', 'Designer.', 'Student.'];
const title = document.querySelector('#changing-title');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function typewriterEffect() {
    let arrayIndex = 0;

    while (true) {
        let currentWord = names[arrayIndex];
        title.innerHTML = ''; // Clear previous word

        // 1. Type with Fade
        for (let char of currentWord) {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char; // Handle spaces
          span.classList.add('char');
          title.appendChild(span);
          await sleep(100); // Speed of typing
        }

        await sleep(1000); // Wait at the end

        const spans = title.querySelectorAll('.char');
        
        // We go backwards through the spans
        for (let i = spans.length - 1; i >= 0; i--) {
            spans[i].classList.add('char-delete');
            
            // Wait a tiny bit before fading the next character 
            // for a "wave" effect
            await sleep(100); 
            
            // Optional: Remove the element from DOM after animation finishes
            // (Wait 400ms to match the CSS animation duration)
            setTimeout(() => {
                spans[i].remove();
            }, 400);
        }

        await sleep(500);
        arrayIndex = (arrayIndex + 1) % names.length;
    }
}

typewriterEffect();

const modeLink = document.querySelector('.sun-moon-toggle');

function modeToggle() {
  if (document.body.classList.contains('dark')) {
    document.documentElement.style.setProperty('--mainColor', '#f0f2f5');
    document.documentElement.style.setProperty('--fontColor', 'black');
    document.documentElement.style.setProperty('--changingColor', 'gray');
    document.documentElement.style.setProperty('--backgroundColor', 'white');
    document.documentElement.style.setProperty('--borderColor', 'transparent');
    modeLink.style.color = 'rgb(11, 11, 217)';
    document.documentElement.style.setProperty('--borderHoverColor', 'rgba(35, 29, 28, 0.146)');
    document.documentElement.style.setProperty('--navColor', 'white');
    document.documentElement.style.setProperty('--navBorderColor', 'transparent');
    document.documentElement.style.setProperty('--filterColor', 'yellow');
    document.documentElement.style.setProperty('--dev-bg', 'rgba(180, 83, 9, 0.1)');
    document.documentElement.style.setProperty('--dev-bg-solid', 'rgb(44, 23, 7)');
    document.documentElement.style.setProperty('--dev-text', '#ed6d0b');
    document.documentElement.style.setProperty('--dev-border', 'rgba(180, 83, 9, 0.2)');
    document.documentElement.style.setProperty('--live-bg', 'rgba(5, 150, 105, 0.1)');
    document.documentElement.style.setProperty('--live-text', '#047919');
    document.documentElement.style.setProperty('--live-border', 'rgba(5, 150, 105, 0.2)');
  } else { 
    document.documentElement.style.setProperty('--mainColor', '#1A202C');
    document.documentElement.style.setProperty('--fontColor', 'white');
    document.documentElement.style.setProperty('--backgroundColor', 'rgba(255, 255, 255, 0.05)');
    document.documentElement.style.setProperty('--borderColor', 'rgba(255, 255, 255, 0.3)');
    modeLink.style.color = 'rgb(206, 186, 6)';
    document.documentElement.style.setProperty('--borderHoverColor', 'rgba(99, 102, 241, 0.15)');
    document.documentElement.style.setProperty('--navColor', 'rgb(6, 6, 7)');
    document.documentElement.style.setProperty('--navBorderColor', 'rgba(255, 255, 255, 0.3)');
    document.documentElement.style.setProperty('--filterColor', 'lightblue');
    document.documentElement.style.setProperty('--dev-bg', 'rgba(251, 191, 36, 0.15)');
    document.documentElement.style.setProperty('--dev-bg-solid', 'rgb(58, 48, 20)');
    document.documentElement.style.setProperty('--dev-text', '#fbbf24');
    document.documentElement.style.setProperty('--dev-border', 'rgba(251, 191, 36, 0.3)');
    document.documentElement.style.setProperty('--live-bg', 'rgba(52, 211, 153, 0.15)');
    document.documentElement.style.setProperty('--live-text', '#34d399');
    document.documentElement.style.setProperty('--live-border', 'rgba(52, 211, 153, 0.3)');
  }
  
  document.body.classList.toggle('dark');
}

document.querySelectorAll('.card-img').forEach(card => {
  card.addEventListener('click', function(e) {
    // Toggle active class on the clicked card
    this.classList.toggle('active');
    
    // Optional: Close other open cards
    document.querySelectorAll('.card-img').forEach(otherCard => {
      if (otherCard !== this) otherCard.classList.remove('active');
    });
  });
});

const searchInput = document.getElementById('skillSearch');
const cards = document.querySelectorAll('.proj-card');
const noResults = document.getElementById('noResults');
const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  clearBtn.style.display = 'none';

  searchInput.dispatchEvent(new Event('input'));
  
  // Refocus the search bar for the user
  searchInput.focus();
})

searchInput.addEventListener('input', () => {
  const searchTerms = searchInput.value.toLowerCase()
    .split(',')
    .map(t => t.trim())
    .filter(t => t !== "");

  let hasMatches = false;

  cards.forEach(card => {
    const tags = card.dataset.tags.toLowerCase();
    const pillTags = card.querySelectorAll('.proj-attr-item');
    // Logic: Card must contain every term in the searchTerms array
    const matchesAll = searchTerms.every(term => tags.includes(term));

    if (searchTerms.length === 0 || matchesAll) {
      card.style.display = "block";
      hasMatches = true;
      if (searchTerms.length === 0) {
        pillTags.forEach(pillTag => {
          pillTag.classList.remove('filtered-skill');
        });
        clearBtn.style.display = 'none';
      } else {
        clearBtn.style.display = 'block';
      }
    } else {
      card.style.display = 'none';
    }
    
    pillTags.forEach(pillTag => {
      const pillTagText = pillTag.textContent.trim().toLowerCase();

      for (const term of searchTerms) {
        if (pillTagText.includes(term)) {
          pillTag.classList.add("filtered-skill");
          if (pillTagText === term) {
            break;
          }
        } else {
          pillTag.classList.remove("filtered-skill");
        }
      }

    });
  });

  // Toggle "No Results" message
  noResults.style.display = hasMatches ? "none" : "block";
});

let lastScrollY = window.scrollY;
const nav = document.querySelector('.nav-links');
const navContainer = document.querySelector('.nav-links-container');
const hamNav = document.querySelector('.hamburger-nav-abs');
const MIN_WIDTH = 750;

window.addEventListener('load', () => {
  if (window.scrollY > 0) {
    hamNav.classList.add('nav-shown');
    navContainer.classList.add('nav-hidden');
  }
});

function revealNavBar() {
  navContainer.classList.remove('nav-hidden');
  hamNav.classList.remove('nav-shown');
}

function hideNavBar() {
  if (window.scrollY > 0) {
    navContainer.classList.add('nav-hidden');
    hamNav.classList.add('nav-shown');
  }
}

function actionNavBar() {
  // hideNavBar()
  if (!navContainer.classList.contains('nav-hidden')) {
    hideNavBar();
  } else {
    revealNavBar();
  }
}

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (window.innerWidth > MIN_WIDTH) {
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      hamNav.classList.add('nav-shown');
      navContainer.classList.add('nav-hidden');
    } else {
      navContainer.classList.remove('nav-hidden');
      hamNav.classList.remove('nav-shown');
    }
  }

  lastScrollY = currentScrollY;
});

async function copyToClipboard() {
  const email = document.getElementById("email").innerText;
  try {
    await navigator.clipboard.writeText(email);
    
    // Visual feedback is important!
    const btn = document.getElementById("email");
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    
    setTimeout(() => {
      btn.innerText = originalText;
    }, 2000);
    
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

const edu = document.querySelector('#edu-tab');
const exp = document.querySelector('#exp-tab');

const eduSect = document.querySelector('#education');
const expSect = document.querySelector('#resume');

edu.addEventListener('click', () => {
  expSect.style.display = 'none';
  eduSect.style.display = 'flex';

  edu.style.color = 'var(--fontColor)';
  exp.style.color = 'darkgray';
})

exp.addEventListener('click', () => {
  eduSect.style.display = 'none';
  expSect.style.display = 'flex';

  exp.style.color = 'var(--fontColor)';
  edu.style.color = 'darkgray';
})