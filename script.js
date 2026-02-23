const btn = document.getElementById("open");
const letter = document.getElementById("letter");

btn.onclick = ()=>{
 letter.classList.remove("hidden");
 btn.style.display="none";
};

/* generate luxury stars */

const starField=document.querySelector(".stars");

for(let i=0;i<120;i++){
 const s=document.createElement("span");
 s.style.top=Math.random()*100+"vh";
 s.style.left=Math.random()*100+"vw";
 s.style.animationDelay=Math.random()*3+"s";
 starField.appendChild(s);
}