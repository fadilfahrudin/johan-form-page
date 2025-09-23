const params = new URLSearchParams(window.location.search);
// console.log("Pilihan 1:", params.get("ptn1"), params.get("prodi1"));
// console.log("Pilihan 2:", params.get("ptn2"), params.get("prodi2"));
// console.log("Predict Pilihan A:", params.get("predictPtnA"));
// console.log("Predict Pilihan B:", params.get("predictPtnB"));
const pilLabel1 = document.getElementById("pilLabel1");
const pilLabel2 = document.getElementById("pilLabel2");


const progress = document.querySelectorAll(".progress");
const animated = document.querySelectorAll(".animated-progress span");



document.addEventListener("snippet1Ready", (e) => {
    const dataSnbp = e.detail.dataSnbp

    dataSnbp.forEach(el => {
        if (el.singkatan === params.get("ptn1")) {
            pilLabel1.textContent = `${el.ptn}`
            progress[0].setAttribute("data-progress", Math.ceil(Number(params.get("predictPtnA"))))
            progress[0].textContent = `${Math.ceil(Number(params.get("predictPtnA")))}%`

            animated[0].animate(
                {
                    width: `${Math.ceil(Number(params.get("predictPtnA")))}%`,
                },
                1000
                ).finished.then(() => {
                animated[0].style.width = `${Math.ceil(Number(params.get("predictPtnA")))}%`;
            });
        }

        if (el.singkatan === params.get("ptn2")) {
            pilLabel2.textContent = `${el.ptn}`
            progress[1].setAttribute("data-progress", Math.ceil(Number(params.get("predictPtnA"))))
            progress[1].textContent = `${Math.ceil(Number(params.get("predictPtnB")))}%`

            animated[1].animate(
                {
                    width: `${Math.ceil(Number(params.get("predictPtnB")))}%`,
                },
                1000
                ).finished.then(() => {
                    animated[1].style.width = `${Math.ceil(Number(params.get("predictPtnB")))}%`;
                });
        }
    });
})




