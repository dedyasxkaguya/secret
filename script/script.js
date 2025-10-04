const heartBox = document.getElementById("heartBox")
const hello = () => {
    swal.fire({
        icon: 'question',
        title: 'Hello',
        text: 'Are you someone?',
        confirmButtonText:'Yes i Am ded'
    })
}
// hello()
const addHeart = () => {
    const x = (Math.random() * 100) - 100
    const y = Math.random() * 100
    const scale = 1 + (Math.random())
    const random = Math.random() * 100

    let zIndex
    let animationDuration
    if (random <= 25) {
        animationDuration = random + 15
    } else if (random >= 40 && random<=60) {
        animationDuration = random - 25
    } else if (random >= 60 && random<=80) {
        animationDuration = random - 45
    } else if (random >= 80) {
        animationDuration = random - 55
    }else{
        animationDuration=random
    }
    let color
    if (random > 50) {
        color = 'text-blue-800'
        zIndex=1
    } else {
        color = 'text-red-600'
        zIndex=3
    }
    let heart = document.createElement('i')
    heart.classList.add("bi")
    heart.classList.add("bi-heart-fill")
    heart.classList.add("heart")
    heart.classList.add(color)
    heart.classList.add("m-4")
    heart.style.left = `${y}%`
    heart.style.bottom = `${x}%`
    heart.style.scale = scale
    heart.style.zIndex=zIndex
    heart.style.animation = `up ${animationDuration}s ease-in-out infinite`
    heart.style.animationDelay = `${random/10}`

    heartBox.appendChild(heart)
}
let i = 0

while (i <= 87) {
    addHeart()
    i++
}
