const loginPage = document.querySelector(".login-page");
const dashboardPage = document.getElementById("dashboardPage");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const logoutBtn = document.getElementById("logoutBtn");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

function showDashboard() {
  loginPage.classList.add("hidden");
  dashboardPage.classList.remove("hidden");
}

function showLogin() {
  dashboardPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
  loginMessage.textContent = "";
  loginForm.reset();
}

togglePassword?.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(loginForm);
  const username = String(data.get("username") || "").trim();
  const password = String(data.get("password") || "").trim();

  if (username === "admin" && password === "1234") {
    sessionStorage.setItem("spa-auth", "1");
    showDashboard();
    return;
  }

  loginMessage.textContent = "Username หรือ Password ไม่ถูกต้อง";
});

logoutBtn?.addEventListener("click", () => {
  sessionStorage.removeItem("spa-auth");
  showLogin();
});

if (sessionStorage.getItem("spa-auth") === "1") {
  showDashboard();
}
