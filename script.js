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

// const grid = document.querySelector(".proj-cards-container");
//   const items = Array.from(grid.children);

//   const columns = getComputedStyle(grid)
//     .gridTemplateColumns.split(" ").length;

//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       if (!entry.isIntersecting) {
//         items.forEach(item => item.classList.remove("show"));
//         return;
//       }

//       items.forEach((item, index) => {
//         const delay = index * 120; // row-based order
//         item.style.transitionDelay = `${delay}ms`;
//         item.classList.add("show");
//       });
//     },
//     { threshold: 0.3 }
//   );

//   observer.observe(grid);

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
  } else { 
    document.documentElement.style.setProperty('--mainColor', '#1A202C');
    document.documentElement.style.setProperty('--fontColor', 'white');
    document.documentElement.style.setProperty('--backgroundColor', 'rgba(255, 255, 255, 0.05)');
    document.documentElement.style.setProperty('--borderColor', 'rgba(255, 255, 255, 0.3)');
    modeLink.style.color = 'rgb(206, 186, 6)';
    document.documentElement.style.setProperty('--borderHoverColor', 'rgba(99, 102, 241, 0.15)');
    document.documentElement.style.setProperty('--navColor', 'rgb(4, 3, 44)');
    document.documentElement.style.setProperty('--navBorderColor', 'rgba(255, 255, 255, 0.3)');
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
