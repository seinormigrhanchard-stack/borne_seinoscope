/* ============================================================
   NAVIGATION ENTRE LES PAGES HTML
   ============================================================ */
const PAGES = {
  accueil: 'index.html',
  poissons: 'poissons.html',
  seine: 'seine.html',
  suivi: 'suivi.html',
  restauration: 'restauration.html',
  carte: 'carte.html',
  jeunes: 'jeunes.html'
};
function allerA(id){
  const destination = PAGES[id] || 'index.html';
  window.location.href = destination;
}
function resetVeilleTimer(){ /* Plus de retour automatique : chaque rubrique est une page indépendante. */ }

/* ============================================================
   ESPACE JEUNES PUBLICS : bascule d'onglets
   ============================================================ */
function choisirJeu(nom){
  document.querySelectorAll('#jeunes .onglet').forEach(b => b.classList.toggle('actif', b.dataset.jeu === nom));
  document.querySelectorAll('#jeunes .panneau-onglet').forEach(p => p.classList.remove('actif'));
  document.getElementById('jeu-' + nom).classList.add('actif');
  if(nom === 'labyrinthe'){ renderLabyrinthe(); }
}

/* ---------- Jeu 1 : Memory des poissons ---------- */
let memoryState = { cards:[], flipped:[], matched:new Set(), moves:0, locked:false };

function initMemory(){
  let cards = [];
  POISSONS.forEach(p => { cards.push({especeId:p.id}); cards.push({especeId:p.id}); });
  for(let i = cards.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  cards = cards.map((c, i) => ({...c, uid:i}));
  memoryState = { cards, flipped:[], matched:new Set(), moves:0, locked:false };
  const victoire = document.getElementById('memory-victoire');
  if(victoire) victoire.remove();
  renderMemory();
  updateMemoryInfo();
}

function renderMemory(){
  const cible = document.getElementById('memory-grille');
  if(!cible) return;
  cible.innerHTML = memoryState.cards.map(c => {
    const p = POISSONS.find(x => x.id === c.especeId);
    const estRetournee = memoryState.flipped.includes(c.uid) || memoryState.matched.has(c.uid);
    return `<button class="memory-carte tap ${estRetournee ? 'retournee' : ''} ${memoryState.matched.has(c.uid) ? 'trouvee' : ''}" data-uid="${c.uid}" onclick="retournerCarte(${c.uid})">
      <span class="dos">〜</span>
      <span class="face">${svgFish(p, false)}<b>${p.nom}</b></span>
    </button>`;
  }).join('');
}

function updateMemoryInfo(){
  const el = document.getElementById('memory-info');
  if(!el) return;
  el.textContent = `Coups : ${memoryState.moves} · Paires trouvées : ${memoryState.matched.size / 2} / ${POISSONS.length}`;
}

function retournerCarte(uid){
  if(memoryState.locked) return;
  if(memoryState.flipped.includes(uid) || memoryState.matched.has(uid)) return;
  memoryState.flipped.push(uid);
  renderMemory();
  if(memoryState.flipped.length === 2){
    memoryState.moves++;
    memoryState.locked = true;
    const [a, b] = memoryState.flipped;
    const ca = memoryState.cards.find(c => c.uid === a);
    const cb = memoryState.cards.find(c => c.uid === b);
    if(ca.especeId === cb.especeId){
      memoryState.matched.add(a); memoryState.matched.add(b);
      memoryState.flipped = [];
      memoryState.locked = false;
      updateMemoryInfo();
      renderMemory();
      if(memoryState.matched.size === memoryState.cards.length){
        setTimeout(() => {
          const cible = document.getElementById('jeu-memory');
          if(!document.getElementById('memory-victoire')){
            const msg = document.createElement('p');
            msg.id = 'memory-victoire';
            msg.className = 'lab-victoire';
            msg.textContent = `🎉 Bravo ! Toutes les paires trouvées en ${memoryState.moves} coups.`;
            cible.appendChild(msg);
          }
        }, 200);
      }
    } else {
      updateMemoryInfo();
      setTimeout(() => {
        memoryState.flipped = [];
        memoryState.locked = false;
        renderMemory();
      }, 900);
    }
  }
}

/* ---------- Jeu 2 : Labyrinthe de l'anguille ---------- */
// 1 = case ouverte, 0 = case fermée. Index 0 = la mer (départ), dernier index = les frayères (arrivée).
const LAB_ROWS = [
  [1,1,1,1,1], // 0  Mer (départ)
  [1,1,1,1,1], // 1  bassin
  [1,0,0,0,0], // 2  fente à gauche
  [1,1,1,1,1], // 3  bassin
  [0,0,0,0,1], // 4  fente à droite
  [1,1,1,1,1], // 5  bassin
  [1,0,0,0,0], // 6  fente à gauche
  [1,1,1,1,1], // 7  bassin
  [0,0,0,0,1], // 8  fente à droite
  [1,1,1,1,1], // 9  bassin
  [1,0,0,0,0], // 10 fente à gauche
  [1,1,1,1,1], // 11 bassin
  [0,0,0,0,1], // 12 fente à droite
  [1,1,1,1,1]  // 13 Frayères (arrivée)
];
let labPos = { row:0, col:2 };

function initLabyrinthe(){
  labPos = { row:0, col:2 };
  const victoire = document.getElementById('lab-victoire');
  if(victoire) victoire.remove();
  renderLabyrinthe();
}

function renderLabyrinthe(){
  const cible = document.getElementById('lab-grille');
  if(!cible) return;
  const anguille = POISSONS.find(p => p.id === 'anguille');
  let html = '';
  for(let r = LAB_ROWS.length - 1; r >= 0; r--){
    for(let c = 0; c < 5; c++){
      const ouverte = LAB_ROWS[r][c] === 1;
      let cls = 'lab-cell ' + (ouverte ? 'ouverte' : 'fermee');
      if(r === 0) cls += ' depart';
      if(r === LAB_ROWS.length - 1) cls += ' but';
      let occ = '';
      if(labPos.row === r && labPos.col === c){ occ = svgFish(anguille, false); }
      html += `<div class="${cls}">${occ ? `<span class="occupant">${occ}</span>` : ''}</div>`;
    }
  }
  cible.innerHTML = html;
}

function deplacerAnguille(dCol, dRow){
  const nr = labPos.row + dRow, nc = labPos.col + dCol;
  if(nr < 0 || nr >= LAB_ROWS.length || nc < 0 || nc >= 5) return;
  if(LAB_ROWS[nr][nc] !== 1) return;
  labPos = { row:nr, col:nc };
  renderLabyrinthe();
  if(nr === LAB_ROWS.length - 1){
    setTimeout(() => {
      const cible = document.getElementById('jeu-labyrinthe');
      if(!document.getElementById('lab-victoire')){
        const msg = document.createElement('p');
        msg.id = 'lab-victoire';
        msg.className = 'lab-victoire';
        msg.textContent = "🎉 Bravo, l'anguille a rejoint les frayères de l'amont !";
        cible.appendChild(msg);
      }
    }, 150);
  }
}

function ouvrirAccueil() {
  const veille = document.getElementById("veille");
  const accueil = document.getElementById("accueil");

  if (veille) {
    veille.classList.remove("active");
  }

  if (accueil) {
    accueil.classList.add("active");
    accueil.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

/* ============================================================
   Petits poissons flottants sur l'écran de veille
   ============================================================ */
function initVeillePoissons(){
  const cible = document.getElementById('veille-poissons');
  const choix = [POISSONS[0], POISSONS[2], POISSONS[5], POISSONS[3]];
  cible.innerHTML = choix.map((p,i) => `
    <div class="veille-poisson" style="width:${8+i*2}vw; top:${12+i*20}%; left:${-15}%; animation: nager${i} ${26+i*6}s linear infinite;">${svgFish(p,false)}</div>
  `).join('');
  const style = document.createElement('style');
  style.textContent = choix.map((p,i) => `
    @keyframes nager${i} { from { transform: translateX(0) scaleX(-1);} 49%{transform: translateX(130vw) scaleX(-1);} 50%{transform: translateX(130vw) scaleX(1);} to { transform: translateX(0) scaleX(1);} }
  `).join('');
  document.head.appendChild(style);
}

/* ============================================================
   INITIALISATION ADAPTEE A LA PAGE COURANTE
   ============================================================ */
if(document.getElementById('grille-poissons')) initGrillePoissons();
if(document.getElementById('liste-especes-sci')) initListeEspecesSci();
if(document.getElementById('rn-fishes')) initNavRiviere();
if(document.getElementById('veille-poissons')) initVeillePoissons();
if(document.getElementById('station-detail')) afficherStation('poses-rg');
if(document.getElementById('memory-grille')) initMemory();
if(document.getElementById('lab-grille')) initLabyrinthe();
if(document.getElementById('riviere-nav') && document.getElementById('veille-poissons')) {
  document.getElementById('riviere-nav').classList.add('masquee');
}
