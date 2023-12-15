// projectScript.js

// Function to open the project modal
function openProjectModal() {
    document.getElementById('projectModal').style.display = 'block';
  }
  
  // Function to close the project modal
  function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
  }
  
  // Close the modal if the user clicks outside the modal content or presses the Esc key
  window.onclick = function (event) {
    var modal = document.getElementById('projectModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  
  // Close the modal if the user presses the Esc key
  window.onkeydown = function (event) {
    var modal = document.getElementById('projectModal');
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  };
  
  