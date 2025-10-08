const usernameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");
const checkboxEl = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("login-form");


window.onload = () => {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");
  if (savedUser && savedPass) {
    existingBtn.style.display = "inline-block";
  }
};

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameEl.value.trim();
  const password = passwordEl.value.trim();

  if (!username || !password) return alert("Please fill all fields.");

  alert(`Logged in as ${username}`);

  if (checkboxEl.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "inline-block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }

  usernameEl.value = "";
  passwordEl.value = "";
  checkboxEl.checked = false;
});

existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
