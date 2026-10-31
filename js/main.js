// ===== CSJMU Clone - Enhanced Complete JavaScript Engine =====

// ==========================================
// 1. COMPREHENSIVE AFFILIATED COLLEGES DATA
// ==========================================
const affiliatedColleges = [
  // --- Kanpur Nagar ---
  {
    code: "KN80",
    title: "DR. VIRENDRA SWAROOP INSTI. OF COMPUTER STUDIES, KANPUR",
    address: "SAKET NAGAR, KANPUR",
    district: "Kanpur Nagar",
    principal: "DR. ARPIT AWASTHI",
    email: "VSICSPRINCIPAL@GMAIL.COM",
    contact: "9161338844",
    url: "http://www.vsicsindia.com",
    courses: "BCA, MCA, BBA, MBA",
    type: "Self Finance",
    status: "Permanent Affiliated"
  },
  {
    code: "KN81",
    title: "BHAGWANTI EDUCATION CENTRE D/C, MANDHANA, BITHOOR ROAD, KANPUR",
    address: "MANDHANA, BITHOOR ROAD, KANPUR",
    district: "Kanpur Nagar",
    principal: "Dr. Archana Singh",
    email: "becdc.kanpur@gmail.com",
    contact: "9235749205",
    url: "",
    courses: "B.Ed, B.A, B.Com, B.Sc",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "KN82",
    title: "MULAYAM SINGH MAHAVIDYALAYA, SAKARAPUR, YASHODA NAGAR, KANPUR",
    address: "SAKARAPUR, YASHODA NAGAR, KANPUR",
    district: "Kanpur Nagar",
    principal: "DR. ARUN KUMAR DUBEY",
    email: "contacmsdegreecollege@gmail.com",
    contact: "9935707748",
    url: "",
    courses: "B.A, B.Com, B.Sc",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "KN83",
    title: "GAUTAM BUDDH MAHAVIDYALAYA, SIDHARTH NAGAR, KANPUR",
    address: "SIDHARTH NAGAR, KANPUR",
    district: "Kanpur Nagar",
    principal: "DR. PALLAVI NIGAM",
    email: "gbmvprincipal@rediffmail.com",
    contact: "7905535959",
    url: "http://www.gbmv.org",
    courses: "B.A, B.Com, B.Sc, M.A",
    type: "Self Finance",
    status: "Permanent Affiliated"
  },
  {
    code: "KN84",
    title: "DR. GOVIND PRASAD RANI DEVI PATEL VIDHI MAHAVIDYALAYA, ARAUL, KANPUR",
    address: "ARAUL, BILHAUR, KANPUR",
    district: "Kanpur Nagar",
    principal: "Dr. Dev Sharma Yajurvedi",
    email: "h.kumar10771@gmail.com",
    contact: "9695828640",
    url: "http://www.gprdp.org.in",
    courses: "LL.B (3 Yrs), B.A. LL.B (5 Yrs)",
    type: "Self Finance Law College",
    status: "BCI Approved"
  },
  {
    code: "KN85",
    title: "DR. VIRENDRA SWARUP INSTITUTE OF PROF. STUDIES, KIDWAI NGR., KANPUR",
    address: "37, BLOCK-K, YOJANA-II, KIDWAI NAGAR, KANPUR",
    district: "Kanpur Nagar",
    principal: "DR. POONAM MADAN",
    email: "pnmmadan@gmail.com",
    contact: "9889931732",
    url: "http://www.vsips.ac.in",
    courses: "B.Ed, BBA, BCA, B.Com",
    type: "Self Finance",
    status: "Permanent Affiliated"
  },
  {
    code: "KN86",
    title: "DAYANAND DANKU PARAGA GYAN UDAI MAHAVIDYALAYA, MURLIPUR, KANPUR",
    address: "VILL. PATARI, TAHSIL GHATAMPUR, KANPUR",
    district: "Kanpur Nagar",
    principal: "SHIVANI SHUKLA",
    email: "jitendrapratap558@gmail.com",
    contact: "9559947878",
    url: "http://www.ddpgum.org",
    courses: "B.A, B.Sc, B.Com",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "KN88",
    title: "BANSHI COLLEGE OF EDUCATION, BITHOOR ROAD, KANPUR",
    address: "MOHAMMADPUR, BITHOOR, KANPUR",
    district: "Kanpur Nagar",
    principal: "Prof. Meeta Jamal",
    email: "vivekibm18@gmail.com",
    contact: "8896691310",
    url: "http://www.bansicollege.org.in",
    courses: "B.Ed, D.El.Ed, B.A",
    type: "Self Finance",
    status: "NCTE Approved"
  },
  {
    code: "KN89",
    title: "SHANKARANAND MAHAVIDYALAYA, FUFUWAR, SARSAUL, KANPUR",
    address: "FUFUWAR, SARSAUL, KANPUR NAGAR",
    district: "Kanpur Nagar",
    principal: "Dr. Mamta Shrivastav",
    email: "sndegreecollegesarsaul@gmail.com",
    contact: "9956809135",
    url: "http://sdcfufuwar.org",
    courses: "B.A, B.Sc",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "KN90",
    title: "S.J. MAHAVIDYALAYA, RAMAIPUR, KANPUR",
    address: "RAMAIPUR, KANPUR NAGAR",
    district: "Kanpur Nagar",
    principal: "DR. SANJEEV KUMAR SINGH",
    email: "sjmvkanpur@gmail.com",
    contact: "9839772286",
    url: "",
    courses: "B.A, B.Com, B.Sc",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "KN92",
    title: "SUBHASH DEGREE COLLEGE, KIDWAI NAGAR, KANPUR",
    address: "1420-Y BLOCK, KIDWAI NAGAR, KANPUR",
    district: "Kanpur Nagar",
    principal: "DR. RASHMI SHUKLA",
    email: "kanpursdc@gmail.com",
    contact: "7233023424",
    url: "http://www.sdckanpur.org",
    courses: "B.A, B.Com, M.Com, B.Sc",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "KN93",
    title: "JAGRAN COLLEGE OF ARTS, SCIENCE AND COMMERCE, JUHI, KANPUR",
    address: "PLOT NO. 620, BLOCK-W, JUHI, KANPUR",
    district: "Kanpur Nagar",
    principal: "Dr. Asmita Dubey",
    email: "jagrancollegeasc@gmail.com",
    contact: "9415728728",
    url: "http://www.jagrancollege.ac.in",
    courses: "BBA, BCA, B.Com, B.Com (Hons), BA-JMC",
    type: "Self Finance",
    status: "Permanent Affiliated"
  },

  // --- Auraiya ---
  {
    code: "AU06",
    title: "GAJENDRA SINGH PUBLIC DEGREE COLLEGE, BIDHUNA, AURAIYA",
    address: "BIDHUNA, AURAIYA",
    district: "Auraiya",
    principal: "Dr. APARBAL SINGH",
    email: "pdcbidhuna1@gmail.com",
    contact: "9568496843",
    url: "http://www.p.d.college.org.in",
    courses: "B.A, B.Sc, B.Com, M.A",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "AU07",
    title: "DR. RAM MANOHAR LOHIYA RAJKEEYA MAHAVIDYALAYA, BIDHUNA, AURAIYA",
    address: "BIDHUNA, AURAIYA",
    district: "Auraiya",
    principal: "Dr. Raka Rathor",
    email: "amitbhucrick@gmail.com",
    contact: "7985696583",
    url: "http://rhgdc.org.in",
    courses: "B.A, B.Sc, B.Com (Govt.)",
    type: "Government College",
    status: "Govt. Constituent"
  },
  {
    code: "AU09",
    title: "JANTA MAHAVIDYALAYA, CHANDRA NAGAR, DIBIYAPUR, AURAIYA",
    address: "CHANDRA NAGAR, DIBIYAPUR, AURAIYA",
    district: "Auraiya",
    principal: "DR. SHAILESH PANDEY",
    email: "jantamvc@gmail.com",
    contact: "6399369963",
    url: "",
    courses: "B.A, B.Sc, M.Sc, M.A",
    type: "Aided College",
    status: "Permanent Affiliated"
  },
  {
    code: "AU11",
    title: "VAIDIC MAHAVIDYALAYA, DIVYAPURI, DIBIYAPUR, AURAIYA",
    address: "DIVYAPURI, DIBIYAPUR, AURAIYA",
    district: "Auraiya",
    principal: "Dr. Aditya Kumar Tripathi",
    email: "pntknp30477@gmail.com",
    contact: "9140856498",
    url: "http://www.vedicmahavidyl.org",
    courses: "B.A, B.Ed, B.Com",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "AU14",
    title: "SRI GULAB SINGH MAHAVIDYALAYA, BARMUPUR, AURAIYA",
    address: "BARMUPUR, AURAIYA",
    district: "Auraiya",
    principal: "DR. ANUJ KUMAR",
    email: "vishvnath.gsmv@gmail.com",
    contact: "9412556747",
    url: "http://www.gsmahavidyalaya.com",
    courses: "B.A, B.Sc, B.Com",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "AU15",
    title: "SINGH VAHINI MAHAVIDYALAYA, ADAMPUR, AJITMAL, AURAIYA",
    address: "ADAMPUR, AJITMAL, AURAIYA",
    district: "Auraiya",
    principal: "DR. AJAY KUMAR RAJPUT",
    email: "drajayrajput8@gmail.com",
    contact: "9412430219",
    url: "http://www.singhvahinimahavidyalaya.org",
    courses: "B.A, B.Sc, B.Com, B.Ed",
    type: "Self Finance",
    status: "Affiliated"
  },

  // --- Etawah ---
  {
    code: "EW70",
    title: "YASHODA GIRLS DEGREE COLLEGE, PACHAWALI KUNAIRA ROAD, ETAWAH",
    address: "PACHAWALI KUNAIRA ROAD, ETAWAH",
    district: "Etawah",
    principal: "Dr. Shashi Prabha",
    email: "yashodagdc@gmail.com",
    contact: "8476905633",
    url: "http://www.yashodagdc.in",
    courses: "B.A, B.Com, B.Sc (Home Science)",
    type: "Girls College",
    status: "Affiliated"
  },
  {
    code: "EW67",
    title: "ANKALIKAR VANI MASIK PATRIKA SAMITI COLLEGE, ETAWAH",
    address: "PRATAPNER PARASANT PILUA MAHAVEER ROAD, ETAWAH",
    district: "Etawah",
    principal: "DR. PRABHAT RANJAN TIWARI",
    email: "anklikarvani.patrika@gmail.com",
    contact: "9411939318",
    url: "http://www.avmp.org.in",
    courses: "B.A, B.Sc, B.Com",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "EW68",
    title: "CH. SUGHAR SINGH LAW COLLEGE, JASWANTNAGAR, ETAWAH",
    address: "JASWANT NAGAR, ETAWAH",
    district: "Etawah",
    principal: "Dr. Alok Yadav",
    email: "rmmdcetawah@gmail.com",
    contact: "9368977842",
    url: "http://www.rccdc.com",
    courses: "LL.B, B.A. LL.B",
    type: "Law College",
    status: "BCI Approved"
  },
  {
    code: "EW47",
    title: "CH. SUGHAR SINGH EDUCATION ACADEMY, ETAWAH",
    address: "KACHAURA ROAD, RAILMANDI, JASWANTNAGAR, ETAWAH",
    district: "Etawah",
    principal: "Dr. JITENDRA YADAV",
    email: "cssgijaswantnagar@gmail.com",
    contact: "9759077602",
    url: "http://www.andnnmm.com",
    courses: "B.Ed, M.Ed, B.A",
    type: "Teacher Training",
    status: "NCTE Approved"
  },
  {
    code: "EW48",
    title: "RANJIT SINGH MAHAVIDYALAYA, SAIFAI, ETAWAH",
    address: "TULSIPUR, KUMHAWAR, SAIFAI, ETAWAH",
    district: "Etawah",
    principal: "DR. IRFAN SABIR",
    email: "pradeepranjeetyadav@gmail.com",
    contact: "7536044788",
    url: "http://www.rsdegreecollege.com",
    courses: "B.A, B.Sc, B.Com, M.Sc",
    type: "Self Finance",
    status: "Affiliated"
  },

  // --- Farrukhabad ---
  {
    code: "FB01",
    title: "BADRI VISHAL P.G. COLLEGE, FARRUKHABAD",
    address: "STATION ROAD, FARRUKHABAD",
    district: "Farrukhabad",
    principal: "Dr. Rashmi Priyadarshini",
    email: "principalbvdc@gmail.com",
    contact: "9889458336",
    url: "http://www.bvpgcfkd.com",
    courses: "B.A, B.Sc, B.Com, M.A, M.Com",
    type: "Aided College",
    status: "Permanent Affiliated"
  },
  {
    code: "FB02",
    title: "D.N. P.G. COLLEGE, FATEHGARH, FARRUKHABAD",
    address: "FATEHGARH, FARRUKHABAD",
    district: "Farrukhabad",
    principal: "Dr. Manoj Garg",
    email: "ranbirsjwan01@gmail.com",
    contact: "9670697698",
    url: "",
    courses: "B.A, B.Sc, M.Sc, Ph.D Center",
    type: "Aided College",
    status: "Permanent Affiliated"
  },
  {
    code: "FB03",
    title: "BHARTIYA MAHAVIDYALAYA, FARRUKHABAD",
    address: "BHARTIYA NAGAR, FARRUKHABAD",
    district: "Farrukhabad",
    principal: "DR. RAMAN PRAKASH",
    email: "1978akmishra@gmail.com",
    contact: "9450252569",
    url: "http://www.bhartiyadegreecollege.com",
    courses: "B.A, B.Sc, B.Com, B.Ed",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "FB07",
    title: "NARAYAN ARYA KANYA PATHSHALA, FARRUKHABAD",
    address: "ARYA SAMAJ ROAD, FARRUKHABAD",
    district: "Farrukhabad",
    principal: "PROF. SHASHI KIRAN SINGH",
    email: "singhshashikiran64@gmail.com",
    contact: "9453805820",
    url: "http://www.nakp.co.in",
    courses: "B.A, B.Com, M.A (Women College)",
    type: "Aided Girls College",
    status: "Permanent Affiliated"
  },
  {
    code: "FB09",
    title: "VIDYA MANDIR DEGREE COLLEGE, KAYAMGANJ, FARRUKHABAD",
    address: "KAYAMGANJ, FARRUKHABAD",
    district: "Farrukhabad",
    principal: "Prof. Tejpal Singh",
    email: "vmdc.kmj@gmail.com",
    contact: "7017326965",
    url: "http://www.vmdc.org.in",
    courses: "B.A, B.Sc, B.Com",
    type: "Aided College",
    status: "Permanent Affiliated"
  },

  // --- Kannauj ---
  {
    code: "KJ92",
    title: "PREM CHANDRA LAW COLLEGE, BAHASAR, TIRWA, KANNAUJ",
    address: "BAHASAR TIRWA, KANNAUJ",
    district: "Kannauj",
    principal: "Dr. Rakesh Kumar",
    email: "rakesh.kumar21972@gmail.com",
    contact: "9450691888",
    url: "http://www.premchandralaw.org.in",
    courses: "LL.B (3 Years), B.A. LL.B",
    type: "Law College",
    status: "BCI Approved"
  },
  {
    code: "KJ90",
    title: "JAI SHREE MAHAVIDYALAYA, DAULATPUR, KANNAUJ",
    address: "DAULATPUR, THATHIA, KANNAUJ",
    district: "Kannauj",
    principal: "MOHD WAHEED",
    email: "jaishreemahavidyalay@gmail.com",
    contact: "9555466231",
    url: "http://www.jsmv.com",
    courses: "B.A, B.Sc, B.Com",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "KJ01",
    title: "CHAUDHRY JAMADAR SINGH MAHAVIDYALAYA, LALAKPUR, KANNAUJ",
    address: "LALAKPUR, CHHIBRAMAU, KANNAUJ",
    district: "Kannauj",
    principal: "DR. GOVIND KUMAR",
    email: "dharmendra.cjs@gmail.com",
    contact: "9839630171",
    url: "",
    courses: "B.A, B.Sc, B.Com, B.Ed",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "KJ03",
    title: "SW. BABU SINGH BALIKA MAHAVIDYALAYA, CHHIBRAMAU, KANNAUJ",
    address: "VILL. RAMPUR BAIJU, CHHIBRAMAU, KANNAUJ",
    district: "Kannauj",
    principal: "Shankar Singh",
    email: "anilkumar63420@gmail.com",
    contact: "7905988252",
    url: "http://www.sbsbmvchhibramau.org",
    courses: "B.A, B.Sc, M.A (Girls)",
    type: "Self Finance",
    status: "Affiliated"
  },

  // --- Kanpur Dehat ---
  {
    code: "KD01",
    title: "PREMA KATIYAR SHIKSHAN SANSTHAN M/V, PUKHRAYAN, KANPUR DEHAT",
    address: "VILL. HAIDERPUR, BHOGNIPUR, KANPUR DEHAT",
    district: "Kanpur Dehat",
    principal: "DR. SUCHI AGRAWAL",
    email: "premakatiyar@yahoo.com",
    contact: "7275669017",
    url: "http://www.premakatiyarcollegepk.com",
    courses: "B.A, B.Sc, B.Com, B.Ed",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "KD02",
    title: "KUNDAN LAL SHUKLA MAHAVIDYALAYA, RANIA, KANPUR DEHAT",
    address: "RANIA, KANPUR DEHAT",
    district: "Kanpur Dehat",
    principal: "DR. KAMTA PRASAD",
    email: "satishshukla76@gmail.com",
    contact: "8887995940",
    url: "",
    courses: "B.A, B.Sc, B.Com",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "KD03",
    title: "BABURAM RUKMANI DEVI MAHAVIDYALAYA, GAUSGANJ, KANPUR DEHAT",
    address: "GAUSGANJ, MUKTANAGAR, MUSANAGAR, KANPUR DEHAT",
    district: "Kanpur Dehat",
    principal: "DR. B.K. MISHRA",
    email: "atulsoni9793@gmail.com",
    contact: "9793910966",
    url: "http://www.brrdc.org.in",
    courses: "B.A, B.Sc, B.Com",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "KD05",
    title: "AWADHESH SINGH MAHAVIDYALAYA, ASWI, KANPUR DEHAT",
    address: "ASWI, KANPUR DEHAT",
    district: "Kanpur Dehat",
    principal: "DR. PRABAL PRATAP SINGH",
    email: "directorkd05@gmail.com",
    contact: "9452054081",
    url: "http://www.asmv.aswi.org",
    courses: "B.A, B.Sc, B.Ed",
    type: "Self Finance",
    status: "Affiliated"
  },

  // --- Unnao ---
  {
    code: "UN104",
    title: "ARIHANT LAW COLLEGE, BACHUA KHERA, HILAULI, UNNAO",
    address: "BACHUA KHERA, HILAULI, UNNAO",
    district: "Unnao",
    principal: "Dr. Vinay Prakash",
    email: "arihantlawcollegeunnao@gmail.com",
    contact: "7755085699",
    url: "http://www.aiop.in",
    courses: "LL.B (3 Yrs), B.A. LL.B (5 Yrs)",
    type: "Law College",
    status: "BCI Approved"
  },
  {
    code: "UN96",
    title: "NEETU SMRATI VIDHI MAHAVIDYALAYA, UNNAO",
    address: "SHANTI NAGAR, POST-PARA, MAURAWAN, UNNAO",
    district: "Unnao",
    principal: "DR. R.C. RAI",
    email: "plprkn.un24@gmail.com",
    contact: "9140889488",
    url: "",
    courses: "LL.B, B.A",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "UN97",
    title: "VIMAL KUMAR GUPTA MAHAVIDYALAYA, ASRENDRA, UNNAO",
    address: "ASRENDRA, UNNAO",
    district: "Unnao",
    principal: "DR. YOGESH KUMAR GUPTA",
    email: "vkdcollege9899@gmail.com",
    contact: "7355463022",
    url: "http://www.vkgm.org.in",
    courses: "B.A, B.Sc, B.Com",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "UN100",
    title: "ELITE COLLEGE OF HIGHER EDUCATION, BANGARMAU, UNNAO",
    address: "UTMANPUR, BANGARMAU, UNNAO",
    district: "Unnao",
    principal: "DR. MAHENDRA CHAUDHARI",
    email: "elitecollegeofhighereducation@gmail.com",
    contact: "8052340000",
    url: "http://www.echdu.org.in",
    courses: "B.A, B.Sc, B.Com, BBA, BCA",
    type: "Self Finance",
    status: "Affiliated"
  },
  {
    code: "UN102",
    title: "SANSKAR LAW COLLEGE, TAURA, UNNAO",
    address: "TAURA, UNNAO",
    district: "Unnao",
    principal: "DR. MUKUT BIHARI LAL SHARMA",
    email: "sanskarlawcollege0@gmail.com",
    contact: "9839018137",
    url: "http://www.slc.org.in",
    courses: "LL.B, B.A. LL.B",
    type: "Law College",
    status: "BCI Approved"
  }
];

// State for Affiliated Section
let currentDistrictFilter = "All";
let currentSearchQuery = "";
let currentViewMode = "table"; // 'table' or 'cards'
let currentPage = 1;
const itemsPerPage = 8;

// ==========================================
// 2. AFFILIATED DIRECTORY CONTROLLER
// ==========================================
function getFilteredColleges() {
  return affiliatedColleges.filter(col => {
    const matchesDistrict = (currentDistrictFilter === "All" || col.district === currentDistrictFilter);
    const q = currentSearchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      col.title.toLowerCase().includes(q) ||
      col.code.toLowerCase().includes(q) ||
      col.address.toLowerCase().includes(q) ||
      col.principal.toLowerCase().includes(q) ||
      col.email.toLowerCase().includes(q) ||
      col.contact.includes(q);
    return matchesDistrict && matchesSearch;
  });
}

function renderAffiliatedColleges() {
  const filtered = getFilteredColleges();
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  if (currentPage > totalPages) currentPage = 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  // Update stats bar
  const statsEl = document.getElementById("affiliatedStats");
  if (statsEl) {
    statsEl.innerHTML = `Showing <span>${paginatedItems.length}</span> of <span>${totalItems}</span> Affiliated Colleges in <strong>${currentDistrictFilter === 'All' ? 'All Districts' : currentDistrictFilter}</strong>`;
  }

  // Render Table View
  const tableContainer = document.getElementById("affiliatedTableView");
  const tableBody = document.getElementById("affiliatedTableBody");
  if (tableBody) {
    if (paginatedItems.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:30px; color:#777;"><i class="fas fa-search" style="font-size:24px; margin-bottom:10px; display:block;"></i>No colleges match your filter. Try changing district or search terms.</td></tr>`;
    } else {
      tableBody.innerHTML = paginatedItems.map((col, index) => {
        const globalIndex = startIndex + index + 1;
        const webLink = col.url
          ? `<a href="${col.url}" target="_blank" class="table-link-btn" title="Open Official Website"><i class="fas fa-external-link-alt"></i> Visit</a>`
          : `<span style="color:#aaa; font-size:11px;">N/A</span>`;

        return `
          <tr>
            <td style="font-weight:700; color:#64748b; text-align:center;">${globalIndex}</td>
            <td><span class="code-pill">${col.code}</span></td>
            <td>
              <strong style="color:var(--space-cadet); font-size:13px;">${col.title}</strong>
              <div style="font-size:11px; color:#64748b; margin-top:2px;"><i class="fas fa-map-marker-alt" style="color:var(--primary-theme-color);"></i> ${col.address || 'Kanpur Zone'}</div>
            </td>
            <td><span class="district-pill">${col.district}</span></td>
            <td><strong style="color:#334155;">${col.principal}</strong></td>
            <td>
              ${col.contact && col.contact !== '0'
                ? `<a href="tel:${col.contact}" class="table-link-btn" style="color:#16a34a;" title="Call Principal"><i class="fas fa-phone-alt"></i> ${col.contact}</a>`
                : '<span style="color:#aaa;">-</span>'}
            </td>
            <td>
              ${col.email
                ? `<a href="mailto:${col.email}" class="table-link-btn" style="color:#0284c7;" title="Send Email"><i class="fas fa-envelope"></i> ${col.email}</a>`
                : '<span style="color:#aaa;">-</span>'}
            </td>
            <td>${webLink}</td>
            <td style="text-align:center;">
              <button class="table-action-btn" onclick="openCollegeModal('${col.code}')">
                <i class="fas fa-eye"></i> Details
              </button>
            </td>
          </tr>
        `;
      }).join("");
    }
  }

  // Render Card View
  const cardsContainer = document.getElementById("affiliatedCardsView");
  if (cardsContainer) {
    if (paginatedItems.length === 0) {
      cardsContainer.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:#777;"><i class="fas fa-search" style="font-size:24px; margin-bottom:10px; display:block;"></i>No colleges match your filter. Try changing district or search terms.</div>`;
    } else {
      cardsContainer.innerHTML = paginatedItems.map(col => {
        const webButton = col.url
          ? `<a href="${col.url}" target="_blank" class="btn-card-visit"><i class="fas fa-external-link-alt"></i> Website</a>`
          : `<button class="btn-card-visit" style="background:#cbd5e1; cursor:not-allowed;" disabled>No Web</button>`;

        const callButton = col.contact && col.contact !== '0'
          ? `<a href="tel:${col.contact}" class="btn-card-call"><i class="fas fa-phone-alt"></i> Call</a>`
          : '';

        return `
          <div class="college-card">
            <div>
              <div class="college-title">${col.title}</div>
              <div class="college-detail-row"><span class="college-label">Code:</span> <span class="code-pill">${col.code}</span></div>
              <div class="college-detail-row"><span class="college-label">District:</span> <span class="district-pill">${col.district}</span></div>
              <div class="college-detail-row"><span class="college-label">Address:</span> <span>${col.address || 'Kanpur Region'}</span></div>
              <div class="college-detail-row"><span class="college-label">Principal:</span> <strong>${col.principal}</strong></div>
              <div class="college-detail-row"><span class="college-label">Email:</span> <a href="mailto:${col.email}" style="color:#0284c7;">${col.email}</a></div>
              <div class="college-detail-row"><span class="college-label">Contact:</span> <span>${col.contact && col.contact !== '0' ? col.contact : 'N/A'}</span></div>
            </div>
            <div class="college-card-actions">
              ${callButton}
              ${webButton}
              <button class="btn-card-details" onclick="openCollegeModal('${col.code}')"><i class="fas fa-info-circle"></i> Profile</button>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // Toggle View Container Visibility
  if (tableContainer && cardsContainer) {
    if (currentViewMode === "table") {
      tableContainer.style.display = "block";
      cardsContainer.style.display = "none";
    } else {
      tableContainer.style.display = "none";
      cardsContainer.style.display = "grid";
    }
  }

  // Update Pagination Controls
  const prevBtn = document.getElementById("pgPrevBtn");
  const nextBtn = document.getElementById("pgNextBtn");
  const pageInfo = document.getElementById("pgPageInfo");
  if (prevBtn) prevBtn.disabled = (currentPage <= 1);
  if (nextBtn) nextBtn.disabled = (currentPage >= totalPages);
  if (pageInfo) pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

// College Profile Modal
function openCollegeModal(collegeCode) {
  const college = affiliatedColleges.find(c => c.code === collegeCode);
  if (!college) return;

  const modalHtml = `
    <div style="line-height:1.7;">
      <div style="background:var(--secondary-theme-color); padding:12px 15px; border-radius:6px; margin-bottom:15px; border-left:4px solid var(--primary-theme-color);">
        <h4 style="color:var(--dark-sienna); margin:0 0 4px; font-size:16px;">${college.title}</h4>
        <span class="code-pill">Code: ${college.code}</span>
        <span class="district-pill">${college.district}</span>
        <span style="background:#dcfce7; color:#15803d; padding:2px 8px; border-radius:12px; font-size:11px; font-weight:700;">${college.status}</span>
      </div>

      <table style="width:100%; border-collapse:collapse; font-size:13px; margin-bottom:15px;">
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:6px 0; font-weight:700; width:130px; color:#475569;">Affiliation Category:</td>
          <td>${college.type}</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:6px 0; font-weight:700; color:#475569;">Approved Principal:</td>
          <td><strong>${college.principal}</strong></td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:6px 0; font-weight:700; color:#475569;">College Address:</td>
          <td>${college.address || 'Campus, CSJM University Jurisdiction'}</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:6px 0; font-weight:700; color:#475569;">Contact Phone:</td>
          <td><a href="tel:${college.contact}" style="color:#16a34a; font-weight:700;"><i class="fas fa-phone-alt"></i> ${college.contact}</a></td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:6px 0; font-weight:700; color:#475569;">Official Email:</td>
          <td><a href="mailto:${college.email}" style="color:#0284c7;"><i class="fas fa-envelope"></i> ${college.email}</a></td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:6px 0; font-weight:700; color:#475569;">Courses Offered:</td>
          <td><span style="background:#f1f5f9; padding:2px 8px; border-radius:4px; font-weight:600;">${college.courses || 'B.A, B.Sc, B.Com'}</span></td>
        </tr>
        <tr>
          <td style="padding:6px 0; font-weight:700; color:#475569;">College Website:</td>
          <td>${college.url ? `<a href="${college.url}" target="_blank" style="color:var(--primary-theme-color); font-weight:700;"><i class="fas fa-external-link-alt"></i> ${college.url}</a>` : 'Not Available'}</td>
        </tr>
      </table>

      <div style="background:#f8fafc; padding:10px 14px; border-radius:6px; font-size:12px; color:#64748b;">
        <i class="fas fa-check-circle" style="color:#16a34a;"></i> <strong>Affiliation Verified:</strong> This college is recognized by Chhatrapati Shahu Ji Maharaj University, Kanpur under Section 24 of UP State Universities Act.
      </div>
    </div>
  `;

  showModal(`College Details - ${college.code}`, modalHtml);
}

// Setup Event Listeners for Affiliated Directory
function setupAffiliatedDirectory() {
  const districtSel = document.getElementById("districtFilter");
  if (districtSel) {
    districtSel.addEventListener("change", function () {
      currentDistrictFilter = this.value;
      currentPage = 1;
      renderAffiliatedColleges();
      showToast(`Filtered by ${currentDistrictFilter}`);
    });
  }

  const searchInput = document.getElementById("affiliatedSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      currentSearchQuery = this.value;
      currentPage = 1;
      renderAffiliatedColleges();
    });
  }

  const tableBtn = document.getElementById("viewModeTableBtn");
  const cardBtn = document.getElementById("viewModeCardBtn");
  if (tableBtn && cardBtn) {
    tableBtn.addEventListener("click", () => {
      currentViewMode = "table";
      tableBtn.classList.add("active");
      cardBtn.classList.remove("active");
      renderAffiliatedColleges();
    });
    cardBtn.addEventListener("click", () => {
      currentViewMode = "cards";
      cardBtn.classList.add("active");
      tableBtn.classList.remove("active");
      renderAffiliatedColleges();
    });
  }

  const prevBtn = document.getElementById("pgPrevBtn");
  const nextBtn = document.getElementById("pgNextBtn");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderAffiliatedColleges();
        document.getElementById("affiliatedSection").scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentPage++;
      renderAffiliatedColleges();
      document.getElementById("affiliatedSection").scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// ==========================================
// 3. HERO SLIDER CONTROLLER
// ==========================================
let heroSlideIndex = 0;
let heroSliderTimer = null;
const heroSlides = [
  {
    img: "https://csjmu.ac.in/wp-content/uploads/2026/09/CERVICAL-CANCER-VACCINATION-SEPT-26-.jpg",
    alt: "Narendra Modi Janam Divas - Cervical Cancer Vaccination Camp",
    desc: "श्री नरेंद्र मोदी जी के जन्म दिवस के अवसर पर छत्रपति शाहू जी महाराज विश्वविद्यालय, कानपुर एवं जिला स्वास्थ्य समिति द्वारा सर्वाइकल कैंसर से बचाव हेतु किशोरियों में निःशुल्क टीकाकरण कार्यक्रम",
    btnText: "टीकाकरण विवरण देखें"
  },
  {
    img: "https://csjmu.ac.in/wp-content/uploads/2026/09/cvrps2026.jpg",
    alt: "C.V. Raman Research Grant Scheme",
    desc: "An exciting opportunity for CSJMU faculty applicants to pursue innovative, interdisciplinary and impactful research.",
    btnText: "Click for complete details"
  },
  {
    img: "https://csjmu.ac.in/wp-content/uploads/2026/10/Final-Poster-for-AI-Course-2026-1.jpg",
    alt: "Certificate & Diploma Courses in Artificial Intelligence",
    desc: "Master Generative AI, Machine Learning & Prompt Engineering at CSJMU - Admissions Open for Session 2026-27.",
    btnText: "Apply For AI Courses"
  },
  {
    img: "https://csjmu.ac.in/wp-content/uploads/2026/09/ai-manthan-2.png",
    alt: "AI Manthan 2.0 National Conclave",
    desc: "AI Manthan 2.0: National Conclave on Transforming Higher Education Through Next-Gen Intelligence.",
    btnText: "Explore AI Manthan 2.0"
  }
];

function initHeroSlider() {
  const wrapper = document.getElementById("heroSliderWrapper");
  const dotsContainer = document.getElementById("sliderDots");
  if (!wrapper || !dotsContainer) return;

  wrapper.innerHTML = heroSlides.map((slide, i) => `
    <div class="slide ${i === 0 ? 'active' : ''}" id="heroSlide-${i}">
      <img src="${slide.img}" alt="${slide.alt}" onerror="this.src='https://csjmu.ac.in/wp-content/uploads/2026/09/CERVICAL-CANCER-VACCINATION-SEPT-26-.jpg'">
    </div>
  `).join("");

  dotsContainer.innerHTML = heroSlides.map((_, i) => `
    <div class="dot ${i === 0 ? 'active' : ''}" onclick="goToHeroSlide(${i})"></div>
  `).join("");

  updateHeroCaption(0);
  startHeroTimer();

  // Pause on hover
  wrapper.addEventListener("mouseenter", () => clearInterval(heroSliderTimer));
  wrapper.addEventListener("mouseleave", () => startHeroTimer());
}

function updateHeroCaption(index) {
  const cap = document.getElementById("heroSlideCaption");
  const btn = document.getElementById("heroSlideBtn");
  if (cap) cap.textContent = heroSlides[index].desc;
  if (btn) btn.textContent = heroSlides[index].btnText;
}

function goToHeroSlide(index) {
  heroSlideIndex = index;
  if (heroSlideIndex >= heroSlides.length) heroSlideIndex = 0;
  if (heroSlideIndex < 0) heroSlideIndex = heroSlides.length - 1;

  document.querySelectorAll(".hero-slider .slide").forEach((s, i) => {
    s.classList.toggle("active", i === heroSlideIndex);
  });
  document.querySelectorAll(".slider-dots .dot").forEach((d, i) => {
    d.classList.toggle("active", i === heroSlideIndex);
  });

  updateHeroCaption(heroSlideIndex);
}

function nextHeroSlide() {
  goToHeroSlide(heroSlideIndex + 1);
}

function prevHeroSlide() {
  goToHeroSlide(heroSlideIndex - 1);
}

function startHeroTimer() {
  clearInterval(heroSliderTimer);
  heroSliderTimer = setInterval(nextHeroSlide, 5000);
}

// ==========================================
// 4. NOTICES & CIRCULARS CONTROLLER
// ==========================================
const circularsData = [
  { text: "Provisional List of Nodal and Examination Centres for Odd Semester Examinations - 2026-27", isNew: false, link: "https://csjmu.ac.in/wp-content/uploads/docs/2026/10/Odd-Sem-center-list-2026-27-Provisonal.pdf" },
  { text: "Important!!! Regarding 2026-27 Odd Sem. Exam. Final Schedule [26-10-2026]", isNew: true, link: "https://csjmu.ac.in/scheme/scheme/E0129-Important!!!%20Regarding%202026-27%20Odd%20Sem.%20Exam.%20%20Final%20Schedule%20%20[26-10-2026].pdf" },
  { text: "Notice regarding holiday on 26 October, 2026 on Maharishi Valmiki Jayanti", isNew: false, link: "https://csjmu.ac.in/wp-content/uploads/docs/2026/10/1170.Holiday-26-10-2026.pdf" },
  { text: "Regarding 2025-26 Environmental Studies Examination Center and Date [24-10-2026]", isNew: false, link: "https://csjmu.ac.in/scheme/scheme/E0128-Regarding%202025-26%20Environmental%20Studies%20Examination%20Center%20and%20Date%20[24-10-2026].pdf" },
  { text: "Important Notice Regarding Recruitment to the Posts of Associate Professor and Professor in Hindi Subject", isNew: true, link: "https://csjmu.ac.in/wp-content/uploads/docs/2026/10/Important-Notice-Regarding-Recruitment-to-the-Posts-of-Associate-Professor-and-Professor-in-Hindi-Subject-20261022.pdf" },
  { text: "Regarding 2020-21 and 2021-22 BSC (Ag.) Courses Students [22-10-2026]", isNew: false, link: "https://csjmu.ac.in/wp-content/uploads/docs/2026/10/Regarding-2020-21-and-2021-22-BSC-Ag.-Courses-Students-22-10-2026.pdf" },
  { text: "Regarding 2026-27 Odd Semester Exam. Schedule [17-10-2026]", isNew: false, link: "https://csjmu.ac.in/scheme/scheme/E0127-Regarding%202026-27%20Odd%20Semester%20Exam.%20Schedule%20[17-10-2026].pdf" },
  { text: "Regarding 2024-25 and 2025-26 BED III & IV Semester Leftover Practical Oral Exam. Date and Exam. Center [08-10-2026]", isNew: false, link: "https://csjmu.ac.in/scheme/scheme/E0126-Regarding%202024-25%20and%202025-26%20BED%20III%20&%20IV%20Semester%20Leftover%20Practical%20Oral%20Exam.%20Date%20and%20Exam.%20Center%20[08-10-2026].pdf" }
];

const noticesData = [
  { text: "General Notice: Campus cleanliness drive and Swachhata Pakhwada 2026", isNew: true, link: "#" },
  { text: "Office Order: Submission of Internal Assessment Marks for Odd Semester 2026-27", isNew: true, link: "#" },
  { text: "Notification regarding Ph.D. Viva Voce examination in Department of Chemistry", isNew: false, link: "#" },
  { text: "Samarth Student Portal: Last date for profile verification extended", isNew: false, link: "#" },
  { text: "Hostel Allotment Notice for First Year Students (Session 2026-27)", isNew: false, link: "#" },
  { text: "National Service Scheme (NSS) Annual Camp volunteer registration open", isNew: false, link: "#" }
];

let activeNoticesTab = "circulars";

function renderNoticesList(filterText = "") {
  const container = document.getElementById("noticesListContainer");
  if (!container) return;

  const dataset = (activeNoticesTab === "circulars") ? circularsData : noticesData;
  const filtered = dataset.filter(item => !filterText || item.text.toLowerCase().includes(filterText.toLowerCase()));

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:20px; color:#999; font-size:12px;">No matching items found.</div>`;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="notice-item" onclick="openDocModal('${escapeQuotes(item.text)}', '${item.link}')">
      ${item.isNew ? '<span class="new-badge">NEW</span>' : ''}
      <a href="javascript:void(0);">
        <i class="far fa-file-alt" style="color:var(--primary-theme-color); margin-right:4px;"></i>
        ${item.text}
      </a>
    </div>
  `).join("");
}

function switchNoticesTab(tabName) {
  activeNoticesTab = tabName;
  const tabCirc = document.getElementById("tabBtnCirculars");
  const tabNot = document.getElementById("tabBtnNotices");

  if (tabName === "circulars") {
    tabCirc.classList.remove("inactive");
    tabNot.classList.add("inactive");
  } else {
    tabNot.classList.remove("inactive");
    tabCirc.classList.add("inactive");
  }

  const searchBox = document.getElementById("noticeSearchInput");
  if (searchBox) searchBox.value = "";
  renderNoticesList();
}

// ==========================================
// 5. DEPARTMENT EVENTS SLIDER
// ==========================================
const deptEvents = [
  {
    title: "An international invited lecture on the occasion of the 38th convocation week",
    img: "https://csjmu.ac.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-09-27-at-13.49.28.jpg",
    link: "https://csjmu.ac.in/all-events/an-international-invited-lecture-on-the-occasion-of-the-38th-convocation-week/",
    desc: "Renowned international speakers delivered an enriching guest lecture during the prestigious 38th Convocation Week on modern scientific discoveries and higher education frontiers."
  },
  {
    title: "Talk on Genome Editing & CRISPR Technology",
    img: "https://csjmu.ac.in/wp-content/uploads/2023/09/15-06-22.jpg",
    link: "#",
    desc: "Eminent scientists from premier biotechnology institutes conducted an insightful technical symposium for life science scholars at CSJMU."
  },
  {
    title: "Inter Departmental Cricket Tournament 2026",
    img: "https://csjmu.ac.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-19-at-5.01.00-PM.jpeg",
    link: "#",
    desc: "Annual sports council meet bringing student athletes and university faculties together for intense friendly competition."
  },
  {
    title: "Industrial Visit to Hotel Regenta, Kanpur",
    img: "https://csjmu.ac.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-29-at-4.00.01-PM.jpeg",
    link: "#",
    desc: "Hospitality and Hotel Management students gained real-world exposure to hospitality operations and world-class management."
  }
];

let currentDeptEventIdx = 0;

function renderDeptEvent(idx) {
  currentDeptEventIdx = idx;
  if (currentDeptEventIdx >= deptEvents.length) currentDeptEventIdx = 0;
  if (currentDeptEventIdx < 0) currentDeptEventIdx = deptEvents.length - 1;

  const ev = deptEvents[currentDeptEventIdx];
  const container = document.getElementById("deptEventCard");
  if (!container) return;

  container.innerHTML = `
    <img src="${ev.img}" alt="${ev.title}" onerror="this.src='https://csjmu.ac.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-09-27-at-13.49.28.jpg'">
    <h4>${ev.title}</h4>
    <div style="margin-top:auto;">
      <button class="btn-solid" onclick="openEventModal(${currentDeptEventIdx})">Read More</button>
    </div>
  `;
}

function nextDeptEvent() {
  renderDeptEvent(currentDeptEventIdx + 1);
}

function prevDeptEvent() {
  renderDeptEvent(currentDeptEventIdx - 1);
}

function openEventModal(idx) {
  const ev = deptEvents[idx];
  showModal(ev.title, `
    <img src="${ev.img}" style="width:100%; max-height:280px; object-fit:cover; border-radius:6px; margin-bottom:12px;">
    <p style="font-size:13.5px; line-height:1.7;">${ev.desc}</p>
    <div style="background:#f1f5f9; padding:10px 14px; border-radius:6px; margin-top:12px; font-size:12px;">
      <strong>Organized by:</strong> Chhatrapati Shahu Ji Maharaj University Event Management Cell<br>
      <strong>Venue:</strong> University Auditorium / Campus Center, Kalyanpur, Kanpur
    </div>
  `);
}

// ==========================================
// 6. VIDEO MODAL PLAYER
// ==========================================
function openVideoModal(videoTitle, youtubeId) {
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
  const content = `
    <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:6px; background:#000;">
      <iframe src="${embedUrl}" title="${videoTitle}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <h4 style="margin-top:12px; color:var(--dark-sienna);">${videoTitle}</h4>
    <p style="font-size:12px; color:#666;">Official YouTube News Bulletin streamed by Chhatrapati Shahu Ji Maharaj University, Kanpur Media Cell.</p>
  `;
  showModal(videoTitle, content, true);
}

// ==========================================
// 7. AUTHORITIES PROFILE MODALS
// ==========================================
const authoritiesProfiles = {
  governor: {
    name: "Smt. Anandiben Patel",
    title: "Hon'ble Chancellor & Governor, Uttar Pradesh",
    img: "https://csjmu.ac.in/wp-content/uploads/2021/11/governer.jpeg",
    bio: "Smt. Anandiben Patel is the current Governor of Uttar Pradesh and the Chancellor of Chhatrapati Shahu Ji Maharaj University, Kanpur. A former Chief Minister of Gujarat and seasoned educationist, she is known for her vision in transforming state universities into centers of academic excellence, research advancement, and social empowerment."
  },
  cm: {
    name: "Shri Yogi Adityanath",
    title: "Hon'ble Chief Minister, Uttar Pradesh",
    img: "https://csjmu.ac.in/wp-content/uploads/2021/11/chief-minister.jpeg",
    bio: "Shri Yogi Adityanath is the Hon'ble Chief Minister of Uttar Pradesh. Under his visionary leadership, Uttar Pradesh has pioneered modern educational reforms, digital infrastructure, technological universities, and vocational skill initiatives empowering millions of youth across the state."
  },
  vc: {
    name: "Prof. Vinay Kumar Pathak",
    title: "Vice Chancellor, CSJMU Kanpur",
    img: "https://csjmu.ac.in/wp-content/uploads/2022/08/vc-sir-csjmu.jpg",
    bio: "Prof. Vinay Kumar Pathak is an eminent educationist and researcher who has steered CSJMU Kanpur to achieve NAAC A++ accreditation. With deep expertise in computer science, digital university governance, and research commercialization, he has led multiple state universities to national prominence."
  }
};

function openAuthorityModal(key) {
  const auth = authoritiesProfiles[key];
  if (!auth) return;

  const content = `
    <div style="display:flex; gap:18px; align-items:flex-start; flex-wrap:wrap;">
      <img src="${auth.img}" alt="${auth.name}" style="width:140px; height:170px; object-fit:cover; border-radius:6px; border:2px solid var(--primary-theme-color);">
      <div style="flex:1; min-width:220px;">
        <h4 style="color:var(--dark-sienna); margin:0 0 4px; font-size:18px;">${auth.name}</h4>
        <div style="color:var(--primary-theme-color); font-weight:700; font-size:13px; margin-bottom:10px;">${auth.title}</div>
        <p style="font-size:13px; line-height:1.7; color:#333;">${auth.bio}</p>
      </div>
    </div>
  `;
  showModal(auth.name, content);
}

// ==========================================
// 8. GENERIC MODAL & TOAST SYSTEM
// ==========================================
function showModal(title, bodyHtml, isLarge = false) {
  const overlay = document.getElementById("globalModalOverlay");
  const modalBox = document.getElementById("globalModalBox");
  const modalTitle = document.getElementById("globalModalTitle");
  const modalBody = document.getElementById("globalModalBody");

  if (!overlay || !modalTitle || !modalBody) return;

  modalTitle.textContent = title;
  modalBody.innerHTML = bodyHtml;

  if (isLarge) {
    modalBox.classList.add("modal-lg");
  } else {
    modalBox.classList.remove("modal-lg");
  }

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("globalModalOverlay");
  if (overlay) {
    overlay.classList.remove("active");
    // Clear innerHTML to stop youtube video playback if playing
    const modalBody = document.getElementById("globalModalBody");
    if (modalBody) modalBody.innerHTML = "";
  }
  document.body.style.overflow = "";
}

function openDocModal(docTitle, docUrl) {
  const content = `
    <div style="text-align:center; padding:15px 0;">
      <i class="far fa-file-pdf" style="font-size:50px; color:#dc2626; margin-bottom:15px;"></i>
      <h4 style="color:var(--space-cadet); font-size:15px; margin-bottom:12px;">${docTitle}</h4>
      <p style="font-size:13px; color:#555; margin-bottom:20px;">This official circular/notice has been verified from the university registrar & examination controller portal.</p>
      <div style="display:flex; justify-content:center; gap:12px;">
        ${docUrl && docUrl !== '#' ? `<a href="${docUrl}" target="_blank" class="btn-solid" style="background:#dc2626;"><i class="fas fa-download"></i> Download Official PDF</a>` : ''}
        <button class="btn-solid" style="background:var(--space-cadet);" onclick="closeModal()">Close</button>
      </div>
    </div>
  `;
  showModal("Document Notice", content);
}

function showToast(message) {
  let toast = document.getElementById("toastMsg");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastMsg";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ==========================================
// 9. FONT SIZE CONTROLS
// ==========================================
let currentFontScale = 14;

function setupFontControls() {
  const decBtn = document.getElementById("decreaseFont");
  const resetBtn = document.getElementById("resetFont");
  const incBtn = document.getElementById("increaseFont");

  if (decBtn) {
    decBtn.addEventListener("click", () => {
      if (currentFontScale > 11) {
        currentFontScale -= 1;
        document.body.style.fontSize = currentFontScale + "px";
        showToast(`Font Size: ${currentFontScale}px`);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      currentFontScale = 14;
      document.body.style.fontSize = "14px";
      showToast("Font Size: Default (14px)");
    });
  }

  if (incBtn) {
    incBtn.addEventListener("click", () => {
      if (currentFontScale < 20) {
        currentFontScale += 1;
        document.body.style.fontSize = currentFontScale + "px";
        showToast(`Font Size: ${currentFontScale}px`);
      }
    });
  }
}

// ==========================================
// 10. LANGUAGE SELECTOR
// ==========================================
function setupLanguageSelector() {
  const langSel = document.getElementById("languageSelector");
  if (langSel) {
    langSel.addEventListener("change", function () {
      const val = this.value;
      if (val === "Hindi") {
        showToast("भाषा बदली गई: हिन्दी (Hindi)");
      } else {
        showToast("Language changed: English");
      }
    });
  }
}

// ==========================================
// 11. MOBILE MENU TOGGLE
// ==========================================
function toggleMobileMenu() {
  const menu = document.getElementById("mainMenu");
  if (menu) menu.classList.toggle("active");
}

// ==========================================
// 12. BACK TO TOP BUTTON
// ==========================================
function setupBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==========================================
// 13. INITIALIZE EVERYTHING ON DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  setupFontControls();
  setupLanguageSelector();
  setupBackToTop();
  initHeroSlider();
  renderNoticesList();
  renderDeptEvent(0);
  setupAffiliatedDirectory();
  renderAffiliatedColleges();

  // Search input for Notices
  const nSearch = document.getElementById("noticeSearchInput");
  if (nSearch) {
    nSearch.addEventListener("input", function () {
      renderNoticesList(this.value);
    });
  }

  // Close modal when clicking outside modal box
  const overlay = document.getElementById("globalModalOverlay");
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
  }

  console.log("CSJMU Complete Website Engine Initialized with All Interactive Systems!");
});
