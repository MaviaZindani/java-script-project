let timer;
let time = 0;
let running = false;

function start() {
  if (!running) {
    running = true;
    timer = setInterval(updateDisplay, 1000);
    document.querySelector('.display').classList.add('active');
  }
}

function stop() {
  running = false;
  clearInterval(timer);
  document.querySelector('.display').classList.remove('active');
}

function reset() {
  running = false;
  clearInterval(timer);
  time = 0;
  updateDisplay();
  document.querySelector('.display').classList.remove('active');
}

function updateDisplay() {
  time++;
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  document.querySelector('.display').textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}


<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optionalnpm ins
  const firebaseConfig = {
    apiKey: "AIzaSyBze8LQOSW-kdipZeqq_THB4BucuOBOv0c",
    authDomain: "stopwatchi.firebaseapp.com",
    projectId: "stopwatchi",
    storageBucket: "stopwatchi.appspot.com",
    messagingSenderId: "909596657765",
    appId: "1:909596657765:web:2502a945f11e1414ec9e8c",
    measurementId: "G-RT5Z4ZLZLE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>