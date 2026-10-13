const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form from submitting normally

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  let valid = true;

  // Name validation
  if (name === '') {
    document.getElementById('nameError').textContent = 'Please enter your name';
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Please enter your email';
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email';
    valid = false;
  }

  // Message validation
  if (message === '') {
    document.getElementById('messageError').textContent = 'Please enter your message';
    valid = false;
  }

  // If all fields are valid, create mailto link
  if (valid) {
    const mailtoLink = `mailto:recipient@example.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;
    window.location.href = mailtoLink;
  }
});
