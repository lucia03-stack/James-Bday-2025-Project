const radios = document.querySelectorAll('input[name="eventDate"]');
const continueBtn = document.getElementById("continueBtn");
const form = document.getElementById("dateForm");

// Enable button once a radio is selected
radios.forEach(radio => {
  radio.addEventListener("change", () => {
    continueBtn.disabled = false;
  });
});

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const selectedDate = document.querySelector('input[name="eventDate"]:checked').value;

  // Redirect to second page with date in URL
  window.location.href = `surprise.html?date=${encodeURIComponent(selectedDate)}`;
});