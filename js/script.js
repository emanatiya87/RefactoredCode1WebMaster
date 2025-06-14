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
  let messageValue = message.value;

  name.value = "";
  message.value = "";

  fetch("https://formspree.io/f/xpwrrpay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameValue,
      message: messageValue,
      _redirect: "false", // prevent CORS redirect
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Form not submitted");
      return response.json();
    })
    .then((res) => {
      console.log(res);
      thanks.innerHTML = `Thanks <span>${nameValue}</span> for your message, we will contact you soon!`;
    })
    .catch((error) => {
      console.error("Error:", error);
      thanks.innerHTML = "There was a problem sending your message.";
    });
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
