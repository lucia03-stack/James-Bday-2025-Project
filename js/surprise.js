const params = new URLSearchParams(window.location.search);
const date = params.get("date");

document.getElementById("chosenDate").textContent = date || "an unknown date";