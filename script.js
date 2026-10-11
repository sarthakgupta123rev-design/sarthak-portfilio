const projects = {
  buildconnect: {index:"01 / 05",tag:"PRODUCT CONCEPT",title:"BuildConnect",description:"A hyperlocal services marketplace concept connecting households with trusted service professionals.",stack:"PRODUCT THINKING · WEB",art:"art-buildconnect",image:"assets/buildconnect-dashboard.png",hub:"BC",label:"LOCAL WORK. REAL TRUST."},
  jarvis: {index:"02 / 05",tag:"PYTHON · AUTOMATION",title:"J.A.R.V.I.S.",description:"A Python assistant project exploring voice interaction, workflow automation, and backend logic.",stack:"PYTHON · FLASK · AUDIO",art:"art-jarvis",image:"assets/jarvis-dashboard.png",hub:"J.A.",label:"PERSONAL AI ASSISTANT"},
  dental: {index:"03 / 05",tag:"LIVE WEBSITE",title:"Umesh Dental Hospital",description:"A deployed website concept presenting a local dental practice with a clear, responsive layout.",stack:"HTML · CSS · NETLIFY",art:"art-dental",image:"assets/umesh-dental-website.png",hub:"UD",label:"CARE, MADE CLEAR"},
  data: {index:"04 / 05",tag:"DATA EXPLORATION",title:"Data Lab",description:"Python practice projects for cleaning data, exploring patterns, and creating readable visualizations.",stack:"PYTHON · PANDAS · CHARTS",art:"art-data",hub:"∑",label:"FROM DATA TO INSIGHT"},
  portfolio: {index:"05 / 05",tag:"FRONTEND EXPERIMENT",title:"Portfolio / 02",description:"A typography-led portfolio experiment with responsive interactions and a project index inspired by editorial design.",stack:"HTML · CSS · JAVASCRIPT",art:"art-portfolio",image:"assets/portfolio-project-index.png",hub:"SG",label:"DESIGN MEETS ENGINEERING"}
};
const rows = [...document.querySelectorAll(".project-row")];
const art = document.getElementById("previewArt");
function activate(key){
  const p = projects[key]; if(!p) return;
  rows.forEach(row=>row.classList.toggle("active",row.dataset.project===key));
  document.getElementById("previewIndex").textContent=p.index;
  document.getElementById("previewTag").textContent=p.tag;
  document.getElementById("previewTitle").textContent=p.title;
  document.getElementById("previewDescription").textContent=p.description;
  document.getElementById("previewStack").textContent=p.stack;
  art.className="preview-art "+p.art;
  art.innerHTML=`<div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="node node-one">BUILD</div><div class="node node-two">IDEAS</div><div class="node node-three">IMPACT</div><div class="hub"><span>${p.hub}</span><small>${p.title.toUpperCase().replace(/\\./g,"<br>")}</small></div><div class="art-label">${p.label}</div>`;
}
rows.forEach(row=>{
  row.addEventListener("mouseenter",()=>activate(row.dataset.project));
  row.addEventListener("focus",()=>activate(row.dataset.project));
  row.addEventListener("click",e=>{
    if(window.matchMedia("(hover: none)").matches){e.preventDefault();activate(row.dataset.project);document.querySelector(row.getAttribute("href"))?.scrollIntoView({behavior:"smooth",block:"center"});}
  });
});

// Certificate gallery: hover to preview, click/tap to open a half-screen detail drawer.
const certificateModal = document.getElementById('certificateModal');
const certificateRows = [...document.querySelectorAll('.recognition-row[data-image]')];
const modalImage = document.getElementById('modalCertificateImage');
const modalTitle = document.getElementById('modalTitle');
const modalKind = document.getElementById('modalKind');
const modalDate = document.getElementById('modalDate');
const fullCertificateLink = document.getElementById('openFullCertificate');
let previouslyFocused = null;
function openCertificate(row) {
  previouslyFocused = document.activeElement;
  const imagePath = row.dataset.image;
  modalImage.src = imagePath;
  modalImage.alt = `${row.dataset.title} certificate`;
  modalTitle.textContent = row.dataset.title;
  modalKind.textContent = row.dataset.kind;
  modalDate.textContent = row.dataset.date;
  fullCertificateLink.href = imagePath;
  certificateModal.classList.add('is-open');
  certificateModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('closeCertificate').focus();
}
function closeCertificate() {
  certificateModal.classList.remove('is-open');
  certificateModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (previouslyFocused && typeof previouslyFocused.focus === 'function') previouslyFocused.focus();
}
certificateRows.forEach(row => row.addEventListener('click', () => openCertificate(row)));
document.getElementById('closeCertificate').addEventListener('click', closeCertificate);
certificateModal.querySelector('.modal-scrim').addEventListener('click', closeCertificate);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && certificateModal.classList.contains('is-open')) closeCertificate();
});
