const heartBox = document.getElementById("heartBox")
const btn = document.querySelectorAll(".nextBtn")
const prevBtn = document.querySelectorAll(".prevBtn")
const hello = () => {
    swal.fire({
        icon: 'question',
        title: 'Hello',
        text: 'Are you someone?',
        confirmButtonText: 'Yes i Am ded'
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
    } else if (random >= 40 && random <= 60) {
        animationDuration = random - 25
    } else if (random >= 60 && random <= 80) {
        animationDuration = random - 45
    } else if (random >= 80) {
        animationDuration = random - 55
    } else {
        animationDuration = random
    }
    let color
    if (random > 50) {
        color = 'text-blue-800'
        zIndex = 1
    } else {
        color = 'text-red-600'
        zIndex = 3
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
    heart.style.zIndex = zIndex
    heart.style.animation = `up ${animationDuration}s ease-in-out forwards`
    heart.style.animationDelay = `${random / 10}`

    heartBox.appendChild(heart)
}
let i = 0

while (i <= 87) {
    addHeart()
    i++
}
btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        try {
            let parent = e.target.parentElement.parentElement
            let parentSibling = e.target.parentElement.parentElement.nextElementSibling
            if (parentSibling !== null) {
                console.log(parentSibling)
                parent.style.display = 'none'
                parentSibling.style.display = 'flex'
            } else {

                swal.fire({
                    title: "Oh No 🥺",
                    html: 'Its already the end of the message <br> Would you like to continue 🦌',
                    confirmButtonText: "Yes i do"
                })

            }
        } catch {
            console.error("Tidak bisa jendral")
        }
    })
})
prevBtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        try{
            let parent = e.target.parentElement.parentElement
            let parentSibling = e.target.parentElement.parentElement.previousElementSibling
            if(parent!==null){
                parent.style.display='none'
                parentSibling.style.display='flex'
            }
        }catch{
            console.error("Tidak bisa jendral")
        }
    })
})