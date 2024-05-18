const MIN_VALUE = 0
const MAX_VALUE = 10

const outputElement = document.getElementById("output")
const meterElement = document.getElementById('meter')

let x = 0

function updateMeter(value) {
    outputElement.textContent = value
    meterElement.style.height = `${value * 10}%`

    const color = value >= 7 ? 'red' : 'rgb(0, 255, 0)'

    meterElement.style.backgroundColor = color
    meterElement.style.filter = `drop-shadow(0 0 2.5px ${color}) drop-shadow(0 0 10px ${color})`
}

function increacement() {
    if (x >= MAX_VALUE) return

    x++
    updateMeter(x)
}

function decrecement() {
    if (x <= MIN_VALUE) return
    
    x--
    updateMeter(x)
}
