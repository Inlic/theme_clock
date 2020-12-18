const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', () => {
  const html = document.querySelector('html')
  toggle.innerHTML === 'Dark Mode' ? toggle.innerHTML = 'Light Mode' : toggle.innerHTML = 'Dark Mode'
  html.classList.toggle('dark')
})

function setTime() {
  const time = new Date();
  const month = time.getMonth()
  const day = time.getDay()
  const hours = time.getHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  hourElement.style.transform = `translate(-50%, -100%) rotate(0deg)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()