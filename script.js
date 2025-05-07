/* script.js */
const RegBtn = document.getElementById('RegBtn');
RegBtn.addEventListener('click', () => {
  RegBtn.textContent = 'Registered!';
  RegBtn.style.backgroundColor = '#4CAF50';
});

// Double-click secret button
const secretBtn = document.getElementById('secretBtn');
const secretMsg = document.getElementById('secretMessage');
secretBtn.addEventListener('dblclick', () => {
  secretMsg.classList.remove('hidden');
});

// Keypress detection
document.addEventListener('keydown', (e) => {
  document.getElementById('keyDisplay').textContent = e.key;
});

// Image gallery functionality
const thumbnails = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    mainImage.src = img.src;
  });
});

// Tab switching
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.add('hidden');
    });
    const target = document.getElementById(tab.dataset.target);
    target.classList.remove('hidden');
  });
});

// Form validation
const form = document.getElementById('userForm');
const password = document.getElementById('password');
const feedback = document.getElementById('feedback');

password.addEventListener('input', () => {
  if (password.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
  } else {
    feedback.textContent = '';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username');
  const email = document.getElementById('email');

  if (!username.value.trim()) {
    alert('Username is required!');
    return;
  }

  const simpleEmailRegex = /.+@.+\..+/;
  if (!simpleEmailRegex.test(email.value)) {
    alert('Please enter a valid email.');
    return;
  }

  if (password.value.length < 8) {
    alert('Password must be at least 8 characters.');
    return;
  }

  alert('Form submitted successfully!');
});
