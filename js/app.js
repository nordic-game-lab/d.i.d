
let modalMain = document.getElementById('modal_mainContent');
// open modal by id
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
  document.querySelector('.jw-modal.open').classList.remove('open');
  document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
  // close modals on background click
  document.addEventListener('click', event => {
      if (event.target.classList.contains('jw-modal')) {
          closeModal();
      }
  });
});

function checkout() {
  modalMain.style.display = 'none';
}

// Handle form submission
const form = document.getElementById('checkoutForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Send the form data to the serverless function
  fetch('/.netlify/functions/submitCheckout', {
    method: 'POST',
    body: JSON.stringify({ name, email })
  })
    .then(response => {
      if (response.ok) {
        console.log('Form data submitted successfully!');
        // You can perform additional actions here (e.g., show a success message)
      } else {
        console.error('Error submitting form data.');
        // You can handle errors here (e.g., show an error message)
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // You can handle errors here (e.g., show an error message)
    });

  // Close the modal after form submission (you can modify this behavior)
  modal.style.display = 'none';
});

