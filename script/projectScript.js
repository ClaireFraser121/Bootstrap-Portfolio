// Function to open the project modal for BeWyld
function openBeWyldModal() {
  document.getElementById('bewyld-modal').style.display = 'block';
}

// Function to close the project modal for BeWyld
function closeBeWyldModal() {
  document.getElementById('bewyld-modal').style.display = 'none';
}

// Function to open the project modal for The TBT Education App
function openTBTEducationAppModal() {
  document.getElementById('tbt-education-app-modal').style.display = 'block';
}

// Function to close the project modal for The TBT Education App
function closeTBTEducationAppModal() {
  document.getElementById('tbt-education-app-modal').style.display = 'none';
}

// Close the modal if the user clicks outside the modal content or presses the Esc key
window.onclick = function (event) {
  var modalBeWyld = document.getElementById('bewyld-modal');
  var modalTBTEducationApp = document.getElementById('tbt-education-app-modal');
  if (event.target == modalBeWyld) {
      modalBeWyld.style.display = 'none';
  }
  if (event.target == modalTBTEducationApp) {
      modalTBTEducationApp.style.display = 'none';
  }
};

// Close the modal if the user presses the Esc key
window.onkeydown = function (event) {
  var modalBeWyld = document.getElementById('bewyld-modal');
  var modalTBTEducationApp = document.getElementById('tbt-education-app-modal');
  if (event.key === 'Escape') {
      modalBeWyld.style.display = 'none';
      modalTBTEducationApp.style.display = 'none';
  }
};
