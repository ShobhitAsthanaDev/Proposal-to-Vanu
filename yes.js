const febHolidays = [
    "I will , never break ur trust",
    "Please ye pyaar ka cycle hai, achee se feel karna",
    "Dost bhi tum, pyaar bhi tum 😊",
    "ek bhi tum aur hazar bhi tum 🤩",
    "dukh me tum aur khushi me tum 🤨",
    "Jindagi ke safar me kaafi ho tum ❤",
    "Maine shiddat se chaha hai tumhe, I love you❤",
    "You're my everything ✔",
    "You are my soulmate ✨💕",
    "And of course... wait baby.....",
    "My future wife🤭",
    "I will always be there for you",
    "No matter how far we are🥰",
    "I promise I will never multi-thread on you",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive. 🤞✍",
    "In one word, you're just perfect.😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you❤",
    "I'll always do my best to keep you happy🥺",
    "Main humesa tumhre sath hun 🤞✔",
    "kabhi khud ko akela mat samjhna💓",
    "You are the most special person in my life🥰",
    "I don't want to lose you 😒",
    "And trust me I dont want anyone else 🥰",
    "There's no one better than you❤",
    "You're the best baby!! 💖",
    "Or should I say, I miss you when",
    "something really good happens 🤨",
    "Acche lagte hai wo pal jo tumhare",
    "sath bitaye hain virtually or offline💓",
    "There's some hardships, 😢",
    "but we overcame most of them 🥰",
    "and it made me realised how",
    "important you are in my life❤",
    "This complete love cycle is just for you, 😘",
    "my unconditional love,my private variable💖",
    "Please take care of love who really loves you❤",
    "I'm binary in love; you're the one and only '1 in my life",
    "Thanks to God for helping us,ki hum logo ko milaya🙏",
    "You're the love of my life,",
    "I Like You So much❤"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
 
  
  // Add this to existing JS
let touchYStart = 0;

document.addEventListener('touchstart', e => {
    touchYStart = e.touches[0].clientY;
});

document.addEventListener('touchend', e => {
    const touchYEnd = e.changedTouches[0].clientY;
    const deltaY = touchYStart - touchYEnd;
    
    if (Math.abs(deltaY) > 30) {
        if (deltaY > 0) {
            adjustDay(1); // Swipe up
        } else {
            adjustDay(-1); // Swipe down
        }
    }
});

// Prevent screen scroll
document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });
