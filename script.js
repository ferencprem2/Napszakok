const timeLabel = document.getElementById('timePlaceHolder')

fetch('https://worldtimeapi.org/api/ip').then(res => res.json()).then(obj => {
    const currentDate = new Date(obj['datetime'])
    const hour = currentDate.getHours().toString().padStart(2, '0')
    const min = currentDate.getMinutes().toString().padStart(2, '0')
    const sec = currentDate.getSeconds().toString().padStart(2, '0')

    timeLabel.innerText = `${hour}:${min}:${sec}`
    setBackgroundBaseOnTime(hour)
})


function setBackgroundBaseOnTime(hour){
    let backgroundImage = ''
    if (hour >= 6 && hour <= 11){
        backgroundImage = 'morning.png'
    } else if (hour >= 12 && hour <= 19) {
        backgroundImage = 'afternoon.png'
    } else {
        backgroundImage = 'night.png'
    }
    console.log(backgroundImage)
    document.body.style.backgroundImage = `url('./src/${backgroundImage}')`
}
