// Navigazione tra sezioni
function showSection(section) {
  document.getElementById('home-section').style.display = section === 'home' ? 'block' : 'none';
  document.getElementById('prodotti-section').style.display = section === 'prodotti' ? 'grid' : 'none';
  document.getElementById('contatti-section').style.display = section === 'contatti' ? 'block' : 'none';
  document.getElementById('nav-home').classList.toggle('active', section === 'home');
  document.getElementById('nav-prodotti').classList.toggle('active', section === 'prodotti');
  document.getElementById('nav-contatti').classList.toggle('active', section === 'contatti');
  window.scrollTo(0,0);
}
document.getElementById('nav-home').onclick = function(e){ e.preventDefault(); showSection('home'); }
document.getElementById('nav-prodotti').onclick = function(e){ e.preventDefault(); showSection('prodotti'); }
document.getElementById('nav-contatti').onclick = function(e){ e.preventDefault(); showSection('contatti'); }
showSection('home');

// Genera dinamicamente le card dei servizi
const servizi = [
  { titolo: "Computer & Workstation", descr: "Soluzioni affidabili per ogni esigenza professionale." },
  { titolo: "Server", descr: "Server performanti per aziende di ogni dimensione." },
  { titolo: "Notebook", descr: "Portatili per lavoro, studio e mobilità." },
  { titolo: "Stampanti, Plotter e Fotocopiatrici", descr: "Dispositivi di stampa e copia per ogni ambiente." },
  { titolo: "Vendita e assistenza", descr: "Supporto tecnico e commerciale dedicato." },
  { titolo: "Noleggio hardware", descr: "Soluzioni flessibili per il noleggio di dispositivi IT." },
  { titolo: "Installazione firewall", descr: "Sicurezza informatica per la tua rete aziendale." },
  { titolo: "Consulenza informatica", descr: "Consulenza su misura per ottimizzare la tua infrastruttura IT." },
  { titolo: "Soluzioni IT per privati e aziende", descr: "Progetti personalizzati per ogni esigenza." },
  { titolo: "Realizzazione Siti Web", descr: "Creiamo siti web professionali su misura per la tua azienda o attività, con attenzione a design, sicurezza e visibilità online." }
];
const serviziContainer = document.querySelector('.services');
if(serviziContainer){
  servizi.forEach(s => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `<h3>${s.titolo}</h3><p>${s.descr}</p>`;
    serviziContainer.appendChild(card);
  });
}

// Animazione fade-in sulle card servizi
function fadeInOnScroll() {
  var cards = document.querySelectorAll('.service-card');
  var trigger = window.innerHeight * 0.92;
  cards.forEach(function(card){
    var rect = card.getBoundingClientRect();
    if(rect.top < trigger) card.classList.add('fade-in');
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('resize', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Form di contatto (solo simulazione)
document.getElementById('contact-form').onsubmit = function(e){
  e.preventDefault();
  document.getElementById('success-message').style.display = 'block';
  this.reset();
  setTimeout(function(){
    document.getElementById('success-message').style.display = 'none';
  }, 4000);
}
