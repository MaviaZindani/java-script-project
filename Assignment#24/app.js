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
