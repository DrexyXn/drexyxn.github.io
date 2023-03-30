let content = document.getElementById('skills_container');

function MenuChange() {
    let checkMenu = document.getElementById('check_menu');
    if (checkMenu.checked == true){
        document.getElementById("menuButton").src = "images/Close.svg";
    } else {
        document.getElementById("menuButton").src = "images/Open.svg";
    }
}

let elproblemo1 = document.getElementById('problemo1');
let elproblemo2 = document.getElementById('problemo2');
let elproblemo3 = document.getElementById('problemo3');
let elproblemo4 = document.getElementById('problemo4');
let elproblemo5 = document.getElementById('problemo5');

if (window.innerWidth > 640 && window.innerWidth < 1081) {
    elproblemo1.remove();
    elproblemo2.remove();
    elproblemo3.remove();
    elproblemo4.remove();
    elproblemo5.remove();
    content.innerHTML += '<div class="skill_container_1"><div class="card-skill-html"><div class="card-skill-html-content"><img src="images/icon_html.svg"><img src="images/icon_html--hover.svg"><list>HTML5</list></div></div><div class="card-skill-css"><div class="card-skill-css-content"><img src="images/icon_css.svg"><img src="images/icon_css--hover.svg"><list>CSS3</list></div></div><div class="card-skill-js"><div class="card-skill-js-content"><img src="images/icon_js.svg"><img src="images/icon_js--hover.svg"><list>JavaScript</list></div></div></div><div class="skill_container_2"><div class="card-skill-scss"><div class="card-skill-scss-content"><img src="images/icon_scss.svg"><img src="images/icon_scss--hover.svg"><list>SCSS</list></div></div><div class="card-skill-git"><div class="card-skill-git-content"><img src="images/icon_git.svg"><img src="images/icon_git--hover.svg"><list>Git</list></div></div></div>';
    
}

var swiper = new Swiper('.mySwiper', {
    autoplay: {
        delay: 4000,
    },

    loop: true
});

const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));