const params = new URLSearchParams(window.location.search);
// console.log("Pilihan 1:", params.get("ptn1"), params.get("prodi1"));
// console.log("Pilihan 2:", params.get("ptn2"), params.get("prodi2"));
// console.log("Predict Pilihan A:", params.get("predictPtnA"));
console.log("kesesuaianPrestasi1:", params.get("kesesuaianPrestasi1"));
const pilLabel1 = document.getElementById("pilLabel1");
const pilLabel2 = document.getElementById("pilLabel2");


const progress = document.querySelectorAll(".progress");
const animated = document.querySelectorAll(".animated-progress span");

const currentDomisili = params.get("provDomisili");
const akreditasSekolah = params.get("akreditasSekolah");
const pringkatSekolah = params.get("pringkatSkolah");
const reputasiAlumniPTN1 = params.get("reputasiAlumniPTN1");
const reputasiAlumniPTN2 = params.get("reputasiAlumniPTN2");
const isAlumniRegisted1 = params.get("isAlumniRegisted");
const isAlumniRegisted2 = params.get("isAlumniRegisted2");
const nilaiRataRataRaport = JSON.parse(params.get("nilaiRataRataRaport"));
const nilaiIntervalRaport = JSON.parse(params.get("nilaiIntervalRaport"));
const nilaiRankingParalel = JSON.parse(params.get("nilaiRankingParalel"));
const kesesuaianJurusan1 = params.get("kesesuaianJurusan1");
const kesesuaianJurusan2 = params.get("kesesuaianJurusan2");
const jumlahAlumnidiProdiPTN1 = params.get("jumlahAlumnidiProdiPTN1");
const jumlahAlumnidiProdiPTN2 = params.get("jumlahAlumnidiProdiPTN2");
const prodi1 = params.get("prodi1");
const prodi2 = params.get("prodi2");

const kesesuaianPrestasi1 = params.get("kesesuaianPrestasi1");
const kesesuaianPrestasi2 = params.get("kesesuaianPrestasi2");
const kesesuaianPrestasi3 = params.get("kesesuaianPrestasi3");




document.addEventListener("snippet1Ready", (e) => {
    const dataSnbp = e.detail.dataSnbp
    const listKeunggulanPilihan1 = document.querySelectorAll(".keunggulan .listInfo")[0];
    const listKelemahanPilihan1 = document.querySelectorAll(".kelemahan .listInfo")[0];
    const listKeunggulanPilihan2 = document.querySelectorAll(".keunggulan .listInfo")[1];
    const listKelemahanPilihan2 = document.querySelectorAll(".kelemahan .listInfo")[1];

    console.log("listKeunggulanPilihan1: ", listKeunggulanPilihan1);
    console.log("listKeunggulanPilihan2: ", listKeunggulanPilihan2);

    dataSnbp.forEach(el => {
        // pilihan1
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

            if (el.provinsi === currentDomisili) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Kamu mendaftar di PTN yang berada di wilayah prioritas SNBP sesuai kuota sekolah asal.";
            } else {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = "Kamu mendaftar di PTN yang berada di luar zonasi/kuota prioritas SNBP.";
            }

            if (pringkatSekolah >= 9) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Sekolahmu masuk ranking nasional atas, rekam jejak prestasi sangat tinggi.";
            } else if (pringkatSekolah < 9 && pringkatSekolah >= 1) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Sekolahmu masih dalam top 1000, rekam jejak cukup baik, peluang masih kompetitif.";
            } else {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = "Sekolahmu berada di luar top 1000, rekam jejak rendah, peluang kecil.";
            }

            if (akreditasSekolah == 5) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki akreditasi yang <b>sangat baik</b> dan cukup kompetitif di SNBP.";
            } else if (akreditasSekolah == 3) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki akreditasi yang <b>baik</b> dengan peluang masih kompetitif di SNBP.";
            } else {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki akreditasi yang <b>cukup</b> dengan kuota SNBP terbatas dan daya saing lebih rendah.";
            }

            if (reputasiAlumniPTN1 >= 5) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki jumlah alumni yang sangat banyak diterima di PTN pilihan pertama, sehingga rekam jejaknya sangat kuat dan kompetitif di SNBP.";
            } else if (reputasiAlumniPTN1 < 5 && reputasiAlumniPTN1 > 1) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki jumlah alumni yang cukup banyak diterima di PTN pilihan pertama, peluang masih kompetitif di SNBP.";
            } else {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki jumlah alumni yang sangat sedikit atau tidak ada diterima di PTN pilihan pertama, rekam jejak terbatas di SNBP.";
            }

            if (isAlumniRegisted1 == 5) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Semua alumni yang diterima di PTN pilihan pertama melanjutkan registrasi, sehingga reputasi sekolah sangat baik dan kompetitif di SNBP.";
            } else {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = "Terdapat alumni yang diterima di PTN pilihan pertama tidak melanjutkan registrasi, sehingga reputasi sekolah menurun di SNBP.";
            }

            if (nilaiRataRataRaport >= 15) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = `Kamu memiliki rata-rata nilai rapor yang melampaui perkiraan dari standar kami <b>${nilaiRataRataRaport}</b>, hal ini membuat peluangmu semakin kompetitif di SNBP`;
            } else {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = "Rata-rata nilai rapormu masih di bawah standar perkiraan, sehingga peluangmu menjadi lebih terbatas di SNBP";
            }

            if (nilaiIntervalRaport >= 10) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Nilai rapormu menunjukkan tren yang terus meningkat di setiap semester, menandakan konsistensi dan progres yang baik.";
            } else {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = "Rapormu mengalami fluktuasi dan penurunan di beberapa semester, tapi masih ada peluang untuk memperbaikinya ke depan.";
            }

            if (nilaiRankingParalel >= 8 && nilaiRankingParalel <= 10) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Kamu berada di peringkat paralel teratas, menunjukkan prestasi yang sangat unggul dan peluang besar di SNBP.";
            } else if (nilaiRankingParalel > 1 && nilaiRankingParalel <= 7) {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = "Peringkat paralelmu cukup baik dan masih kompetitif untuk bersaing di SNBP.";
            } else {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = "Peringkat paralelmu masih di luar 10 besar, sehingga peluangmu di SNBP menjadi lebih terbatas.";
            }

            if (kesesuaianJurusan1 == 3) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Pilihan jurusanmu sesuai dengan bidang asal, sehingga peluangmu lebih kompetitif di SNBP.";
            } else {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = "Pilihan jurusanmu lintas bidang asal, sehingga daya saingmu bisa menjadi lebih terbatas di SNBP.";
            }

            if (jumlahAlumnidiProdiPTN1 >= 7) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = `Sekolahmu memiliki banyak alumni yang diterima di <b>${el.ptn}, ${prodi1}</b>, rekam jejak ini membuat peluangmu semakin kompetitif.`;
            } else if (jumlahAlumnidiProdiPTN1 >= 3 && jumlahAlumnidiProdiPTN1 <= 5) {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = `Sekolahmu memiliki cukup banyak alumni di <b>${el.ptn}, ${prodi1}</b>.`;
            } else {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = `Sekolahmu memiliki sedikit atau bahkan tidak ada alumni yang berada di <b>${el.ptn}, ${prodi1}</b>, sehingga rekam jejaknya terbatas.`;
            }

            if (kesesuaianPrestasi1 == 1 || kesesuaianPrestasi1 == 0.5 || kesesuaianPrestasi2 == 1 || kesesuaianPrestasi2 == 0.5 || kesesuaianPrestasi3 == 1 || kesesuaianPrestasi3 == 0.5) {
                listKeunggulanPilihan1.appendChild(document.createElement("li")).innerHTML = "Kamu memiliki prestasi yang relevan dengan jurusan pilihanmu, sehingga hal ini menjadi nilai tambah yang memperkuat peluangmu di SNBP.";
            } else {
                listKelemahanPilihan1.appendChild(document.createElement("li")).innerHTML = "Tidak ada prestasi yang kamu input, sehingga kamu kehilangan salah satu faktor pendukung penting dalam persaingan SNBP.";
            }
        }

        // pilihan 2
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

            if (el.provinsi === currentDomisili) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Kamu mendaftar di PTN yang berada di wilayah prioritas SNBP sesuai kuota sekolah asal.";
            } else {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = "Kamu mendaftar di PTN yang berada di luar zonasi/kuota prioritas SNBP.";
            }

            if (pringkatSekolah >= 9) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Sekolahmu masuk ranking nasional atas, rekam jejak prestasi sangat tinggi.";
            } else if (pringkatSekolah < 9 && pringkatSekolah >= 1) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Sekolahmu masih dalam top 1000, rekam jejak cukup baik, peluang masih kompetitif.";
            } else {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = "Sekolahmu berada di luar top 1000, rekam jejak rendah, peluang kecil.";
            }

            if (akreditasSekolah == 5) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki akreditasi yang <b>sangat baik</b> dan cukup kompetitif di SNBP.";
            } else if (akreditasSekolah == 3) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki akreditasi yang <b>baik</b> dengan peluang masih kompetitif di SNBP.";
            } else {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki akreditasi yang <b>cukup</b> dengan kuota SNBP terbatas dan daya saing lebih rendah.";
            }

            if (reputasiAlumniPTN2 >= 5) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki jumlah alumni yang sangat banyak diterima di PTN pilihan pertama, sehingga rekam jejaknya sangat kuat dan kompetitif di SNBP.";
            } else if (reputasiAlumniPTN2 < 5 && reputasiAlumniPTN2 > 1) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki jumlah alumni yang cukup banyak diterima di PTN pilihan pertama, peluang masih kompetitif di SNBP.";
            } else {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = "Sekolahmu memiliki jumlah alumni yang sangat sedikit atau tidak ada diterima di PTN pilihan pertama, rekam jejak terbatas di SNBP.";
            }

            if (isAlumniRegisted2 == 5) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Semua alumni yang diterima di PTN pilihan pertama melanjutkan registrasi, sehingga reputasi sekolah sangat baik dan kompetitif di SNBP.";
            } else {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = "Terdapat alumni yang diterima di PTN pilihan pertama tidak melanjutkan registrasi, sehingga reputasi sekolah menurun di SNBP.";
            }

            if (nilaiRataRataRaport >= 15) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = `Kamu memiliki rata-rata nilai rapor yang melampaui perkiraan dari standar kami <b>${nilaiRataRataRaport}</b>, hal ini membuat peluangmu semakin kompetitif di SNBP`;
            } else {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = "Rata-rata nilai rapormu masih di bawah standar perkiraan, sehingga peluangmu menjadi lebih terbatas di SNBP";
            }

            if (nilaiIntervalRaport >= 10) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Nilai rapormu menunjukkan tren yang terus meningkat di setiap semester, menandakan konsistensi dan progres yang baik.";
            } else {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = "Rapormu mengalami fluktuasi dan penurunan di beberapa semester, tapi masih ada peluang untuk memperbaikinya ke depan.";
            }

            if (nilaiRankingParalel >= 8 && nilaiRankingParalel <= 10) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Kamu berada di peringkat paralel teratas, menunjukkan prestasi yang sangat unggul dan peluang besar di SNBP.";
            } else if (nilaiRankingParalel > 1 && nilaiRankingParalel <= 7) {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = "Peringkat paralelmu cukup baik dan masih kompetitif untuk bersaing di SNBP.";
            } else {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = "Peringkat paralelmu masih di luar 10 besar, sehingga peluangmu di SNBP menjadi lebih terbatas.";
            }

            if (kesesuaianJurusan2 == 3) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Pilihan jurusanmu sesuai dengan bidang asal, sehingga peluangmu lebih kompetitif di SNBP.";
            } else {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = "Pilihan jurusanmu lintas bidang asal, sehingga daya saingmu bisa menjadi lebih terbatas di SNBP.";
            }

            if (jumlahAlumnidiProdiPTN2 >= 7) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = `Sekolahmu memiliki banyak alumni yang diterima di <b>${el.ptn}, ${prodi2}</b>, rekam jejak ini membuat peluangmu semakin kompetitif.`;
            } else if (jumlahAlumnidiProdiPTN2 >= 3 && jumlahAlumnidiProdiPTN1 <= 5) {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = `Sekolahmu memiliki cukup banyak alumni di <b>${el.ptn}, ${prodi2}</b>.`;
            } else {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = `Sekolahmu memiliki sedikit atau bahkan tidak ada alumni yang berada di <b>${el.ptn}, ${prodi2}</b>, sehingga rekam jejaknya terbatas.`;
            }

            if (kesesuaianPrestasi1 == 1 || kesesuaianPrestasi1 == 0.5 || kesesuaianPrestasi2 == 1 || kesesuaianPrestasi2 == 0.5 || kesesuaianPrestasi3 == 1 || kesesuaianPrestasi3 == 0.5) {
                listKeunggulanPilihan2.appendChild(document.createElement("li")).innerHTML = "Kamu memiliki prestasi yang relevan dengan jurusan pilihanmu, sehingga hal ini menjadi nilai tambah yang memperkuat peluangmu di SNBP.";
            } else {
                listKelemahanPilihan2.appendChild(document.createElement("li")).innerHTML = "Tidak ada prestasi yang kamu input, sehingga kamu kehilangan salah satu faktor pendukung penting dalam persaingan SNBP.";
            }
        }
    });
})




