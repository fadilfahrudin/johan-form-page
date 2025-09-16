// SNBP Data

const listProvinsi = [
  { provinsi: "Aceh", value: "aceh" },
  { provinsi: "Sumatera Utara", value: "sumateraUtara" },
  { provinsi: "Riau", value: "riau" },
  { provinsi: "Kepulauan Riau", value: "kepulauanRiau" },
  { provinsi: "Sumatera Barat", value: "sumateraBarat" },
  { provinsi: "Jambi", value: "jambi" },
  { provinsi: "Bengkulu", value: "bengkulu" },
  { provinsi: "Sumatera Selatan", value: "sumateraSelatan" },
  { provinsi: "Kep. Bangka Belitung", value: "kepBangkaBelitung" },
  { provinsi: "Lampung", value: "lampung" },
  { provinsi: "Banten", value: "banten" },
  { provinsi: "Jakarta Raya", value: "jakartaRaya" },
  { provinsi: "Jawa Barat", value: "jawaBarat" },
  { provinsi: "Jawa Tengah", value: "jawaTengah" },
  { provinsi: "Yogyakarta", value: "yogyakarta" },
  { provinsi: "Jawa Timur", value: "jawaTimur" },
  { provinsi: "Kalimantan Barat", value: "kalimantanBarat" },
  { provinsi: "Kalimantan Tengah", value: "kalimantanTengah" },
  { provinsi: "Kalimantan Selatan", value: "kalimantanSelatan" },
  { provinsi: "Kalimantan Timur", value: "kalimantanTimur" },
  { provinsi: "Kalimantan Utara", value: "kalimantanUtara" },
  { provinsi: "Bali", value: "bali" },
  { provinsi: "Nusa Tenggara Barat", value: "nusaTenggaraBarat" },
  { provinsi: "Nusa Tenggara Timur", value: "nusaTenggaraTimur" },
  { provinsi: "Sulawesi Selatan", value: "sulawesiSelatan" },
  { provinsi: "Sulawesi Utara", value: "sulawesiUtara" },
  { provinsi: "Sulawesi Tengah", value: "sulawesiTengah" },
  { provinsi: "Sulawesi Barat", value: "sulawesiBarat" },
  { provinsi: "Sulawesi Tenggara", value: "sulawesiTenggara" },
  { provinsi: "Gorontalo", value: "gorontalo" },
  { provinsi: "Maluku", value: "maluku" },
  { provinsi: "Maluku Utara", value: "malukuUtara" },
  { provinsi: "Papua", value: "papua" },
  { provinsi: "Papua Selatan", value: "papuaSelatan" },
  { provinsi: "Papua Barat", value: "papuaBarat" },
];

const SNBP_DATA = [
  {
    ptn: "Universitas Syiah Kuala",
    singkatan: "USK/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-usk/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 84.39,
      },
      {
        prodi: "BUDIDAYA PETERNAKAN",
        jenjang: "D3",
        rata_rata_raport: 83.15,
      },
      {
        prodi: "KESEHATAN HEWAN",
        jenjang: "D3",
        rata_rata_raport: 83.79,
      },
      {
        prodi: "KEUANGAN DAN PERBANKAN",
        jenjang: "D3",
        rata_rata_raport: 85.49,
      },
      {
        prodi: "MANAJEMEN AGRIBISNIS",
        jenjang: "D3",
        rata_rata_raport: 85.02,
      },
      {
        prodi: "MANAJEMEN INFORMATIKA",
        jenjang: "D3",
        rata_rata_raport: 85.42,
      },
      {
        prodi: "MANAJEMEN PERUSAHAAN",
        jenjang: "D3",
        rata_rata_raport: 85.37,
      },
      {
        prodi: "SEKRETARI",
        jenjang: "D3",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "TEKNIK LISTRIK",
        jenjang: "D3",
        rata_rata_raport: 83.18,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "D3",
        rata_rata_raport: 84.7,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "D3",
        rata_rata_raport: 84.25,
      },
      {
        prodi: "AKUNTANSI PERPAJAKAN",
        jenjang: "D4",
        rata_rata_raport: 86.25,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 89.56,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.47,
      },
      {
        prodi: "AGROTEKNOLOGI (PSDKU GAYO LUES)",
        jenjang: "S1",
        rata_rata_raport: 85.17,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 91.15,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 91.32,
      },
      {
        prodi: "BIMBINGAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 91.21,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.88,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 86.14,
      },
      {
        prodi: "EKONOMI ISLAM",
        jenjang: "S1",
        rata_rata_raport: 89.41,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 89.4,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 92.95,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.57,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 91.52,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 87.65,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 92.87,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 90.93,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 89.26,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 88.4,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 86.0,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 91.77,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 87.52,
      },
      {
        prodi: "KEHUTANAN (PSDKU GAYO LUES)",
        jenjang: "S1",
        rata_rata_raport: 83.96,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.85,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 92.35,
      },
      {
        prodi: "MANAJEMEN (PSDKU GAYO LUES)",
        jenjang: "S1",
        rata_rata_raport: 85.45,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.89,
      },
      {
        prodi: "PEMANFAATAN SUMBERDAYA PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 85.83,
      },
      {
        prodi: "PEND. JASMANI KESEHATAN DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 88.92,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 90.4,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 89.76,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.0,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI (PDSKU GAYO LUES)",
        jenjang: "S1",
        rata_rata_raport: 83.18,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 93.0,
      },
      {
        prodi: "PENDIDIKAN DOKTER GIGI",
        jenjang: "S1",
        rata_rata_raport: 92.49,
      },
      {
        prodi: "PENDIDIKAN DOKTER HEWAN",
        jenjang: "S1",
        rata_rata_raport: 89.64,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 88.27,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 87.17,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 88.76,
      },
      {
        prodi: "PENDIDIKAN GURU PAUD",
        jenjang: "S1",
        rata_rata_raport: 89.64,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 91.14,
      },
      {
        prodi: "PENDIDIKAN KESEJAHTERAAN KELUARGA",
        jenjang: "S1",
        rata_rata_raport: 90.56,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 87.47,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 89.53,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 89.75,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 89.47,
      },
      {
        prodi: "PENDIDIKAN SENI DRAMA TARI DAN MUSIK",
        jenjang: "S1",
        rata_rata_raport: 88.16,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 89.18,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 87.49,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 85.67,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 91.12,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.91,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 91.23,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 88.89,
      },
      {
        prodi: "TEKNIK GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.87,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.01,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 90.09,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 88.8,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 91.18,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 90.7,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 90.93,
      },
      {
        prodi: "TEKNIK PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 88.47,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 91.42,
      },
      {
        prodi: "TEKNOLOGI HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 87.74,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.82,
      },
    ],
  },
  {
    ptn: "Universitas Malikussaleh",
    singkatan: "UNIMAL/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unimal/",
    prodi_data: [
      {
        prodi: "KEPERAWATAN",
        jenjang: "D3",
        rata_rata_raport: 88.0,
      },
      {
        prodi: "ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 87.17,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 88.17,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 87.1,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.73,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 83.37,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 88.79,
      },
      {
        prodi: "ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.56,
      },
      {
        prodi: "EKONOMI SYARIAH",
        jenjang: "S1",
        rata_rata_raport: 85.49,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.06,
      },
      {
        prodi: "ILMU EKONOMI & STUDI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.89,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 84.01,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 88.62,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 84.19,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 90.56,
      },
      {
        prodi: "KEWIRUSAHAAN",
        jenjang: "S1",
        rata_rata_raport: 84.71,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.57,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.56,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.17,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.17,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.96,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 83.35,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.11,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 88.54,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.78,
      },
      {
        prodi: "TEKNIK ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 84.81,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.2,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 88.14,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 89.75,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.17,
      },
      {
        prodi: "TEKNIK LOGISTIK",
        jenjang: "S1",
        rata_rata_raport: 83.72,
      },
      {
        prodi: "TEKNIK MATERIAL",
        jenjang: "S1",
        rata_rata_raport: 83.26,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 87.57,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 87.36,
      },
    ],
  },
  {
    ptn: "Universitas Teuku Umar",
    singkatan: "UTU/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-utu/",
    prodi_data: [
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 86.55,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.7,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 83.53,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 88.7,
      },
      {
        prodi: "BAHASA DAN KEBUDAYAAN INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 83.29,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 85.89,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.01,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 89.89,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 89.46,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 88.48,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.42,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 88.54,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 89.65,
      },
      {
        prodi: "KESELAMATAN DAN KESEHATAN KERJA",
        jenjang: "S1",
        rata_rata_raport: 86.38,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.59,
      },
      {
        prodi: "PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 83.58,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.48,
      },
      {
        prodi: "SUMBER DAYA AKUATIK",
        jenjang: "S1",
        rata_rata_raport: 83.26,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 88.01,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 87.28,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 87.83,
      },
      {
        prodi: "TEKNOLOGI HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.31,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 89.28,
      },
    ],
  },
  {
    ptn: "Universitas Samudra",
    singkatan: "UNSAM/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unsam/",
    prodi_data: [
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 88.21,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.92,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 83.43,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 87.42,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.33,
      },
      {
        prodi: "EKONOMI MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.26,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.78,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.03,
      },
      {
        prodi: "GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.04,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.03,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 89.3,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.98,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.34,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.98,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.94,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.04,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 86.01,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 89.56,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN ALAM",
        jenjang: "S1",
        rata_rata_raport: 83.65,
      },
      {
        prodi: "PENDIDIKAN JASMANI",
        jenjang: "S1",
        rata_rata_raport: 85.75,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.46,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.46,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 83.71,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 86.99,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL SENI KULINER",
        jenjang: "S1",
        rata_rata_raport: 83.87,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 86.17,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.13,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 85.68,
      },
    ],
  },
  {
    ptn: "Universitas Sumatera Utara",
    singkatan: "USU/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-usu/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 86.58,
      },
      {
        prodi: "ANALIS FARMASI DAN MAKANAN",
        jenjang: "D3",
        rata_rata_raport: 85.66,
      },
      {
        prodi: "BAHASA INGGRIS",
        jenjang: "D3",
        rata_rata_raport: 84.91,
      },
      {
        prodi: "BAHASA JEPANG",
        jenjang: "D3",
        rata_rata_raport: 84.4,
      },
      {
        prodi: "METROLOGI DAN INSTRUMENTASI",
        jenjang: "D3",
        rata_rata_raport: 84.32,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "D3",
        rata_rata_raport: 87.65,
      },
      {
        prodi: "ADMINISTRASI PERKANTORAN DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 83.35,
      },
      {
        prodi: "AKUNTANSI SEKTOR PUBLIK",
        jenjang: "D4",
        rata_rata_raport: 83.37,
      },
      {
        prodi: "KIMIA TERAPAN",
        jenjang: "D4",
        rata_rata_raport: 83.87,
      },
      {
        prodi: "MANAJEMEN BISNIS PARIWISATA",
        jenjang: "D4",
        rata_rata_raport: 83.89,
      },
      {
        prodi: "PERBANKAN DAN KEUANGAN",
        jenjang: "D4",
        rata_rata_raport: 83.08,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "D4",
        rata_rata_raport: 83.83,
      },
      {
        prodi: "TEKNOLOGI REKAYASA INSTRUMENTASI",
        jenjang: "D4",
        rata_rata_raport: 83.96,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 89.55,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.42,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 90.34,
      },
      {
        prodi: "ANTROPOLOGI SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 85.94,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 87.16,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.16,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 88.89,
      },
      {
        prodi: "ETNO MUSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.44,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 90.79,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.96,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 87.94,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 88.97,
      },
      {
        prodi: "ILMU ADMINISTRASI NIAGA/BISNIS",
        jenjang: "S1",
        rata_rata_raport: 89.37,
      },
      {
        prodi: "ILMU DAN TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 88.88,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 90.9,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 89.8,
      },
      {
        prodi: "ILMU KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 90.54,
      },
      {
        prodi: "ILMU KESEJAHTERAAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 86.6,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 90.65,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 89.76,
      },
      {
        prodi: "ILMU PERPUSTAKAAN",
        jenjang: "S1",
        rata_rata_raport: 86.51,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 87.07,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.01,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 89.26,
      },
      {
        prodi: "KETEKNIKAN PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 87.09,
      },
      {
        prodi: "KEWIRAUSAHAAN",
        jenjang: "S1",
        rata_rata_raport: 86.46,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.97,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 90.98,
      },
      {
        prodi: "MANAJEMEN SUMBER DAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 86.25,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.35,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 93.1,
      },
      {
        prodi: "PENDIDIKAN DOKTER GIGI",
        jenjang: "S1",
        rata_rata_raport: 89.34,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 86.85,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 90.53,
      },
      {
        prodi: "SASTRA ARAB",
        jenjang: "S1",
        rata_rata_raport: 84.98,
      },
      {
        prodi: "SASTRA CINA",
        jenjang: "S1",
        rata_rata_raport: 84.69,
      },
      {
        prodi: "SASTRA DAERAH UNTUK SASTRA BATAK",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "SASTRA DAERAH UNTUK SASTRA MELAYU",
        jenjang: "S1",
        rata_rata_raport: 84.05,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.75,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.91,
      },
      {
        prodi: "SASTRA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 85.78,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.48,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 88.52,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 89.55,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 88.46,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 86.23,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 88.92,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.22,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 89.76,
      },
    ],
  },
  {
    ptn: "Universitas Negeri Medan",
    singkatan: "UNIMED/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unimed/",
    prodi_data: [
      {
        prodi: "TEKNIK MESIN",
        jenjang: "D3",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "MANAJEMEN KONSTRUKSI",
        jenjang: "D4",
        rata_rata_raport: 84.74,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 88.13,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 85.79,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.79,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 87.0,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.18,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 88.21,
      },
      {
        prodi: "HUKUM BISNIS",
        jenjang: "S1",
        rata_rata_raport: 83.33,
      },
      {
        prodi: "ILMU EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 87.0,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 84.76,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 88.54,
      },
      {
        prodi: "KEWIRAUSAHAAN",
        jenjang: "S1",
        rata_rata_raport: 86.16,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.74,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 88.73,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.52,
      },
      {
        prodi: "PEND. GURU PENDIDIKAN ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 86.83,
      },
      {
        prodi: "PEND. JASMANI, KESEHATAN & REKREASI",
        jenjang: "S1",
        rata_rata_raport: 87.35,
      },
      {
        prodi: "PEND. PANCASILA & KEWARGANEGARAAN (PPKN)",
        jenjang: "S1",
        rata_rata_raport: 87.78,
      },
      {
        prodi: "PENDIDIKAN ADMINISTRASI PERKANTORAN",
        jenjang: "S1",
        rata_rata_raport: 87.79,
      },
      {
        prodi: "PENDIDIKAN AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 85.75,
      },
      {
        prodi: "PENDIDIKAN ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.81,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.21,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.09,
      },
      {
        prodi: "PENDIDIKAN BAHASA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 84.04,
      },
      {
        prodi: "PENDIDIKAN BAHASA PERANCIS",
        jenjang: "S1",
        rata_rata_raport: 83.55,
      },
      {
        prodi: "PENDIDIKAN BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 88.51,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.72,
      },
      {
        prodi: "PENDIDIKAN BISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.69,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 85.93,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 86.88,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR (PGSD)",
        jenjang: "S1",
        rata_rata_raport: 88.87,
      },
      {
        prodi: "PENDIDIKAN IPA",
        jenjang: "S1",
        rata_rata_raport: 85.95,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA (PKO)",
        jenjang: "S1",
        rata_rata_raport: 86.13,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.99,
      },
      {
        prodi: "PENDIDIKAN LUAR SEKOLAH (PLS)",
        jenjang: "S1",
        rata_rata_raport: 84.48,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 87.73,
      },
      {
        prodi: "PENDIDIKAN MUSIK",
        jenjang: "S1",
        rata_rata_raport: 84.93,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 87.2,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 84.61,
      },
      {
        prodi: "PENDIDIKAN TARI",
        jenjang: "S1",
        rata_rata_raport: 84.88,
      },
      {
        prodi: "PENDIDIKAN TATA BOGA",
        jenjang: "S1",
        rata_rata_raport: 88.05,
      },
      {
        prodi: "PENDIDIKAN TATA BUSANA",
        jenjang: "S1",
        rata_rata_raport: 87.86,
      },
      {
        prodi: "PENDIDIKAN TATA RIAS",
        jenjang: "S1",
        rata_rata_raport: 87.58,
      },
      {
        prodi: "PENDIDIKAN TEKNIK BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.32,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 83.56,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.5,
      },
      {
        prodi: "PENDIDIKAN TEKNIK OTOMOTIF",
        jenjang: "S1",
        rata_rata_raport: 84.77,
      },
      {
        prodi: "PENDIDIKAN TEKNOLOGI INFORMATIKA DAN KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 88.06,
      },
      {
        prodi: "SAINS INFORMASI GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 83.27,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.31,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.14,
      },
      {
        prodi: "SENI PERTUNJUKAN",
        jenjang: "S1",
        rata_rata_raport: 83.54,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 85.92,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.54,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 87.72,
      },
    ],
  },
  {
    ptn: "Universitas Riau",
    singkatan: "UNRI/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unri/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 84.78,
      },
      {
        prodi: "MANAJEMEN INFORMATIKA",
        jenjang: "D3",
        rata_rata_raport: 85.03,
      },
      {
        prodi: "PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 86.52,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "D3",
        rata_rata_raport: 83.28,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "D3",
        rata_rata_raport: 83.86,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "D3",
        rata_rata_raport: 83.47,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "D3",
        rata_rata_raport: 83.41,
      },
      {
        prodi: "TEKNOLOGI PULP DAN KERTAS",
        jenjang: "D3",
        rata_rata_raport: 85.34,
      },
      {
        prodi: "USAHA PERJALANAN WISATA",
        jenjang: "D4",
        rata_rata_raport: 87.93,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 90.42,
      },
      {
        prodi: "AGROBISNIS PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.46,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 90.9,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 91.67,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 88.31,
      },
      {
        prodi: "BIMBINGAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 91.04,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.23,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 84.33,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 89.07,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.3,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 90.85,
      },
      {
        prodi: "ILMU ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 91.15,
      },
      {
        prodi: "ILMU ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 91.12,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 91.31,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 85.4,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 91.84,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 91.49,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 90.89,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 83.17,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 93.0,
      },
      {
        prodi: "KEDOKTERAN HEWAN",
        jenjang: "S1",
        rata_rata_raport: 87.28,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 89.04,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 87.43,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 91.97,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 85.24,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.31,
      },
      {
        prodi: "PEMANFAATAN SUMBERDAYA PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.82,
      },
      {
        prodi: "PENDIDIKAN ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 87.32,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 90.91,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 90.65,
      },
      {
        prodi: "PENDIDIKAN BAHASA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 84.4,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.92,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 88.86,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 89.0,
      },
      {
        prodi: "PENDIDIKAN JASMANI KESEHATAN DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 87.51,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 85.68,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.44,
      },
      {
        prodi: "PENDIDIKAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 84.12,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 89.09,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 87.0,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 88.47,
      },
      {
        prodi: "PENYULUHAN PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 83.23,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 83.2,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 91.3,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.51,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 88.25,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 90.12,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 91.69,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 89.96,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 89.86,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 90.68,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 91.11,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 84.86,
      },
      {
        prodi: "TEKNOLOGI HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 88.09,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 88.33,
      },
    ],
  },
  {
    ptn: "Universitas Maritim Raja Ali Haji",
    singkatan: "UMRAH/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-umrah/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.7,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 84.21,
      },
      {
        prodi: "BUDI DAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.31,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 86.2,
      },
      {
        prodi: "ILMU HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 85.21,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.41,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 85.49,
      },
      {
        prodi: "KAJIAN FILM, TELEVISI, DAN MEDIA",
        jenjang: "S1",
        rata_rata_raport: 83.99,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 86.17,
      },
      {
        prodi: "KEWIRAUSAHAAN",
        jenjang: "S1",
        rata_rata_raport: 84.01,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.14,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.74,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.5,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.37,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 84.81,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.48,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.87,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.73,
      },
      {
        prodi: "SOSIAL EKONOMI PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.1,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.85,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.84,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 84.71,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "TEKNIK PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 84.82,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.12,
      },
    ],
  },
  {
    ptn: "Universitas Andalas",
    singkatan: "UNAND/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unand/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI PERKANTORAN",
        jenjang: "D3",
        rata_rata_raport: 84.01,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 83.63,
      },
      {
        prodi: "MANAJEMEN PEMASARAN",
        jenjang: "D3",
        rata_rata_raport: 83.21,
      },
      {
        prodi: "PERBANKAN DAN KEUANGAN",
        jenjang: "D3",
        rata_rata_raport: 83.92,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 85.63,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.54,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.15,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.96,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "ANTROPOLOGI SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 84.85,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 84.09,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.94,
      },
      {
        prodi: "EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 85.24,
      },
      {
        prodi: "EKONOMI ISLAM",
        jenjang: "S1",
        rata_rata_raport: 83.23,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN (KAMPUS PAYAKUMBUH)",
        jenjang: "S1",
        rata_rata_raport: 83.41,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 90.0,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.34,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 85.86,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 85.24,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.11,
      },
      {
        prodi: "ILMU BIOMEDIS",
        jenjang: "S1",
        rata_rata_raport: 85.21,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 85.85,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 84.73,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 84.44,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 91.0,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "S1",
        rata_rata_raport: 85.66,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 93.11,
      },
      {
        prodi: "KEDOKTERAN GIGI",
        jenjang: "S1",
        rata_rata_raport: 91.0,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 86.36,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "KEWIRAUSAHAAN",
        jenjang: "S1",
        rata_rata_raport: 83.32,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.93,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.0,
      },
      {
        prodi: "MANAJEMEN (KAMPUS 2 PAYAKUMBUH)",
        jenjang: "S1",
        rata_rata_raport: 84.27,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.13,
      },
      {
        prodi: "PENYULUHAN PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 83.89,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 85.02,
      },
      {
        prodi: "PETERNAKAN ( KAMPUS II PAYAKUMBUH)",
        jenjang: "S1",
        rata_rata_raport: 83.13,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 84.02,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.0,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 83.8,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 84.95,
      },
      {
        prodi: "SASTRA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 84.16,
      },
      {
        prodi: "SASTRA MINANGKABAU",
        jenjang: "S1",
        rata_rata_raport: 83.0,
      },
      {
        prodi: "SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 83.67,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.34,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.89,
      },
      {
        prodi: "STATISTIKA DAN SAINS DATA",
        jenjang: "S1",
        rata_rata_raport: 86.33,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 86.0,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 85.53,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 85.29,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.03,
      },
      {
        prodi: "TEKNIK PERTANIAN DAN BIOSISTEM",
        jenjang: "S1",
        rata_rata_raport: 84.64,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 85.74,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.61,
      },
      {
        prodi: "TEKNOLOGI PANGAN DAN HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.83,
      },
    ],
  },
  {
    ptn: "Universitas Negeri Padang",
    singkatan: "UNP/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unp/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 85.26,
      },
      {
        prodi: "INFORMASI, PERPUSTAKAAN & KEARSIPAN",
        jenjang: "D3",
        rata_rata_raport: 85.58,
      },
      {
        prodi: "KEPERAWATAN PSDKU PARIAMAN",
        jenjang: "D3",
        rata_rata_raport: 85.56,
      },
      {
        prodi: "MANAJEMEN PAJAK",
        jenjang: "D3",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "MANAJEMEN PERDAGANGAN",
        jenjang: "D3",
        rata_rata_raport: 85.55,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "D3",
        rata_rata_raport: 84.06,
      },
      {
        prodi: "TATA BOGA",
        jenjang: "D3",
        rata_rata_raport: 86.47,
      },
      {
        prodi: "TATA BOGA PSDKU PAYAKUMBUH",
        jenjang: "D3",
        rata_rata_raport: 83.72,
      },
      {
        prodi: "TATA BUSANA",
        jenjang: "D3",
        rata_rata_raport: 85.97,
      },
      {
        prodi: "TEKNIK LISTRIK",
        jenjang: "D3",
        rata_rata_raport: 84.34,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "D3",
        rata_rata_raport: 84.91,
      },
      {
        prodi: "TEKNIK OTOMOTIF",
        jenjang: "D3",
        rata_rata_raport: 85.3,
      },
      {
        prodi: "TEKNIK OTOMOTIF (KAMPUS KABUPATEN SAWAHLUNTO)",
        jenjang: "D3",
        rata_rata_raport: 83.0,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "D3",
        rata_rata_raport: 86.0,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN (KAMPUS KABUPATEN SAWAHLUNTO)",
        jenjang: "D3",
        rata_rata_raport: 83.94,
      },
      {
        prodi: "TEKNIK SIPIL BANGUNAN GEDUNG",
        jenjang: "D3",
        rata_rata_raport: 83.86,
      },
      {
        prodi: "ANIMASI",
        jenjang: "D4",
        rata_rata_raport: 84.81,
      },
      {
        prodi: "MANAJEMEN PERHOTELAN (NK)",
        jenjang: "D4",
        rata_rata_raport: 86.8,
      },
      {
        prodi: "MANAJEMEN PERHOTELAN PSDKU PAYAKUMBUH",
        jenjang: "D4",
        rata_rata_raport: 83.62,
      },
      {
        prodi: "PENDIDIKAN TATA RIAS DAN KECANTIKAN",
        jenjang: "D4",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "PENGINDERAAN JAUH DAN SISTEM INFORMASI GEOGRAFIS",
        jenjang: "D4",
        rata_rata_raport: 84.48,
      },
      {
        prodi: "TEKNIK ELEKTRO INDUSTRI (NK)",
        jenjang: "D4",
        rata_rata_raport: 85.23,
      },
      {
        prodi: "TEKNOLOGI KOSMETIK",
        jenjang: "D4",
        rata_rata_raport: 83.68,
      },
      {
        prodi: "TEKNOLOGI REKAYASA SISTEM ELEKTRONIKA",
        jenjang: "D4",
        rata_rata_raport: 84.02,
      },
      {
        prodi: "ADMINISTRASI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 87.23,
      },
      {
        prodi: "AGRIBISNIS (KAMPUS KABUPATEN SIJUNJUNG)",
        jenjang: "S1",
        rata_rata_raport: 84.85,
      },
      {
        prodi: "AGROTEKNOLOGI (KAMPUS KABUPATEN SIJUNJUNG)",
        jenjang: "S1",
        rata_rata_raport: 84.61,
      },
      {
        prodi: "AKUNTANSI (NK)",
        jenjang: "S1",
        rata_rata_raport: 87.64,
      },
      {
        prodi: "ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.61,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 87.52,
      },
      {
        prodi: "BIOLOGI (NK)",
        jenjang: "S1",
        rata_rata_raport: 84.86,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 86.63,
      },
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "S1",
        rata_rata_raport: 85.92,
      },
      {
        prodi: "EKONOMI DAN KEUANGAN ISLAM",
        jenjang: "S1",
        rata_rata_raport: 83.61,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN (NK)",
        jenjang: "S1",
        rata_rata_raport: 86.81,
      },
      {
        prodi: "FISIKA (NK)",
        jenjang: "S1",
        rata_rata_raport: 84.24,
      },
      {
        prodi: "GEOGRAFI (NK)",
        jenjang: "S1",
        rata_rata_raport: 85.63,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA (NK)",
        jenjang: "S1",
        rata_rata_raport: 87.81,
      },
      {
        prodi: "ILMU AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 83.43,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 87.48,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN (NK)",
        jenjang: "S1",
        rata_rata_raport: 84.42,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 87.71,
      },
      {
        prodi: "ILMU LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 83.33,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 90.0,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 92.3,
      },
      {
        prodi: "KEDOKTERAN HEWAN",
        jenjang: "S1",
        rata_rata_raport: 85.83,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 87.37,
      },
      {
        prodi: "KIMIA (NK)",
        jenjang: "S1",
        rata_rata_raport: 85.47,
      },
      {
        prodi: "MANAJEMEN (NK)",
        jenjang: "S1",
        rata_rata_raport: 89.0,
      },
      {
        prodi: "MANAJEMEN BISNIS SYARIAH",
        jenjang: "S1",
        rata_rata_raport: 83.45,
      },
      {
        prodi: "MATEMATIKA (NK)",
        jenjang: "S1",
        rata_rata_raport: 84.96,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 86.99,
      },
      {
        prodi: "PEND. GURU PENDIDIKAN ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 86.46,
      },
      {
        prodi: "PEND. PANCASILA & KEWARGANEGARAAN (PPKN)",
        jenjang: "S1",
        rata_rata_raport: 87.07,
      },
      {
        prodi: "PENDD. BHS INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.96,
      },
      {
        prodi: "PENDD. KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 86.13,
      },
      {
        prodi: "PENDD. KESEJAHTERAAN KELUARGA",
        jenjang: "S1",
        rata_rata_raport: 86.32,
      },
      {
        prodi: "PENDIDIKAN AGAMA ISLAM",
        jenjang: "S1",
        rata_rata_raport: 87.29,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 87.58,
      },
      {
        prodi: "PENDIDIKAN BAHASA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 85.06,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.31,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 86.58,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.43,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 86.19,
      },
      {
        prodi: "PENDIDIKAN GURU PENDIDIKAN ANAK USIA DINI – PSDKU SAWAHLUNTO",
        jenjang: "S1",
        rata_rata_raport: 83.74,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR – PSDKU SAWAHLUNTO",
        jenjang: "S1",
        rata_rata_raport: 85.87,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN ALAM",
        jenjang: "S1",
        rata_rata_raport: 86.08,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN SOSIAL (PIPS)",
        jenjang: "S1",
        rata_rata_raport: 85.59,
      },
      {
        prodi: "PENDIDIKAN JASMANI, KESEHATAN, DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 86.59,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.62,
      },
      {
        prodi: "PENDIDIKAN LUAR BIASA",
        jenjang: "S1",
        rata_rata_raport: 86.08,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.75,
      },
      {
        prodi: "PENDIDIKAN MUSIK",
        jenjang: "S1",
        rata_rata_raport: 83.93,
      },
      {
        prodi: "PENDIDIKAN NON FORMAL",
        jenjang: "S1",
        rata_rata_raport: 84.56,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 86.38,
      },
      {
        prodi: "PENDIDIKAN SENDRATASIK",
        jenjang: "S1",
        rata_rata_raport: 84.96,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 84.73,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.1,
      },
      {
        prodi: "PENDIDIKAN TARI",
        jenjang: "S1",
        rata_rata_raport: 84.82,
      },
      {
        prodi: "PENDIDIKAN TEKNIK BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.62,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.61,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ELEKTRONIKA",
        jenjang: "S1",
        rata_rata_raport: 84.29,
      },
      {
        prodi: "PENDIDIKAN TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.63,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.84,
      },
      {
        prodi: "PENDIDIKAN TEKNIK OTOMOTIF",
        jenjang: "S1",
        rata_rata_raport: 85.62,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL DESAIN FASHION",
        jenjang: "S1",
        rata_rata_raport: 83.32,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL SENI KULINER",
        jenjang: "S1",
        rata_rata_raport: 83.3,
      },
      {
        prodi: "PERPUSTAKAAN DAN ILMU INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "PETERNAKAN (KAMPUS KABUPATEN SIJUNJUNG)",
        jenjang: "S1",
        rata_rata_raport: 83.95,
      },
      {
        prodi: "PGSD (PENDIDIKAN GURU SEKOLAH DASAR)",
        jenjang: "S1",
        rata_rata_raport: 87.6,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 90.0,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.18,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 85.81,
      },
      {
        prodi: "STATISTIKA (NK)",
        jenjang: "S1",
        rata_rata_raport: 86.27,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.45,
      },
      {
        prodi: "TEKNIK MESIN (NK)",
        jenjang: "S1",
        rata_rata_raport: 86.18,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN (NK)",
        jenjang: "S1",
        rata_rata_raport: 87.62,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 87.18,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 85.82,
      },
    ],
  },
  {
    ptn: "Universitas Jambi",
    singkatan: "UNJA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unja/",
    prodi_data: [
      {
        prodi: "AGROBISNIS",
        jenjang: "D3",
        rata_rata_raport: 83.08,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 83.15,
      },
      {
        prodi: "ANALIS KIMIA",
        jenjang: "D3",
        rata_rata_raport: 83.11,
      },
      {
        prodi: "KESEHATAN HEWAN",
        jenjang: "D3",
        rata_rata_raport: 83.18,
      },
      {
        prodi: "KIMIA INDUSTRI",
        jenjang: "D3",
        rata_rata_raport: 83.13,
      },
      {
        prodi: "MANAJEMEN PEMASARAN",
        jenjang: "D3",
        rata_rata_raport: 83.39,
      },
      {
        prodi: "PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 83.65,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "D3",
        rata_rata_raport: 83.08,
      },
      {
        prodi: "KEUANGAN DAERAH",
        jenjang: "D4",
        rata_rata_raport: 83.2,
      },
      {
        prodi: "MANAJEMEN PEMERINTAHAN",
        jenjang: "D4",
        rata_rata_raport: 83.34,
      },
      {
        prodi: "ADMINISTRASI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 84.95,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.97,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.0,
      },
      {
        prodi: "ARKEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.43,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 86.15,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.63,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 85.37,
      },
      {
        prodi: "EKONOMI ISLAM",
        jenjang: "S1",
        rata_rata_raport: 84.93,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 86.66,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.17,
      },
      {
        prodi: "ILMU EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 85.87,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.78,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 86.39,
      },
      {
        prodi: "ILMU KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 86.64,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 85.84,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 84.49,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 83.98,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 90.0,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 92.0,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 85.03,
      },
      {
        prodi: "KEWIRAUSAHAAN",
        jenjang: "S1",
        rata_rata_raport: 84.68,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.45,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.85,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 83.84,
      },
      {
        prodi: "PEMANFAATAN SUMBERDAYA PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.25,
      },
      {
        prodi: "PEND. BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 85.94,
      },
      {
        prodi: "PEND. BAHASA, SASTRA INDONESIA & DAERAH",
        jenjang: "S1",
        rata_rata_raport: 86.32,
      },
      {
        prodi: "PEND. BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.16,
      },
      {
        prodi: "PEND. EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 85.06,
      },
      {
        prodi: "PEND. FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.52,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 86.84,
      },
      {
        prodi: "PEND. KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.73,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.46,
      },
      {
        prodi: "PEND. OLAHRAGA & KESEHATAN",
        jenjang: "S1",
        rata_rata_raport: 85.48,
      },
      {
        prodi: "PENDIDIKAN BAHASA ARAB",
        jenjang: "S1",
        rata_rata_raport: 83.48,
      },
      {
        prodi: "PENDIDIKAN GURU PAUD",
        jenjang: "S1",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 83.99,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.06,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 84.85,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 91.0,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 84.05,
      },
      {
        prodi: "SENI DRAMA TARI DAN MUSIK",
        jenjang: "S1",
        rata_rata_raport: 83.36,
      },
      {
        prodi: "SENI KARAWITAN",
        jenjang: "S1",
        rata_rata_raport: 83.04,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 90.0,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 88.0,
      },
      {
        prodi: "TEKNIK GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.31,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.71,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.15,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 84.69,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 86.54,
      },
      {
        prodi: "TEKNIK PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.94,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.0,
      },
      {
        prodi: "TEKNOLOGI HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.14,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 83.47,
      },
    ],
  },
  {
    ptn: "Universitas Bengkulu",
    singkatan: "UNIB/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unib/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 83.47,
      },
      {
        prodi: "FARMASI",
        jenjang: "D3",
        rata_rata_raport: 85.69,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "D3",
        rata_rata_raport: 86.17,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "D3",
        rata_rata_raport: 86.49,
      },
      {
        prodi: "LABORATORIUM SAINS",
        jenjang: "D3",
        rata_rata_raport: 83.85,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 86.27,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.97,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.44,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.85,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 84.47,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 86.35,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.07,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 85.5,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 86.76,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.08,
      },
      {
        prodi: "GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.28,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.86,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 86.51,
      },
      {
        prodi: "ILMU LINGKUNGAAN",
        jenjang: "S1",
        rata_rata_raport: 83.08,
      },
      {
        prodi: "ILMU PERPUSTAKAAN",
        jenjang: "S1",
        rata_rata_raport: 85.27,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 83.85,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 91.0,
      },
      {
        prodi: "JURNALISTIK",
        jenjang: "S1",
        rata_rata_raport: 84.68,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 92.0,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 85.16,
      },
      {
        prodi: "KESEJAHTERAAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 85.35,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.75,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.97,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.25,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.38,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.15,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.49,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.98,
      },
      {
        prodi: "PENDIDIKAN GURU PENDIDIKAN ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 85.68,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 86.99,
      },
      {
        prodi: "PENDIDIKAN IPA",
        jenjang: "S1",
        rata_rata_raport: 85.41,
      },
      {
        prodi: "PENDIDIKAN JASMANI",
        jenjang: "S1",
        rata_rata_raport: 85.55,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.36,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "PENDIDIKAN NONFORMAL",
        jenjang: "S1",
        rata_rata_raport: 83.66,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 84.79,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 83.56,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 88.0,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.86,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 88.0,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 87.0,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.08,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 86.01,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 85.16,
      },
    ],
  },
  {
    ptn: "Universitas Sriwijaya",
    singkatan: "UNSRI/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unsri/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 83.13,
      },
      {
        prodi: "KESEKRETARIATAN",
        jenjang: "D3",
        rata_rata_raport: 83.15,
      },
      {
        prodi: "KOMPUTERISASI AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 83.02,
      },
      {
        prodi: "MANAJEMEN INFORMATIKA",
        jenjang: "D3",
        rata_rata_raport: 83.73,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "D3",
        rata_rata_raport: 84.58,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 87.39,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 86.47,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.67,
      },
      {
        prodi: "AGRONOMI",
        jenjang: "S1",
        rata_rata_raport: 84.45,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 88.11,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 88.04,
      },
      {
        prodi: "BIMB & KONSELING",
        jenjang: "S1",
        rata_rata_raport: 86.65,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.39,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.09,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 85.86,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 88.27,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.11,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 87.29,
      },
      {
        prodi: "ILMU HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 86.38,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 88.32,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.8,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 87.67,
      },
      {
        prodi: "ILMU KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 87.66,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 87.51,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 84.08,
      },
      {
        prodi: "KESEHATAN LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 85.71,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.66,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 88.79,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 83.98,
      },
      {
        prodi: "PAUD",
        jenjang: "S1",
        rata_rata_raport: 85.0,
      },
      {
        prodi: "PEND BHS INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.25,
      },
      {
        prodi: "PEND BHS, SATRA IND & DAERAH",
        jenjang: "S1",
        rata_rata_raport: 86.45,
      },
      {
        prodi: "PEND BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.59,
      },
      {
        prodi: "PEND EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "PEND FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.23,
      },
      {
        prodi: "PEND SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.14,
      },
      {
        prodi: "PEND TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 83.44,
      },
      {
        prodi: "PEND. KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.31,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 93.15,
      },
      {
        prodi: "PENDIDIKAN DOKTER GIGI",
        jenjang: "S1",
        rata_rata_raport: 92.52,
      },
      {
        prodi: "PENDIDIKAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 83.57,
      },
      {
        prodi: "PENJASKES",
        jenjang: "S1",
        rata_rata_raport: 84.63,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 83.85,
      },
      {
        prodi: "PGSD",
        jenjang: "S1",
        rata_rata_raport: 88.72,
      },
      {
        prodi: "PPKN",
        jenjang: "S1",
        rata_rata_raport: 86.34,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 83.48,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.26,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 87.3,
      },
      {
        prodi: "SISTEM KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 87.05,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.49,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.2,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.46,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 91.72,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 88.55,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 86.09,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 90.92,
      },
      {
        prodi: "TEKNIK PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 85.18,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 90.25,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.42,
      },
      {
        prodi: "TEKNOLOGI HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.59,
      },
    ],
  },
  {
    ptn: "Universitas Bangka Belitung",
    singkatan: "UBB/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-ubb/",
    prodi_data: [
      {
        prodi: "KEPERAWATAN",
        jenjang: "D3",
        rata_rata_raport: 86.65,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 86.43,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.68,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 83.95,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.8,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 84.09,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.76,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 86.65,
      },
      {
        prodi: "EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 86.06,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.02,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.82,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 84.42,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 85.32,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 90.56,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.37,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.92,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 84.65,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 85.49,
      },
      {
        prodi: "PERIKANAN TANGKAP",
        jenjang: "S1",
        rata_rata_raport: 83.13,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 85.42,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.25,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.51,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.62,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 85.71,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 85.52,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.89,
      },
    ],
  },
  {
    ptn: "Universitas Lampung",
    singkatan: "UNILA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unila/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI PERKANTORAN",
        jenjang: "D3",
        rata_rata_raport: 83.94,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 87.7,
      },
      {
        prodi: "AKUNTANSI PSDKU WAY KANAN",
        jenjang: "D3",
        rata_rata_raport: 83.03,
      },
      {
        prodi: "HUBUNGAN MASYARAKAT",
        jenjang: "D3",
        rata_rata_raport: 83.36,
      },
      {
        prodi: "KEUANGAN DAN PERBANKAN",
        jenjang: "D3",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "MANAJEMEN INFORMATIKA",
        jenjang: "D3",
        rata_rata_raport: 83.52,
      },
      {
        prodi: "MANAJEMEN PEMASARAN",
        jenjang: "D3",
        rata_rata_raport: 83.55,
      },
      {
        prodi: "PERBANKAN DAN KEUANGAN PSDKU LAMPUNG TENGAH",
        jenjang: "D3",
        rata_rata_raport: 83.14,
      },
      {
        prodi: "PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 88.44,
      },
      {
        prodi: "PERPUSTAKAAN",
        jenjang: "D3",
        rata_rata_raport: 83.4,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "D3",
        rata_rata_raport: 83.3,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "D3",
        rata_rata_raport: 83.23,
      },
      {
        prodi: "TEKNIK SURVEY DAN PEMETAAN",
        jenjang: "D3",
        rata_rata_raport: 83.23,
      },
      {
        prodi: "TEKNOLOGI REKAYASA OTOMOTIF",
        jenjang: "D4",
        rata_rata_raport: 83.31,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 86.15,
      },
      {
        prodi: "AGRONOMI",
        jenjang: "S1",
        rata_rata_raport: 84.24,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.62,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 86.73,
      },
      {
        prodi: "BAHASA PERANCIS",
        jenjang: "S1",
        rata_rata_raport: 83.35,
      },
      {
        prodi: "BIMB. KONSELING",
        jenjang: "S1",
        rata_rata_raport: 86.52,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.25,
      },
      {
        prodi: "BIOLOGI TERAPAN",
        jenjang: "S1",
        rata_rata_raport: 83.81,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 86.17,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.48,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 86.73,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.43,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 86.21,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 90.69,
      },
      {
        prodi: "IESP",
        jenjang: "S1",
        rata_rata_raport: 85.79,
      },
      {
        prodi: "ILMU ADM. NEGARA",
        jenjang: "S1",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "ILMU ADM. NIAGA/BISNIS",
        jenjang: "S1",
        rata_rata_raport: 86.6,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.94,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 86.53,
      },
      {
        prodi: "ILMU KOMPUTER PSDKU WAY KANAN",
        jenjang: "S1",
        rata_rata_raport: 83.11,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 86.61,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 86.23,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 83.44,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 85.46,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.68,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.95,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.44,
      },
      {
        prodi: "NUTRISI DAN TEKNOLOGI PAKAN TERNAK",
        jenjang: "S1",
        rata_rata_raport: 83.83,
      },
      {
        prodi: "PEND. B. INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.27,
      },
      {
        prodi: "PEND. BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.49,
      },
      {
        prodi: "PEND. BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.14,
      },
      {
        prodi: "PEND. EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 85.82,
      },
      {
        prodi: "PEND. FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.22,
      },
      {
        prodi: "PEND. GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.78,
      },
      {
        prodi: "PEND. KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 91.62,
      },
      {
        prodi: "PEND. KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.62,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.04,
      },
      {
        prodi: "PEND. SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.8,
      },
      {
        prodi: "PENDIDIKAN ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 84.93,
      },
      {
        prodi: "PENDIDIKAN BAHASA LAMPUNG",
        jenjang: "S1",
        rata_rata_raport: 85.45,
      },
      {
        prodi: "PENDIDIKAN JASMANI",
        jenjang: "S1",
        rata_rata_raport: 85.02,
      },
      {
        prodi: "PENDIDIKAN MUSIK",
        jenjang: "S1",
        rata_rata_raport: 83.43,
      },
      {
        prodi: "PENDIDIKAN TARI",
        jenjang: "S1",
        rata_rata_raport: 84.06,
      },
      {
        prodi: "PENDIDIKAN TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 85.49,
      },
      {
        prodi: "PENYULUHAN PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 83.8,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 84.91,
      },
      {
        prodi: "PGSD",
        jenjang: "S1",
        rata_rata_raport: 86.73,
      },
      {
        prodi: "PPKN",
        jenjang: "S1",
        rata_rata_raport: 86.22,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 83.94,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 85.78,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.91,
      },
      {
        prodi: "SUMBERDAYA AKUATIK",
        jenjang: "S1",
        rata_rata_raport: 83.43,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 85.76,
      },
      {
        prodi: "TEKNIK GEODESI",
        jenjang: "S1",
        rata_rata_raport: 84.12,
      },
      {
        prodi: "TEKNIK GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.07,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.32,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 91.57,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.23,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 84.2,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.01,
      },
      {
        prodi: "TEKNIK PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 85.15,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 85.96,
      },
      {
        prodi: "TEKNOLOGI HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.95,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.53,
      },
    ],
  },
  {
    ptn: "Institut Teknologi Sumatera",
    singkatan: "ITERA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-itera/",
    prodi_data: [
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "ARSITEKTUR LANSKAP",
        jenjang: "S1",
        rata_rata_raport: 84.61,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.02,
      },
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "S1",
        rata_rata_raport: 85.09,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 86.94,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.13,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.83,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.31,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 85.33,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 85.87,
      },
      {
        prodi: "REKAYASA INSTRUMENTASI DAN AUTOMASI",
        jenjang: "S1",
        rata_rata_raport: 83.94,
      },
      {
        prodi: "REKAYASA KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 84.01,
      },
      {
        prodi: "REKAYASA KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 83.2,
      },
      {
        prodi: "REKAYASA KOSMETIK",
        jenjang: "S1",
        rata_rata_raport: 86.23,
      },
      {
        prodi: "REKAYASA MINYAK DAN GAS",
        jenjang: "S1",
        rata_rata_raport: 85.32,
      },
      {
        prodi: "REKAYASA TATA KELOLA AIR TERPADU",
        jenjang: "S1",
        rata_rata_raport: 83.3,
      },
      {
        prodi: "SAINS AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 84.81,
      },
      {
        prodi: "SAINS ATMOSFIR DAN KEPLANETAN",
        jenjang: "S1",
        rata_rata_raport: 83.68,
      },
      {
        prodi: "SAINS DATA",
        jenjang: "S1",
        rata_rata_raport: 85.82,
      },
      {
        prodi: "SAINS LINGKUNGAN KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.5,
      },
      {
        prodi: "TEKNIK BIOMEDIS",
        jenjang: "S1",
        rata_rata_raport: 86.24,
      },
      {
        prodi: "TEKNIK BIOSISTEM",
        jenjang: "S1",
        rata_rata_raport: 83.77,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.14,
      },
      {
        prodi: "TEKNIK FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.11,
      },
      {
        prodi: "TEKNIK GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.52,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.1,
      },
      {
        prodi: "TEKNIK GEOMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.45,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.59,
      },
      {
        prodi: "TEKNIK KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 84.51,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.93,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 85.43,
      },
      {
        prodi: "TEKNIK MATERIAL",
        jenjang: "S1",
        rata_rata_raport: 84.01,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.54,
      },
      {
        prodi: "TEKNIK PERKERETAAPIAN",
        jenjang: "S1",
        rata_rata_raport: 85.91,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 86.5,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 86.32,
      },
      {
        prodi: "TEKNIK SISTEM ENERGI",
        jenjang: "S1",
        rata_rata_raport: 83.75,
      },
      {
        prodi: "TEKNIK TELEKOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 84.91,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 85.35,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 86.32,
      },
    ],
  },
  {
    ptn: "Universitas Sultan Ageng Tirtayasa",
    singkatan: "UNTIRTA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-untirta/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 84.98,
      },
      {
        prodi: "MANAJEMEN PEMASARAN",
        jenjang: "D3",
        rata_rata_raport: 85.27,
      },
      {
        prodi: "PERBANKAN DAN KEUANGAN",
        jenjang: "D3",
        rata_rata_raport: 85.23,
      },
      {
        prodi: "PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 85.34,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 87.37,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 86.46,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.15,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 87.85,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 87.35,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 86.17,
      },
      {
        prodi: "EKONOMI SYARIAH",
        jenjang: "S1",
        rata_rata_raport: 86.15,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 87.32,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 87.69,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 85.69,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 85.27,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 87.85,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 87.27,
      },
      {
        prodi: "ILMU PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 90.83,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 92.24,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 87.74,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 87.95,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.55,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.87,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.91,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.98,
      },
      {
        prodi: "PENDIDIKAN GURU PENDIDIKAN ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 85.65,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 87.66,
      },
      {
        prodi: "PENDIDIKAN IPA",
        jenjang: "S1",
        rata_rata_raport: 85.62,
      },
      {
        prodi: "PENDIDIKAN KHUSUS",
        jenjang: "S1",
        rata_rata_raport: 84.92,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.36,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.04,
      },
      {
        prodi: "PENDIDIKAN NON FORMAL",
        jenjang: "S1",
        rata_rata_raport: 84.29,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 85.74,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.76,
      },
      {
        prodi: "PENDIDIKAN SENI PERTUNJUKAN",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.94,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.46,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.19,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 84.94,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 85.01,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.52,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 87.44,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.24,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 86.43,
      },
      {
        prodi: "TEKNIK METALURGI",
        jenjang: "S1",
        rata_rata_raport: 86.07,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 86.55,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 86.57,
      },
    ],
  },
  {
    ptn: "Universitas Indonesia",
    singkatan: "UI/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-ui/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI ASURANSI & AKTUARIA",
        jenjang: "D3",
        rata_rata_raport: 86.4,
      },
      {
        prodi: "ADMINISTRASI KEUANGAN DAN PERBANKAN",
        jenjang: "D3",
        rata_rata_raport: 87.98,
      },
      {
        prodi: "ADMINISTRASI PERKANTORAN",
        jenjang: "D3",
        rata_rata_raport: 87.42,
      },
      {
        prodi: "ADMINISTRASI PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 88.21,
      },
      {
        prodi: "ADMINISTRASI RUMAH SAKIT",
        jenjang: "D3",
        rata_rata_raport: 86.65,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 87.9,
      },
      {
        prodi: "HUBUNGAN MASYARAKAT",
        jenjang: "D3",
        rata_rata_raport: 88.01,
      },
      {
        prodi: "PENYIARAN MULTIMEDIA",
        jenjang: "D3",
        rata_rata_raport: 86.59,
      },
      {
        prodi: "PERIKLANAN KREATIF",
        jenjang: "D3",
        rata_rata_raport: 87.68,
      },
      {
        prodi: "BISNIS KREATIF",
        jenjang: "D4",
        rata_rata_raport: 91.3,
      },
      {
        prodi: "FISIOTERAPI",
        jenjang: "D4",
        rata_rata_raport: 88.95,
      },
      {
        prodi: "MANAJEMEN BISNIS PARIWISATA",
        jenjang: "D4",
        rata_rata_raport: 90.34,
      },
      {
        prodi: "MANAJEMEN REKOD DAN ARSIP",
        jenjang: "D4",
        rata_rata_raport: 89.67,
      },
      {
        prodi: "PRODUKSI MEDIA",
        jenjang: "D4",
        rata_rata_raport: 91.38,
      },
      {
        prodi: "TERAPI OKUPASI",
        jenjang: "D4",
        rata_rata_raport: 89.05,
      },
      {
        prodi: "AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 89.84,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 91.95,
      },
      {
        prodi: "ANTROPOLOGI SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 88.34,
      },
      {
        prodi: "ARKEOLOGI INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.57,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 90.68,
      },
      {
        prodi: "ARSITEKTUR INTERIOR",
        jenjang: "S1",
        rata_rata_raport: 88.29,
      },
      {
        prodi: "BAHASA DAN KEBUDAYAAN KOREA",
        jenjang: "S1",
        rata_rata_raport: 88.84,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.68,
      },
      {
        prodi: "BISNIS ISLAM",
        jenjang: "S1",
        rata_rata_raport: 88.25,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 91.55,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.27,
      },
      {
        prodi: "GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.31,
      },
      {
        prodi: "GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 87.36,
      },
      {
        prodi: "GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.04,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 89.72,
      },
      {
        prodi: "ILMU ADMINISTRASI FISKAL",
        jenjang: "S1",
        rata_rata_raport: 90.74,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 91.33,
      },
      {
        prodi: "ILMU ADMINISTRASI NIAGA",
        jenjang: "S1",
        rata_rata_raport: 91.37,
      },
      {
        prodi: "ILMU EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 90.58,
      },
      {
        prodi: "ILMU EKONOMI ISLAM",
        jenjang: "S1",
        rata_rata_raport: 87.89,
      },
      {
        prodi: "ILMU FILSAFAT",
        jenjang: "S1",
        rata_rata_raport: 86.45,
      },
      {
        prodi: "ILMU HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 91.51,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 92.99,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 91.38,
      },
      {
        prodi: "ILMU KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 90.93,
      },
      {
        prodi: "ILMU KESEJAHTERAAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 89.09,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 93.72,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 90.67,
      },
      {
        prodi: "ILMU PERPUSTAKAAN",
        jenjang: "S1",
        rata_rata_raport: 87.78,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 88.91,
      },
      {
        prodi: "ILMU PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 91.93,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 86.35,
      },
      {
        prodi: "KESEHATAN LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 87.44,
      },
      {
        prodi: "KESELAMATAN DAN KESEHATAN KERJA",
        jenjang: "S1",
        rata_rata_raport: 89.42,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 88.65,
      },
      {
        prodi: "KRIMINOLOGI",
        jenjang: "S1",
        rata_rata_raport: 91.34,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 91.96,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 88.77,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 95.99,
      },
      {
        prodi: "PENDIDIKAN DOKTER GIGI",
        jenjang: "S1",
        rata_rata_raport: 92.91,
      },
      {
        prodi: "SASTRA ARAB",
        jenjang: "S1",
        rata_rata_raport: 88.93,
      },
      {
        prodi: "SASTRA BELANDA",
        jenjang: "S1",
        rata_rata_raport: 86.26,
      },
      {
        prodi: "SASTRA CINA",
        jenjang: "S1",
        rata_rata_raport: 87.52,
      },
      {
        prodi: "SASTRA DAERAH UNTUK SASTRA JAWA",
        jenjang: "S1",
        rata_rata_raport: 86.07,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 87.15,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 90.01,
      },
      {
        prodi: "SASTRA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 89.15,
      },
      {
        prodi: "SASTRA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 86.37,
      },
      {
        prodi: "SASTRA PERANCIS",
        jenjang: "S1",
        rata_rata_raport: 86.21,
      },
      {
        prodi: "SASTRA RUSIA",
        jenjang: "S1",
        rata_rata_raport: 86.09,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 91.65,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.41,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 89.34,
      },
      {
        prodi: "TEKNIK BIOMEDIS",
        jenjang: "S1",
        rata_rata_raport: 88.02,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 90.13,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 91.44,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 90.09,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 91.11,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 88.95,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 90.16,
      },
      {
        prodi: "TEKNIK METALURGI & MATERIAL",
        jenjang: "S1",
        rata_rata_raport: 89.98,
      },
      {
        prodi: "TEKNIK PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 88.21,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 90.89,
      },
      {
        prodi: "TEKNOLOGI BIOPROSES",
        jenjang: "S1",
        rata_rata_raport: 89.42,
      },
    ],
  },
  {
    ptn: "Universitas Negeri Jakarta",
    singkatan: "UNJ/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unj/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI PERKANTORAN DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 641.7,
      },
      {
        prodi: "AKUNTANSI SEKTOR PUBLIK",
        jenjang: "D4",
        rata_rata_raport: 631.51,
      },
      {
        prodi: "DESAIN MODE",
        jenjang: "D4",
        rata_rata_raport: 584.52,
      },
      {
        prodi: "HUBUNGAN MASYARAKAT DAN KOMUNIKASI DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 637.38,
      },
      {
        prodi: "KOSMETIK DAN PERAWATAN KECANTIKAN",
        jenjang: "D4",
        rata_rata_raport: 593.89,
      },
      {
        prodi: "MANAJEMEN PELABUHAN DAN LOGISTIK MARITIM",
        jenjang: "D4",
        rata_rata_raport: 618.97,
      },
      {
        prodi: "PEMASARAN DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 630.28,
      },
      {
        prodi: "SENI KULINER DAN PENGOLAHAN JASA MAKANAN",
        jenjang: "D4",
        rata_rata_raport: 631.15,
      },
      {
        prodi: "TEKNOLOGI REKAYASA KONSTRUKSI BANGUNAN GEDUNG",
        jenjang: "D4",
        rata_rata_raport: 583.21,
      },
      {
        prodi: "TEKNOLOGI REKAYASA MANUFAKTUR",
        jenjang: "D4",
        rata_rata_raport: 571.35,
      },
      {
        prodi: "TEKNOLOGI REKAYASA OTOMASI",
        jenjang: "D4",
        rata_rata_raport: 584.91,
      },
      {
        prodi: "USAHA PERJALANAN WISATA",
        jenjang: "D4",
        rata_rata_raport: 629.56,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 656.52,
      },
      {
        prodi: "BIMBINGAN & KONSELING",
        jenjang: "S1",
        rata_rata_raport: 629.53,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 615.34,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 650.79,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 563.07,
      },
      {
        prodi: "GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 595.66,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 550.12,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 571.1,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 648.6,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 656.81,
      },
      {
        prodi: "KEPELATIHAN KECABANGAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 553.11,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 596.56,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 659.15,
      },
      {
        prodi: "MANAJEMEN PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 626.43,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 590.69,
      },
      {
        prodi: "OLAHRAGA REKREASI",
        jenjang: "S1",
        rata_rata_raport: 551.31,
      },
      {
        prodi: "PEND. GURU PAUD",
        jenjang: "S1",
        rata_rata_raport: 621.75,
      },
      {
        prodi: "PENDIDIKAN ADMINISTRASI PERKANTORAN",
        jenjang: "S1",
        rata_rata_raport: 636.7,
      },
      {
        prodi: "PENDIDIKAN AGAMA ISLAM",
        jenjang: "S1",
        rata_rata_raport: 638.14,
      },
      {
        prodi: "PENDIDIKAN AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 618.17,
      },
      {
        prodi: "PENDIDIKAN BAHASA ARAB",
        jenjang: "S1",
        rata_rata_raport: 615.94,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 622.12,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 630.18,
      },
      {
        prodi: "PENDIDIKAN BAHASA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 623.53,
      },
      {
        prodi: "PENDIDIKAN BAHASA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 560.02,
      },
      {
        prodi: "PENDIDIKAN BAHASA MANDARIN",
        jenjang: "S1",
        rata_rata_raport: 567.99,
      },
      {
        prodi: "PENDIDIKAN BAHASA PRANCIS",
        jenjang: "S1",
        rata_rata_raport: 551.95,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 578.08,
      },
      {
        prodi: "PENDIDIKAN BISNIS",
        jenjang: "S1",
        rata_rata_raport: 624.68,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 603.82,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 553.86,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 581.97,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 645.84,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 585.27,
      },
      {
        prodi: "PENDIDIKAN INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 606.72,
      },
      {
        prodi: "PENDIDIKAN JASMANI",
        jenjang: "S1",
        rata_rata_raport: 589.99,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 574.4,
      },
      {
        prodi: "PENDIDIKAN KHUSUS",
        jenjang: "S1",
        rata_rata_raport: 571.63,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 567.36,
      },
      {
        prodi: "PENDIDIKAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 600.28,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 593.17,
      },
      {
        prodi: "PENDIDIKAN MUSIK",
        jenjang: "S1",
        rata_rata_raport: 560.11,
      },
      {
        prodi: "PENDIDIKAN PANCASILA & KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 587.7,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 597.62,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 568.56,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 598.85,
      },
      {
        prodi: "PENDIDIKAN TARI",
        jenjang: "S1",
        rata_rata_raport: 566.6,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL DESAIN FASHION",
        jenjang: "S1",
        rata_rata_raport: 617.03,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL KESEJAHTERAAN KELUARGA",
        jenjang: "S1",
        rata_rata_raport: 583.68,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL KONSTRUKSI BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 560.79,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL SENI KULINER",
        jenjang: "S1",
        rata_rata_raport: 628.96,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL TATA RIAS",
        jenjang: "S1",
        rata_rata_raport: 614.43,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 586.24,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL TEKNIK ELEKTRONIKA",
        jenjang: "S1",
        rata_rata_raport: 552.7,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 562.99,
      },
      {
        prodi: "PERPUSTAKAAN DAN SAINS INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 601.33,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 657.68,
      },
      {
        prodi: "REKAYASA KESELAMATAN KEBAKARAN",
        jenjang: "S1",
        rata_rata_raport: 579.48,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 612.37,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 644.7,
      },
      {
        prodi: "SISTEM DAN TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 633.72,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 626.31,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 622.44,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 632.04,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 582.26,
      },
    ],
  },
  {
    ptn: "UPN “Veteran” Jakarta",
    singkatan: "UPN-JAKARTA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-upn-jakarta/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 581.62,
      },
      {
        prodi: "FISIOTERAPI",
        jenjang: "D3",
        rata_rata_raport: 562.69,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "D3",
        rata_rata_raport: 581.83,
      },
      {
        prodi: "PERBANKAN DAN KEUANGAN",
        jenjang: "D3",
        rata_rata_raport: 582.55,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "D3",
        rata_rata_raport: 562.88,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 652.0,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 607.34,
      },
      {
        prodi: "EKONOMI SYARIAH",
        jenjang: "S1",
        rata_rata_raport: 601.15,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 619.43,
      },
      {
        prodi: "FISIOTERAPI",
        jenjang: "S1",
        rata_rata_raport: 584.47,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 614.0,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 625.66,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 645.17,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 654.11,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 608.3,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 630.46,
      },
      {
        prodi: "KAJIAN FILM, TELEVISI, DAN MEDIA",
        jenjang: "S1",
        rata_rata_raport: 556.53,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 645.05,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 644.29,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 629.74,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 656.2,
      },
      {
        prodi: "SAINS DATA",
        jenjang: "S1",
        rata_rata_raport: 560.93,
      },
      {
        prodi: "SAINS INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 590.88,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 650.7,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 603.83,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 628.5,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 606.59,
      },
      {
        prodi: "TEKNIK PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 578.29,
      },
    ],
  },
  {
    ptn: "Universitas Singaperbangsa Karawang",
    singkatan: "UNSIKA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unsika/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 565.27,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "D3",
        rata_rata_raport: 597.0,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "D3",
        rata_rata_raport: 558.85,
      },
      {
        prodi: "ADMINISTRASI RUMAH SAKIT",
        jenjang: "S1",
        rata_rata_raport: 606.72,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 586.73,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 583.15,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 638.54,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 639.47,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 553.11,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 619.79,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 612.97,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 631.5,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 562.68,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 644.17,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 619.43,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 632.65,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 649.58,
      },
      {
        prodi: "PEND. BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 613.58,
      },
      {
        prodi: "PEND. BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 609.23,
      },
      {
        prodi: "PEND. JASMANI, KESEHATAN DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 565.67,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 575.72,
      },
      {
        prodi: "PENDIDIKAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 575.39,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 626.89,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 602.75,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 628.52,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 568.09,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 573.19,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 608.4,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 565.46,
      },
    ],
  },
  {
    ptn: "Institut Teknologi Bandung",
    singkatan: "ITB/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-itb/",
    prodi_data: [
      {
        prodi: "FAKULTAS ILMU DAN TEKNOLOGI KEBUMIAN – KAMPUS CIREBON (FITB-C)",
        jenjang: "S1",
        rata_rata_raport: 590.25,
      },
      {
        prodi: "FAKULTAS ILMU DAN TEKNOLOGI KEBUMIAN (FITB)",
        jenjang: "S1",
        rata_rata_raport: 695.76,
      },
      {
        prodi:
          "FAKULTAS MATEMATIKA DAN ILMU PENGETAHUAN ALAM – IPA (FMIPA-IPA)",
        jenjang: "S1",
        rata_rata_raport: 642.18,
      },
      {
        prodi:
          "FAKULTAS MATEMATIKA DAN ILMU PENGETAHUAN ALAM – MATEMATIKA (FMIPA-M)",
        jenjang: "S1",
        rata_rata_raport: 615.45,
      },
      {
        prodi: "FAKULTAS SENIRUPA DAN DESAIN – KAMPUS CIREBON (FSRD-C)",
        jenjang: "S1",
        rata_rata_raport: 570.4,
      },
      {
        prodi: "FAKULTAS SENIRUPA DAN DESAIN (FSRD)",
        jenjang: "S1",
        rata_rata_raport: 753.8,
      },
      {
        prodi: "FAKULTAS TEKNIK MESIN DAN DIRGANTARA (FTMD)",
        jenjang: "S1",
        rata_rata_raport: 752.49,
      },
      {
        prodi:
          "FAKULTAS TEKNIK PERTAMBANGAN DAN PERMINYAKAN – KAMPUS CIREBON (FTTM-C)",
        jenjang: "S1",
        rata_rata_raport: 652.71,
      },
      {
        prodi: "FAKULTAS TEKNIK PERTAMBANGAN DAN PERMINYAKAN (FTTM)",
        jenjang: "S1",
        rata_rata_raport: 804.76,
      },
      {
        prodi:
          "FAKULTAS TEKNIK SIPIL DAN LINGKUNGAN – INFRASTRUKTUR SIPIL DAN KELAUTAN (FTSL-SI)",
        jenjang: "S1",
        rata_rata_raport: 672.16,
      },
      {
        prodi:
          "FAKULTAS TEKNIK SIPIL DAN LINGKUNGAN – TEKNOLOGI LINGKUNGAN (FTSL-L)",
        jenjang: "S1",
        rata_rata_raport: 638.19,
      },
      {
        prodi: "FAKULTAS TEKNOLOGI INDUSTRI – KAMPUS CIREBON (FTI-C)",
        jenjang: "S1",
        rata_rata_raport: 597.24,
      },
      {
        prodi: "FAKULTAS TEKNOLOGI INDUSTRI – REKAYASA INDUSTRI (FTI-RI)",
        jenjang: "S1",
        rata_rata_raport: 660.96,
      },
      {
        prodi: "FAKULTAS TEKNOLOGI INDUSTRI – SISTEM DAN PROSES (FTI-SP)",
        jenjang: "S1",
        rata_rata_raport: 705.51,
      },
      {
        prodi:
          "SEKOLAH ARSITEKTUR, PERENCANAAN DAN PENGEMBANGAN KEBIJAKAN – KAMPUS CIREBON (SAPPK-C)",
        jenjang: "S1",
        rata_rata_raport: 590.8,
      },
      {
        prodi:
          "SEKOLAH ARSITEKTUR, PERENCANAAN DAN PENGEMBANGAN KEBIJAKAN (SAPPK)",
        jenjang: "S1",
        rata_rata_raport: 669.54,
      },
      {
        prodi: "SEKOLAH BISNIS DAN MANAJEMEN – KAMPUS CIREBON (SBM-C)",
        jenjang: "S1",
        rata_rata_raport: 589.86,
      },
      {
        prodi: "SEKOLAH BISNIS DAN MANAJEMEN (SBM)",
        jenjang: "S1",
        rata_rata_raport: 786.11,
      },
      {
        prodi: "SEKOLAH FARMASI (SF)",
        jenjang: "S1",
        rata_rata_raport: 680.58,
      },
      {
        prodi: "SEKOLAH ILMU DAN TEKNOLOGI HAYATI – KAMPUS CIREBON (SITH-C)",
        jenjang: "S1",
        rata_rata_raport: 568.45,
      },
      {
        prodi: "SEKOLAH ILMU DAN TEKNOLOGI HAYATI – REKAYASA (SITH-R)",
        jenjang: "S1",
        rata_rata_raport: 637.66,
      },
      {
        prodi: "SEKOLAH ILMU DAN TEKNOLOGI HAYATI – SAINS (SITH-S)",
        jenjang: "S1",
        rata_rata_raport: 594.58,
      },
      {
        prodi: "SEKOLAH TEKNIK ELEKTRO DAN INFORMATIKA – KOMPUTASI (STEI-K)",
        jenjang: "S1",
        rata_rata_raport: 806.44,
      },
      {
        prodi: "SEKOLAH TEKNIK ELEKTRO DAN INFORMATIKA – REKAYASA (STEI-R)",
        jenjang: "S1",
        rata_rata_raport: null,
      },
      {
        prodi: "FAKULTAS ILMU DAN TEKNOLOGI KEBUMIAN – KAMPUS CIREBON (FITB-C)",
        jenjang: "S1",
        rata_rata_raport: 590.25,
      },
      {
        prodi: "FAKULTAS ILMU DAN TEKNOLOGI KEBUMIAN (FITB)",
        jenjang: "S1",
        rata_rata_raport: 695.76,
      },
      {
        prodi:
          "FAKULTAS MATEMATIKA DAN ILMU PENGETAHUAN ALAM – IPA (FMIPA-IPA)",
        jenjang: "S1",
        rata_rata_raport: 642.18,
      },
      {
        prodi:
          "FAKULTAS MATEMATIKA DAN ILMU PENGETAHUAN ALAM – MATEMATIKA (FMIPA-M)",
        jenjang: "S1",
        rata_rata_raport: 615.45,
      },
      {
        prodi: "FAKULTAS SENIRUPA DAN DESAIN – KAMPUS CIREBON (FSRD-C)",
        jenjang: "S1",
        rata_rata_raport: 570.4,
      },
      {
        prodi: "FAKULTAS SENIRUPA DAN DESAIN (FSRD)",
        jenjang: "S1",
        rata_rata_raport: 753.8,
      },
      {
        prodi: "FAKULTAS TEKNIK MESIN DAN DIRGANTARA (FTMD)",
        jenjang: "S1",
        rata_rata_raport: 752.49,
      },
      {
        prodi:
          "FAKULTAS TEKNIK PERTAMBANGAN DAN PERMINYAKAN – KAMPUS CIREBON (FTTM-C)",
        jenjang: "S1",
        rata_rata_raport: 652.71,
      },
      {
        prodi: "FAKULTAS TEKNIK PERTAMBANGAN DAN PERMINYAKAN (FTTM)",
        jenjang: "S1",
        rata_rata_raport: 804.76,
      },
      {
        prodi:
          "FAKULTAS TEKNIK SIPIL DAN LINGKUNGAN – INFRASTRUKTUR SIPIL DAN KELAUTAN (FTSL-SI)",
        jenjang: "S1",
        rata_rata_raport: 672.16,
      },
      {
        prodi:
          "FAKULTAS TEKNIK SIPIL DAN LINGKUNGAN – TEKNOLOGI LINGKUNGAN (FTSL-L)",
        jenjang: "S1",
        rata_rata_raport: 638.19,
      },
      {
        prodi: "FAKULTAS TEKNOLOGI INDUSTRI – KAMPUS CIREBON (FTI-C)",
        jenjang: "S1",
        rata_rata_raport: 597.24,
      },
      {
        prodi: "FAKULTAS TEKNOLOGI INDUSTRI – REKAYASA INDUSTRI (FTI-RI)",
        jenjang: "S1",
        rata_rata_raport: 660.96,
      },
      {
        prodi: "FAKULTAS TEKNOLOGI INDUSTRI – SISTEM DAN PROSES (FTI-SP)",
        jenjang: "S1",
        rata_rata_raport: 705.51,
      },
      {
        prodi:
          "SEKOLAH ARSITEKTUR, PERENCANAAN DAN PENGEMBANGAN KEBIJAKAN – KAMPUS CIREBON (SAPPK-C)",
        jenjang: "S1",
        rata_rata_raport: 590.8,
      },
      {
        prodi:
          "SEKOLAH ARSITEKTUR, PERENCANAAN DAN PENGEMBANGAN KEBIJAKAN (SAPPK)",
        jenjang: "S1",
        rata_rata_raport: 669.54,
      },
      {
        prodi: "SEKOLAH BISNIS DAN MANAJEMEN – KAMPUS CIREBON (SBM-C)",
        jenjang: "S1",
        rata_rata_raport: 589.86,
      },
      {
        prodi: "SEKOLAH BISNIS DAN MANAJEMEN (SBM)",
        jenjang: "S1",
        rata_rata_raport: 786.11,
      },
      {
        prodi: "SEKOLAH FARMASI (SF)",
        jenjang: "S1",
        rata_rata_raport: 680.58,
      },
      {
        prodi: "SEKOLAH ILMU DAN TEKNOLOGI HAYATI – KAMPUS CIREBON (SITH-C)",
        jenjang: "S1",
        rata_rata_raport: 568.45,
      },
      {
        prodi: "SEKOLAH ILMU DAN TEKNOLOGI HAYATI – REKAYASA (SITH-R)",
        jenjang: "S1",
        rata_rata_raport: 637.66,
      },
      {
        prodi: "SEKOLAH ILMU DAN TEKNOLOGI HAYATI – SAINS (SITH-S)",
        jenjang: "S1",
        rata_rata_raport: 594.58,
      },
      {
        prodi: "SEKOLAH TEKNIK ELEKTRO DAN INFORMATIKA – KOMPUTASI (STEI-K)",
        jenjang: "S1",
        rata_rata_raport: 806.44,
      },
      {
        prodi: "SEKOLAH TEKNIK ELEKTRO DAN INFORMATIKA – REKAYASA (STEI-R)",
        jenjang: "S1",
        rata_rata_raport: 698.07,
      },
    ],
  },
  {
    ptn: "Universitas Padjadjaran",
    singkatan: "UNPAD/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unpad/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI KEUANGAN PUBLIK",
        jenjang: "D4",
        rata_rata_raport: 86.69,
      },
      {
        prodi: "ADMINISTRASI PEMERINTAHAN",
        jenjang: "D4",
        rata_rata_raport: 86.55,
      },
      {
        prodi: "AGROTEKNOPRENEUR",
        jenjang: "D4",
        rata_rata_raport: 86.21,
      },
      {
        prodi: "AKUNTANSI PERPAJAKAN",
        jenjang: "D4",
        rata_rata_raport: 89.38,
      },
      {
        prodi: "AKUNTANSI SEKTOR PUBLIK",
        jenjang: "D4",
        rata_rata_raport: 87.07,
      },
      {
        prodi: "BAHASA DAN BUDAYA TIONGKOK",
        jenjang: "D4",
        rata_rata_raport: 86.01,
      },
      {
        prodi: "BISNIS INTERNASIONAL",
        jenjang: "D4",
        rata_rata_raport: 87.17,
      },
      {
        prodi: "BISNIS LOGISTIK",
        jenjang: "D4",
        rata_rata_raport: 86.37,
      },
      {
        prodi: "KEARSIPAN DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 86.33,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "D4",
        rata_rata_raport: 90.37,
      },
      {
        prodi: "MANAJEMEN PRODUKSI MEDIA",
        jenjang: "D4",
        rata_rata_raport: 87.22,
      },
      {
        prodi: "PARIWISATA BAHARI",
        jenjang: "D4",
        rata_rata_raport: 86.75,
      },
      {
        prodi: "PEMASARAN DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 86.72,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI KIMIA",
        jenjang: "D4",
        rata_rata_raport: 86.5,
      },
      {
        prodi: "ADMINISTRASI BISNIS PSDKU PANGANDARAN",
        jenjang: "S1",
        rata_rata_raport: 87.1,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 90.43,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 88.85,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 90.38,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 90.68,
      },
      {
        prodi: "ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.63,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.73,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 90.57,
      },
      {
        prodi: "EKONOMI ISLAM",
        jenjang: "S1",
        rata_rata_raport: 89.17,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 90.98,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.86,
      },
      {
        prodi: "GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 87.28,
      },
      {
        prodi: "HUBUNGAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 89.11,
      },
      {
        prodi: "ILMU ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 90.39,
      },
      {
        prodi: "ILMU AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 89.42,
      },
      {
        prodi: "ILMU EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 89.33,
      },
      {
        prodi: "ILMU HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 90.61,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 92.96,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 88.36,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 90.96,
      },
      {
        prodi: "ILMU KESEJAHTERAAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 88.56,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 90.69,
      },
      {
        prodi: "ILMU KOMUNIKASI PSDKU PANGANDARAN",
        jenjang: "S1",
        rata_rata_raport: 86.91,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 89.73,
      },
      {
        prodi: "ILMU PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 89.44,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 88.5,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 88.33,
      },
      {
        prodi: "JURNALISTIK",
        jenjang: "S1",
        rata_rata_raport: 88.83,
      },
      {
        prodi: "KEDOKTERAN HEWAN",
        jenjang: "S1",
        rata_rata_raport: 87.46,
      },
      {
        prodi: "KEPERAWATAN PSDKU PANGANDARAN",
        jenjang: "S1",
        rata_rata_raport: 87.31,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 89.06,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 90.8,
      },
      {
        prodi: "MANAJEMEN KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 90.07,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 88.34,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 94.72,
      },
      {
        prodi: "PENDIDIKAN DOKTER GIGI",
        jenjang: "S1",
        rata_rata_raport: 91.19,
      },
      {
        prodi: "PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 87.27,
      },
      {
        prodi: "PERIKANAN PSDKU PANGANDARAN",
        jenjang: "S1",
        rata_rata_raport: 86.3,
      },
      {
        prodi: "PERPUSTAKAAN DAN SAINS INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 87.76,
      },
      {
        prodi: "PETERNAKAN PSDKU PANGANDARAN",
        jenjang: "S1",
        rata_rata_raport: 86.08,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 93.95,
      },
      {
        prodi: "SASTRA ARAB",
        jenjang: "S1",
        rata_rata_raport: 87.55,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.62,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.31,
      },
      {
        prodi: "SASTRA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 89.59,
      },
      {
        prodi: "SASTRA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 86.88,
      },
      {
        prodi: "SASTRA PERANCIS",
        jenjang: "S1",
        rata_rata_raport: 86.57,
      },
      {
        prodi: "SASTRA RUSIA",
        jenjang: "S1",
        rata_rata_raport: 86.48,
      },
      {
        prodi: "SASTRA SUNDA",
        jenjang: "S1",
        rata_rata_raport: 86.73,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.44,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 90.06,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 89.05,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.94,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 92.85,
      },
      {
        prodi: "TEKNIK PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 88.79,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 88.6,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 90.62,
      },
      {
        prodi: "TELEVISI DAN FILM",
        jenjang: "S1",
        rata_rata_raport: 89.8,
      },
    ],
  },
  {
    ptn: "Universitas Pendidikan Indonesia",
    singkatan: "UPI/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-upi/",
    prodi_data: [
      {
        prodi: "SURVEI PEMETAAN DAN INFORMASI GEOGRAFIS",
        jenjang: "D4",
        rata_rata_raport: 85.63,
      },
      {
        prodi: "ADMINISTRASI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 88.39,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.59,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 88.68,
      },
      {
        prodi: "BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.27,
      },
      {
        prodi: "BAHASA DAN SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 89.22,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 89.44,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.02,
      },
      {
        prodi: "BISNIS DIGITAL (KAMPUS UPI TASIKMALAYA)",
        jenjang: "S1",
        rata_rata_raport: 88.41,
      },
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "S1",
        rata_rata_raport: 89.07,
      },
      {
        prodi: "DESAIN PRODUK INDUSTRI – KAMPUS UPI DI TASIKMALAYA",
        jenjang: "S1",
        rata_rata_raport: 84.26,
      },
      {
        prodi: "FILM DAN TELEVISI",
        jenjang: "S1",
        rata_rata_raport: 86.96,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.63,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 89.49,
      },
      {
        prodi: "ILMU EKONOMI DAN KEUANGAN ISLAM",
        jenjang: "S1",
        rata_rata_raport: 87.36,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 84.22,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 86.47,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 89.11,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 89.67,
      },
      {
        prodi: "ILMU PENDIDIKAN AGAMA ISLAM",
        jenjang: "S1",
        rata_rata_raport: 89.35,
      },
      {
        prodi: "INDUSTRI PARIWISATA KAMPUS SUMEDANG",
        jenjang: "S1",
        rata_rata_raport: 88.0,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 93.88,
      },
      {
        prodi: "KEPELATIHAN FISIK OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 84.81,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 89.65,
      },
      {
        prodi: "KEPERAWATAN – KAMPUS SUMEDANG",
        jenjang: "S1",
        rata_rata_raport: 89.51,
      },
      {
        prodi: "KEWIRAUSAHAAN KAMPUS TASIKMALAYA",
        jenjang: "S1",
        rata_rata_raport: 86.97,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.84,
      },
      {
        prodi: "LOGISTIK KELAUTAN – KAMPUS SERANG",
        jenjang: "S1",
        rata_rata_raport: 84.86,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 91.88,
      },
      {
        prodi: "MANAJEMEN INDUSTRI KATERING",
        jenjang: "S1",
        rata_rata_raport: 87.25,
      },
      {
        prodi: "MANAJEMEN PEMASARAN PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 88.97,
      },
      {
        prodi: "MANAJEMEN RESORT DAN LEISURE",
        jenjang: "S1",
        rata_rata_raport: 88.51,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.84,
      },
      {
        prodi: "MEKATRONIKA DAN KECERDASAN BUATAN – KAMPUS UPI DI PURWAKARTA",
        jenjang: "S1",
        rata_rata_raport: 85.59,
      },
      {
        prodi: "MUSIK",
        jenjang: "S1",
        rata_rata_raport: 84.59,
      },
      {
        prodi: "PEND. JASMANI KESEHATAN & REKREASI (PJKR)",
        jenjang: "S1",
        rata_rata_raport: 88.57,
      },
      {
        prodi: "PENDIDIKAN AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.66,
      },
      {
        prodi: "PENDIDIKAN BAHASA ARAB",
        jenjang: "S1",
        rata_rata_raport: 87.46,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 89.01,
      },
      {
        prodi: "PENDIDIKAN BAHASA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 88.02,
      },
      {
        prodi: "PENDIDIKAN BAHASA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 84.63,
      },
      {
        prodi: "PENDIDIKAN BAHASA KOREA",
        jenjang: "S1",
        rata_rata_raport: 87.22,
      },
      {
        prodi: "PENDIDIKAN BAHASA PERANCIS",
        jenjang: "S1",
        rata_rata_raport: 84.28,
      },
      {
        prodi: "PENDIDIKAN BAHASA SUNDA",
        jenjang: "S1",
        rata_rata_raport: 86.81,
      },
      {
        prodi: "PENDIDIKAN BHS.DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.52,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.47,
      },
      {
        prodi: "PENDIDIKAN BISNIS",
        jenjang: "S1",
        rata_rata_raport: 88.24,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 87.04,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.25,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 87.21,
      },
      {
        prodi: "PENDIDIKAN ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 87.43,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN ALAM",
        jenjang: "S1",
        rata_rata_raport: 84.97,
      },
      {
        prodi: "PENDIDIKAN IPS",
        jenjang: "S1",
        rata_rata_raport: 87.06,
      },
      {
        prodi: "PENDIDIKAN KELAUTAN DAN PERIKANAN KAMPUS SERANG",
        jenjang: "S1",
        rata_rata_raport: 84.37,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 87.1,
      },
      {
        prodi: "PENDIDIKAN KESEJAHTERAAN KELUARGA",
        jenjang: "S1",
        rata_rata_raport: 85.31,
      },
      {
        prodi: "PENDIDIKAN KHUSUS",
        jenjang: "S1",
        rata_rata_raport: 86.07,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.59,
      },
      {
        prodi: "PENDIDIKAN MANAJEMEN PERKANTORAN",
        jenjang: "S1",
        rata_rata_raport: 88.68,
      },
      {
        prodi: "PENDIDIKAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 86.46,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 87.65,
      },
      {
        prodi: "PENDIDIKAN MULTIMEDIA KAMPUS CIBIRU",
        jenjang: "S1",
        rata_rata_raport: 86.02,
      },
      {
        prodi: "PENDIDIKAN PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 88.55,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 87.63,
      },
      {
        prodi: "PENDIDIKAN SENI MUSIK",
        jenjang: "S1",
        rata_rata_raport: 85.26,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA DAN KERAJINAN",
        jenjang: "S1",
        rata_rata_raport: 85.02,
      },
      {
        prodi: "PENDIDIKAN SENI TARI",
        jenjang: "S1",
        rata_rata_raport: 85.56,
      },
      {
        prodi: "PENDIDIKAN SISTEM DAN TEKNOLOGI INFORMASI KAMPUS PURWAKARTA",
        jenjang: "S1",
        rata_rata_raport: 85.75,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.29,
      },
      {
        prodi: "PENDIDIKAN TATA BOGA",
        jenjang: "S1",
        rata_rata_raport: 89.23,
      },
      {
        prodi: "PENDIDIKAN TATA BUSANA",
        jenjang: "S1",
        rata_rata_raport: 88.47,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 85.09,
      },
      {
        prodi: "PENDIDIKAN TEKNIK BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.56,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.39,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.83,
      },
      {
        prodi: "PENDIDIKAN TEKNIK OTOMASI INDUSTRI DAN ROBOTIKA",
        jenjang: "S1",
        rata_rata_raport: 84.36,
      },
      {
        prodi: "PENDIDIKAN TEKNIK OTOMOTIF",
        jenjang: "S1",
        rata_rata_raport: 85.63,
      },
      {
        prodi: "PENDIDIKAN TEKNOLOGI AGRO INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 85.32,
      },
      {
        prodi: "PERPUSTAKAAN DAN SAINS INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.93,
      },
      {
        prodi: "PGPAUD KAMPUS BUMI SILIWANGI",
        jenjang: "S1",
        rata_rata_raport: 85.78,
      },
      {
        prodi: "PGPAUD KAMPUS CIBIRU",
        jenjang: "S1",
        rata_rata_raport: 87.08,
      },
      {
        prodi: "PGPAUD KAMPUS PURWAKARTA",
        jenjang: "S1",
        rata_rata_raport: 84.63,
      },
      {
        prodi: "PGPAUD KAMPUS SERANG",
        jenjang: "S1",
        rata_rata_raport: 84.35,
      },
      {
        prodi: "PGPAUD KAMPUS TASIKMALAYA",
        jenjang: "S1",
        rata_rata_raport: 85.46,
      },
      {
        prodi: "PGSD KAMPUS BUMI SILIWANGI",
        jenjang: "S1",
        rata_rata_raport: 89.45,
      },
      {
        prodi: "PGSD KAMPUS CIBIRU",
        jenjang: "S1",
        rata_rata_raport: 89.6,
      },
      {
        prodi: "PGSD KAMPUS PURWAKARTA",
        jenjang: "S1",
        rata_rata_raport: 88.59,
      },
      {
        prodi: "PGSD KAMPUS SERANG",
        jenjang: "S1",
        rata_rata_raport: 88.18,
      },
      {
        prodi: "PGSD KAMPUS SUMEDANG",
        jenjang: "S1",
        rata_rata_raport: 89.17,
      },
      {
        prodi: "PGSD KAMPUS TASIKMALAYA",
        jenjang: "S1",
        rata_rata_raport: 88.31,
      },
      {
        prodi: "PGSD PEND. JASMANI KAMPUS BUMI SILIWANGI",
        jenjang: "S1",
        rata_rata_raport: 84.65,
      },
      {
        prodi: "PGSD PENDIDIKAN JASMANI KAMPUS SUMEDANG",
        jenjang: "S1",
        rata_rata_raport: 84.95,
      },
      {
        prodi: "PKN",
        jenjang: "S1",
        rata_rata_raport: 86.56,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 92.68,
      },
      {
        prodi: "REKAYASA PERANGKAT LUNAK (KAMPUS UPI CIBIRU)",
        jenjang: "S1",
        rata_rata_raport: 87.35,
      },
      {
        prodi: "SAINS INFORMASI GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 86.91,
      },
      {
        prodi: "SISTEM INFORMASI KELAUTAN KAMPUS SERANG",
        jenjang: "S1",
        rata_rata_raport: 84.51,
      },
      {
        prodi: "SISTEM TELEKOMUNIKASI (KAMPUS UPI PURWAKARTA)",
        jenjang: "S1",
        rata_rata_raport: 85.7,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.22,
      },
      {
        prodi: "TEKNIK ENERGI TERBARUKAN",
        jenjang: "S1",
        rata_rata_raport: 84.04,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.17,
      },
      {
        prodi: "TEKNIK KOMPUTER – KAMPUS CIBIRU",
        jenjang: "S1",
        rata_rata_raport: 87.62,
      },
      {
        prodi: "TEKNIK LOGISTIK",
        jenjang: "S1",
        rata_rata_raport: 86.58,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.03,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 88.28,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 86.04,
      },
    ],
  },
  {
    ptn: "Institut Pertanian Bogor",
    singkatan: "IPB/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-ipb/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D4",
        rata_rata_raport: 93.34,
      },
      {
        prodi: "ANALISIS KIMIA",
        jenjang: "D4",
        rata_rata_raport: 88.86,
      },
      {
        prodi: "EKOWISATA",
        jenjang: "D4",
        rata_rata_raport: 87.88,
      },
      {
        prodi: "EKOWISATA (KAMPUS SUKABUMI)",
        jenjang: "D4",
        rata_rata_raport: 86.53,
      },
      {
        prodi: "KOMUNIKASI DIGITAL DAN MEDIA",
        jenjang: "D4",
        rata_rata_raport: 93.66,
      },
      {
        prodi: "KOMUNIKASI DIGITAL DAN MEDIA (KAMPUS SUKABUMI)",
        jenjang: "D4",
        rata_rata_raport: 87.74,
      },
      {
        prodi: "MANAJEMEN AGRIBISNIS",
        jenjang: "D4",
        rata_rata_raport: 89.88,
      },
      {
        prodi: "MANAJEMEN AGRIBISNIS (KAMPUS SUKABUMI)",
        jenjang: "D4",
        rata_rata_raport: 87.28,
      },
      {
        prodi: "MANAJEMEN INDUSTRI",
        jenjang: "D4",
        rata_rata_raport: 89.68,
      },
      {
        prodi: "MANAJEMEN INDUSTRI JASA MAKANAN DAN GIZI",
        jenjang: "D4",
        rata_rata_raport: 89.4,
      },
      {
        prodi: "PARAMEDIK VETERINER",
        jenjang: "D4",
        rata_rata_raport: 86.67,
      },
      {
        prodi: "SUPERVISOR JAMINAN MUTU PANGAN",
        jenjang: "D4",
        rata_rata_raport: 88.66,
      },
      {
        prodi: "TEKNIK DAN MANAJEMEN LINGKUNGAN",
        jenjang: "D4",
        rata_rata_raport: 88.54,
      },
      {
        prodi: "TEKNOLOGI DAN MANAJEMEN PEMBENIHAN IKAN",
        jenjang: "D4",
        rata_rata_raport: 86.41,
      },
      {
        prodi: "TEKNOLOGI DAN MANAJEMEN PEMBENIHAN IKAN (KAMPUS SUKABUMI)",
        jenjang: "D4",
        rata_rata_raport: 86.14,
      },
      {
        prodi: "TEKNOLOGI DAN MANAJEMEN TERNAK",
        jenjang: "D4",
        rata_rata_raport: 86.41,
      },
      {
        prodi: "TEKNOLOGI DAN MANAJEMEN TERNAK (KAMPUS SUKABUMI)",
        jenjang: "D4",
        rata_rata_raport: 86.35,
      },
      {
        prodi: "TEKNOLOGI PRODUKSI DAN MANAJEMEN PERKEBUNAN",
        jenjang: "D4",
        rata_rata_raport: 87.33,
      },
      {
        prodi: "TEKNOLOGI PRODUKSI DAN PENGEMBANGAN MASYARAKAT PERTANIAN",
        jenjang: "D4",
        rata_rata_raport: 86.69,
      },
      {
        prodi: "TEKNOLOGI REKAYASA KOMPUTER",
        jenjang: "D4",
        rata_rata_raport: 88.67,
      },
      {
        prodi: "TEKNOLOGI REKAYASA PERANGKAT LUNAK",
        jenjang: "D4",
        rata_rata_raport: 89.81,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 90.09,
      },
      {
        prodi: "AGRONOMI DAN HORTIKULTURA",
        jenjang: "S1",
        rata_rata_raport: 89.46,
      },
      {
        prodi: "AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 89.3,
      },
      {
        prodi: "ARSITEKTUR LANSEKAP",
        jenjang: "S1",
        rata_rata_raport: 88.11,
      },
      {
        prodi: "BIOINFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.22,
      },
      {
        prodi: "BIOKIMIA",
        jenjang: "S1",
        rata_rata_raport: 88.57,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.08,
      },
      {
        prodi: "BISNIS",
        jenjang: "S1",
        rata_rata_raport: 90.69,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 89.33,
      },
      {
        prodi: "EKONOMI SUMBERDAYA DAN LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 88.35,
      },
      {
        prodi: "EKONOMI SYARIAH",
        jenjang: "S1",
        rata_rata_raport: 89.08,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.7,
      },
      {
        prodi: "ILMU DAN TEKNOLOGI KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 88.11,
      },
      {
        prodi: "ILMU GIZI",
        jenjang: "S1",
        rata_rata_raport: 92.69,
      },
      {
        prodi: "ILMU KELUARGA DAN KONSUMEN",
        jenjang: "S1",
        rata_rata_raport: 88.64,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 90.82,
      },
      {
        prodi: "KECERDASAN BUATAN",
        jenjang: "S1",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 95.19,
      },
      {
        prodi: "KEDOKTERAN HEWAN",
        jenjang: "S1",
        rata_rata_raport: 89.96,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 88.23,
      },
      {
        prodi: "KOMUNIKASI DAN PENGEMBANGAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 90.31,
      },
      {
        prodi: "KONSERVASI SUMBERDAYA HUTAN DAN EKOWISATA",
        jenjang: "S1",
        rata_rata_raport: 89.17,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 93.84,
      },
      {
        prodi: "MANAJEMEN HUTAN",
        jenjang: "S1",
        rata_rata_raport: 88.63,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA LAHAN",
        jenjang: "S1",
        rata_rata_raport: 86.71,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 86.83,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 87.85,
      },
      {
        prodi: "METEOROLOGI TERAPAN",
        jenjang: "S1",
        rata_rata_raport: 87.79,
      },
      {
        prodi: "NUTRISI DAN TEKNOLOGI PAKAN",
        jenjang: "S1",
        rata_rata_raport: 87.75,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 87.09,
      },
      {
        prodi: "SAINS BIOMEDIS",
        jenjang: "S1",
        rata_rata_raport: 87.91,
      },
      {
        prodi: "SILVIKULTUR",
        jenjang: "S1",
        rata_rata_raport: 87.71,
      },
      {
        prodi: "SMART AGRICULTURE",
        jenjang: "S1",
        rata_rata_raport: 86.1,
      },
      {
        prodi: "STATISTIKA DAN SAINS DATA",
        jenjang: "S1",
        rata_rata_raport: 94.26,
      },
      {
        prodi: "TEKNIK INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 89.7,
      },
      {
        prodi: "TEKNIK PERTANIAN DAN BIOSISTEM",
        jenjang: "S1",
        rata_rata_raport: 87.99,
      },
      {
        prodi: "TEKNIK SIPIL DAN LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 89.83,
      },
      {
        prodi: "TEKNOLOGI & MANAJEMEN PERIKANAN BUDIDAYA",
        jenjang: "S1",
        rata_rata_raport: 86.98,
      },
      {
        prodi: "TEKNOLOGI & MANAJEMEN PERIKANAN TANGKAP",
        jenjang: "S1",
        rata_rata_raport: 86.7,
      },
      {
        prodi: "TEKNOLOGI HASIL HUTAN",
        jenjang: "S1",
        rata_rata_raport: 87.68,
      },
      {
        prodi: "TEKNOLOGI HASIL PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 87.7,
      },
      {
        prodi: "TEKNOLOGI HASIL TERNAK",
        jenjang: "S1",
        rata_rata_raport: 87.65,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 90.81,
      },
      {
        prodi: "TEKNOLOGI PRODUKSI TERNAK",
        jenjang: "S1",
        rata_rata_raport: 87.41,
      },
    ],
  },
  {
    ptn: "Universitas Siliwangi",
    singkatan: "UNSIL/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unsil/",
    prodi_data: [
      {
        prodi: "PERBANKAN DAN KEUANGAN",
        jenjang: "D3",
        rata_rata_raport: 85.1,
      },
      {
        prodi: "PERBANKAN DAN KEUANGAN DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 90.89,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 88.11,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.72,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 90.47,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 89.52,
      },
      {
        prodi: "EKONOMI SYARIAH",
        jenjang: "S1",
        rata_rata_raport: 87.1,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 89.55,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 88.31,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 90.1,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 90.32,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 90.66,
      },
      {
        prodi: "MANAJEMEN MUTU HALAL",
        jenjang: "S1",
        rata_rata_raport: 83.49,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 89.23,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.5,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.96,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 86.1,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.69,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.96,
      },
      {
        prodi: "PENDIDIKAN JASMANI",
        jenjang: "S1",
        rata_rata_raport: 86.88,
      },
      {
        prodi: "PENDIDIKAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 85.31,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.13,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 87.3,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 89.04,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.32,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 87.5,
      },
      {
        prodi: "TEKNOLOGI PANGAN DAN HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.85,
      },
    ],
  },
  {
    ptn: "Universitas Jenderal Soedirman",
    singkatan: "UNSOED/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unsoed/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI BISNIS",
        jenjang: "D3",
        rata_rata_raport: 85.51,
      },
      {
        prodi: "ADMINISTRASI PERKANTORAN",
        jenjang: "D3",
        rata_rata_raport: 85.26,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "D3",
        rata_rata_raport: 83.96,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 85.19,
      },
      {
        prodi: "BAHASA INGGRIS",
        jenjang: "D3",
        rata_rata_raport: 84.07,
      },
      {
        prodi: "BAHASA MANDARIN",
        jenjang: "D3",
        rata_rata_raport: 83.45,
      },
      {
        prodi: "BISNIS INTERNASIONAL",
        jenjang: "D3",
        rata_rata_raport: 84.4,
      },
      {
        prodi: "BUDI DAYA IKAN",
        jenjang: "D3",
        rata_rata_raport: 83.08,
      },
      {
        prodi: "BUDI DAYA TERNAK",
        jenjang: "D3",
        rata_rata_raport: 83.96,
      },
      {
        prodi: "PERENCANAAN SUMBER DAYA LAHAN",
        jenjang: "D3",
        rata_rata_raport: 83.4,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 91.55,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 89.38,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.18,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 85.12,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 90.8,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.82,
      },
      {
        prodi: "BIOLOGI TERAPAN",
        jenjang: "S1",
        rata_rata_raport: 83.69,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 89.59,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 91.77,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.0,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 89.84,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 91.16,
      },
      {
        prodi: "ILMU GIZI",
        jenjang: "S1",
        rata_rata_raport: 90.37,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 85.54,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 91.65,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 87.97,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 93.38,
      },
      {
        prodi: "KEDOKTERAN GIGI",
        jenjang: "S1",
        rata_rata_raport: 93.38,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 91.8,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 90.44,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.57,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 91.84,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 85.35,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.86,
      },
      {
        prodi: "MIKROBIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.63,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.09,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 89.15,
      },
      {
        prodi: "PENDIDIKAN BAHASA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 84.16,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 94.39,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 87.01,
      },
      {
        prodi: "PENDIDIKAN JASMANI",
        jenjang: "S1",
        rata_rata_raport: 86.22,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 88.26,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 83.51,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.66,
      },
      {
        prodi: "SASTRA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 85.87,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.12,
      },
      {
        prodi: "STATISTIK",
        jenjang: "S1",
        rata_rata_raport: 85.2,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 87.57,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.38,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 89.88,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 88.85,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.46,
      },
      {
        prodi: "TEKNIK PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.45,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.56,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 90.16,
      },
    ],
  },
  {
    ptn: "Universitas Tidar",
    singkatan: "UNTIDAR/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-untidar/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 84.42,
      },
      {
        prodi: "FARMASI",
        jenjang: "D3",
        rata_rata_raport: 83.7,
      },
      {
        prodi: "AKUNTANSI PERPAJAKAN",
        jenjang: "D4",
        rata_rata_raport: 84.37,
      },
      {
        prodi: "TEKNOLOGI REKAYASA PERANCANGAN MANUFAKTUR",
        jenjang: "D4",
        rata_rata_raport: 83.9,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.27,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.38,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 84.22,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 88.65,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 87.38,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 88.05,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 88.51,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 88.76,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 89.33,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.69,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 87.18,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.22,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 87.34,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.32,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN ALAM",
        jenjang: "S1",
        rata_rata_raport: 85.03,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.81,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 84.95,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.78,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 84.91,
      },
      {
        prodi: "TEKNIK MEKATRONIKA",
        jenjang: "S1",
        rata_rata_raport: 83.94,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.43,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 86.45,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.17,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 86.01,
      },
    ],
  },
  {
    ptn: "Universitas Sebelas Maret",
    singkatan: "UNS/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-uns/",
    prodi_data: [
      {
        prodi: "AGRIBISNIS",
        jenjang: "D3",
        rata_rata_raport: 84.87,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 87.12,
      },
      {
        prodi: "AKUNTANSI (KAMPUS KABUPATEN MADIUN)",
        jenjang: "D3",
        rata_rata_raport: 83.55,
      },
      {
        prodi: "BUDI DAYA TERNAK",
        jenjang: "D3",
        rata_rata_raport: 83.94,
      },
      {
        prodi: "FARMASI",
        jenjang: "D3",
        rata_rata_raport: 89.61,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "D3",
        rata_rata_raport: 87.66,
      },
      {
        prodi: "KOMUNIKASI TERAPAN",
        jenjang: "D3",
        rata_rata_raport: 86.38,
      },
      {
        prodi: "MANAJEMEN ADMINISTRASI",
        jenjang: "D3",
        rata_rata_raport: 88.58,
      },
      {
        prodi: "PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 88.11,
      },
      {
        prodi: "PERPUSTAKAAN",
        jenjang: "D3",
        rata_rata_raport: 85.53,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "D3",
        rata_rata_raport: 89.5,
      },
      {
        prodi: "TEKNIK INFORMATIKA (KAMPUS KABUPATEN MADIUN)",
        jenjang: "D3",
        rata_rata_raport: 83.53,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "D3",
        rata_rata_raport: 84.13,
      },
      {
        prodi: "TEKNOLOGI HASIL PERTANIAN",
        jenjang: "D3",
        rata_rata_raport: 84.52,
      },
      {
        prodi: "USAHA PERJALANAN WISATA",
        jenjang: "D3",
        rata_rata_raport: 87.37,
      },
      {
        prodi: "BAHASA MANDARIN UNTUK KOMUNIKASI BISNIS DAN PROFESIONAL",
        jenjang: "D4",
        rata_rata_raport: 83.53,
      },
      {
        prodi: "DEMOGRAFI DAN PENCATATAN SIPIL",
        jenjang: "D4",
        rata_rata_raport: 88.93,
      },
      {
        prodi: "KEPERAWATAN ANESTESIOLOGI",
        jenjang: "D4",
        rata_rata_raport: 90.35,
      },
      {
        prodi: "KESELAMATAN DAN KESEHATAN KERJA",
        jenjang: "D4",
        rata_rata_raport: 90.3,
      },
      {
        prodi: "PEMASARAN DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 83.18,
      },
      {
        prodi: "PERBANKAN DAN KEUANGAN DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 83.26,
      },
      {
        prodi: "TEKNOLOGI REKAYASA MANUFAKTUR",
        jenjang: "D4",
        rata_rata_raport: 83.09,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 89.71,
      },
      {
        prodi: "AGROTEKNOLOGI / AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.56,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 90.54,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 89.52,
      },
      {
        prodi: "BAHASA MANDARIN DAN KEBUDAYAAN TIONGKOK",
        jenjang: "S1",
        rata_rata_raport: 84.67,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 89.67,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.17,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 90.31,
      },
      {
        prodi: "DESAIN INTERIOR",
        jenjang: "S1",
        rata_rata_raport: 85.17,
      },
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "S1",
        rata_rata_raport: 89.77,
      },
      {
        prodi: "DESAIN MODE",
        jenjang: "S1",
        rata_rata_raport: 83.97,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 89.78,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 90.35,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.36,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 89.24,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 89.86,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA (KAMPUS KABUPATEN KEBUMEN)",
        jenjang: "S1",
        rata_rata_raport: 83.03,
      },
      {
        prodi: "ILMU DAN TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 89.79,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 90.74,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 90.7,
      },
      {
        prodi: "ILMU LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 87.77,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.66,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 86.88,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 91.86,
      },
      {
        prodi: "INFORMATIKA (KAMPUS KABUPATEN KEBUMEN)",
        jenjang: "S1",
        rata_rata_raport: 83.05,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "S1",
        rata_rata_raport: 89.29,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 93.93,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.37,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 90.89,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.21,
      },
      {
        prodi: "PEND. BAHASA, SASTRA INDONESIA & DAERAH",
        jenjang: "S1",
        rata_rata_raport: 88.69,
      },
      {
        prodi: "PEND. GURU PEND ANAK USIA DINI (PG-PAUD)",
        jenjang: "S1",
        rata_rata_raport: 85.69,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR (PGSD) KEBUMEN",
        jenjang: "S1",
        rata_rata_raport: 88.32,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR (PGSD) SURAKARTA",
        jenjang: "S1",
        rata_rata_raport: 88.59,
      },
      {
        prodi: "PEND. PANCASILA & KEWARGANEGARAAN (PPKN)",
        jenjang: "S1",
        rata_rata_raport: 86.52,
      },
      {
        prodi: "PENDIDIKAN ADMINISTRASI PERKANTORAN",
        jenjang: "S1",
        rata_rata_raport: 88.15,
      },
      {
        prodi: "PENDIDIKAN AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 85.57,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 89.06,
      },
      {
        prodi: "PENDIDIKAN BAHASA JAWA",
        jenjang: "S1",
        rata_rata_raport: 86.15,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.32,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 87.82,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.48,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.75,
      },
      {
        prodi: "PENDIDIKAN IPA",
        jenjang: "S1",
        rata_rata_raport: 86.48,
      },
      {
        prodi: "PENDIDIKAN JASMANI, KESEHATAN & REKREASI",
        jenjang: "S1",
        rata_rata_raport: 88.55,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 87.68,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.87,
      },
      {
        prodi: "PENDIDIKAN LUAR BIASA (PENDIDIKAN KHUSUS)",
        jenjang: "S1",
        rata_rata_raport: 85.69,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 88.13,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 86.97,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 84.47,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.53,
      },
      {
        prodi: "PENDIDIKAN TEKNIK BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.33,
      },
      {
        prodi: "PENDIDIKAN TEKNIK INFORMATIKA & KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 88.25,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.79,
      },
      {
        prodi: "PENGELOLAAN HUTAN",
        jenjang: "S1",
        rata_rata_raport: 86.94,
      },
      {
        prodi: "PENYULUHAN DAN KOMUNIKASI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.77,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA (PWK)",
        jenjang: "S1",
        rata_rata_raport: 87.89,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 88.74,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 83.07,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 90.89,
      },
      {
        prodi: "SAINS DATA",
        jenjang: "S1",
        rata_rata_raport: 88.43,
      },
      {
        prodi: "SASTRA ARAB",
        jenjang: "S1",
        rata_rata_raport: 86.3,
      },
      {
        prodi: "SASTRA DAERAH UNTUK SASTRA JAWA",
        jenjang: "S1",
        rata_rata_raport: 84.2,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.81,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 89.44,
      },
      {
        prodi: "SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 83.88,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.92,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 88.17,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 88.98,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 89.91,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 88.75,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 89.84,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.92,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 86.71,
      },
    ],
  },
  {
    ptn: "Universitas Diponegoro",
    singkatan: "UNDIP/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-undip/",
    prodi_data: [
      {
        prodi: "AKUNTANSI PERPAJAKAN",
        jenjang: "D4",
        rata_rata_raport: 88.91,
      },
      {
        prodi: "BAHASA ASING TERAPAN",
        jenjang: "D4",
        rata_rata_raport: 83.72,
      },
      {
        prodi: "INFORMASI DAN HUMAS",
        jenjang: "D4",
        rata_rata_raport: 86.16,
      },
      {
        prodi: "MANAJEMEN DAN ADMINISTRASI LOGISTIK",
        jenjang: "D4",
        rata_rata_raport: 87.56,
      },
      {
        prodi: "PERENCANAAN TATA RUANG DAN PERTANAHAN",
        jenjang: "D4",
        rata_rata_raport: 84.9,
      },
      {
        prodi: "REKAYASA PERANCANGAN MEKANIK",
        jenjang: "D4",
        rata_rata_raport: 83.37,
      },
      {
        prodi: "TEKNIK INFRASTRUKTUR SIPIL DAN PERANCANGAN ARSITEKTUR",
        jenjang: "D4",
        rata_rata_raport: 86.7,
      },
      {
        prodi: "TEKNIK LISTRIK INDUSTRI",
        jenjang: "D4",
        rata_rata_raport: 83.95,
      },
      {
        prodi: "TEKNOLOGI REKAYASA KIMIA INDUSTRI",
        jenjang: "D4",
        rata_rata_raport: 84.65,
      },
      {
        prodi: "TEKNOLOGI REKAYASA KONSTRUKSI PERKAPALAN",
        jenjang: "D4",
        rata_rata_raport: 83.58,
      },
      {
        prodi: "TEKNOLOGI REKAYASA OTOMASI",
        jenjang: "D4",
        rata_rata_raport: 83.67,
      },
      {
        prodi: "ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 90.11,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 89.03,
      },
      {
        prodi: "ADMINISTRASI PUBLIK KAMPUS REMBANG",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 87.3,
      },
      {
        prodi: "AGRIBISNIS KAMPUS BATANG",
        jenjang: "S1",
        rata_rata_raport: 83.3,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.88,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 84.07,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 90.24,
      },
      {
        prodi: "ANTROPOLOGI SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 86.79,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 88.54,
      },
      {
        prodi: "BAHASA DAN KEBUDAYAAN JEPANG",
        jenjang: "S1",
        rata_rata_raport: 86.02,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "BIOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.9,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 89.1,
      },
      {
        prodi: "EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 88.02,
      },
      {
        prodi: "EKONOMI ISLAM",
        jenjang: "S1",
        rata_rata_raport: 85.47,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 89.75,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.13,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 89.43,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 89.34,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 90.97,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 85.31,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 89.97,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 87.88,
      },
      {
        prodi: "ILMU PERPUSTAKAAN",
        jenjang: "S1",
        rata_rata_raport: 85.69,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 93.46,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 94.46,
      },
      {
        prodi: "KEDOKTERAN GIGI",
        jenjang: "S1",
        rata_rata_raport: 87.06,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 90.46,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 90.34,
      },
      {
        prodi: "KESELAMATAN DAN KESEHATAN KERJA",
        jenjang: "S1",
        rata_rata_raport: 89.92,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.33,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 91.53,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 84.74,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.66,
      },
      {
        prodi: "OCEANOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 84.84,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 88.14,
      },
      {
        prodi: "PERIKANAN TANGKAP",
        jenjang: "S1",
        rata_rata_raport: 83.49,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 86.92,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 93.51,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.39,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 87.81,
      },
      {
        prodi: "SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 84.77,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 88.1,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 88.77,
      },
      {
        prodi: "TEKNIK GEODESI",
        jenjang: "S1",
        rata_rata_raport: 86.76,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.31,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 89.94,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 88.52,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 88.94,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 87.51,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 88.69,
      },
      {
        prodi: "TEKNIK PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 86.23,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.71,
      },
      {
        prodi: "TEKNOLOGI DAN BISNIS PERIKANAN DAN KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.37,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.89,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 89.36,
      },
    ],
  },
  {
    ptn: "Universitas Negeri Semarang",
    singkatan: "UNNES/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unnes/",
    prodi_data: [
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "D3",
        rata_rata_raport: 83.52,
      },
      {
        prodi: "STATISTIKA TERAPAN DAN KOMPUTASI",
        jenjang: "D3",
        rata_rata_raport: 89.01,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.46,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 89.09,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.26,
      },
      {
        prodi: "EKONOMI DAN KEUANGAN ISLAM",
        jenjang: "S1",
        rata_rata_raport: 85.32,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 88.78,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 89.11,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.91,
      },
      {
        prodi: "GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 86.61,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 89.11,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.7,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 85.19,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 83.95,
      },
      {
        prodi: "ILMU LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 85.54,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 86.95,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.44,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 93.59,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 90.39,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.13,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.96,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.16,
      },
      {
        prodi: "P. SENI DRAMA, TARI & MUSIK (P. SENI MUSIK)",
        jenjang: "S1",
        rata_rata_raport: 83.82,
      },
      {
        prodi: "P. SENI DRAMA, TARI & MUSIK (P. SENI TARI)",
        jenjang: "S1",
        rata_rata_raport: 84.59,
      },
      {
        prodi: "PEND. TEKNIK INFORMATIKA & KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 86.7,
      },
      {
        prodi: "PEND.GURU PEND. ANAK USIA DINI (PGPAUD)",
        jenjang: "S1",
        rata_rata_raport: 85.98,
      },
      {
        prodi: "PENDIDIKAN ADMINISTRASI PERKANTORAN",
        jenjang: "S1",
        rata_rata_raport: 87.93,
      },
      {
        prodi: "PENDIDIKAN AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.57,
      },
      {
        prodi: "PENDIDIKAN BAHASA ARAB",
        jenjang: "S1",
        rata_rata_raport: 85.82,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 89.06,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA JAWA",
        jenjang: "S1",
        rata_rata_raport: 85.97,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.61,
      },
      {
        prodi: "PENDIDIKAN BAHASA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 85.8,
      },
      {
        prodi: "PENDIDIKAN BAHASA MANDARIN",
        jenjang: "S1",
        rata_rata_raport: 83.35,
      },
      {
        prodi: "PENDIDIKAN BAHASA PRANCIS",
        jenjang: "S1",
        rata_rata_raport: 83.13,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.37,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 84.97,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.03,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.36,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 89.89,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 86.26,
      },
      {
        prodi: "PENDIDIKAN IPA",
        jenjang: "S1",
        rata_rata_raport: 86.56,
      },
      {
        prodi: "PENDIDIKAN JASMANI SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 84.94,
      },
      {
        prodi: "PENDIDIKAN JASMANI, KESEHATAN & REKREASI",
        jenjang: "S1",
        rata_rata_raport: 88.45,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 87.21,
      },
      {
        prodi: "PENDIDIKAN KESEJAHTERAAN KELUARGA",
        jenjang: "S1",
        rata_rata_raport: 83.78,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.34,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 87.98,
      },
      {
        prodi: "PENDIDIKAN NON FORMAL",
        jenjang: "S1",
        rata_rata_raport: 84.21,
      },
      {
        prodi: "PENDIDIKAN PANCASILA & KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 86.57,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 86.36,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 83.95,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI & ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.78,
      },
      {
        prodi: "PENDIDIKAN TATA BOGA",
        jenjang: "S1",
        rata_rata_raport: 88.29,
      },
      {
        prodi: "PENDIDIKAN TATA BUSANA",
        jenjang: "S1",
        rata_rata_raport: 87.92,
      },
      {
        prodi: "PENDIDIKAN TATA KECANTIKAN",
        jenjang: "S1",
        rata_rata_raport: 87.44,
      },
      {
        prodi: "PENDIDIKAN TEKNIK BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 85.21,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.96,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.22,
      },
      {
        prodi: "PENDIDIKAN TEKNIK OTOMOTIF",
        jenjang: "S1",
        rata_rata_raport: 84.44,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 91.28,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.3,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 87.87,
      },
      {
        prodi: "SASTRA JAWA",
        jenjang: "S1",
        rata_rata_raport: 83.36,
      },
      {
        prodi: "SASTRA PRANCIS",
        jenjang: "S1",
        rata_rata_raport: 83.19,
      },
      {
        prodi: "SENI RUPA (DKV,LUKIS,PTNG,GRAFIS,GBR KRIYA)",
        jenjang: "S1",
        rata_rata_raport: 84.38,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 88.99,
      },
      {
        prodi: "STATISTIKA DAN SAINS DATA",
        jenjang: "S1",
        rata_rata_raport: 85.85,
      },
      {
        prodi: "TEKNIK ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 86.97,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.97,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 93.34,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 87.85,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 87.97,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 88.67,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 85.05,
      },
    ],
  },
  {
    ptn: "Universitas Gadjah Mada",
    singkatan: "UGM/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-ugm/",
    prodi_data: [
      {
        prodi: "AKUNTANSI SEKTOR PUBLIK",
        jenjang: "D4",
        rata_rata_raport: 90.05,
      },
      {
        prodi: "BAHASA INGGRIS",
        jenjang: "D4",
        rata_rata_raport: 88.02,
      },
      {
        prodi: "BAHASA JEPANG UNTUK KOMUNIKASI BISNIS DAN PROFESIONAL",
        jenjang: "D4",
        rata_rata_raport: 87.39,
      },
      {
        prodi: "BISNIS PERJALANAN WISATA",
        jenjang: "D4",
        rata_rata_raport: 89.2,
      },
      {
        prodi: "MANAJEMEN DAN PENILAIAN PROPERTI",
        jenjang: "D4",
        rata_rata_raport: 89.38,
      },
      {
        prodi: "MANAJEMEN INFORMASI KESEHATAN",
        jenjang: "D4",
        rata_rata_raport: 90.68,
      },
      {
        prodi: "PEMBANGUNAN EKONOMI KEWILAYAHAN",
        jenjang: "D4",
        rata_rata_raport: 88.75,
      },
      {
        prodi: "PENGELOLAAN ARSIP DAN REKAMAN INFORMASI",
        jenjang: "D4",
        rata_rata_raport: 89.51,
      },
      {
        prodi: "PENGELOLAAN HUTAN",
        jenjang: "D4",
        rata_rata_raport: 86.94,
      },
      {
        prodi: "PENGEMBANGAN PRODUK AGROINDUSTRI",
        jenjang: "D4",
        rata_rata_raport: 87.51,
      },
      {
        prodi: "PERBANKAN",
        jenjang: "D4",
        rata_rata_raport: 89.22,
      },
      {
        prodi: "SISTEM INFORMASI GEOGRAFIS",
        jenjang: "D4",
        rata_rata_raport: 86.44,
      },
      {
        prodi: "TEKNIK PENGELOLAAN DAN PEMELIHARAAN INFRASTRUKTUR SIPIL",
        jenjang: "D4",
        rata_rata_raport: 87.4,
      },
      {
        prodi: "TEKNIK PENGELOLAAN DAN PERAWATAN ALAT BERAT",
        jenjang: "D4",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "TEKNOLOGI REKAYASA ELEKTRO",
        jenjang: "D4",
        rata_rata_raport: 87.02,
      },
      {
        prodi: "TEKNOLOGI REKAYASA INSTRUMENTASI DAN KONTROL",
        jenjang: "D4",
        rata_rata_raport: 86.43,
      },
      {
        prodi: "TEKNOLOGI REKAYASA INTERNET",
        jenjang: "D4",
        rata_rata_raport: 88.33,
      },
      {
        prodi: "TEKNOLOGI REKAYASA MESIN",
        jenjang: "D4",
        rata_rata_raport: 87.35,
      },
      {
        prodi: "TEKNOLOGI REKAYASA PELAKSANAAN BANGUNAN SIPIL",
        jenjang: "D4",
        rata_rata_raport: 87.56,
      },
      {
        prodi: "TEKNOLOGI REKAYASA PERANGKAT LUNAK",
        jenjang: "D4",
        rata_rata_raport: 90.01,
      },
      {
        prodi: "TEKNOLOGI SURVEI DAN PEMETAAN DASAR",
        jenjang: "D4",
        rata_rata_raport: 86.81,
      },
      {
        prodi: "TEKNOLOGI VETERINER",
        jenjang: "D4",
        rata_rata_raport: 86.78,
      },
      {
        prodi: "AGRONOMI",
        jenjang: "S1",
        rata_rata_raport: 87.54,
      },
      {
        prodi: "AKUAKULTUR (BUDIDAYA PERIKANAN)",
        jenjang: "S1",
        rata_rata_raport: 86.35,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 93.49,
      },
      {
        prodi: "ANTROPOLOGI BUDAYA",
        jenjang: "S1",
        rata_rata_raport: 89.16,
      },
      {
        prodi: "ARKEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.2,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 90.15,
      },
      {
        prodi: "BAHASA DAN KEBUDAYAAN JEPANG",
        jenjang: "S1",
        rata_rata_raport: 88.09,
      },
      {
        prodi: "BAHASA DAN KEBUDAYAAN KOREA",
        jenjang: "S1",
        rata_rata_raport: 89.42,
      },
      {
        prodi: "BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 89.3,
      },
      {
        prodi: "BAHASA DAN SASTRA PRANCIS",
        jenjang: "S1",
        rata_rata_raport: 86.07,
      },
      {
        prodi: "BAHASA, SASTRA, DAN BUDAYA JAWA",
        jenjang: "S1",
        rata_rata_raport: 86.23,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.39,
      },
      {
        prodi: "EKONOMI PERTANIAN DAN AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 88.3,
      },
      {
        prodi: "ELEKTRONIKA DAN INSTRUMENTASI",
        jenjang: "S1",
        rata_rata_raport: 87.64,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 91.74,
      },
      {
        prodi: "FILSAFAT",
        jenjang: "S1",
        rata_rata_raport: 89.16,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.62,
      },
      {
        prodi: "GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.81,
      },
      {
        prodi: "GEOGRAFI LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 88.05,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 91.02,
      },
      {
        prodi: "HIGIENE GIGI",
        jenjang: "S1",
        rata_rata_raport: 87.44,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 94.63,
      },
      {
        prodi: "ILMU AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 89.65,
      },
      {
        prodi: "ILMU DAN INDUSTRI PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 89.53,
      },
      {
        prodi: "ILMU EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 90.02,
      },
      {
        prodi: "ILMU HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 91.3,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 91.48,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 94.16,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 91.32,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 86.63,
      },
      {
        prodi: "KARTOGRAFI DAN PENGINDERAAN JAUH",
        jenjang: "S1",
        rata_rata_raport: 87.7,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 96.9,
      },
      {
        prodi: "KEDOKTERAN GIGI",
        jenjang: "S1",
        rata_rata_raport: 94.21,
      },
      {
        prodi: "KEDOKTERAN HEWAN",
        jenjang: "S1",
        rata_rata_raport: 90.11,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 90.49,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 89.22,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 93.49,
      },
      {
        prodi: "MANAJEMEN DAN KEBIJAKAN PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 90.09,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA AKUATIK (MANAJEMEN SUMBER DAYA PERIKANAN)",
        jenjang: "S1",
        rata_rata_raport: 86.13,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 88.94,
      },
      {
        prodi: "MIKROBIOLOGI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.55,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 90.28,
      },
      {
        prodi: "PEMBANGUNAN SOSIAL DAN KESEJAHTERAAN",
        jenjang: "S1",
        rata_rata_raport: 89.96,
      },
      {
        prodi: "PEMBANGUNAN WILAYAH",
        jenjang: "S1",
        rata_rata_raport: 86.99,
      },
      {
        prodi: "PENYULUHAN DAN KOMUNIKASI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.0,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 89.34,
      },
      {
        prodi: "POLITIK DAN PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 89.3,
      },
      {
        prodi: "PROTEKSI TANAMAN (ILMU HAMA DAN PENYAKIT TUMBUHAN)",
        jenjang: "S1",
        rata_rata_raport: 86.38,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 95.88,
      },
      {
        prodi: "SASTRA ARAB",
        jenjang: "S1",
        rata_rata_raport: 89.82,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 89.64,
      },
      {
        prodi: "SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 87.21,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.15,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 90.01,
      },
      {
        prodi: "TEKNIK BIOMEDIS",
        jenjang: "S1",
        rata_rata_raport: 89.25,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 90.01,
      },
      {
        prodi: "TEKNIK FISIKA",
        jenjang: "S1",
        rata_rata_raport: 88.01,
      },
      {
        prodi: "TEKNIK GEODESI",
        jenjang: "S1",
        rata_rata_raport: 89.08,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 90.08,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 91.11,
      },
      {
        prodi: "TEKNIK INFRASTRUKTUR LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 88.03,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 90.27,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 90.79,
      },
      {
        prodi: "TEKNIK NUKLIR",
        jenjang: "S1",
        rata_rata_raport: 88.63,
      },
      {
        prodi: "TEKNIK PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 87.59,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 90.86,
      },
      {
        prodi: "TEKNIK SUMBER DAYA AIR",
        jenjang: "S1",
        rata_rata_raport: 86.71,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 86.07,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 88.44,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 91.24,
      },
      {
        prodi: "TEKNOLOGI PANGAN DAN HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 90.46,
      },
    ],
  },
  {
    ptn: "Universitas Negeri Yogyakarta",
    singkatan: "UNY/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-uny/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI PERKANTORAN",
        jenjang: "D4",
        rata_rata_raport: 87.8,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "D4",
        rata_rata_raport: 86.92,
      },
      {
        prodi: "MANAJEMEN PEMASARAN",
        jenjang: "D4",
        rata_rata_raport: 87.18,
      },
      {
        prodi: "MESIN OTOMOTIF",
        jenjang: "D4",
        rata_rata_raport: 85.24,
      },
      {
        prodi: "PENGELOLAAN USAHA REKREASI",
        jenjang: "D4",
        rata_rata_raport: 83.06,
      },
      {
        prodi: "PENGOBATAN TRADISIONAL INDONESIA",
        jenjang: "D4",
        rata_rata_raport: 83.11,
      },
      {
        prodi: "PROMOSI KESEHATAN",
        jenjang: "D4",
        rata_rata_raport: 84.34,
      },
      {
        prodi: "TATA BOGA",
        jenjang: "D4",
        rata_rata_raport: 88.58,
      },
      {
        prodi: "TATA BUSANA",
        jenjang: "D4",
        rata_rata_raport: 87.47,
      },
      {
        prodi: "TATA RIAS DAN KECANTIKAN",
        jenjang: "D4",
        rata_rata_raport: 87.33,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "D4",
        rata_rata_raport: 83.14,
      },
      {
        prodi: "TEKNIK ELEKTRONIKA",
        jenjang: "D4",
        rata_rata_raport: 83.9,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "D4",
        rata_rata_raport: 85.71,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "D4",
        rata_rata_raport: 84.18,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 89.18,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.46,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 86.95,
      },
      {
        prodi: "BIMBINGAN & KONSELING",
        jenjang: "S1",
        rata_rata_raport: 87.89,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.7,
      },
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "S1",
        rata_rata_raport: 88.3,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.69,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.24,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 85.27,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 89.59,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 88.69,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.74,
      },
      {
        prodi: "KEBIJAKAN PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 83.22,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 90.92,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.1,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.93,
      },
      {
        prodi: "MANAJEMEN PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 86.04,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.49,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 88.7,
      },
      {
        prodi: "PENDIDIKAN ADMINISTRASI PERKANTORAN",
        jenjang: "S1",
        rata_rata_raport: 87.64,
      },
      {
        prodi: "PENDIDIKAN AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 85.39,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.06,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.19,
      },
      {
        prodi: "PENDIDIKAN BAHASA JAWA",
        jenjang: "S1",
        rata_rata_raport: 86.71,
      },
      {
        prodi: "PENDIDIKAN BAHASA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 83.84,
      },
      {
        prodi: "PENDIDIKAN BAHASA PRANCIS",
        jenjang: "S1",
        rata_rata_raport: 83.1,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.62,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 86.8,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.87,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 86.35,
      },
      {
        prodi: "PENDIDIKAN GURU PAUD",
        jenjang: "S1",
        rata_rata_raport: 86.47,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 89.65,
      },
      {
        prodi: "PENDIDIKAN IPA",
        jenjang: "S1",
        rata_rata_raport: 85.95,
      },
      {
        prodi: "PENDIDIKAN IPS",
        jenjang: "S1",
        rata_rata_raport: 85.66,
      },
      {
        prodi: "PENDIDIKAN JASMANI KESEHATAN DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 87.87,
      },
      {
        prodi: "PENDIDIKAN JASMANI SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 84.38,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 86.97,
      },
      {
        prodi: "PENDIDIKAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 86.8,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.35,
      },
      {
        prodi: "PENDIDIKAN KRIYA",
        jenjang: "S1",
        rata_rata_raport: 83.63,
      },
      {
        prodi: "PENDIDIKAN LUAR BIASA",
        jenjang: "S1",
        rata_rata_raport: 86.39,
      },
      {
        prodi: "PENDIDIKAN LUAR SEKOLAH",
        jenjang: "S1",
        rata_rata_raport: 84.3,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 87.4,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 87.2,
      },
      {
        prodi: "PENDIDIKAN SENI MUSIK",
        jenjang: "S1",
        rata_rata_raport: 83.98,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 84.48,
      },
      {
        prodi: "PENDIDIKAN SENI TARI",
        jenjang: "S1",
        rata_rata_raport: 85.43,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.82,
      },
      {
        prodi: "PENDIDIKAN TEKNIK BOGA",
        jenjang: "S1",
        rata_rata_raport: 88.48,
      },
      {
        prodi: "PENDIDIKAN TEKNIK BUSANA",
        jenjang: "S1",
        rata_rata_raport: 88.23,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 83.73,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ELEKTRONIKA",
        jenjang: "S1",
        rata_rata_raport: 83.09,
      },
      {
        prodi: "PENDIDIKAN TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 87.73,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MEKATRONIKA",
        jenjang: "S1",
        rata_rata_raport: 83.11,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.94,
      },
      {
        prodi: "PENDIDIKAN TEKNIK OTOMOTIF",
        jenjang: "S1",
        rata_rata_raport: 85.94,
      },
      {
        prodi: "PENDIDIKAN TEKNIK SIPIL & PERENCANAAN",
        jenjang: "S1",
        rata_rata_raport: 84.05,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.61,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.14,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 87.74,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 85.99,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 87.36,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 87.83,
      },
      {
        prodi: "TEKNIK MANUFAKTUR",
        jenjang: "S1",
        rata_rata_raport: 85.29,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 88.05,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 88.36,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 84.73,
      },
    ],
  },
  {
    ptn: "UPN “Veteran” Yogyakarta",
    singkatan: "UPN-JOGJA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-upn-jogja/",
    prodi_data: [
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "D3",
        rata_rata_raport: 83.11,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.88,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.56,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 90.62,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 86.76,
      },
      {
        prodi: "HUBUNGAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 86.62,
      },
      {
        prodi: "ILMU ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 89.03,
      },
      {
        prodi: "ILMU HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 86.47,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 90.15,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 84.49,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 90.67,
      },
      {
        prodi: "METALURGI",
        jenjang: "S1",
        rata_rata_raport: 85.06,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.2,
      },
      {
        prodi: "TEKNIK GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.62,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.42,
      },
      {
        prodi: "TEKNIK GEOMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.3,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 87.46,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 90.17,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.31,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 85.35,
      },
      {
        prodi: "TEKNIK PERMINYAKAN",
        jenjang: "S1",
        rata_rata_raport: 89.7,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 90.87,
      },
    ],
  },
  {
    ptn: "Universitas Jember",
    singkatan: "UNEJ/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unej/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI KEUANGAN",
        jenjang: "D3",
        rata_rata_raport: 85.68,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "D3",
        rata_rata_raport: 88.95,
      },
      {
        prodi: "KEPERAWATAN (KAMPUS KOTA PASURUAN)",
        jenjang: "D3",
        rata_rata_raport: 87.62,
      },
      {
        prodi: "KESEKRETARIATAN",
        jenjang: "D3",
        rata_rata_raport: 85.1,
      },
      {
        prodi: "MANAJEMEN PERUSAHAAN",
        jenjang: "D3",
        rata_rata_raport: 86.13,
      },
      {
        prodi: "PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 86.64,
      },
      {
        prodi: "USAHA PERJALANAN WISATA",
        jenjang: "D3",
        rata_rata_raport: 85.62,
      },
      {
        prodi: "REKAYASA PERANCANGAN MEKANIK",
        jenjang: "D4",
        rata_rata_raport: 85.03,
      },
      {
        prodi: "TEKNOLOGI REKAYASA ELEKTRONIKA",
        jenjang: "D4",
        rata_rata_raport: 85.07,
      },
      {
        prodi: "TEKNOLOGI REKAYASA KONSTRUKSI BANGUNAN GEDUNG",
        jenjang: "D4",
        rata_rata_raport: 85.64,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 89.08,
      },
      {
        prodi: "AGRONOMI",
        jenjang: "S1",
        rata_rata_raport: 86.33,
      },
      {
        prodi: "AGROTEKNOLOGI / AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.23,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.96,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.28,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 88.89,
      },
      {
        prodi: "EKONOMI SYARIAH",
        jenjang: "S1",
        rata_rata_raport: 87.7,
      },
      {
        prodi: "EKONOMI SYARIAH KAMPUS BONDOWOSO",
        jenjang: "S1",
        rata_rata_raport: 85.25,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 90.55,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.85,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 89.13,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 91.64,
      },
      {
        prodi: "ILMU ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 89.57,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 89.27,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 90.01,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 90.47,
      },
      {
        prodi: "ILMU KESEJAHTERAAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 88.06,
      },
      {
        prodi: "ILMU PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.39,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 86.53,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 86.19,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 92.88,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 90.24,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.89,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 90.31,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.86,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR KAMPUS BONDOWOSO",
        jenjang: "S1",
        rata_rata_raport: 87.46,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.75,
      },
      {
        prodi: "PENDIDIKAN BHS. & SASTRA INDO.",
        jenjang: "S1",
        rata_rata_raport: 89.43,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.36,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 94.92,
      },
      {
        prodi: "PENDIDIKAN DOKTER GIGI",
        jenjang: "S1",
        rata_rata_raport: 91.9,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 87.99,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.41,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 87.43,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 88.29,
      },
      {
        prodi: "PENDIDIKAN IPA",
        jenjang: "S1",
        rata_rata_raport: 88.54,
      },
      {
        prodi: "PENDIDIKAN LUAR SEKOLAH",
        jenjang: "S1",
        rata_rata_raport: 85.84,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 88.95,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 87.91,
      },
      {
        prodi: "PENYULUHAN PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 85.91,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 87.3,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 86.7,
      },
      {
        prodi: "PG PAUD",
        jenjang: "S1",
        rata_rata_raport: 87.12,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 85.38,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.88,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 87.89,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 89.11,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.72,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 87.54,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.3,
      },
      {
        prodi: "TEKNIK KONSTRUKSI PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 85.26,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 87.24,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 88.03,
      },
      {
        prodi: "TEKNIK PERMINYAKAN",
        jenjang: "S1",
        rata_rata_raport: 86.63,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 88.57,
      },
      {
        prodi: "TEKNIK PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.72,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.06,
      },
      {
        prodi: "TEKNOLOGI HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 87.12,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.79,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 88.29,
      },
      {
        prodi: "TELEVISI & FILM",
        jenjang: "S1",
        rata_rata_raport: 88.11,
      },
    ],
  },
  {
    ptn: "Universitas Brawijaya",
    singkatan: "UB/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-ub/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI BISNIS",
        jenjang: "D3",
        rata_rata_raport: 88.53,
      },
      {
        prodi: "KEUANGAN DAN PERBANKAN",
        jenjang: "D3",
        rata_rata_raport: 86.77,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "D3",
        rata_rata_raport: 86.44,
      },
      {
        prodi: "DESAIN GRAFIS",
        jenjang: "D4",
        rata_rata_raport: 88.11,
      },
      {
        prodi: "MANAJEMEN PERHOTELAN",
        jenjang: "D4",
        rata_rata_raport: 88.74,
      },
      {
        prodi: "ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 91.9,
      },
      {
        prodi: "ADMINISTRASI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 86.77,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 91.34,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 90.66,
      },
      {
        prodi: "AGRIBISNIS (PSDKU KEDIRI)",
        jenjang: "S1",
        rata_rata_raport: 87.14,
      },
      {
        prodi: "AGROBISNIS PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 86.26,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 90.68,
      },
      {
        prodi: "AGROEKOTEKNOLOGI (PSDKU KEDIRI)",
        jenjang: "S1",
        rata_rata_raport: 86.95,
      },
      {
        prodi: "AKUAKULTUR (PSDKU KEDIRI)",
        jenjang: "S1",
        rata_rata_raport: 85.28,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 91.58,
      },
      {
        prodi: "ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.99,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 89.99,
      },
      {
        prodi: "BAHASA DAN SASTRA PRANCIS",
        jenjang: "S1",
        rata_rata_raport: 85.12,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.85,
      },
      {
        prodi: "BIOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.72,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 85.73,
      },
      {
        prodi: "EKONOMI ISLAM",
        jenjang: "S1",
        rata_rata_raport: 88.26,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 89.64,
      },
      {
        prodi: "EKONOMI, KEUANGAN DAN PERBANKAN",
        jenjang: "S1",
        rata_rata_raport: 90.81,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 91.51,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.82,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 91.13,
      },
      {
        prodi: "ILMU AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 88.52,
      },
      {
        prodi: "ILMU GIZI",
        jenjang: "S1",
        rata_rata_raport: 90.91,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 92.86,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 87.13,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 91.47,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 91.51,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 89.25,
      },
      {
        prodi: "ILMU PERPUSTAKAAN",
        jenjang: "S1",
        rata_rata_raport: 86.57,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 88.77,
      },
      {
        prodi: "INSTRUMENTASI",
        jenjang: "S1",
        rata_rata_raport: 85.46,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "S1",
        rata_rata_raport: 90.62,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 94.85,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 88.36,
      },
      {
        prodi: "KEWIRAUSAHAAN",
        jenjang: "S1",
        rata_rata_raport: 88.78,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 87.86,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 91.74,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 86.72,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 87.28,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 90.64,
      },
      {
        prodi: "PEMANFAATAN SUMBERDAYA PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 85.54,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.0,
      },
      {
        prodi: "PENDIDIKAN BAHASA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 85.71,
      },
      {
        prodi: "PENDIDIKAN BHS & SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 87.06,
      },
      {
        prodi: "PENDIDIKAN DOKTER GIGI",
        jenjang: "S1",
        rata_rata_raport: 92.66,
      },
      {
        prodi: "PENDIDIKAN DOKTER HEWAN",
        jenjang: "S1",
        rata_rata_raport: 89.68,
      },
      {
        prodi: "PENDIDIKAN TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 85.99,
      },
      {
        prodi: "PERENCANAAN WILAYAH & KOTA",
        jenjang: "S1",
        rata_rata_raport: 89.23,
      },
      {
        prodi: "PERPAJAKAN",
        jenjang: "S1",
        rata_rata_raport: 93.13,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 90.14,
      },
      {
        prodi: "PETERNAKAN (PSDKU KEDIRI)",
        jenjang: "S1",
        rata_rata_raport: 86.35,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 93.67,
      },
      {
        prodi: "SAINS DATA",
        jenjang: "S1",
        rata_rata_raport: 88.94,
      },
      {
        prodi: "SASTRA CINA",
        jenjang: "S1",
        rata_rata_raport: 86.59,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 89.93,
      },
      {
        prodi: "SASTRA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 87.76,
      },
      {
        prodi: "SENI RUPA MURNI",
        jenjang: "S1",
        rata_rata_raport: 85.03,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 91.4,
      },
      {
        prodi: "SOSIAL EKONOMI PERIKANAN (PSDKU KEDIRI)",
        jenjang: "S1",
        rata_rata_raport: 85.35,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.2,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 93.92,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 89.2,
      },
      {
        prodi: "TEKNIK GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 91.09,
      },
      {
        prodi: "TEKNIK INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 88.45,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 92.68,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 89.41,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 89.4,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 89.19,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 89.77,
      },
      {
        prodi: "TEKNIK PENGAIRAN",
        jenjang: "S1",
        rata_rata_raport: 86.59,
      },
      {
        prodi: "TEKNIK PERTANIAN DAN BIOSISTEM",
        jenjang: "S1",
        rata_rata_raport: 86.92,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 90.44,
      },
      {
        prodi: "TEKNOLOGI BIOPROSES",
        jenjang: "S1",
        rata_rata_raport: 87.23,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 86.43,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 90.52,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 90.82,
      },
    ],
  },
  {
    ptn: "Universitas Negeri Malang",
    singkatan: "UM/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-um/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D4",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "ANIMASI",
        jenjang: "D4",
        rata_rata_raport: 85.16,
      },
      {
        prodi: "DESAIN MODE",
        jenjang: "D4",
        rata_rata_raport: 85.23,
      },
      {
        prodi: "MANAJEMEN PEMASARAN",
        jenjang: "D4",
        rata_rata_raport: 87.15,
      },
      {
        prodi: "PERPUSTAKAAN DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 83.96,
      },
      {
        prodi: "TATA BOGA",
        jenjang: "D4",
        rata_rata_raport: 88.22,
      },
      {
        prodi: "TEKNOLOGI REKAYASA DAN PEMELIHARAAN BANGUNAN SIPIL",
        jenjang: "D4",
        rata_rata_raport: 84.28,
      },
      {
        prodi: "TEKNOLOGI REKAYASA MANUFAKTUR",
        jenjang: "D4",
        rata_rata_raport: 83.22,
      },
      {
        prodi: "TEKNOLOGI REKAYASA OTOMOTIF",
        jenjang: "D4",
        rata_rata_raport: 84.22,
      },
      {
        prodi: "TEKNOLOGI REKAYASA PEMBANGKIT ENERGI",
        jenjang: "D4",
        rata_rata_raport: 83.99,
      },
      {
        prodi: "TEKNOLOGI REKAYASA SISTEM ELEKTRONIKA",
        jenjang: "D4",
        rata_rata_raport: 83.41,
      },
      {
        prodi: "ADMINISTRASI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 88.58,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 90.62,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 83.72,
      },
      {
        prodi: "BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.02,
      },
      {
        prodi: "BAHASA DAN SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 89.1,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 90.2,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.52,
      },
      {
        prodi: "BIOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.92,
      },
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "S1",
        rata_rata_raport: 89.81,
      },
      {
        prodi: "EKONOMI DAN STUDI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 89.36,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.34,
      },
      {
        prodi: "GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 86.93,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 90.35,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 83.59,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 85.92,
      },
      {
        prodi: "ILMU KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 90.66,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 90.66,
      },
      {
        prodi: "ILMU PERPUSTAKAAN",
        jenjang: "S1",
        rata_rata_raport: 87.33,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "S1",
        rata_rata_raport: 87.17,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 89.24,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 90.11,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.62,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 90.85,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 83.64,
      },
      {
        prodi: "PEND. BAHASA, SASTRA INDONESIA & DAERAH",
        jenjang: "S1",
        rata_rata_raport: 89.62,
      },
      {
        prodi: "PENDIDIKAN ADMINISTRASI PERKANTORAN",
        jenjang: "S1",
        rata_rata_raport: 90.14,
      },
      {
        prodi: "PENDIDIKAN AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.18,
      },
      {
        prodi: "PENDIDIKAN BAHASA ARAB",
        jenjang: "S1",
        rata_rata_raport: 87.93,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 89.23,
      },
      {
        prodi: "PENDIDIKAN BAHASA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 83.96,
      },
      {
        prodi: "PENDIDIKAN BAHASA MANDARIN",
        jenjang: "S1",
        rata_rata_raport: 84.33,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.2,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 87.54,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.76,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 87.6,
      },
      {
        prodi: "PENDIDIKAN GURU PEND. ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 86.79,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 90.72,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN ALAM",
        jenjang: "S1",
        rata_rata_raport: 88.52,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 86.63,
      },
      {
        prodi: "PENDIDIKAN JASMANI, KESEHATAN, DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 89.04,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 87.21,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.09,
      },
      {
        prodi: "PENDIDIKAN LUAR BIASA",
        jenjang: "S1",
        rata_rata_raport: 85.9,
      },
      {
        prodi: "PENDIDIKAN LUAR SEKOLAH",
        jenjang: "S1",
        rata_rata_raport: 85.02,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 89.6,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 89.5,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 88.24,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 85.4,
      },
      {
        prodi: "PENDIDIKAN SENI TARI DAN MUSIK",
        jenjang: "S1",
        rata_rata_raport: 85.01,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.52,
      },
      {
        prodi: "PENDIDIKAN TATA BOGA",
        jenjang: "S1",
        rata_rata_raport: 88.74,
      },
      {
        prodi: "PENDIDIKAN TATA BUSANA",
        jenjang: "S1",
        rata_rata_raport: 88.81,
      },
      {
        prodi: "PENDIDIKAN TATA NIAGA",
        jenjang: "S1",
        rata_rata_raport: 86.61,
      },
      {
        prodi: "PENDIDIKAN TEKNIK BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.61,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "PENDIDIKAN TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.81,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.8,
      },
      {
        prodi: "PENDIDIKAN TEKNIK OTOMOTIF",
        jenjang: "S1",
        rata_rata_raport: 85.41,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 90.85,
      },
      {
        prodi: "SAINS AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 83.94,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 87.78,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 89.69,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 90.56,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 83.84,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 88.82,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.83,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 86.41,
      },
    ],
  },
  {
    ptn: "Universitas Airlangga",
    singkatan: "UNAIR/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unair/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 88.64,
      },
      {
        prodi: "BAHASA INGGRIS",
        jenjang: "D3",
        rata_rata_raport: 85.29,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "D3",
        rata_rata_raport: 88.47,
      },
      {
        prodi: "MANAJEMEN PEMASARAN",
        jenjang: "D3",
        rata_rata_raport: 85.93,
      },
      {
        prodi: "PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 87.77,
      },
      {
        prodi: "DESTINASI PARIWISATA",
        jenjang: "D4",
        rata_rata_raport: 87.88,
      },
      {
        prodi: "FISIOTERAPI",
        jenjang: "D4",
        rata_rata_raport: 88.84,
      },
      {
        prodi: "KEARSIPAN DAN INFORMASI DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 86.67,
      },
      {
        prodi: "KESELAMATAN DAN KESEHATAN KERJA",
        jenjang: "D4",
        rata_rata_raport: 89.18,
      },
      {
        prodi: "MANAJEMEN PERHOTELAN",
        jenjang: "D4",
        rata_rata_raport: 87.49,
      },
      {
        prodi: "MANAJEMEN PERKANTORAN DIGITAL",
        jenjang: "D4",
        rata_rata_raport: 88.42,
      },
      {
        prodi: "PENGOBAT TRADISIONAL",
        jenjang: "D4",
        rata_rata_raport: 85.33,
      },
      {
        prodi: "PERBANKAN DAN KEUANGAN",
        jenjang: "D4",
        rata_rata_raport: 87.98,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "D4",
        rata_rata_raport: 88.29,
      },
      {
        prodi: "TEKNOLOGI KESEHATAN GIGI",
        jenjang: "D4",
        rata_rata_raport: 90.08,
      },
      {
        prodi: "TEKNOLOGI LABORATORIUM MEDIK",
        jenjang: "D4",
        rata_rata_raport: 89.94,
      },
      {
        prodi: "TEKNOLOGI RADIOLOGI PENCITRAAN",
        jenjang: "D4",
        rata_rata_raport: 89.2,
      },
      {
        prodi: "TEKNOLOGI REKAYASA INSTRUMENTASI DAN KONTROL",
        jenjang: "D4",
        rata_rata_raport: 85.56,
      },
      {
        prodi: "TEKNOLOGI VETERINER",
        jenjang: "D4",
        rata_rata_raport: 89.28,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 88.9,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 85.59,
      },
      {
        prodi: "AKUAKULTUR (FIKKIA BANYUWANGI)",
        jenjang: "S1",
        rata_rata_raport: 85.19,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 91.14,
      },
      {
        prodi: "ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.5,
      },
      {
        prodi: "BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.79,
      },
      {
        prodi: "BAHASA DAN SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.98,
      },
      {
        prodi: "BAHASA DAN SASTRA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 86.71,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.7,
      },
      {
        prodi: "EKONOMI ISLAM",
        jenjang: "S1",
        rata_rata_raport: 88.36,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 88.87,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 90.86,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.46,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 89.07,
      },
      {
        prodi: "ILMU HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 89.08,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 90.7,
      },
      {
        prodi: "ILMU INFORMASI DAN PERPUSTAKAAN",
        jenjang: "S1",
        rata_rata_raport: 87.11,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 89.21,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 86.8,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 86.05,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "S1",
        rata_rata_raport: 88.71,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 94.92,
      },
      {
        prodi: "KEDOKTERAN (FIKKIA BANYUWANGI)",
        jenjang: "S1",
        rata_rata_raport: 90.13,
      },
      {
        prodi: "KEDOKTERAN GIGI",
        jenjang: "S1",
        rata_rata_raport: 89.63,
      },
      {
        prodi: "KEDOKTERAN HEWAN",
        jenjang: "S1",
        rata_rata_raport: 88.86,
      },
      {
        prodi: "KEDOKTERAN HEWAN (FIKKIA BANYUWANGI)",
        jenjang: "S1",
        rata_rata_raport: 86.32,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 90.48,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 89.78,
      },
      {
        prodi: "KESEHATAN MASYARAKAT (FIKKIA BANYUWANGI)",
        jenjang: "S1",
        rata_rata_raport: 86.35,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.13,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 90.83,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.04,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 92.47,
      },
      {
        prodi: "REKAYASA NANOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.84,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 89.06,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.69,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 88.68,
      },
      {
        prodi: "TEKNIK BIOMEDIS",
        jenjang: "S1",
        rata_rata_raport: 87.91,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.3,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 88.74,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 87.26,
      },
      {
        prodi: "TEKNIK ROBOTIKA DAN KECERDASAN BUATAN",
        jenjang: "S1",
        rata_rata_raport: 91.11,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 85.86,
      },
      {
        prodi: "TEKNOLOGI SAINS DATA",
        jenjang: "S1",
        rata_rata_raport: 88.18,
      },
    ],
  },
  {
    ptn: "Institut Teknologi Sepuluh Nopember",
    singkatan: "ITS/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-its/",
    prodi_data: [
      {
        prodi: "ANALITIKA LOGISTIK TERAPAN",
        jenjang: "D4",
        rata_rata_raport: 86.12,
      },
      {
        prodi: "STATISTIKA BISNIS",
        jenjang: "D4",
        rata_rata_raport: 89.41,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "D4",
        rata_rata_raport: 89.81,
      },
      {
        prodi: "TEKNOLOGI REKAYASA INSTRUMENTASI",
        jenjang: "D4",
        rata_rata_raport: 87.99,
      },
      {
        prodi: "TEKNOLOGI REKAYASA KIMIA INDUSTRI",
        jenjang: "D4",
        rata_rata_raport: 89.35,
      },
      {
        prodi: "TEKNOLOGI REKAYASA KONSTRUKSI BANGUNAN AIR",
        jenjang: "D4",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "TEKNOLOGI REKAYASA KONVERSI ENERGI",
        jenjang: "D4",
        rata_rata_raport: 86.19,
      },
      {
        prodi: "TEKNOLOGI REKAYASA MANUFAKTUR",
        jenjang: "D4",
        rata_rata_raport: 87.27,
      },
      {
        prodi: "TEKNOLOGI REKAYASA OTOMASI",
        jenjang: "D4",
        rata_rata_raport: 88.57,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 91.55,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.83,
      },
      {
        prodi: "BIOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.93,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 85.4,
      },
      {
        prodi: "DESAIN INTERIOR",
        jenjang: "S1",
        rata_rata_raport: 88.3,
      },
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "S1",
        rata_rata_raport: 91.97,
      },
      {
        prodi: "DESAIN PRODUK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 88.14,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.21,
      },
      {
        prodi: "INOVASI DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 85.04,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 91.34,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 89.6,
      },
      {
        prodi: "MANAJEMEN BISNIS",
        jenjang: "S1",
        rata_rata_raport: 91.66,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 89.59,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 91.42,
      },
      {
        prodi: "REKAYASA KECERDASAN ARTIFISIAL",
        jenjang: "S1",
        rata_rata_raport: 90.0,
      },
      {
        prodi: "REKAYASA KESELAMATAN PROSES",
        jenjang: "S1",
        rata_rata_raport: 85.63,
      },
      {
        prodi: "REKAYASA PERANGKAT LUNAK",
        jenjang: "S1",
        rata_rata_raport: 88.26,
      },
      {
        prodi: "SAINS AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 90.58,
      },
      {
        prodi: "SAINS ANALITIK DAN INSTRUMENTASI KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.18,
      },
      {
        prodi: "SAINS DATA",
        jenjang: "S1",
        rata_rata_raport: 88.83,
      },
      {
        prodi: "SAINS KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 85.74,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 92.77,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 91.47,
      },
      {
        prodi: "STUDI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 88.02,
      },
      {
        prodi: "TEK. SIST PERKAPALAN (GLR GANDA ITS-JERMAN)",
        jenjang: "S1",
        rata_rata_raport: 86.17,
      },
      {
        prodi: "TEKNIK BIOMEDIK",
        jenjang: "S1",
        rata_rata_raport: 90.19,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 92.65,
      },
      {
        prodi: "TEKNIK FISIKA",
        jenjang: "S1",
        rata_rata_raport: 89.39,
      },
      {
        prodi: "TEKNIK GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 88.24,
      },
      {
        prodi: "TEKNIK GEOMATIKA",
        jenjang: "S1",
        rata_rata_raport: 88.97,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 92.76,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 92.83,
      },
      {
        prodi: "TEKNIK KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 89.63,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 92.01,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 90.35,
      },
      {
        prodi: "TEKNIK LEPAS PANTAI",
        jenjang: "S1",
        rata_rata_raport: 86.65,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 90.58,
      },
      {
        prodi: "TEKNIK MATERIAL",
        jenjang: "S1",
        rata_rata_raport: 91.71,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 92.11,
      },
      {
        prodi: "TEKNIK PANGAN",
        jenjang: "S1",
        rata_rata_raport: 88.88,
      },
      {
        prodi: "TEKNIK PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 90.78,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 92.13,
      },
      {
        prodi: "TEKNIK SISTEM PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 89.91,
      },
      {
        prodi: "TEKNIK TELEKOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 86.63,
      },
      {
        prodi: "TEKNIK TRANSPORTASI LAUT",
        jenjang: "S1",
        rata_rata_raport: 86.68,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 91.01,
      },
      {
        prodi: "TEKNOLOGI KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 88.81,
      },
    ],
  },
  {
    ptn: "Universitas Negeri Surabaya",
    singkatan: "UNESA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unesa/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI NEGARA",
        jenjang: "D4",
        rata_rata_raport: 86.09,
      },
      {
        prodi: "ANALISIS PERFORMA OLAHRAGA",
        jenjang: "D4",
        rata_rata_raport: 83.86,
      },
      {
        prodi: "DESAIN GRAFIS",
        jenjang: "D4",
        rata_rata_raport: 84.56,
      },
      {
        prodi: "KEPELATIHAN OLAHRAGA",
        jenjang: "D4",
        rata_rata_raport: 84.29,
      },
      {
        prodi: "MANAJEMEN INFORMATIKA",
        jenjang: "D4",
        rata_rata_raport: 85.25,
      },
      {
        prodi: "PRODUKSI MEDIA",
        jenjang: "D4",
        rata_rata_raport: 83.82,
      },
      {
        prodi: "TATA BOGA",
        jenjang: "D4",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "TATA BUSANA",
        jenjang: "D4",
        rata_rata_raport: 85.15,
      },
      {
        prodi: "TEKNIK LISTRIK",
        jenjang: "D4",
        rata_rata_raport: 84.51,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "D4",
        rata_rata_raport: 84.78,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "D4",
        rata_rata_raport: 85.18,
      },
      {
        prodi: "TEKNOLOGI REKAYASA OTOMOTIF",
        jenjang: "D4",
        rata_rata_raport: 83.81,
      },
      {
        prodi: "TRANSPORTASI",
        jenjang: "D4",
        rata_rata_raport: 84.46,
      },
      {
        prodi: "AGRIBISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 83.72,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 83.58,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.9,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 86.74,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING (KAMPUS KABUPATEN MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 83.42,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.69,
      },
      {
        prodi: "BIOSAINS HEWAN",
        jenjang: "S1",
        rata_rata_raport: 83.7,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 86.88,
      },
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "S1",
        rata_rata_raport: 86.33,
      },
      {
        prodi: "EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 86.63,
      },
      {
        prodi: "EKONOMI ISLAM",
        jenjang: "S1",
        rata_rata_raport: 85.77,
      },
      {
        prodi: "FILM DAN ANIMASI",
        jenjang: "S1",
        rata_rata_raport: 83.7,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.46,
      },
      {
        prodi: "FISIOTERAPI",
        jenjang: "S1",
        rata_rata_raport: 83.02,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 86.79,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 83.21,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 86.85,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA (PSDKU MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 83.75,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.88,
      },
      {
        prodi: "ILMU HUKUM (UNESA KAMPUS MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 84.36,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 85.16,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 86.9,
      },
      {
        prodi: "ILMU KOMUNIKASI (UNESA KAMPUS MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 84.56,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 84.89,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "S1",
        rata_rata_raport: 83.14,
      },
      {
        prodi: "KECERDASAN ARTIFISIAL",
        jenjang: "S1",
        rata_rata_raport: 83.75,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 86.08,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 83.18,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.4,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.96,
      },
      {
        prodi: "MANAJEMEN (UNESA KAMPUS MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 84.92,
      },
      {
        prodi: "MANAJEMEN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 84.14,
      },
      {
        prodi: "MANAJEMEN PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 86.09,
      },
      {
        prodi: "MASASE",
        jenjang: "S1",
        rata_rata_raport: 83.01,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.2,
      },
      {
        prodi: "MUSIK",
        jenjang: "S1",
        rata_rata_raport: 84.23,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 83.65,
      },
      {
        prodi: "PENDIDIKAN ADMINISTRASI PERKANTORAN",
        jenjang: "S1",
        rata_rata_raport: 86.75,
      },
      {
        prodi: "PENDIDIKAN AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 85.44,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.64,
      },
      {
        prodi:
          "PENDIDIKAN BAHASA DAN SASTRA INDONESIA (KAMPUS KABUPATEN MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 83.46,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA JAWA",
        jenjang: "S1",
        rata_rata_raport: 85.46,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.5,
      },
      {
        prodi: "PENDIDIKAN BAHASA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 85.49,
      },
      {
        prodi: "PENDIDIKAN BAHASA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 84.22,
      },
      {
        prodi: "PENDIDIKAN BAHASA MANDARIN",
        jenjang: "S1",
        rata_rata_raport: 84.51,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.2,
      },
      {
        prodi: "PENDIDIKAN BISNIS",
        jenjang: "S1",
        rata_rata_raport: 84.99,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 85.88,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.7,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.52,
      },
      {
        prodi: "PENDIDIKAN GURU PENDIDIKAN ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 85.99,
      },
      {
        prodi:
          "PENDIDIKAN GURU PENDIDIKAN ANAK USIA DINI (KAMPUS KABUPATEN MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 83.31,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 86.95,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR (UNESA KAMPUS MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 85.14,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN ALAM",
        jenjang: "S1",
        rata_rata_raport: 85.71,
      },
      {
        prodi: "PENDIDIKAN IPS",
        jenjang: "S1",
        rata_rata_raport: 85.52,
      },
      {
        prodi: "PENDIDIKAN JASMANI, KESEHATAN, DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 86.49,
      },
      {
        prodi:
          "PENDIDIKAN JASMANI, KESEHATAN, DAN REKREASI (UNESA KAMPUS MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 84.09,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA (KAMPUS KABUPATEN MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 83.45,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.9,
      },
      {
        prodi: "PENDIDIKAN LUAR BIASA",
        jenjang: "S1",
        rata_rata_raport: 84.72,
      },
      {
        prodi: "PENDIDIKAN LUAR SEKOLAH",
        jenjang: "S1",
        rata_rata_raport: 84.58,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.3,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA (UNESA KAMPUS MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 84.09,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 85.9,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 86.05,
      },
      {
        prodi: "PENDIDIKAN SENI DRAMA, TARI, DAN MUSIK",
        jenjang: "S1",
        rata_rata_raport: 84.69,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 84.6,
      },
      {
        prodi: "PENDIDIKAN TATA BOGA",
        jenjang: "S1",
        rata_rata_raport: 86.46,
      },
      {
        prodi: "PENDIDIKAN TATA BUSANA",
        jenjang: "S1",
        rata_rata_raport: 86.41,
      },
      {
        prodi: "PENDIDIKAN TATA RIAS",
        jenjang: "S1",
        rata_rata_raport: 86.18,
      },
      {
        prodi: "PENDIDIKAN TATA RIAS (UNESA KAMPUS MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 84.09,
      },
      {
        prodi: "PENDIDIKAN TEKNIK BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.38,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.51,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.49,
      },
      {
        prodi: "PENDIDIKAN TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 85.3,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 83.28,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.92,
      },
      {
        prodi: "SAINS AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 83.29,
      },
      {
        prodi: "SAINS DATA",
        jenjang: "S1",
        rata_rata_raport: 86.34,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.4,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.47,
      },
      {
        prodi: "SASTRA INGGRIS (UNESA KAMPUS MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 83.89,
      },
      {
        prodi: "SASTRA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 84.3,
      },
      {
        prodi: "SENI RUPA MURNI",
        jenjang: "S1",
        rata_rata_raport: 84.17,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.72,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.1,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.38,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.87,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 86.5,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 86.6,
      },
      {
        prodi: "TEKNOLOGI PANGAN DAN HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 83.58,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 85.17,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN (KAMPUS KABUPATEN MAGETAN)",
        jenjang: "S1",
        rata_rata_raport: 83.4,
      },
    ],
  },
  {
    ptn: "Universitas Trunojoyo Madura",
    singkatan: "TRUNOJOYO/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-trunojoyo/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 83.31,
      },
      {
        prodi: "ENTERPRENEURSHIP",
        jenjang: "D3",
        rata_rata_raport: 83.29,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.12,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.68,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 85.48,
      },
      {
        prodi: "EKONOMI SYARIAH",
        jenjang: "S1",
        rata_rata_raport: 85.19,
      },
      {
        prodi: "HUKUM BISNIS SYARIAH",
        jenjang: "S1",
        rata_rata_raport: 84.12,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.5,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.45,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 86.1,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.89,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.31,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.82,
      },
      {
        prodi: "PENDIDIKAN GURU ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 84.6,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN ALAM",
        jenjang: "S1",
        rata_rata_raport: 85.72,
      },
      {
        prodi: "PENDIDIKAN INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.49,
      },
      {
        prodi: "PGSD",
        jenjang: "S1",
        rata_rata_raport: 86.9,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.49,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 84.75,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.5,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 83.88,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 85.75,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.19,
      },
      {
        prodi: "TEKNIK MEKATRONIKA",
        jenjang: "S1",
        rata_rata_raport: 83.44,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.14,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 83.49,
      },
    ],
  },
  {
    ptn: "UPN “Veteran” Jawa Timur",
    singkatan: "UPN-JATIM/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-upn-jatim/",
    prodi_data: [
      {
        prodi: "BAHASA INGGRIS UNTUK KOMUNIKASI BISNIS DAN PROFESIONAL",
        jenjang: "D4",
        rata_rata_raport: 85.53,
      },
      {
        prodi: "ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 89.69,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 89.11,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 87.38,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.04,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.33,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 86.85,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 86.21,
      },
      {
        prodi: "DESAIN INTERIOR",
        jenjang: "S1",
        rata_rata_raport: 86.04,
      },
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "S1",
        rata_rata_raport: 86.17,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 88.22,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.16,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 87.68,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.05,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 89.42,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 90.91,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 91.82,
      },
      {
        prodi: "KEWIRAUSAHAAN",
        jenjang: "S1",
        rata_rata_raport: 86.46,
      },
      {
        prodi: "LINGUISTIK INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.21,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.82,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 87.67,
      },
      {
        prodi: "SAINS DATA",
        jenjang: "S1",
        rata_rata_raport: 86.41,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 88.55,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 88.71,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 87.34,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 87.74,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 86.18,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.15,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 88.29,
      },
    ],
  },
  {
    ptn: "Universitas Tanjungpura",
    singkatan: "UNTAN/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-untan/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI PERKANTORAN",
        jenjang: "D3",
        rata_rata_raport: 86.76,
      },
      {
        prodi: "BUDIDAYA TANAMAN PERKEBUNAN",
        jenjang: "D3",
        rata_rata_raport: 85.51,
      },
      {
        prodi: "KEARSIPAN",
        jenjang: "D3",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "KESEKRETARIATAN",
        jenjang: "D3",
        rata_rata_raport: 85.76,
      },
      {
        prodi: "PERPUSTAKAAN",
        jenjang: "D3",
        rata_rata_raport: 85.29,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 86.21,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.56,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.37,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 90.57,
      },
      {
        prodi: "AKUNTANSI (KELAS INTERNASIONAL)",
        jenjang: "S1",
        rata_rata_raport: 83.54,
      },
      {
        prodi: "ANTROPOLOGI SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 83.91,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 85.13,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 84.72,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.66,
      },
      {
        prodi: "EKONOMI ISLAM",
        jenjang: "S1",
        rata_rata_raport: 83.98,
      },
      {
        prodi: "EKONOMI PEMBANGUAN",
        jenjang: "S1",
        rata_rata_raport: 85.95,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 86.58,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.02,
      },
      {
        prodi: "GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.11,
      },
      {
        prodi: "ILMU DAN TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 84.83,
      },
      {
        prodi: "ILMU HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 85.73,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 91.58,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.21,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 86.12,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 86.05,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 84.71,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 83.96,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 92.31,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 86.02,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 86.3,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.29,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.84,
      },
      {
        prodi: "MANAJEMEN (KELAS INTERNASIONAL)",
        jenjang: "S1",
        rata_rata_raport: 84.53,
      },
      {
        prodi: "MANAJEMEN SUMBER DAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.53,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 83.26,
      },
      {
        prodi: "PEMBANGUNAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 83.96,
      },
      {
        prodi: "PEND. BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 85.68,
      },
      {
        prodi: "PEND. BAHASA MANDARIN",
        jenjang: "S1",
        rata_rata_raport: 83.72,
      },
      {
        prodi: "PEND. BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.54,
      },
      {
        prodi: "PEND. EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 84.15,
      },
      {
        prodi: "PEND. FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.4,
      },
      {
        prodi: "PEND. GURU PEND. ANAK USIA DINI (PGPAUD)",
        jenjang: "S1",
        rata_rata_raport: 84.24,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR (PGSD)",
        jenjang: "S1",
        rata_rata_raport: 86.74,
      },
      {
        prodi: "PEND. KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.65,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.05,
      },
      {
        prodi: "PEND. SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.36,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.95,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 83.39,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 83.79,
      },
      {
        prodi: "PENDIDIKAN JASMANI",
        jenjang: "S1",
        rata_rata_raport: 83.79,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 83.07,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 83.85,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 83.91,
      },
      {
        prodi: "PENDIDIKAN SENI PERTUNJUKAN",
        jenjang: "S1",
        rata_rata_raport: 83.1,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 84.81,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 83.53,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.08,
      },
      {
        prodi: "SISTEM KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 85.54,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.34,
      },
      {
        prodi: "STATISTIK",
        jenjang: "S1",
        rata_rata_raport: 83.95,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.59,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 85.36,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 92.54,
      },
      {
        prodi: "TEKNIK KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.22,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.33,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 84.97,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.0,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 85.51,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 86.05,
      },
    ],
  },
  {
    ptn: "Universitas Palangkaraya",
    singkatan: "UPR/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-upr/",
    prodi_data: [
      {
        prodi: "TEKNOLOGI LABORATORIUM MEDIS",
        jenjang: "D4",
        rata_rata_raport: 85.4,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.51,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.47,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 84.9,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.53,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.44,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 85.15,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 86.21,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.1,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 86.33,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.4,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 85.82,
      },
      {
        prodi: "ILMU SOSIAL EKONOMI PERTANIAN (AGRIBISNIS)",
        jenjang: "S1",
        rata_rata_raport: 85.49,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 92.77,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 85.57,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.48,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 90.97,
      },
      {
        prodi: "MANAJEMEN PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 84.35,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 84.17,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.01,
      },
      {
        prodi: "PEND. BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 85.66,
      },
      {
        prodi: "PEND. BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.67,
      },
      {
        prodi: "PEND. EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 84.41,
      },
      {
        prodi: "PEND. FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.72,
      },
      {
        prodi: "PEND. GURU PEND ANAK USIA DINI (PG PAUD)",
        jenjang: "S1",
        rata_rata_raport: 84.85,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR (PGSD)",
        jenjang: "S1",
        rata_rata_raport: 86.48,
      },
      {
        prodi: "PEND. JASMANI, KESEHATAN DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 84.72,
      },
      {
        prodi: "PEND. KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.27,
      },
      {
        prodi: "PEND. LUAR SEKOLAH",
        jenjang: "S1",
        rata_rata_raport: 83.01,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.07,
      },
      {
        prodi: "PEND. PANCASILA & KEWARGANEGARAAN (PPKN)",
        jenjang: "S1",
        rata_rata_raport: 84.96,
      },
      {
        prodi: "PEND. TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.77,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.52,
      },
      {
        prodi: "PENDIDIKAN SENI DRAMA TARI DAN MUSIK",
        jenjang: "S1",
        rata_rata_raport: 83.9,
      },
      {
        prodi: "PENDIDIKAN TEKNIK BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 83.28,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 83.79,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.22,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 90.73,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 89.21,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 85.78,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.36,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.98,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
    ],
  },
  {
    ptn: "Universitas Lambung Mangkurat",
    singkatan: "ULM/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-ulm/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 89.86,
      },
      {
        prodi: "PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 86.74,
      },
      {
        prodi: "ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 86.47,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 86.14,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.37,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.75,
      },
      {
        prodi: "AGRONOMI",
        jenjang: "S1",
        rata_rata_raport: 84.04,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 83.27,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.23,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 85.46,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 85.32,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.15,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 85.46,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 86.55,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.36,
      },
      {
        prodi: "GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 84.57,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.68,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 84.08,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 86.16,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 85.91,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 83.49,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 91.96,
      },
      {
        prodi: "KEDOKTERAN GIGI",
        jenjang: "S1",
        rata_rata_raport: 89.15,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 85.48,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 85.97,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 86.27,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.47,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 90.93,
      },
      {
        prodi: "MANAJEMEN SUMBER DAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.52,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.24,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.27,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 85.57,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.41,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 84.47,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.25,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 83.73,
      },
      {
        prodi: "PENDIDIKAN GURU PENDIDIKAN ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 85.2,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 86.02,
      },
      {
        prodi: "PENDIDIKAN IPA",
        jenjang: "S1",
        rata_rata_raport: 83.94,
      },
      {
        prodi: "PENDIDIKAN IPS",
        jenjang: "S1",
        rata_rata_raport: 83.57,
      },
      {
        prodi: "PENDIDIKAN JASMANI",
        jenjang: "S1",
        rata_rata_raport: 85.21,
      },
      {
        prodi: "PENDIDIKAN KHUSUS",
        jenjang: "S1",
        rata_rata_raport: 83.95,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.3,
      },
      {
        prodi: "PENDIDIKAN KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 85.28,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.26,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 84.85,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 83.61,
      },
      {
        prodi: "PENDIDIKAN SENI PERTUNJUKAN",
        jenjang: "S1",
        rata_rata_raport: 83.48,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.77,
      },
      {
        prodi: "PERIKANAN TANGKAP",
        jenjang: "S1",
        rata_rata_raport: 83.14,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 84.07,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 83.37,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.28,
      },
      {
        prodi: "REKAYASA ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 83.77,
      },
      {
        prodi: "REKAYASA GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.65,
      },
      {
        prodi: "SOSIAL EKONOMI PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.07,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.77,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 88.36,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.16,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 85.8,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.37,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 85.92,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.43,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.88,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.2,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 84.04,
      },
    ],
  },
  {
    ptn: "Universitas Mulawarman",
    singkatan: "UNMUL/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unmul/",
    prodi_data: [
      {
        prodi: "FARMASI",
        jenjang: "D3",
        rata_rata_raport: 85.75,
      },
      {
        prodi: "ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 88.59,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 87.96,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 86.62,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.24,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 83.24,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 88.58,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 85.91,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 87.12,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.27,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 87.2,
      },
      {
        prodi: "EKONOMI SYARIAH",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "ETNOMUSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.02,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 88.47,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.22,
      },
      {
        prodi: "GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.28,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 87.21,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 90.57,
      },
      {
        prodi: "ILMU HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 87.43,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 84.35,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 83.19,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 88.18,
      },
      {
        prodi: "ILMU LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 83.87,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 87.45,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 89.32,
      },
      {
        prodi: "KEDOKTERAN GIGI",
        jenjang: "S1",
        rata_rata_raport: 87.58,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 87.78,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 88.24,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 88.42,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.93,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 88.64,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 83.85,
      },
      {
        prodi: "PEMBANGUNAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 84.64,
      },
      {
        prodi: "PEND. BAHASA, SASTRA INDO. & DAERAH",
        jenjang: "S1",
        rata_rata_raport: 86.3,
      },
      {
        prodi: "PEND. PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "PENDIDIKAN ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.81,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.76,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 92.55,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 85.23,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.51,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.09,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 88.27,
      },
      {
        prodi: "PENDIDIKAN JASMANI",
        jenjang: "S1",
        rata_rata_raport: 85.04,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.41,
      },
      {
        prodi: "PENDIDIKAN KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 86.75,
      },
      {
        prodi: "PENDIDIKAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 83.8,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.99,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 86.44,
      },
      {
        prodi: "PENGELOLAAN SUMBERDAYA PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.83,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 84.44,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.33,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 84.7,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.97,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 87.81,
      },
      {
        prodi: "SOSIAL EKONOMI PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.76,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 85.85,
      },
      {
        prodi: "TARI",
        jenjang: "S1",
        rata_rata_raport: 83.09,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 85.7,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.96,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 87.11,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.55,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 87.08,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 88.15,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 87.81,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.31,
      },
      {
        prodi: "TEKNOLOGI HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 85.02,
      },
    ],
  },
  {
    ptn: "Institut Teknologi Kalimantan",
    singkatan: "ITK/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-itk/",
    prodi_data: [
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 86.67,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 88.83,
      },
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "S1",
        rata_rata_raport: 84.61,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.42,
      },
      {
        prodi: "ILMU AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 89.02,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 83.36,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 87.32,
      },
      {
        prodi: "REKAYASA KESELAMATAN",
        jenjang: "S1",
        rata_rata_raport: 89.45,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 88.86,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 83.7,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 87.69,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 88.32,
      },
      {
        prodi: "TEKNIK KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.53,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.7,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 87.12,
      },
      {
        prodi: "TEKNIK LOGISTIK",
        jenjang: "S1",
        rata_rata_raport: 85.71,
      },
      {
        prodi: "TEKNIK MATERIAL DAN METALURGI",
        jenjang: "S1",
        rata_rata_raport: 86.92,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 87.55,
      },
      {
        prodi: "TEKNIK PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 86.52,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 88.11,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 85.11,
      },
    ],
  },
  {
    ptn: "Universitas Borneo Tarakan",
    singkatan: "UBT/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-ubt/",
    prodi_data: [
      {
        prodi: "KEBIDANAN",
        jenjang: "D3",
        rata_rata_raport: 83.84,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 84.91,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 83.06,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 85.75,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 85.44,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.91,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.15,
      },
      {
        prodi: "HUKUM BISNIS",
        jenjang: "S1",
        rata_rata_raport: 83.33,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "S1",
        rata_rata_raport: 85.17,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 85.72,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 86.79,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.96,
      },
      {
        prodi: "MANAJEMEN SUMBER DAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.49,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 84.81,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 84.14,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.98,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 86.51,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.01,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.95,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.78,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 86.25,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.35,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 85.09,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.93,
      },
    ],
  },
  {
    ptn: "Universitas Udayana",
    singkatan: "UNUD/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unud/",
    prodi_data: [
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 85.65,
      },
      {
        prodi: "PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 86.75,
      },
      {
        prodi: "PERPUSTAKAAN",
        jenjang: "D3",
        rata_rata_raport: 85.29,
      },
      {
        prodi: "PENGELOLAAN PERHOTELAN",
        jenjang: "D4",
        rata_rata_raport: 87.18,
      },
      {
        prodi: "ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 87.87,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 87.16,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.7,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 85.07,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.48,
      },
      {
        prodi: "ANTROPOLOGI BUDAYA",
        jenjang: "S1",
        rata_rata_raport: 86.4,
      },
      {
        prodi: "ARKEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.37,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 87.81,
      },
      {
        prodi: "ARSITEKTUR LANSKAP",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.19,
      },
      {
        prodi: "EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 88.06,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 89.4,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.43,
      },
      {
        prodi: "FISIOTERAPI",
        jenjang: "S1",
        rata_rata_raport: 87.59,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 88.45,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.53,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 86.54,
      },
      {
        prodi: "ILMU KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 88.55,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 88.78,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 86.82,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 86.18,
      },
      {
        prodi: "INDUSTRI PERJALANAN WISATA",
        jenjang: "S1",
        rata_rata_raport: 87.32,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 90.88,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 92.93,
      },
      {
        prodi: "KEDOKTERAN GIGI",
        jenjang: "S1",
        rata_rata_raport: 89.61,
      },
      {
        prodi: "KEDOKTERAN HEWAN",
        jenjang: "S1",
        rata_rata_raport: 87.76,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 88.9,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.68,
      },
      {
        prodi: "MANAJEMEN SUMBER DAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 86.45,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.38,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 89.11,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 86.57,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.24,
      },
      {
        prodi: "SASTRA BALI",
        jenjang: "S1",
        rata_rata_raport: 85.17,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.42,
      },
      {
        prodi: "SASTRA JAWA KUNO",
        jenjang: "S1",
        rata_rata_raport: 85.05,
      },
      {
        prodi: "SASTRA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 86.86,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.55,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 87.3,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 87.55,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 86.58,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 87.54,
      },
      {
        prodi: "TEKNIK PERTANIAN DAN BIOSISTEM",
        jenjang: "S1",
        rata_rata_raport: 85.32,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 88.43,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.27,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 88.59,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 87.44,
      },
    ],
  },
  {
    ptn: "Universitas Pendidikan Ganesha",
    singkatan: "UNDIKSHA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-undiksha/",
    prodi_data: [
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "D3",
        rata_rata_raport: 84.44,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "D3",
        rata_rata_raport: 84.3,
      },
      {
        prodi: "PERPUSTAKAAN",
        jenjang: "D3",
        rata_rata_raport: 83.3,
      },
      {
        prodi: "AKUNTANSI SEKTOR PUBLIK",
        jenjang: "D4",
        rata_rata_raport: 83.76,
      },
      {
        prodi: "BAHASA INGGRIS UNTUK KOMUNIKASI BISNIS DAN PROFESIONAL",
        jenjang: "D4",
        rata_rata_raport: 85.02,
      },
      {
        prodi: "BIOTEKNOLOGI PERIKANAN",
        jenjang: "D4",
        rata_rata_raport: 83.09,
      },
      {
        prodi: "KIMIA TERAPAN",
        jenjang: "D4",
        rata_rata_raport: 83.03,
      },
      {
        prodi: "PENGELOLAAN PERHOTELAN",
        jenjang: "D4",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "TEKNOLOGI REKAYASA PENGINDERAAN JAUH",
        jenjang: "D4",
        rata_rata_raport: 83.19,
      },
      {
        prodi: "TEKNOLOGI REKAYASA PERANGKAT LUNAK",
        jenjang: "D4",
        rata_rata_raport: 83.31,
      },
      {
        prodi: "TEKNOLOGI REKAYASA SISTEM ELEKTRONIKA",
        jenjang: "D4",
        rata_rata_raport: 83.74,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 83.59,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.68,
      },
      {
        prodi: "BIMBINGAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 86.31,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.03,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.12,
      },
      {
        prodi: "GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 83.8,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.59,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 83.36,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 85.79,
      },
      {
        prodi: "KEBIDANAN",
        jenjang: "S1",
        rata_rata_raport: 85.3,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 91.79,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 86.5,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.52,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.78,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 83.58,
      },
      {
        prodi: "PEND. BAHASA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 84.55,
      },
      {
        prodi: "PENDIDIKAN BAHASA BALI",
        jenjang: "S1",
        rata_rata_raport: 84.29,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.68,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.08,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 85.79,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.49,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 84.77,
      },
      {
        prodi: "PENDIDIKAN GURU ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 84.56,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 86.96,
      },
      {
        prodi: "PENDIDIKAN IPA",
        jenjang: "S1",
        rata_rata_raport: 84.98,
      },
      {
        prodi: "PENDIDIKAN JASMANI KESEHATAN DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 85.88,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 84.28,
      },
      {
        prodi: "PENDIDIKAN KESEJAHTERAAN KELUARGA",
        jenjang: "S1",
        rata_rata_raport: 84.83,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.84,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.98,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 85.77,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.21,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 83.56,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.62,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 83.78,
      },
      {
        prodi: "PENDIDIKAN TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.18,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL SENI KULINER",
        jenjang: "S1",
        rata_rata_raport: 84.72,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.43,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 84.0,
      },
    ],
  },
  {
    ptn: "Universitas Mataram",
    singkatan: "UNRAM/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unram/",
    prodi_data: [
      {
        prodi: "AGRIBISNIS PETERNAKAN",
        jenjang: "D3",
        rata_rata_raport: 85.12,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "D3",
        rata_rata_raport: 85.41,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "D3",
        rata_rata_raport: 87.78,
      },
      {
        prodi: "PERPAJAKAN",
        jenjang: "D3",
        rata_rata_raport: 87.4,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 88.86,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.44,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.44,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 88.15,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 89.1,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 89.72,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.27,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 89.77,
      },
      {
        prodi: "ILMU DAN TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 88.76,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.43,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 86.31,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 89.28,
      },
      {
        prodi: "ILMU LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 86.69,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 86.3,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 87.44,
      },
      {
        prodi: "KETEKNIKAN PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.77,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.97,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.98,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.39,
      },
      {
        prodi: "PENDIDIKAN ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 87.92,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.79,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 87.02,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.78,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 93.39,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.92,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 89.96,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.16,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 88.4,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 88.51,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.95,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 88.41,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.12,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 86.98,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 87.91,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 87.28,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 92.77,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 87.76,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.15,
      },
    ],
  },
  {
    ptn: "Universitas Nusa Cendana",
    singkatan: "UNDANA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-undana/",
    prodi_data: [
      {
        prodi: "TEKNIK PEMBUATAN TENUN IKAT",
        jenjang: "D3",
        rata_rata_raport: 83.07,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.12,
      },
      {
        prodi: "AGRONOMI/AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.99,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.67,
      },
      {
        prodi: "BIMBINGAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 86.15,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.8,
      },
      {
        prodi: "BUDIDAYA PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.67,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 86.49,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.18,
      },
      {
        prodi: "ILMU ADM.NEGARA",
        jenjang: "S1",
        rata_rata_raport: 86.18,
      },
      {
        prodi: "ILMU ADM.NIAGA",
        jenjang: "S1",
        rata_rata_raport: 85.08,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.35,
      },
      {
        prodi: "ILMU KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 86.75,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 87.37,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "ILMU PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 85.43,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 83.87,
      },
      {
        prodi: "KEDOKTERAN HEWAN",
        jenjang: "S1",
        rata_rata_raport: 85.65,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 84.07,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.66,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.37,
      },
      {
        prodi: "MANAJEMEN SUMBER DAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.27,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 83.89,
      },
      {
        prodi: "PEND. ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 85.64,
      },
      {
        prodi: "PEND. BHS & SASTRA INDO.",
        jenjang: "S1",
        rata_rata_raport: 85.88,
      },
      {
        prodi: "PEND. BHS. INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 85.98,
      },
      {
        prodi: "PEND. BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.2,
      },
      {
        prodi: "PEND. EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 84.4,
      },
      {
        prodi: "PEND. FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.85,
      },
      {
        prodi: "PEND. GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.75,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 86.74,
      },
      {
        prodi: "PEND. KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.71,
      },
      {
        prodi: "PEND. LUAR SEKOLAH",
        jenjang: "S1",
        rata_rata_raport: 83.13,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.57,
      },
      {
        prodi: "PEND. SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.41,
      },
      {
        prodi: "PEND. TEKNIK BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 83.16,
      },
      {
        prodi: "PEND. TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 83.55,
      },
      {
        prodi: "PEND. TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 83.56,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 90.89,
      },
      {
        prodi: "PENJASKESREK",
        jenjang: "S1",
        rata_rata_raport: 84.24,
      },
      {
        prodi: "PPKN",
        jenjang: "S1",
        rata_rata_raport: 86.25,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.85,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.87,
      },
      {
        prodi: "TEKNIK ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 85.07,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 85.03,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.35,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 84.86,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 86.21,
      },
    ],
  },
  {
    ptn: "Universitas Timor",
    singkatan: "UNIMOR/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unimor/",
    prodi_data: [
      {
        prodi: "KEPERAWATAN",
        jenjang: "D3",
        rata_rata_raport: 85.67,
      },
      {
        prodi: "ADM. NEGARA",
        jenjang: "S1",
        rata_rata_raport: 86.71,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.07,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.08,
      },
      {
        prodi: "EKO. PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 85.68,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 85.67,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.55,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.84,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 83.41,
      },
      {
        prodi: "PEND. BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.38,
      },
      {
        prodi: "PEND. BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 85.37,
      },
      {
        prodi: "PEND. BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.54,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.57,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 85.4,
      },
      {
        prodi: "TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.99,
      },
    ],
  },
  {
    ptn: "Universitas Hasanuddin",
    singkatan: "UNHAS/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unhas/",
    prodi_data: [
      {
        prodi: "AGRIBISNIS PANGAN",
        jenjang: "D4",
        rata_rata_raport: 83.51,
      },
      {
        prodi: "AGRIBISNIS PETERNAKAN",
        jenjang: "D4",
        rata_rata_raport: 83.32,
      },
      {
        prodi: "BUDI DAYA LAUT DAN PANTAI",
        jenjang: "D4",
        rata_rata_raport: 83.05,
      },
      {
        prodi: "DESTINASI PARIWISATA",
        jenjang: "D4",
        rata_rata_raport: 83.51,
      },
      {
        prodi: "PARAMEDIK VETERINER",
        jenjang: "D4",
        rata_rata_raport: 83.14,
      },
      {
        prodi: "PENGINDERAAN JAUH DAN SISTEM INFORMASI GEOGRAFIS",
        jenjang: "D4",
        rata_rata_raport: 84.96,
      },
      {
        prodi: "TEKNOLOGI AKUAKULTUR DAN PASCA PANEN PERIKANAN",
        jenjang: "D4",
        rata_rata_raport: 83.03,
      },
      {
        prodi: "TEKNOLOGI METALURGI EKSTRAKSI",
        jenjang: "D4",
        rata_rata_raport: 84.93,
      },
      {
        prodi: "TEKNOLOGI PAKAN TERNAK",
        jenjang: "D4",
        rata_rata_raport: 83.06,
      },
      {
        prodi: "TEKNOLOGI PRODUKSI TANAMAN PANGAN",
        jenjang: "D4",
        rata_rata_raport: 83.18,
      },
      {
        prodi: "TEKNOLOGI PRODUKSI TERNAK",
        jenjang: "D4",
        rata_rata_raport: 83.09,
      },
      {
        prodi: "TERAPI GIGI",
        jenjang: "D4",
        rata_rata_raport: 85.55,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 88.84,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 88.01,
      },
      {
        prodi: "AGROBISNIS PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 84.42,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.19,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.18,
      },
      {
        prodi: "ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.04,
      },
      {
        prodi: "ARKEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.05,
      },
      {
        prodi: "BAHASA MANDARIN DAN KEBUDAYAAN TIONGKOK",
        jenjang: "S1",
        rata_rata_raport: 84.73,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.88,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.7,
      },
      {
        prodi: "EKONOMI DAN BISNIS ISLAM",
        jenjang: "S1",
        rata_rata_raport: 86.05,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 87.93,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 89.89,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.12,
      },
      {
        prodi: "FISOTERAPI",
        jenjang: "S1",
        rata_rata_raport: 87.89,
      },
      {
        prodi: "GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.46,
      },
      {
        prodi: "HUKUM ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 88.08,
      },
      {
        prodi: "ILMU AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 86.71,
      },
      {
        prodi: "ILMU DAN TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 86.72,
      },
      {
        prodi: "ILMU GIZI",
        jenjang: "S1",
        rata_rata_raport: 89.09,
      },
      {
        prodi: "ILMU HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 88.89,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.6,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 85.76,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 89.37,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 89.13,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 87.23,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 86.37,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 84.23,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 84.59,
      },
      {
        prodi: "KEDOKTERAN HEWAN",
        jenjang: "S1",
        rata_rata_raport: 87.23,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 87.97,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 89.56,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.45,
      },
      {
        prodi: "KONSERVASI HUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.88,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.62,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.73,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.76,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "S1",
        rata_rata_raport: 87.7,
      },
      {
        prodi: "PEMANFAATAN SUMBERDAYA PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.54,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 93.64,
      },
      {
        prodi: "PENDIDIKAN DOKTER GIGI",
        jenjang: "S1",
        rata_rata_raport: 89.28,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 86.79,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 87.11,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 83.78,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 91.14,
      },
      {
        prodi: "REKAYASA KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 84.23,
      },
      {
        prodi: "SASTRA ARAB",
        jenjang: "S1",
        rata_rata_raport: 84.55,
      },
      {
        prodi: "SASTRA DAERAH",
        jenjang: "S1",
        rata_rata_raport: 83.32,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.64,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 87.54,
      },
      {
        prodi: "SASTRA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 85.58,
      },
      {
        prodi: "SASTRA PERANCIS",
        jenjang: "S1",
        rata_rata_raport: 83.32,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 89.02,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.64,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 87.72,
      },
      {
        prodi: "TEKNIK ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 87.74,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 88.15,
      },
      {
        prodi: "TEKNIK GEODESI",
        jenjang: "S1",
        rata_rata_raport: 84.9,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.92,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 88.65,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 90.42,
      },
      {
        prodi: "TEKNIK KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 85.27,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 87.39,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 87.74,
      },
      {
        prodi: "TEKNIK METALURGI DAN MATERIAL",
        jenjang: "S1",
        rata_rata_raport: 84.92,
      },
      {
        prodi: "TEKNIK PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 86.67,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 90.33,
      },
      {
        prodi: "TEKNIK PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.31,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.09,
      },
      {
        prodi: "TEKNIK SISTEM PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 85.37,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.54,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.8,
      },
    ],
  },
  {
    ptn: "Universitas Negeri Makassar",
    singkatan: "UNM-MAKASSAR/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unm-makassar/",
    prodi_data: [
      {
        prodi: "TATA BUSANA",
        jenjang: "D3",
        rata_rata_raport: 87.03,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "D4",
        rata_rata_raport: 86.47,
      },
      {
        prodi: "ANIMASI",
        jenjang: "D4",
        rata_rata_raport: 84.44,
      },
      {
        prodi: "BAHASA INGGRIS",
        jenjang: "D4",
        rata_rata_raport: 85.55,
      },
      {
        prodi: "MESIN OTOMOTIF",
        jenjang: "D4",
        rata_rata_raport: 85.82,
      },
      {
        prodi: "PROMOSI KESEHATAN",
        jenjang: "D4",
        rata_rata_raport: 84.31,
      },
      {
        prodi: "TATA BOGA",
        jenjang: "D4",
        rata_rata_raport: 87.31,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "D4",
        rata_rata_raport: 87.66,
      },
      {
        prodi: "TEKNIK ELEKTRONIKA",
        jenjang: "D4",
        rata_rata_raport: 85.04,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "D4",
        rata_rata_raport: 87.17,
      },
      {
        prodi: "TEKNIK SIPIL BANGUNAN GEDUNG",
        jenjang: "D4",
        rata_rata_raport: 87.9,
      },
      {
        prodi: "ADMINISTRASI KESEHATAN",
        jenjang: "S1",
        rata_rata_raport: 89.68,
      },
      {
        prodi: "ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 89.33,
      },
      {
        prodi: "ADMINISTRASI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 87.99,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.48,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 88.32,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 89.56,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.26,
      },
      {
        prodi: "BIOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.63,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 88.98,
      },
      {
        prodi: "DESAIN KOMUNIKASI VISUAL",
        jenjang: "S1",
        rata_rata_raport: 87.68,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 87.79,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.54,
      },
      {
        prodi: "FISIOTERAPI",
        jenjang: "S1",
        rata_rata_raport: 88.34,
      },
      {
        prodi: "GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 86.63,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 89.41,
      },
      {
        prodi: "HUKUM BISNIS",
        jenjang: "S1",
        rata_rata_raport: 88.79,
      },
      {
        prodi: "ILMU ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 89.28,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 86.84,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 91.0,
      },
      {
        prodi: "KEWIRAUSAHAAN",
        jenjang: "S1",
        rata_rata_raport: 88.14,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 86.7,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.95,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 87.0,
      },
      {
        prodi: "P. GURU SEK DASAR BILINGUAL (KAMP MAKASSAR)",
        jenjang: "S1",
        rata_rata_raport: 87.59,
      },
      {
        prodi: "PEND. ADMINISTRASI PERKANTORAN",
        jenjang: "S1",
        rata_rata_raport: 89.1,
      },
      {
        prodi: "PEND. AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 87.11,
      },
      {
        prodi: "PEND. BIOLOGI KLS INTERNASIONAL (BILINGUAL)",
        jenjang: "S1",
        rata_rata_raport: 85.05,
      },
      {
        prodi: "PEND. FISIKA KLS INTERNASIONAL (BILINGUAL)",
        jenjang: "S1",
        rata_rata_raport: 84.31,
      },
      {
        prodi: "PEND. GEOGRAFI KLS INTERNAS. (BILINGUAL)",
        jenjang: "S1",
        rata_rata_raport: 84.89,
      },
      {
        prodi: "PEND. GURU SEK. DASAR (KAMPUS MAKASSAR)",
        jenjang: "S1",
        rata_rata_raport: 89.91,
      },
      {
        prodi: "PEND. GURU SEK. DASAR (KAMPUS PARE-PARE)",
        jenjang: "S1",
        rata_rata_raport: 88.52,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR (KAMPUS BONE)",
        jenjang: "S1",
        rata_rata_raport: 88.86,
      },
      {
        prodi: "PEND. KIMIA KLS INTERNASIONAL (BILINGUAL)",
        jenjang: "S1",
        rata_rata_raport: 84.77,
      },
      {
        prodi: "PEND. MATEMATIKA KLS INTERNAS. (BILINGUAL)",
        jenjang: "S1",
        rata_rata_raport: 85.38,
      },
      {
        prodi: "PEND. TEKNIK ELEKTRONIKA",
        jenjang: "S1",
        rata_rata_raport: 85.71,
      },
      {
        prodi: "PEND. TEKNIK OTOMOTIF",
        jenjang: "S1",
        rata_rata_raport: 86.78,
      },
      {
        prodi: "PENDIDIKAAN SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.22,
      },
      {
        prodi: "PENDIDIKAN ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.24,
      },
      {
        prodi: "PENDIDIKAN BAHASA ARAB",
        jenjang: "S1",
        rata_rata_raport: 87.94,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA DAERAH",
        jenjang: "S1",
        rata_rata_raport: 86.24,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 89.14,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 89.1,
      },
      {
        prodi: "PENDIDIKAN BAHASA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 84.64,
      },
      {
        prodi: "PENDIDIKAN BAHASA MANDARIN",
        jenjang: "S1",
        rata_rata_raport: 85.81,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.49,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 88.12,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 86.73,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 87.88,
      },
      {
        prodi: "PENDIDIKAN GURU PAUD",
        jenjang: "S1",
        rata_rata_raport: 88.7,
      },
      {
        prodi: "PENDIDIKAN IPA",
        jenjang: "S1",
        rata_rata_raport: 87.52,
      },
      {
        prodi: "PENDIDIKAN IPA KLS INTERNASIONAL (BILINGUAL)",
        jenjang: "S1",
        rata_rata_raport: 84.61,
      },
      {
        prodi: "PENDIDIKAN IPS",
        jenjang: "S1",
        rata_rata_raport: 87.31,
      },
      {
        prodi: "PENDIDIKAN JASMANI, KESEHATAN & REKREASI",
        jenjang: "S1",
        rata_rata_raport: 89.23,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 88.22,
      },
      {
        prodi: "PENDIDIKAN KESEJAHTERAAN KELUARGA",
        jenjang: "S1",
        rata_rata_raport: 87.73,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 87.26,
      },
      {
        prodi: "PENDIDIKAN LUAR BIASA",
        jenjang: "S1",
        rata_rata_raport: 86.35,
      },
      {
        prodi: "PENDIDIKAN LUAR SEKOLAH",
        jenjang: "S1",
        rata_rata_raport: 85.05,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 88.91,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 88.79,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 88.27,
      },
      {
        prodi: "PENDIDIKAN SENI DRAMA, TARI, DAN MUSIK",
        jenjang: "S1",
        rata_rata_raport: 87.2,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 85.9,
      },
      {
        prodi: "PENDIDIKAN TEKNIK BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 85.32,
      },
      {
        prodi: "PENDIDIKAN TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.27,
      },
      {
        prodi: "PENDIDIKAN TEKNIK INFORMATIKA & KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 89.73,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 86.1,
      },
      {
        prodi: "PENDIDIKAN TEKNOLOGI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 87.12,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL MEKATRONIKA",
        jenjang: "S1",
        rata_rata_raport: 84.43,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 89.82,
      },
      {
        prodi: "REKAYASA ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.69,
      },
      {
        prodi: "SAINS AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "SAINS INFORMASI GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.41,
      },
      {
        prodi: "SAINS LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 84.19,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.51,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 87.96,
      },
      {
        prodi: "SENI TARI",
        jenjang: "S1",
        rata_rata_raport: 85.84,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.04,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 88.21,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 89.53,
      },
      {
        prodi: "TEKNOLOGI INDUSTRI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 87.7,
      },
      {
        prodi: "TEKNOLOGI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 87.28,
      },
    ],
  },
  {
    ptn: "Universitas Sam Ratulangi",
    singkatan: "UNSRAT/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unsrat/",
    prodi_data: [
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 86.46,
      },
      {
        prodi: "AGROBISNIS PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.76,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.54,
      },
      {
        prodi: "AGRONOMI",
        jenjang: "S1",
        rata_rata_raport: 83.92,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 87.8,
      },
      {
        prodi: "ANTROPOLOGI SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 84.7,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 86.94,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.15,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.08,
      },
      {
        prodi: "EKONOMI PEMBANGNAN",
        jenjang: "S1",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 88.17,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.94,
      },
      {
        prodi: "ILMU ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 87.57,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 87.01,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 88.14,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 85.25,
      },
      {
        prodi: "ILMU KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 88.69,
      },
      {
        prodi: "ILMU KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 88.11,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 87.37,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 86.96,
      },
      {
        prodi: "ILMU PERPUSTAKAAN",
        jenjang: "S1",
        rata_rata_raport: 83.36,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 86.35,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 84.52,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 83.35,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 89.86,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 85.33,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.75,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 88.71,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 84.28,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.91,
      },
      {
        prodi: "PEMANFAATAN SUMBERDAYA PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.0,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 90.94,
      },
      {
        prodi: "PENDIDIKAN DOKTER GIGI",
        jenjang: "S1",
        rata_rata_raport: 89.07,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 86.13,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 85.62,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 84.01,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.13,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.91,
      },
      {
        prodi: "SASTRA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 84.07,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 87.07,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.34,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 88.52,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 84.13,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 85.61,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 88.02,
      },
      {
        prodi: "TEKNIK PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 86.13,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.73,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.3,
      },
      {
        prodi: "TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 84.92,
      },
    ],
  },
  {
    ptn: "Universitas Negeri Manado",
    singkatan: "UNIMA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unima/",
    prodi_data: [
      {
        prodi: "MANAJEMEN PEMASARAN",
        jenjang: "D3",
        rata_rata_raport: 83.99,
      },
      {
        prodi: "TEKNIK LISTRIK",
        jenjang: "D3",
        rata_rata_raport: 83.18,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "D3",
        rata_rata_raport: 83.6,
      },
      {
        prodi: "TEKNOLOGI KAYU",
        jenjang: "D3",
        rata_rata_raport: 83.16,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.68,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 85.35,
      },
      {
        prodi: "BAH & SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 85.98,
      },
      {
        prodi: "BIMBINGAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "ILMU ADM NEGARA",
        jenjang: "S1",
        rata_rata_raport: 86.36,
      },
      {
        prodi: "ILMU BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.65,
      },
      {
        prodi: "ILMU EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 86.36,
      },
      {
        prodi: "ILMU FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.54,
      },
      {
        prodi: "ILMU GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 83.89,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.65,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "ILMU KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 86.67,
      },
      {
        prodi: "ILMU KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.39,
      },
      {
        prodi: "MANAJEMEN S1",
        jenjang: "S1",
        rata_rata_raport: 86.79,
      },
      {
        prodi: "PEND EKONOMI S1",
        jenjang: "S1",
        rata_rata_raport: 86.01,
      },
      {
        prodi: "PEND GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 84.65,
      },
      {
        prodi: "PEND. ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 84.82,
      },
      {
        prodi: "PEND. BAH INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.25,
      },
      {
        prodi: "PEND. BAH. JERMAN",
        jenjang: "S1",
        rata_rata_raport: 83.57,
      },
      {
        prodi: "PEND. BAH. PERANCIS",
        jenjang: "S1",
        rata_rata_raport: 83.18,
      },
      {
        prodi: "PEND. BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.29,
      },
      {
        prodi: "PEND. BAHASA JEPANG",
        jenjang: "S1",
        rata_rata_raport: 85.99,
      },
      {
        prodi: "PEND. BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.56,
      },
      {
        prodi: "PEND. FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.87,
      },
      {
        prodi: "PEND. INF./KOM",
        jenjang: "S1",
        rata_rata_raport: 86.16,
      },
      {
        prodi: "PEND. JASMANI, KES. REK",
        jenjang: "S1",
        rata_rata_raport: 85.44,
      },
      {
        prodi: "PEND. KEPELATIHAN OR",
        jenjang: "S1",
        rata_rata_raport: 85.17,
      },
      {
        prodi: "PEND. KES. KEL",
        jenjang: "S1",
        rata_rata_raport: 83.7,
      },
      {
        prodi: "PEND. KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.37,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.06,
      },
      {
        prodi: "PEND. SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 84.36,
      },
      {
        prodi: "PEND. SENI MUSIK",
        jenjang: "S1",
        rata_rata_raport: 84.21,
      },
      {
        prodi: "PEND. SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 83.95,
      },
      {
        prodi: "PEND. TEK BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 83.06,
      },
      {
        prodi: "PEND. TEK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 84.56,
      },
      {
        prodi: "PEND. TEK MESIN",
        jenjang: "S1",
        rata_rata_raport: 83.87,
      },
      {
        prodi: "PENDIDIKAN IPA",
        jenjang: "S1",
        rata_rata_raport: 85.0,
      },
      {
        prodi: "PENDIDIKAN IPS",
        jenjang: "S1",
        rata_rata_raport: 84.38,
      },
      {
        prodi: "PENDIDIKAN SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.87,
      },
      {
        prodi: "PGSD",
        jenjang: "S1",
        rata_rata_raport: 86.77,
      },
      {
        prodi: "PLB/P.KH",
        jenjang: "S1",
        rata_rata_raport: 83.63,
      },
      {
        prodi: "PLS",
        jenjang: "S1",
        rata_rata_raport: 83.14,
      },
      {
        prodi: "PPKN",
        jenjang: "S1",
        rata_rata_raport: 85.67,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.88,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.71,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.57,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 86.18,
      },
    ],
  },
  {
    ptn: "Universitas Tadulako",
    singkatan: "UNTAD/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-untad/",
    prodi_data: [
      {
        prodi: "KEPERAWATAN",
        jenjang: "D3",
        rata_rata_raport: 88.34,
      },
      {
        prodi: "MANAJEMEN PEMASARAN",
        jenjang: "D3",
        rata_rata_raport: 84.66,
      },
      {
        prodi: "AKUNTANSI SEKTOR PUBLIK",
        jenjang: "D4",
        rata_rata_raport: 84.16,
      },
      {
        prodi: "TEKNOLOGI REKAYASA INSTALASI LISTRIK",
        jenjang: "D4",
        rata_rata_raport: 83.23,
      },
      {
        prodi: "TEKNOLOGI REKAYASA KONSTRUKSI JALAN DAN JEMBATAN",
        jenjang: "D4",
        rata_rata_raport: 83.17,
      },
      {
        prodi: "TEKNOLOGI REKAYASA MANUFAKTUR",
        jenjang: "D4",
        rata_rata_raport: 83.13,
      },
      {
        prodi: "ADMINSTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 88.98,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 88.31,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.93,
      },
      {
        prodi: "AGROTEKNOLOGI (PSDKU MOROWALI)",
        jenjang: "S1",
        rata_rata_raport: 83.22,
      },
      {
        prodi: "AGROTEKNOLOGI (PSDKU TOUNA)",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 84.62,
      },
      {
        prodi: "ANTROPOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.38,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 88.71,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.4,
      },
      {
        prodi: "EKONOMI AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.62,
      },
      {
        prodi: "EKONOMI MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.87,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 86.05,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 89.57,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.78,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 89.14,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.56,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.54,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 89.39,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 88.43,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 91.77,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 87.11,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 89.65,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.4,
      },
      {
        prodi: "MANAJEMEN (PSDKU MOROWALI)",
        jenjang: "S1",
        rata_rata_raport: 84.64,
      },
      {
        prodi: "MANAJEMEN (PSDKU TOUNA)",
        jenjang: "S1",
        rata_rata_raport: 85.54,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.96,
      },
      {
        prodi: "PEND. BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 89.0,
      },
      {
        prodi: "PEND. BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.85,
      },
      {
        prodi: "PEND. BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.87,
      },
      {
        prodi: "PEND. FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.49,
      },
      {
        prodi: "PEND. GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.66,
      },
      {
        prodi: "PEND. GURU PAUD",
        jenjang: "S1",
        rata_rata_raport: 87.25,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR",
        jenjang: "S1",
        rata_rata_raport: 86.9,
      },
      {
        prodi: "PEND. JASMANI, KESEHATAN DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 87.3,
      },
      {
        prodi: "PEND. KIMIA",
        jenjang: "S1",
        rata_rata_raport: 85.52,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 87.95,
      },
      {
        prodi: "PEND. PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 86.81,
      },
      {
        prodi: "PEND. SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 87.46,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN ALAM",
        jenjang: "S1",
        rata_rata_raport: 84.98,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 86.54,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 83.28,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 88.82,
      },
      {
        prodi: "SOSIAL EKONOMI PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 83.33,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.89,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 85.89,
      },
      {
        prodi: "SUMBER DAYA AKUATIK",
        jenjang: "S1",
        rata_rata_raport: 83.1,
      },
      {
        prodi: "TEKNIK ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 87.52,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "TEKNIK GEO FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.29,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.04,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 89.85,
      },
      {
        prodi: "TEKNIK LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 85.84,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 86.4,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 89.16,
      },
      {
        prodi: "TEKNIK SIPIL (PSDKU MOROWALI)",
        jenjang: "S1",
        rata_rata_raport: 83.99,
      },
      {
        prodi: "TEKNIK SIPIL (PSDKU TOUNA)",
        jenjang: "S1",
        rata_rata_raport: 83.97,
      },
    ],
  },
  {
    ptn: "Universitas Sulawesi Barat",
    singkatan: "UNSULBAR/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unsulbar/",
    prodi_data: [
      {
        prodi: "FARMASI",
        jenjang: "D3",
        rata_rata_raport: 84.54,
      },
      {
        prodi: "KESELAMATAN DAN KESEHATAN KERJA",
        jenjang: "D4",
        rata_rata_raport: 84.29,
      },
      {
        prodi: "TERAPI GIGI",
        jenjang: "D4",
        rata_rata_raport: 84.47,
      },
      {
        prodi: "ADMINISTRASI KESEHATAN",
        jenjang: "S1",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 86.37,
      },
      {
        prodi: "AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.22,
      },
      {
        prodi: "AKUAKULTUR",
        jenjang: "S1",
        rata_rata_raport: 83.13,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.59,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 83.93,
      },
      {
        prodi: "BIOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.81,
      },
      {
        prodi: "BISNIS DIGITAL",
        jenjang: "S1",
        rata_rata_raport: 83.82,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 86.31,
      },
      {
        prodi: "HUBUNGAN INTERNASIONAL",
        jenjang: "S1",
        rata_rata_raport: 85.78,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.34,
      },
      {
        prodi: "ILMU AKTUARIA",
        jenjang: "S1",
        rata_rata_raport: 83.93,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 85.15,
      },
      {
        prodi: "INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.89,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 84.19,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 85.89,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 86.7,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.93,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.57,
      },
      {
        prodi: "PEND. BHS. INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.2,
      },
      {
        prodi: "PEND. BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.63,
      },
      {
        prodi: "PEND. FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.74,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.17,
      },
      {
        prodi: "PENDIDIKAN GURU SEKOLAH DASAR (PGSD)",
        jenjang: "S1",
        rata_rata_raport: 86.98,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN ALAM (IPA)",
        jenjang: "S1",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "PENDIDIKAN TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 83.43,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 85.11,
      },
      {
        prodi: "PERIKANAN TANGKAP",
        jenjang: "S1",
        rata_rata_raport: 84.88,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 85.0,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 83.18,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 85.5,
      },
      {
        prodi: "SUMBER DAYA AKUATIK",
        jenjang: "S1",
        rata_rata_raport: 83.4,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 86.25,
      },
      {
        prodi: "TEKNOLOGI HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 85.53,
      },
    ],
  },
  {
    ptn: "Universitas Halu Oleo",
    singkatan: "UHO-2/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-uho-2/",
    prodi_data: [
      {
        prodi: "STATISTIKA",
        jenjang: "D3",
        rata_rata_raport: 89.11,
      },
      {
        prodi: "TEKNIK ARSITEKTUR",
        jenjang: "D3",
        rata_rata_raport: 88.66,
      },
      {
        prodi: "TEKNIK ELEKTRONIKA",
        jenjang: "D3",
        rata_rata_raport: 88.5,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "D3",
        rata_rata_raport: 88.28,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "D3",
        rata_rata_raport: 89.91,
      },
      {
        prodi: "ADMINISTRASI BISNIS",
        jenjang: "S1",
        rata_rata_raport: 88.55,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.98,
      },
      {
        prodi: "AGROBISNIS PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.21,
      },
      {
        prodi: "AGROTEKNOLOGI / AGROEKOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.57,
      },
      {
        prodi: "AKUTANSI",
        jenjang: "S1",
        rata_rata_raport: 88.99,
      },
      {
        prodi: "ANTROPOLOGI SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 84.2,
      },
      {
        prodi: "ARKEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.9,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.16,
      },
      {
        prodi: "BIOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.55,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.56,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 87.14,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 89.19,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.35,
      },
      {
        prodi: "GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.63,
      },
      {
        prodi: "GIZI",
        jenjang: "S1",
        rata_rata_raport: 87.97,
      },
      {
        prodi: "ILMU ADMINISTRASI NEGARA",
        jenjang: "S1",
        rata_rata_raport: 87.7,
      },
      {
        prodi: "ILMU DAN TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 84.8,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.18,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 84.14,
      },
      {
        prodi: "ILMU KEOLAHRAGAAN",
        jenjang: "S1",
        rata_rata_raport: 87.07,
      },
      {
        prodi: "ILMU KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 89.38,
      },
      {
        prodi: "ILMU KESEJAHTERAAN SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 85.65,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 89.14,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 88.24,
      },
      {
        prodi: "ILMU LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 85.22,
      },
      {
        prodi: "ILMU PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 86.57,
      },
      {
        prodi: "ILMU POLITIK",
        jenjang: "S1",
        rata_rata_raport: 86.0,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 83.96,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 84.19,
      },
      {
        prodi: "JURNALISTIK",
        jenjang: "S1",
        rata_rata_raport: 84.91,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 85.82,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 88.47,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.9,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.91,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.57,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.22,
      },
      {
        prodi: "OSEANOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 83.34,
      },
      {
        prodi: "PEND. BAHASA, SASTRA INDO. & DAERAH",
        jenjang: "S1",
        rata_rata_raport: 87.78,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR (PGSD) S1",
        jenjang: "S1",
        rata_rata_raport: 89.88,
      },
      {
        prodi: "PEND. JASMANI, KESEHATAN DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 87.86,
      },
      {
        prodi: "PEND. PANCASILA & KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 87.73,
      },
      {
        prodi: "PENDIDIKAN AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.29,
      },
      {
        prodi: "PENDIDIKAN ANAK USIA DINI (PG-PAUD)",
        jenjang: "S1",
        rata_rata_raport: 87.06,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 87.5,
      },
      {
        prodi: "PENDIDIKAN BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 88.94,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.37,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 93.83,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 86.63,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 85.6,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 86.67,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.75,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 87.41,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 86.8,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL TEKNIK",
        jenjang: "S1",
        rata_rata_raport: 83.52,
      },
      {
        prodi: "PENYULUHAN PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 85.72,
      },
      {
        prodi: "PERIKANAN TANGKAP",
        jenjang: "S1",
        rata_rata_raport: 83.14,
      },
      {
        prodi: "PERPUSTAKAAN DAN ILMU INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.25,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 83.7,
      },
      {
        prodi: "PROTEKSI TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 83.59,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 90.23,
      },
      {
        prodi: "REKAYASA INFRASTRUKTUR DAN LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 84.88,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 84.39,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.25,
      },
      {
        prodi: "SASTRA PRANCIS",
        jenjang: "S1",
        rata_rata_raport: 83.14,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.18,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 86.33,
      },
      {
        prodi: "TEKNIK ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 87.25,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 86.44,
      },
      {
        prodi: "TEKNIK GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.02,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.11,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 91.74,
      },
      {
        prodi: "TEKNIK KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 84.93,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 86.88,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 89.62,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 88.58,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.51,
      },
      {
        prodi: "TRADISI LISAN",
        jenjang: "S1",
        rata_rata_raport: 83.75,
      },
    ],
  },
  {
    ptn: "Universitas Negeri Gorontalo",
    singkatan: "UNG/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-ung/",
    prodi_data: [
      {
        prodi: "FARMASI",
        jenjang: "D3",
        rata_rata_raport: 86.89,
      },
      {
        prodi: "PARIWISATA",
        jenjang: "D3",
        rata_rata_raport: 86.64,
      },
      {
        prodi: "AGRIBISNIS PERIKANAN",
        jenjang: "D4",
        rata_rata_raport: 83.17,
      },
      {
        prodi: "ARSITEKTUR BANGUNAN GEDUNG",
        jenjang: "D4",
        rata_rata_raport: 83.31,
      },
      {
        prodi: "TEKNOLOGI REKAYASA ENERGI TERBARUKAN",
        jenjang: "D4",
        rata_rata_raport: 83.11,
      },
      {
        prodi: "TEKNOLOGI REKAYASA PERANGKAT LUNAK",
        jenjang: "D4",
        rata_rata_raport: 83.76,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 88.7,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 87.9,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.11,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 89.02,
      },
      {
        prodi: "BIMBINGAN DAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 88.08,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.48,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 84.07,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 86.91,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 89.08,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 83.47,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 89.03,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 84.17,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 88.61,
      },
      {
        prodi: "ILMU LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 84.37,
      },
      {
        prodi: "ILMU TEKNOLOGI PANGAN",
        jenjang: "S1",
        rata_rata_raport: 85.39,
      },
      {
        prodi: "KEDOKTERAN",
        jenjang: "S1",
        rata_rata_raport: 92.9,
      },
      {
        prodi: "KEPERAWATAN",
        jenjang: "S1",
        rata_rata_raport: 89.73,
      },
      {
        prodi: "KESEHATAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 89.22,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.5,
      },
      {
        prodi: "MANAJAMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 84.85,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 89.39,
      },
      {
        prodi: "MANAJEMEN PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 87.89,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.54,
      },
      {
        prodi: "PENDIDIKAN ANAK USIA DINI",
        jenjang: "S1",
        rata_rata_raport: 87.0,
      },
      {
        prodi: "PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 88.36,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 88.22,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.27,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 88.32,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.53,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 86.48,
      },
      {
        prodi: "PENDIDIKAN GURU SD",
        jenjang: "S1",
        rata_rata_raport: 89.54,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN ALAM",
        jenjang: "S1",
        rata_rata_raport: 85.17,
      },
      {
        prodi: "PENDIDIKAN JASMANI KESEHATAN DAN REKREASI",
        jenjang: "S1",
        rata_rata_raport: 85.26,
      },
      {
        prodi: "PENDIDIKAN KEPELATIHAN OLAHRAGA",
        jenjang: "S1",
        rata_rata_raport: 86.42,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.9,
      },
      {
        prodi: "PENDIDIKAN MASYARAKAT",
        jenjang: "S1",
        rata_rata_raport: 83.44,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 87.13,
      },
      {
        prodi: "PENDIDIKAN PANCASLA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 87.2,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.91,
      },
      {
        prodi: "PENDIDIKAN SENDRATASIK",
        jenjang: "S1",
        rata_rata_raport: 84.7,
      },
      {
        prodi: "PENDIDIKAN SENI RUPA",
        jenjang: "S1",
        rata_rata_raport: 84.82,
      },
      {
        prodi: "PENDIDIKAN TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.41,
      },
      {
        prodi: "PENDIDIKAN TEKNOLOGI INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 87.9,
      },
      {
        prodi: "PENDIDIKAN VOKASIONAL KONSTRUKSI BANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 83.29,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 85.62,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 84.58,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 88.74,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 88.55,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.83,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 87.03,
      },
      {
        prodi: "TEKNIK ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 87.39,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 85.71,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 87.2,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 86.85,
      },
      {
        prodi: "TEKNIK KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 88.55,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 88.45,
      },
      {
        prodi: "TEKNOLOGI HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 84.01,
      },
      {
        prodi: "TEKNOLOGI PENANGKAPAN IKAN",
        jenjang: "S1",
        rata_rata_raport: 83.49,
      },
    ],
  },
  {
    ptn: "Universitas Sembilan Belas November Kolaka",
    singkatan: "USN-KOLAKA/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-usn-kolaka/",
    prodi_data: [
      {
        prodi: "KEPERAWATAN",
        jenjang: "D3",
        rata_rata_raport: 85.81,
      },
      {
        prodi: "ADMINISTRASI PUBLIK",
        jenjang: "S1",
        rata_rata_raport: 86.2,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.52,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.02,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.33,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 84.64,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 86.67,
      },
      {
        prodi: "HUKUM",
        jenjang: "S1",
        rata_rata_raport: 85.97,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.2,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 86.43,
      },
      {
        prodi: "ILMU PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 83.13,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 83.74,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.95,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "PENDIDIKAN BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.81,
      },
      {
        prodi: "PENDIDIKAN BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 84.83,
      },
      {
        prodi: "PENDIDIKAN BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.81,
      },
      {
        prodi: "PENDIDIKAN FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.63,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.24,
      },
      {
        prodi: "PENDIDIKAN JASMANI",
        jenjang: "S1",
        rata_rata_raport: 84.7,
      },
      {
        prodi: "PENDIDIKAN KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.36,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.85,
      },
      {
        prodi: "PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN",
        jenjang: "S1",
        rata_rata_raport: 85.64,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 83.11,
      },
      {
        prodi: "SISTEM INFORMASI",
        jenjang: "S1",
        rata_rata_raport: 86.2,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 83.95,
      },
      {
        prodi: "TEKNIK PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 83.12,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 86.53,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 85.61,
      },
      {
        prodi: "TEKNOLOGI HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 83.24,
      },
    ],
  },
  {
    ptn: "Universitas Pattimura",
    singkatan: "UNPATTI/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unpatti/",
    prodi_data: [
      {
        prodi: "ADMINISTRASI PENDIDIKAN",
        jenjang: "S1",
        rata_rata_raport: 85.14,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 85.34,
      },
      {
        prodi: "AGROBISNIS PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 84.69,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.04,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.71,
      },
      {
        prodi: "AKUNTANSI (PSDKU KAB. ARU)",
        jenjang: "S1",
        rata_rata_raport: 83.77,
      },
      {
        prodi: "AKUNTANSI (PSDKU KAB. MBD)",
        jenjang: "S1",
        rata_rata_raport: 83.07,
      },
      {
        prodi: "BIMBINGAN KONSELING",
        jenjang: "S1",
        rata_rata_raport: 86.32,
      },
      {
        prodi: "BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.16,
      },
      {
        prodi: "BIOTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.17,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 84.16,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 85.85,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 86.69,
      },
      {
        prodi: "FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.41,
      },
      {
        prodi: "IL. ADM. NEGARA",
        jenjang: "S1",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "IL. HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.94,
      },
      {
        prodi: "IL. KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 85.22,
      },
      {
        prodi: "IL. PEMERINTAHAN",
        jenjang: "S1",
        rata_rata_raport: 86.15,
      },
      {
        prodi: "ILMU HUKUM (PSDKU KAB. ARU)",
        jenjang: "S1",
        rata_rata_raport: 83.76,
      },
      {
        prodi: "ILMU HUKUM (PSDKU KAB. MBD)",
        jenjang: "S1",
        rata_rata_raport: 83.47,
      },
      {
        prodi: "ILMU KOMPUTER",
        jenjang: "S1",
        rata_rata_raport: 86.68,
      },
      {
        prodi: "ILMU KOMUNIKASI",
        jenjang: "S1",
        rata_rata_raport: 86.66,
      },
      {
        prodi: "ILMU LINGKUNGAN",
        jenjang: "S1",
        rata_rata_raport: 84.14,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 83.97,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 85.9,
      },
      {
        prodi: "KESELAMATAN DAN KESEHATAN KERJA",
        jenjang: "S1",
        rata_rata_raport: 84.45,
      },
      {
        prodi: "KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.43,
      },
      {
        prodi: "MAJEMEN SUMB.PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 84.64,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.9,
      },
      {
        prodi: "MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.34,
      },
      {
        prodi: "PEMANFAATAN SD PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 84.0,
      },
      {
        prodi: "PEMULIAAN TANAMAN",
        jenjang: "S1",
        rata_rata_raport: 83.6,
      },
      {
        prodi: "PEND. BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 86.25,
      },
      {
        prodi: "PEND. BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 86.44,
      },
      {
        prodi: "PEND. BAHASA INGGRIS (PSDKU KAB. ARU)",
        jenjang: "S1",
        rata_rata_raport: 83.84,
      },
      {
        prodi: "PEND. BAHASA INGGRIS (PSDKU KAB. MBD)",
        jenjang: "S1",
        rata_rata_raport: 83.07,
      },
      {
        prodi: "PEND. BAHASA JERMAN",
        jenjang: "S1",
        rata_rata_raport: 83.84,
      },
      {
        prodi: "PEND. BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.66,
      },
      {
        prodi: "PEND. FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.95,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR (PSDKU KAB. ARU)",
        jenjang: "S1",
        rata_rata_raport: 84.18,
      },
      {
        prodi: "PEND. GURU SEKOLAH DASAR (PSDKU KAB. MBD)",
        jenjang: "S1",
        rata_rata_raport: 83.75,
      },
      {
        prodi: "PEND. JASMANI, KESEHATAN, DAN REKREASI (PSDKU KAB. ARU)",
        jenjang: "S1",
        rata_rata_raport: 83.82,
      },
      {
        prodi: "PEND. KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.62,
      },
      {
        prodi: "PEND. LUAR SEKOLAH",
        jenjang: "S1",
        rata_rata_raport: 83.64,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 85.73,
      },
      {
        prodi: "PENDIDIKAN AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 84.35,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 86.97,
      },
      {
        prodi: "PENDIDIKAN EKONOMI",
        jenjang: "S1",
        rata_rata_raport: 85.91,
      },
      {
        prodi: "PENDIDIKAN GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 85.65,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA (PSDKU KAB. ARU)",
        jenjang: "S1",
        rata_rata_raport: 83.38,
      },
      {
        prodi: "PENDIDIKAN MATEMATIKA (PSDKU KAB. MBD)",
        jenjang: "S1",
        rata_rata_raport: 83.15,
      },
      {
        prodi: "PENDIDIKAN SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 85.47,
      },
      {
        prodi: "PENGELOLAAN HUTAN",
        jenjang: "S1",
        rata_rata_raport: 83.5,
      },
      {
        prodi: "PENJASKESREK",
        jenjang: "S1",
        rata_rata_raport: 85.1,
      },
      {
        prodi: "PENYULUHAN PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 83.73,
      },
      {
        prodi: "PERENCANAAN WILAYAH DAN KOTA",
        jenjang: "S1",
        rata_rata_raport: 85.73,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 83.87,
      },
      {
        prodi: "PETERNAKAN (PSDKU KAB. MBD)",
        jenjang: "S1",
        rata_rata_raport: 83.03,
      },
      {
        prodi: "PGSD S1",
        jenjang: "S1",
        rata_rata_raport: 86.49,
      },
      {
        prodi: "PPKN",
        jenjang: "S1",
        rata_rata_raport: 86.05,
      },
      {
        prodi: "SAINS BIOMEDIS",
        jenjang: "S1",
        rata_rata_raport: 85.54,
      },
      {
        prodi: "SOSIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.41,
      },
      {
        prodi: "STATISTIKA",
        jenjang: "S1",
        rata_rata_raport: 86.22,
      },
      {
        prodi: "TEK. HASIL PERIKANAN",
        jenjang: "S1",
        rata_rata_raport: 84.95,
      },
      {
        prodi: "TEK. HASIL PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 84.4,
      },
      {
        prodi: "TEKNIK GEOFISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.71,
      },
      {
        prodi: "TEKNIK GEOLOGI",
        jenjang: "S1",
        rata_rata_raport: 86.04,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 86.27,
      },
      {
        prodi: "TEKNIK KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.16,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 85.5,
      },
      {
        prodi: "TEKNIK PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 84.97,
      },
      {
        prodi: "TEKNIK PERMINYAKAN",
        jenjang: "S1",
        rata_rata_raport: 86.55,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 86.58,
      },
      {
        prodi: "TEKNIK SISTIM PERKAPALAN",
        jenjang: "S1",
        rata_rata_raport: 85.05,
      },
      {
        prodi: "TEKNIK TRANSPORTASI LAUT",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
    ],
  },
  {
    ptn: "Universitas Khairun",
    singkatan: "UNKHAIR/",
    url: "https://cerdasy.com/rata-rata-nilai-raport-snbp-unkhair/",
    prodi_data: [
      {
        prodi: "USAHA PERJALANAN WISATA",
        jenjang: "D3",
        rata_rata_raport: 83.97,
      },
      {
        prodi: "AGRIBISNIS",
        jenjang: "S1",
        rata_rata_raport: 84.66,
      },
      {
        prodi: "AGROTEKNOLOGI",
        jenjang: "S1",
        rata_rata_raport: 83.22,
      },
      {
        prodi: "AKUNTANSI",
        jenjang: "S1",
        rata_rata_raport: 86.28,
      },
      {
        prodi: "ANTROPOLOGI SOSIAL",
        jenjang: "S1",
        rata_rata_raport: 83.53,
      },
      {
        prodi: "ARSITEKTUR",
        jenjang: "S1",
        rata_rata_raport: 85.67,
      },
      {
        prodi: "BUDIDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.19,
      },
      {
        prodi: "EKONOMI PEMBANGUNAN",
        jenjang: "S1",
        rata_rata_raport: 85.75,
      },
      {
        prodi: "FARMASI",
        jenjang: "S1",
        rata_rata_raport: 86.57,
      },
      {
        prodi: "ILMU HUKUM",
        jenjang: "S1",
        rata_rata_raport: 86.05,
      },
      {
        prodi: "ILMU KELAUTAN",
        jenjang: "S1",
        rata_rata_raport: 84.18,
      },
      {
        prodi: "ILMU SEJARAH",
        jenjang: "S1",
        rata_rata_raport: 83.78,
      },
      {
        prodi: "ILMU TANAH",
        jenjang: "S1",
        rata_rata_raport: 83.35,
      },
      {
        prodi: "KEHUTANAN",
        jenjang: "S1",
        rata_rata_raport: 84.56,
      },
      {
        prodi: "MANAJEMEN",
        jenjang: "S1",
        rata_rata_raport: 86.58,
      },
      {
        prodi: "MANAJEMEN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.38,
      },
      {
        prodi: "PEMANFAATAN SUMBERDAYA PERAIRAN",
        jenjang: "S1",
        rata_rata_raport: 83.16,
      },
      {
        prodi: "PEND. BAHASA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 85.4,
      },
      {
        prodi: "PEND. BAHASA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 84.99,
      },
      {
        prodi: "PEND. BIOLOGI",
        jenjang: "S1",
        rata_rata_raport: 84.91,
      },
      {
        prodi: "PEND. FISIKA",
        jenjang: "S1",
        rata_rata_raport: 84.18,
      },
      {
        prodi: "PEND. GEOGRAFI",
        jenjang: "S1",
        rata_rata_raport: 84.54,
      },
      {
        prodi: "PEND. KIMIA",
        jenjang: "S1",
        rata_rata_raport: 84.45,
      },
      {
        prodi: "PEND. MATEMATIKA",
        jenjang: "S1",
        rata_rata_raport: 84.78,
      },
      {
        prodi: "PENDIDIKAN DOKTER",
        jenjang: "S1",
        rata_rata_raport: 86.45,
      },
      {
        prodi: "PENDIDIKAN ILMU PENGETAHUAN ALAM",
        jenjang: "S1",
        rata_rata_raport: 84.17,
      },
      {
        prodi: "PETERNAKAN",
        jenjang: "S1",
        rata_rata_raport: 83.07,
      },
      {
        prodi: "PG PAUD",
        jenjang: "S1",
        rata_rata_raport: 85.66,
      },
      {
        prodi: "PGSD S1",
        jenjang: "S1",
        rata_rata_raport: 85.76,
      },
      {
        prodi: "PPKN",
        jenjang: "S1",
        rata_rata_raport: 84.96,
      },
      {
        prodi: "PSIKOLOGI",
        jenjang: "S1",
        rata_rata_raport: 85.77,
      },
      {
        prodi: "SASTRA INDONESIA",
        jenjang: "S1",
        rata_rata_raport: 84.11,
      },
      {
        prodi: "SASTRA INGGRIS",
        jenjang: "S1",
        rata_rata_raport: 85.23,
      },
      {
        prodi: "TEKNIK ELEKTRO",
        jenjang: "S1",
        rata_rata_raport: 83.73,
      },
      {
        prodi: "TEKNIK INDUSTRI",
        jenjang: "S1",
        rata_rata_raport: 84.95,
      },
      {
        prodi: "TEKNIK INFORMATIKA",
        jenjang: "S1",
        rata_rata_raport: 86.58,
      },
      {
        prodi: "TEKNIK MESIN",
        jenjang: "S1",
        rata_rata_raport: 84.44,
      },
      {
        prodi: "TEKNIK PERTAMBANGAN",
        jenjang: "S1",
        rata_rata_raport: 86.21,
      },
      {
        prodi: "TEKNIK SIPIL",
        jenjang: "S1",
        rata_rata_raport: 85.77,
      },
      {
        prodi: "TEKNOLOGI PERTANIAN",
        jenjang: "S1",
        rata_rata_raport: 83.76,
      },
    ],
  },
];

// script WP
document.dispatchEvent(
  new CustomEvent("snippet1Ready", {
    detail: { dataSnbp: SNBP_DATA, listProvinsi },
  })
);

// my script
// export {
//   SNBP_DATA,
//   listProvinsi,
// }
