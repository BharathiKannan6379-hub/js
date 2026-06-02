// DOM Elements
const body = document.querySelector("body");
const sideBar = document.getElementById("side-bar");
const logoContainer = document.getElementById("logo-container");
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");

// Mobile Menu Toggle
if (menuToggle && closeMenu) {
    menuToggle.addEventListener("click", () => {
        sideBar.classList.add("active");
    });
    
    closeMenu.addEventListener("click", () => {
        sideBar.classList.remove("active");
    });
}

// Logo Generation
const logoIMG = document.createElement("img");
logoIMG.src = "./files/logo.png";
logoIMG.alt = "Logo";
logoIMG.id = "logoIMG";
// Fallback if logo doesn't exist
logoIMG.onerror = function() {
    this.style.display = 'none';
    const textLogo = document.createElement('h2');
    textLogo.innerText = 'BK';
    textLogo.style.color = '#715DF4';
    logoContainer.appendChild(textLogo);
};
logoContainer.appendChild(logoIMG);

// Navigation Generation
const navbar = document.createElement("nav");
sideBar.appendChild(navbar);

const ul = document.createElement("ul");
ul.id = "nav";
navbar.appendChild(ul);

const navItems = [
    { name: "Home", icon: "fa-solid fa-house", target: "hero" },
    { name: "About", icon: "fa-regular fa-circle-user", target: "about" },
    { name: "Skills", icon: "fa-solid fa-rocket", target: "about" },
    { name: "Project", icon: "fa-solid fa-list-check", target: "projects" },
    { name: "Experience", icon: "fa-solid fa-microscope", target: "experience" },
    { name: "Education", icon: "fa-solid fa-book-open-reader", target: "education" },
    { name: "Resume", icon: "fa-regular fa-file-lines", target: "hero" },
    { name: "Contact", icon: "fa-regular fa-envelope", target: "contact" }
];

navItems.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="${item.icon}"></i> ${item.name}`;
    li.addEventListener("click", () => {
        document.getElementById(item.target).scrollIntoView({ behavior: "smooth" });
        // Close sidebar on mobile after clicking
        if (window.innerWidth <= 768) {
            sideBar.classList.remove("active");
        }
    });
    ul.appendChild(li);
});


// Hero Section Generation
const heroText = document.getElementById("hero-text");

const p1 = document.createElement("p");
p1.innerText = "Hi!, I am";
heroText.appendChild(p1);

const h1 = document.createElement("h1");
h1.innerHTML = `BHARATHI <span class="accent">KANNAN P</span>`;
heroText.appendChild(h1);

const h3_hero = document.createElement("h3");
h3_hero.innerText = "Full Stack Developer";
heroText.appendChild(h3_hero);

const p2 = document.createElement("p");
p2.innerText = "I build scalable, high-performance web applications with modern technologies and best practices.";
heroText.appendChild(p2);

const downloadBtn = document.createElement("button");
downloadBtn.innerText = "Download CV";
downloadBtn.className = "btn-primary";
downloadBtn.addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = "./files/Bharathi_kannan_resume.pdf";
    a.download = "Bharathi_Kannan_Resume.pdf";
    a.click();
});
heroText.appendChild(downloadBtn);

// Hero Image
const heroImgContainer = document.getElementById("hero-img");
const profileImg = document.createElement("img");
profileImg.src = "./files/profile.jpeg";
profileImg.alt = "Profile Image";
// Fallback
profileImg.onerror = function() {
    this.src = 'https://via.placeholder.com/350?text=Profile+Image';
}
heroImgContainer.appendChild(profileImg);


// About Section Generation
const aboutMe = document.getElementById("about-me");
const h3_about = document.createElement("h3");
h3_about.innerHTML = `<i class="fa-regular fa-circle-user"></i> About Me`;
aboutMe.appendChild(h3_about);

const p3 = document.createElement("p");
p3.textContent = `I'm a passionate Full Stack Developer dedicated to building modern, scalable, and user-friendly web applications. 
I specialize in JavaScript, React, Node.js, Express.js, and MongoDB, with experience developing responsive websites and dynamic web solutions.`;
p3.style.marginTop = "20px";
aboutMe.appendChild(p3);

// Skills Section Generation
const skillsContainer = document.getElementById("skills");
const h3_skills = document.createElement("h3");
h3_skills.innerText = "Skills";
skillsContainer.appendChild(h3_skills);

const ul_skills = document.createElement("ul");
const skillsList = ["HTML", "CSS", "JavaScript", "React", "Java", "Node.js", "MongoDB", "Express.js"];

skillsList.forEach(skill => {
    const li = document.createElement("li");
    li.innerText = skill;
    ul_skills.appendChild(li);
});
skillsContainer.appendChild(ul_skills);


// Social Media Connections
const linkedIn = document.getElementById("link");
if (linkedIn) {
    linkedIn.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/bharathi-kannan-p-3149a12a1?utm_source=share_via&utm_content=profile&utm_medium=member_android", "_blank");
    });
}

const git = document.getElementById("git");
if (git) {
    git.addEventListener("click", () => {
        window.open("https://github.com/BharathiKannan6379-hub", "_blank");
    });
}

const insta = document.getElementById("insta");
if (insta) {
    insta.addEventListener("click", () => {
        window.open("https://www.instagram.com/bharathi____46?igsh=aHgyN3lyNmJjOXN0", "_blank");
    });
}