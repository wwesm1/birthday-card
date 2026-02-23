const btn = document.getElementById("wishBtn");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
  msg.classList.remove("hidden");
  btn.textContent = "I love you bestie 💗";
});