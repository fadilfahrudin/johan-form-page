const params = new URLSearchParams(window.location.search);
console.log("Pilihan 1:", params.get("ptn1"), params.get("prodi1"));
console.log("Pilihan 2:", params.get("ptn2"), params.get("prodi2"));
console.log("Predict Pilihan A:", params.get("predictPtnA"));
console.log("Predict Pilihan B:", params.get("predictPtnB"));
const pilLabel1 = document.getElementById("pilLabel1");
const pilLabel2 = document.getElementById("pilLabel2");

const pil1ValueProgress = document.getElementById("prog-1");
const pil2ValueProgress = document.getElementById("prog-2");



document.addEventListener("snippet1Ready", (e) => {
    const listProvinsi = e.detail.listProvinsi
    const dataSnbp = e.detail.dataSnbp

    dataSnbp.forEach(el => {
        if (el.singkatan === params.get("ptn1")) {
            pilLabel1.textContent = `${el.ptn} ${Math.ceil(Number(params.get("predictPtnA")))}%`
        }

        if (el.singkatan === params.get("ptn2")) {
            pilLabel2.textContent = `${el.ptn} ${Math.ceil(Number(params.get("predictPtnB")))}%`
        }
    });

    pil1ValueProgress.value = params.get("predictPtnA")
    pil2ValueProgress.value = params.get("predictPtnB")

})
const animated = document.querySelectorAll(".animated-progress span");

animated.forEach(function (el) {
    el.animate(
        {
            width: el.getAttribute("data-progress") + "%",
        },
        1000
    ).finished.then(() => {
        el.style.width = el.getAttribute("data-progress") + "%";
    });
    el.textContent = el.getAttribute("data-progress") + "%";
});
