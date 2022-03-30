let zSpacing = -1000;
let lastPos = zSpacing / 5
let items = Array.from(document.querySelectorAll('.item'))
let zValues = []

window.onscroll = function () {
    let top = document.documentElement.scrollTop
    let delta = lastPos - top

    lastPos = top

    items.forEach((item, index) => {
        zValues.push(index * zSpacing + zSpacing)
        zValues[index] += delta * -5
        
        let transform = `translateZ(${zValues[index]}px)`
        let opacity = zValues[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        
        item.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })
}

window.scrollTo(0, 1)

const soundButton = document.querySelector('.sound-btn')
const audio = document.querySelector('.audio')

soundButton.addEventListener('click', () => {
    soundButton.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
})

window.onfocus = () => {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = () => audio.pause()
