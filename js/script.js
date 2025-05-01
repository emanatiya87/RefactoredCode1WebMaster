let upBtn = document.getElementById("up-btn");
let headerafter = document.querySelector("header");
let loading = document.getElementById("loading");
let name = document.getElementById("name");
let thanks = document.getElementById("thanks");
let message = document.getElementById("message");
let form = document.forms[0];
// form submition
form.onsubmit = function (e) {
  e.preventDefault();
  let nameValue = name.value;
  name.value = "";
  message.value = "";
  thanks.innerHTML = `Thanks <span>${nameValue}</span> for your message , We will contact you as soon as possible!`;
};
// up btn
window.onscroll = function () {
  if (window.scrollY >= 90) {
    upBtn.style.display = "flex";
    headerafter.classList.add("TransperantHeaderAfter");
  } else {
    upBtn.style.display = "none";
    headerafter.classList.remove("TransperantHeaderAfter");
  }
};
upBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// loading page
setTimeout(function () {
  loading.style.opacity = "0";
  setTimeout(() => {
    loading.style.display = "none";
  }, 500);
}, 2000);
