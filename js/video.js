let likeCount = 0;
let dislikeCount = 0;
let isSubscribed = false;

document.getElementById("likeBtn").addEventListener("click", () => {
  likeCount++;
  document.getElementById("likeCount").textContent = likeCount;
});

document.getElementById("dislikeBtn").addEventListener("click", () => {
  dislikeCount++;
  document.getElementById("dislikeCount").textContent = dislikeCount;
});

document.getElementById("subscribeBtn").addEventListener("click", () => {
  isSubscribed = !isSubscribed;
  const btn = document.getElementById("subscribeBtn");
  btn.textContent = isSubscribed ? "Вы подписаны" : "Подписаться";
  btn.classList.toggle("blue", !isSubscribed);
  btn.classList.toggle("gray", isSubscribed);
});

document.getElementById("commentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("commentInput");
  const text = input.value.trim();
  if (text) {
    const li = document.createElement("li");
    li.textContent = text;
    document.getElementById("commentList").prepend(li);
    input.value = "";
  }
});

function toggleTheme() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  const toggleBtn = document.querySelector(".theme-toggle");
  toggleBtn.textContent = isDark ? "Светлая тема️" : "Темная тема";

  // Запоминаем тему
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Применяем сохранённую тему
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
    document.querySelector(".theme-toggle").textContent = "Светлая тема️";
  }
});
