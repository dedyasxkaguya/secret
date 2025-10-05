const box = document.getElementById("shareBox")
const images = document.querySelectorAll(".galeryBox")
images.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target.className)
        let imgSrc = e.target.src
        let imgName = e.target.src.split("/")[4].split('.')[0]
        let imgTitle = e.target.nextElementSibling.textContent
        box.innerHTML += `
        
<div class="shareDiv rounded-4xl p-4 shadow-lg">
    <img src="${imgSrc}" alt="" class="rounded-2xl p-2 shadow">
    <div class="bg-neutral-50 rounded-2xl shadow p-2 mt-2">
        <span class="title font-semibold">${imgTitle}</span><br>
        Share This Picture <br>
        <a href="${imgSrc}" download class="downloadBtn p-2 rounded-xl shadow">
            <i class="bi bi-download mx-2"></i>
            Download
        </a>
        <button type="button" class="shareBtn p-2 mx-2 rounded-xl shadow">
            <i class="bi bi-share mx-2"></i>
            Share
        </button>
        <button type="button" class="closeBtn p-2 rounded-xl shadow">
            <i class="bi bi-x"></i>
        </button>
    </div>
</div>
        `
        document.querySelectorAll(".bi-x").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                console.log(e.target.className)
                e.target.parentElement.parentElement.parentElement.remove()
            })
        })

    });
});
box.addEventListener("click",async (e) => {
    console.log(e.target.className)
    if (e.target.className.includes('shareBtn')) {
        let parent = e.target.parentElement.parentElement
        let img = e.target.parentElement.parentElement.querySelector("img")
        let imgSrc = img.src
        let imgName = img.src.split("/")[4].split('.')
        console.log(imgName)
        let imgTitle = img.nextElementSibling.querySelector("span").textContent

        console.log(`src = ${imgSrc}`)
        console.log(`Title = ${imgTitle}`)
        if (navigator.share) {
            try {
                const response = await fetch(imgSrc);
                const blob = await response.blob();
                let fileName = `${imgName[0]}.${imgName[1]}`;
                console.info(fileName)
                const fileToShare = new File([blob], fileName, { type: blob.type });
                const shareData = {
                    files: [fileToShare],
                    title: imgTitle,
                    text: "Remember this photo"
                };
                const shareDataTest = {
                    // files: [fileToShare],
                    title: imgTitle,
                    text: "Remember this photo",
                    url: imgSrc
                };

                console.info(shareData)
                if (navigator.canShare && navigator.canShare(shareData)) {
                    await navigator.share(shareData);
                } else {
                    console.warn("Gagal");
                }

            } catch (err) {
                console.error(err);
            };
        } else {
            // Fallback untuk browser yang tidak mendukung Web Share API
            alert("Web Share API tidak didukung di browser ini.");
        };
    }
})