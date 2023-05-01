const degree = 6
const hr = document.querySelector('.hr')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

setInterval(() => {
  const date = new Date()
  const hours = date.getHours() * 30
  const minutes = date.getMinutes() * degree
  const seconds = date.getSeconds() * degree
  hr.style.transform = `rotateZ(${hours + minutes / 12}deg)`
  min.style.transform = `rotateZ(${minutes}deg)`
  sec.style.transform = `rotateZ(${seconds}deg)`
})
