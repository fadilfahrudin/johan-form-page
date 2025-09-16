const params = new URLSearchParams(window.location.search);

let standarNilaiProdiA, standarNilaiProdiB


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
        option.value = provinsi.value
        option.textContent = provinsi.provinsi
        domisiliSekolahSelect.appendChild(option)
    })

    dataSnbp.forEach((ptn) => {
        if (ptn.singkatan === params.get("ptn1")) {
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

    // 1. Declare nilai dari section index sekolah
    const nAkreditasSkolah = Number(document.getElementById("akreditasSkolah").value)
    const nPeingkatSekolah = Number(document.getElementById("peingkatSekolah").value)
    const nInfoAlumni1 = Number(document.getElementById("infoAlumni1").value)
    const nInfoAlumni2 = Number(document.getElementById("infoAlumni2").value)
    const nIsAlumniRegisted1 = Number(document.getElementById("isAlumniRegisted1").value)
    const nIsAlumniRegisted2 = Number(document.getElementById("isAlumniRegisted2").value)

    // 2. Sum nilai
    const TotalNinailIndexSekolah = nAkreditasSkolah + nPeingkatSekolah + nInfoAlumni1 + nInfoAlumni2 + nIsAlumniRegisted1 + nIsAlumniRegisted2;

    // 3. 
    const getNilaiRaport = () => {

        const rataNilai1 = Number(document.getElementById("rataNilai1").value)
        const rataNilai2 = Number(document.getElementById("rataNilai2").value)
        const rataNilai3 = Number(document.getElementById("rataNilai3").value)
        const rataNilai4 = Number(document.getElementById("rataNilai4").value)
        const rataNilai5 = Number(document.getElementById("rataNilai5").value)

        const rataRataNiail = () => {
            const rataNilaiRaport = (Number(rataNilai1) + Number(rataNilai2) + Number(rataNilai3) + Number(rataNilai4) + Number(rataNilai5)) / 5
            if (rataNilaiRaport > standarNilaiProdiA || rataNilaiRaport > standarNilaiProdiB) {
                return 25
            } else {
                return 0
            }
        }

        const isNilaiRaportInterval = () => {
            if (rataNilai2 > rataNilai1 && rataNilai3 > rataNilai2 && rataNilai4 > rataNilai3 && rataNilai5 > rataNilai4) {
                return 4
            } else {
                return 0
            }
        }

        return rataRataNiail() + isNilaiRaportInterval()
    }



    const getNilaiPrestasi = (i) => {
        const tingkatan = Number(document.getElementById(`tingkatan${i}`).value)
        const penyelenggara = Number(document.getElementById(`penyelenggara${i}`).value)
        const peringkat = Number(document.getElementById(`peringkat${i}`).value)
        const kepersertaan = Number(document.getElementById(`kepersertaan${i}`).value)
        const kesesuaian = Number(document.getElementById(`kesesuaianProdiSelect${i}`).value)
        return tingkatan + penyelenggara + peringkat + kepersertaan + kesesuaian
    }

    const getNMapelPendukung = (i) => {
        const jmlAlumniDiPTN1 = Number(document.getElementById(`jmlAlumniDiPTN${i}`).value)
        const kesesuaian = Number(document.getElementById(`kesesuaian${i}`).value)
        const nilaiRataKuliah = Number(document.getElementById(`nilaiRataKuliah${i}`).value)


        const rataRataNiail = () => {
            if (nilaiRataKuliah > standarNilaiProdiA || nilaiRataKuliah > standarNilaiProdiB) {
                return 10
            } else {
                return 0
            }
        }

        return jmlAlumniDiPTN1 + kesesuaian + rataRataNiail()
    }

    const nRaport = getNilaiRaport() // nilai raport ada kondisi nilai harus naik ke atas
    const nMapelPendukungA = getNMapelPendukung(1)
    const nMapelPendukungB = getNMapelPendukung(2)
    const nPrestasi1 = getNilaiPrestasi(1)
    const nPrestasi2 = getNilaiPrestasi(2)
    const nPrestasi3 = getNilaiPrestasi(3)

    const sumPredictA = TotalNinailIndexSekolah + nRaport + nMapelPendukungA + nPrestasi1 + nPrestasi2 + nPrestasi3
    const sumPredictB = TotalNinailIndexSekolah + nRaport + nMapelPendukungB + nPrestasi1 + nPrestasi2 + nPrestasi3

    const resA = (sumPredictA / 100) * 100
    const resB = (sumPredictB / 100) * 100

    // Create query string
    const newParams = new URLSearchParams({
        ptn1: params.get("ptn1"),
        prodi1: params.get("prodi1"),
        ptn2: params.get("ptn2"),
        prodi2: params.get("prodi2"),
        predictPtnA: resA,
        predictPtnB: resB,
    });

    // direct result page
    const url = "result-page.html?";
    window.location.href = url + newParams.toString();
})