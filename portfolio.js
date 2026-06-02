let body = document.querySelector("body");


//side Bar
let sideBar = document.getElementById("side-bar");

let logo = document.createElement("div");
logo.id = "logo";
sideBar.appendChild(logo);
//logoIMG
let logoIMG = document.createElement("img");
logoIMG.src= "./files/logo.png";
logoIMG.id = "logoIMG";
logo.appendChild(logoIMG);

//navbar 

let navbar = document.createElement("nav");
sideBar.appendChild(navbar);

let ul = document.createElement("ul");
ul.id = "nav"
ul.style = "display: flex; flex-direction: column; color:white; width:100%; height:50vh"
navbar.appendChild(ul);


let home = document.createElement("li");
home.innerHTML = `<i class="fa-solid fa-house"></i> Home`;
ul.appendChild(home);
let project = document.createElement("li");
project.innerHTML = `<i class="fa-solid fa-list-check"></i> Project`;
ul.appendChild(project);
let about = document.createElement("li");
about.innerHTML =  `<i class="fa-regular fa-circle-user"></i> About`;
ul.appendChild(about);
let skill = document.createElement("li");
skill.innerHTML = `<i class="fa-solid fa-rocket"></i> Skills`;
ul.appendChild(skill);

let experience = document.createElement("li");
experience.innerHTML = `<i class="fa-solid fa-microscope"></i> Experience`;
ul.appendChild(experience);
let education = document.createElement("li");
education.innerHTML = `<i class="fa-solid fa-book-open-reader"></i> Education`;
ul.appendChild(education);
let resume = document.createElement("li");
resume.innerHTML = `<i class="fa-regular fa-file-lines"></i> Resume`;
ul.appendChild(resume);
let contact = document.createElement("li");
contact.innerHTML = `<i class="fa-regular fa-envelope"></i> Contact`;
ul.appendChild(contact);

//first container

let m11 = document.getElementById("m-11");
let p1 = document.createElement("p");
p1.innerText ="Hi!, I am";
p1.style = "margin-bottom : 10px ";
m11.appendChild(p1);

let h1 = document.createElement("h1");
h1.innerHTML = `BHARATHI <span>KANNAN P </span>`;
m11.appendChild(h1);

let h3 = document.createElement("h3");
h3.innerText = "Full Stack Developer "
m11.appendChild(h3);

let p2 = document.createElement("p");
p2.innerText = "I build scalable, high-performance web application with modern technologies and best practices";
p2.style = "margin-top : 10px ";
m11.appendChild(p2);

let downloadBtn = document.createElement("button");
downloadBtn.innerText = "Download CV";
downloadBtn.style = "margin-top:30px; height:3rem; width:10rem; background-color:rgba(6, 14, 33); color:white; border:1px solid white; border-radius:10px";


downloadBtn.addEventListener("click", () => {
    let a = document.createElement("a");
    a.href = "./files/Bharathi_kannan_resume.pdf";
    a.download = "Bharathi_Kannan_Resume.pdf";
    a.click();
});

m11.appendChild(downloadBtn);



//second container

let m21 = document.getElementById("m-21");

let h31 = document.createElement("h3");
h31.innerHTML =`<i class="fa-regular fa-circle-user"></i> About Me`;
m21.appendChild(h31);

let p3 = document.createElement("p");
p3.textContent = `I'm a passionate Full Stack Developer dedicated to building modern, scalable, and user-friendly web applications . 
I specialize in JavaScript, React, Node.js, Express.js, and MongoDB, with experience developing responsive websites and dynamic web solutions.`;

p3.style = "margin-top:20px;"

m21.appendChild(p3);

let m22 = document.getElementById("m-22");

let h32 = document.createElement("h3");
h32.innerText = "Skills";
m22.appendChild(h32);

let ul2 = document.createElement("ul");
ul2.style = "padding:20px;"
m22.appendChild(ul2);

let skill_1 = document.createElement("li");
let skill_2 = document.createElement("li");
let skill_3 = document.createElement("li");
let skill_4 = document.createElement("li");
let skill_5 = document.createElement("li");

skill_1.innerText = "HTML";
skill_2.innerText = "CSS";
skill_3.innerText = "JavaScript";
skill_4.innerText = "React";
skill_5.innerText = "Java";

ul2.appendChild(skill_1);
ul2.appendChild(skill_2);
ul2.appendChild(skill_3);
ul2.appendChild(skill_4);
ul2.appendChild(skill_5);


home.addEventListener("click", () => {
    document.getElementById("m-1")
        .scrollIntoView({ behavior: "smooth" });
});
about.addEventListener("click", () => {
    document.getElementById("m-21")
        .scrollIntoView({ behavior: "smooth" });
});
skill.addEventListener("click", () => {
    document.getElementById("m-22")
        .scrollIntoView({ behavior: "smooth" });
});
project.addEventListener("click", () => {
    document.getElementById("m-3")
        .scrollIntoView({ behavior: "smooth" });
});
experience.addEventListener("click", () => {
    document.getElementById("m-4")
        .scrollIntoView({ behavior: "smooth" });
});
education.addEventListener("click", () => {
    document.getElementById("m-5")
        .scrollIntoView({ behavior: "smooth" });
});
resume.addEventListener("click", () => {
    document.getElementById("m-1")
        .scrollIntoView({ behavior: "smooth" });
});
contact.addEventListener("click", () => {
    document.getElementById("footer")
        .scrollIntoView({ behavior: "smooth" });
});



// connect account
let linkedIn = document.getElementById("link");
linkedIn.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/bharathi-kannan-p-3149a12a1?utm_source=share_via&utm_content=profile&utm_medium=member_android");
})

let git = document.getElementById("git");
git.addEventListener("click",()=>{
    window.open("https://github.com/BharathiKannan6379-hub");
})

let insta = document.getElementById("insta");
insta.addEventListener("click",()=>{
    window.open("https://www.instagram.com/bharathi____46?igsh=aHgyN3lyNmJjOXN0");
})