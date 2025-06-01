import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth,
         signInWithPopup,
         GoogleAuthProvider,
         signOut,
         onAuthStateChanged
       } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbvf7xXRT12hod1vVVsa3zlux168szPaU",
  authDomain: "darkmodz-9d94a.firebaseapp.com",
  projectId: "darkmodz-9d94a",
  storageBucket: "darkmodz-9d94a.appspot.com",
  messagingSenderId: "336190921942",
  appId: "1:336190921942:web:78dc85d0897a127c32bd77",
  measurementId: "G-3ZTLEYL8J7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("loginGoogle");
const logoutBtn = document.getElementById("logoutBtn");
const profileBtn = document.getElementById("profileBtn");
const userNameDisplay = document.getElementById("userName");
const downloadsSection = document.getElementById("downloadsSection");

loginBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(result => {
      console.log("Logged in as:", result.user.displayName);
    })
    .catch(error => {
      alert(error.message);
    });
});

logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Logged out");
    location.reload();
  });
});

profileBtn.addEventListener("click", () => {
  const profileMenu = document.getElementById("profileMenu");
  profileMenu.style.display = profileMenu.style.display === "block" ? "none" : "block";
});

onAuthStateChanged(auth, user => {
  if (user) {
    userNameDisplay.textContent = user.displayName || user.phoneNumber || user.email;
    logoutBtn.style.display = "inline-block";
    profileBtn.style.display = "inline-block";
    downloadsSection.style.display = "block";
    loginBtn.style.display = "none";
  } else {
    logoutBtn.style.display = "none";
    profileBtn.style.display = "none";
    downloadsSection.style.display = "none";
    loginBtn.style.display = "inline-block";
    userNameDisplay.textContent = "";
    document.getElementById("profileMenu").style.display = "none";
  }
});
      
