const selectPTN = document.getElementById("ptn1");
const selectPTN2 = document.getElementById("ptn2");
const selectProdi = document.getElementById("prodi1");
const selectProdi2 = document.getElementById("prodi2");

document.addEventListener("snippet1Ready", (e) => {
  // listProvinsi
  e.detail.dataSnbp.forEach((ptn) => {
    // pilihan 1
    const option = document.createElement("option");
    option.value = ptn.singkatan;
    option.textContent = ptn.ptn;
    selectPTN.appendChild(option);

    // pilihan 2
    const option2 = document.createElement("option");
    option2.value = ptn.singkatan;
    option2.textContent = ptn.ptn;
    selectPTN2.appendChild(option2);
  });

  // Select PTN
  selectPTN.addEventListener("change", function () {
    const selectedPTN = selectPTN.value;
    const prodiList = e.detail.dataSnbp.find(
      (ptn) => ptn.singkatan === selectedPTN
    ).prodi_data;
    selectProdi.innerHTML = "";
    prodiList.forEach((prodi) => {
      const option = document.createElement("option");
      option.value = prodi.prodi;
      option.textContent = prodi.prodi;
      selectProdi.appendChild(option);
    });
  });
  selectPTN2.addEventListener("change", function () {
    const selectedPTN2 = selectPTN2.value;
    const prodiList = e.detail.dataSnbp.find(
      (ptn) => ptn.singkatan === selectedPTN2
    ).prodi_data;
    selectProdi2.innerHTML = "";
    prodiList.forEach((prodi) => {
      const option = document.createElement("option");
      option.value = prodi.prodi;
      option.textContent = prodi.prodi;
      selectProdi2.appendChild(option);
    });
  });
});

// Get form
const form = document.querySelector("#snbp-form-next");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get value form
  const ptn1 = document.getElementById("ptn1").value;
  const prodi1 = document.getElementById("prodi1").value;
  const ptn2 = document.getElementById("ptn2").value;
  const prodi2 = document.getElementById("prodi2").value;

  // Validation
  if (!ptn1 || !prodi1 || !ptn2 || !prodi2) {
    alert("Harap lengkapi semua pilihan!");
    return;
  }

  // Create query string
  const params = new URLSearchParams({
    ptn1,
    prodi1,
    ptn2,
    prodi2,
  });

  // Redirect to page goal
  // "https://haipintar.com/bandingkan-ptn-snbp?" wp url
  const urlPage = "banding-nilai.html";
  window.location.href = urlPage + "?" + params.toString(); //
});
