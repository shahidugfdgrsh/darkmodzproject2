// authCheck.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAbvf7xXRT12hod1vVVsa3zlux168szPaU",
  authDomain: "darkmodz-9d94a.firebaseapp.com",
  projectId: "darkmodz-9d94a",
  storageBucket: "darkmodz-9d94a.firebasestorage.app",
  messagingSenderId: "336190921942",
  appId: "1:336190921942:web:78dc85d0897a127c32bd77",
  measurementId: "G-3ZTLEYL8J7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Elements from your index.html
const userName = document.getElementById('userName');
const content = document.getElementById('content');
const loginContainer = document.getElementById('loginContainer');
const profileBtn = document.getElementById('profileBtn');

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User logged in: show content, username and profile button
    userName.textContent = `Welcome, ${user.displayName}`;
    content.style.display = 'block';
    loginContainer.style.display = 'none';
    profileBtn.style.display = 'inline-block';
  } else {
    // User not logged in: hide content, reset UI
    userName.textContent = '';
    content.style.display = 'none';
    loginContainer.style.display = 'block';
    profileBtn.style.display = 'none';
  }
});
