const params = new URLSearchParams(window.location.search);

let standarNilaiProdiA, standarNilaiProdiB, domisiliPtnPilihanA, domisiliPtnPilihanB


document.addEventListener("snippet1Ready", (e) => {
    const listProvinsi = e.detail.listProvinsi
    const dataSnbp = e.detail.dataSnbp

    const domisiliSekolahSelect = document.getElementById("domisiliSekolah")

    const ptn1 = document.getElementById("ptn1")
    const ptn2 = document.getElementById("ptn2")

    const prodi1 = document.getElementById("prodi1")
    const prodi2 = document.getElementById("prodi2")

    const infoAlumni1 = document.getElementById("infoAlumni1")
    const infoAlumni2 = document.getElementById("infoAlumni2")

    const labelInfoAlumni1 = document.getElementById("infoAlumniLabel1")
    const labelInfoAlumni2 = document.getElementById("infoAlumniLabel2")

    const jmlAlumniDiPTNLabel1 = document.getElementById("jmlAlumniDiPTNLabel1")
    const jmlAlumniDiPTNLabel2 = document.getElementById("jmlAlumniDiPTNLabel2")

    const isAlumniRegistedLabel1 = document.getElementById("isAlumniRegistedLabel1")
    const isAlumniRegistedLabel2 = document.getElementById("isAlumniRegistedLabel2")

    const penyelenggaraPtn1 = document.querySelectorAll("#penyelenggaraPtn1")
    const penyelenggaraPtn2 = document.querySelectorAll("#penyelenggaraPtn2")

    const kesesuaianProdi1 = document.querySelectorAll("#kesesuaianProdi1")
    const kesesuaianProdi2 = document.querySelectorAll("#kesesuaianProdi2")

    listProvinsi.forEach(provinsi => {
        const option = document.createElement("option")
        option.value = provinsi.provinsi
        option.textContent = provinsi.provinsi
        domisiliSekolahSelect.appendChild(option)
    })

    dataSnbp.forEach((ptn) => {
        if (ptn.singkatan === params.get("ptn1")) {
            domisiliPtnPilihanA = ptn.provinsi
            standarNilaiProdiA = ptn.prodi_data.find(data => data.prodi === params.get("prodi1")).rata_rata_raport
            ptn1.value = ptn.ptn;
            prodi1.value = ptn.prodi_data.find(data => data.prodi === params.get("prodi1")).prodi;
            labelInfoAlumni1.textContent = `Jumlah alumni di ${ptn.singkatan.split("/")[0]} yang diterima jalur SNBP & SNBT tahun 2025?`;
            isAlumniRegistedLabel1.textContent = `Apakah terdapat alumni yang dinyatakan lolos SNBP di ${ptn.singkatan.split("/")[0]} namun tidak melanjutkan pendaftaran ulang?`;
            jmlAlumniDiPTNLabel1.textContent = `Berapa jumlah Alumni ${ptn.prodi_data.find(data => data.prodi === params.get("prodi1")).prodi} (${ptn.ptn}) yang diterima di Jalur SNBP tahun 2025?`;
            penyelenggaraPtn1.forEach((item) => item.textContent = ptn.ptn);
            kesesuaianProdi1.forEach((item) => item.textContent = `Berhubungan dengan Prodi ${ptn.prodi_data.find(data => data.prodi === params.get("prodi1")).prodi}`);
        }
        if (ptn.singkatan === params.get("ptn2")) {
            domisiliPtnPilihanB = ptn.provinsi
            standarNilaiProdiB = ptn.prodi_data.find(data => data.prodi === params.get("prodi2")).rata_rata_raport
            ptn2.value = ptn.ptn;
            prodi2.value = ptn.prodi_data.find(data => data.prodi === params.get("prodi2")).prodi;
            labelInfoAlumni2.textContent = `Jumlah alumni di ${ptn.singkatan.split("/")[0]} yang diterima jalur SNBP & SNBT tahun 2025?`;
            isAlumniRegistedLabel2.textContent = `Apakah terdapat alumni yang dinyatakan lolos SNBP di ${ptn.singkatan.split("/")[0]} namun tidak melanjutkan pendaftaran ulang?`;
            jmlAlumniDiPTNLabel2.textContent = `Berapa jumlah Alumni ${ptn.prodi_data.find(data => data.prodi === params.get("prodi2")).prodi} (${ptn.ptn}) yang diterima di Jalur SNBP tahun 2025?`;
            penyelenggaraPtn2.forEach((item) => item.textContent = ptn.ptn);
            kesesuaianProdi2.forEach((item) => item.textContent = `Berhubungan dengan Prodi ${ptn.prodi_data.find(data => data.prodi === params.get("prodi2")).prodi}`);
        }
    });
})


const form = document.querySelector("#snbp-form-2");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 1. Profile sekolah maks 20 point
    const domisili = document.getElementById("domisiliSekolah").value
    const nAkreditasSkolah = Number(document.getElementById("akreditasSkolah").value)
    const nPeingkatSekolah = Number(document.getElementById("peingkatSekolah").value)
    // dminisili point logic
    const getDomisilPoint = () => {
        if (domisili === domisiliPtnPilihanA || domisili === domisiliPtnPilihanB) {
            return 5
        } else {
            return 0
        }
    }

    const profileSkolahPoint = getDomisilPoint() + nAkreditasSkolah + nPeingkatSekolah


    // 2. Reputasi Alumni maks 10 point
    const nInfoAlumni1 = Number(document.getElementById("infoAlumni1").value)
    const nInfoAlumni2 = Number(document.getElementById("infoAlumni2").value)
    const nIsAlumniRegisted1 = Number(document.getElementById("isAlumniRegisted1").value)
    const nIsAlumniRegisted2 = Number(document.getElementById("isAlumniRegisted2").value)

    const reputasiAlumniPointPTN1 = nInfoAlumni1 + nIsAlumniRegisted1
    const reputasiAlumniPointPTN2 = nInfoAlumni2 + nIsAlumniRegisted2


    // 3. Rata-Rata Nilai Raport dan Rangking Maks. 35 Point
    const getNilaiRaport = () => {

        const rataNilai1 = Number(document.getElementById("rataNilai1").value)
        const rataNilai2 = Number(document.getElementById("rataNilai2").value)
        const rataNilai3 = Number(document.getElementById("rataNilai3").value)
        const rataNilai4 = Number(document.getElementById("rataNilai4").value)
        const rataNilai5 = Number(document.getElementById("rataNilai5").value)
        const rankingParalel = Number(document.getElementById("rankingParalel").value ?? 0)

        const rataRataNiail = () => {
            const rataNilaiRaport = (Number(rataNilai1) + Number(rataNilai2) + Number(rataNilai3) + Number(rataNilai4) + Number(rataNilai5)) / 5

            if (rataNilaiRaport > standarNilaiProdiA || rataNilaiRaport > standarNilaiProdiB) {
                return 15
            } else {
                return 0
            }
        }

        const isNilaiRaportInterval = () => {
            if (rataNilai2 > rataNilai1 && rataNilai3 > rataNilai2 && rataNilai4 > rataNilai3 && rataNilai5 > rataNilai4) {
                return 10
            } else {
                return 0
            }
        }

        const rankingList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        const rankingParalelPoint = () => {
            let point
            rankingList.forEach((n, i) => {
                // If user not input ranking
                if (rankingParalel === 0) { point = 0 }

                if (rankingParalel === n) {
                    point = Number(rankingList.length - i)
                } else if (rankingParalel > rankingList.length) {
                    point = 0
                }
            })

            return point
        }

        return rataRataNiail() + isNilaiRaportInterval() + rankingParalelPoint()
    }



    // 4. Get point PTN Pilihan 1 & Pilihan 2 max 10 point
    const getPTNPointChoosed = (i) => {
        const jmlAlumniDiPTN = Number(document.getElementById(`jmlAlumniDiPTN${i}`).value)
        const kesesuaianJurusan = Number(document.getElementById(`kesesuaianJurusan${i}`).value)
        const nMapelPendukung = Number(document.getElementById(`nMapelPendukung${i}`).value)


        const rataRataNiail = () => {
            if (nMapelPendukung > standarNilaiProdiA || nMapelPendukung > standarNilaiProdiB) {
                return 10
            } else {
                return 0
            }
        }

        return jmlAlumniDiPTN + kesesuaianJurusan + rataRataNiail()
    }

    // 5. Nilai Prestasi Maks. 5 point
    const getNilaiPrestasi = (i) => {
        const tingkatan = Number(document.getElementById(`tingkatan${i}`).value ?? 0)
        const penyelenggara = Number(document.getElementById(`penyelenggara${i}`).value ?? 0)
        const peringkat = Number(document.getElementById(`peringkat${i}`).value ?? 0)
        const kepersertaan = Number(document.getElementById(`kepersertaan${i}`).value ?? 0)
        const kesesuaian = Number(document.getElementById(`kesesuaianProdiSelect${i}`).value ?? 0)
        return tingkatan + penyelenggara + peringkat + kepersertaan + kesesuaian
    }




    const globalPoint = profileSkolahPoint + getNilaiRaport() + getNilaiPrestasi(1) + getNilaiPrestasi(2) + getNilaiPrestasi(3)
    console.log("globalPoint: ", globalPoint)


    const nPredictA = globalPoint + reputasiAlumniPointPTN1 + getPTNPointChoosed(1)
    const nPredictB = globalPoint + reputasiAlumniPointPTN2 + getPTNPointChoosed(2)

    const nPredictPTN1InPercentage = (nPredictA / 100) * 100
    const nPredictPTN2InPercentage = (nPredictB / 100) * 100


    if (isNaN(nPredictA) || isNaN(nPredictB)) {
        // Handle the case when either nPredictPTN1 or nPredictPTN2 is NaN
        alert("Something went wrong. Please try again.");
        console.log("nilai Predict PTN 1 In Percentage: ", nPredictA)
        console.log("nilai Predict PTN 2 In Percentage:", nPredictB)
    } else {
        console.log("nilai Predict PTN 1 In Percentage:", nPredictA)
        console.log("nilai Predict PTN 2 In Percentage:", nPredictB)
        // Create query string
        const newParams = new URLSearchParams({
            ptn1: params.get("ptn1"),
            prodi1: params.get("prodi1"),
            ptn2: params.get("ptn2"),
            prodi2: params.get("prodi2"),
            predictPtnA: nPredictPTN1InPercentage,
            predictPtnB: nPredictPTN2InPercentage,
            nRataRataRaport: getNilaiRaport(),
            provDomisili: domisili,
            pringkatSkolah: nPeingkatSekolah,
            akreditasSekolah: nAkreditasSkolah,
            reputasiAlumniPTN1: reputasiAlumniPointPTN1,
            reputasiAlumniPTN2: reputasiAlumniPointPTN2,
            isAlumniRegisted: nIsAlumniRegisted1,
            isAlumniRegisted2: nIsAlumniRegisted2,
            kesesuaianJurusan1: Number(document.getElementById("kesesuaianJurusan1").value),
            kesesuaianJurusan2: Number(document.getElementById("kesesuaianJurusan2").value),
            jumlahAlumnidiProdiPTN1: Number(document.getElementById("jmlAlumniDiPTN1").value),
            jumlahAlumnidiProdiPTN2: Number(document.getElementById("jmlAlumniDiPTN2").value),
            kesesuaianPrestasi1: Number(document.getElementById("kesesuaianProdiSelect1").value ?? 0),
            kesesuaianPrestasi2: Number(document.getElementById("kesesuaianProdiSelect2").value ?? 0),
            kesesuaianPrestasi3: Number(document.getElementById("kesesuaianProdiSelect3").value ?? 0)
        });

        // direct result page
        // const url = "https://haipintar.com/hasil-rasionalisasi?";
        const url = "result-page.html?";
        window.location.href = url + newParams.toString();
    }

})