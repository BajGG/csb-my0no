function login() {
  document.getElementById("signup").style.backgroundColor = "var(--nord3)";
  document.getElementById("login").style.backgroundColor = getComputedStyle(
    document.querySelector(":root")
  ).getPropertyValue("--nord1");
}

function signup() {
  document.getElementById("login").style.backgroundColor = getComputedStyle(
    document.querySelector(":root")
  ).getPropertyValue("--nord3");
  document.getElementById("signup").style.backgroundColor = getComputedStyle(
    document.querySelector(":root")
  ).getPropertyValue("--nord1");
}

document.getElementById("login").addEventListener("mousedown", () => {
  document.getElementById("login").style.backgroundColor = "var(--nord2)";
});

document.getElementById("login").addEventListener("mouseup", () => {
  document.getElementById("login").style.backgroundColor = "var(--nord1)";
});

document.getElementById("signup").addEventListener("mousedown", () => {
  document.getElementById("signup").style.backgroundColor = "var(--nord2)";
});

document.getElementById("signup").addEventListener("mouseup", () => {
  document.getElementById("signup").style.backgroundColor = "var(--nord1)";
});

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    document.getElementById("uName").value +
      document.getElementById("pWord").value
  );
});
