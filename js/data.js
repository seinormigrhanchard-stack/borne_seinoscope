
/* ============================================================
   DONNEES DES ESPECES
   Sources : fiches espèces www.seinormigr.fr (contenus reformulés)
   ============================================================ */
// photo = URL directe du fichier image hébergé par SEINORMIGR.
// photoPage = page officielle de l'espèce (utilisée comme référence si la photo directe n'est pas renseignée).
const POISSONS = [
  {
    id:'saumon', nom:'Saumon atlantique', photos:['photos/saumon/saumon-01.jpg', 'photos/saumon/saumon-02.jpg', 'photos/saumon/saumon-03.jpg', 'photos/saumon/saumon-04.jpg', 'photos/saumon/saumon-05.jpg', 'photos/saumon/saumon-06.jpg', 'photos/saumon/saumon-07.jpg', 'photos/saumon/saumon-08.jpg'], photoPage:'https://www.seinormigr.fr/fr/saumon-atlantique-7036', latin:'Salmo salar', sens:'anadrome',
    taille:'jusqu\u2019à 1 m', poids:'jusqu\u2019à une vingtaine de kg', statut:'Quasi menacé en France (UICN)',
    cycle:'Né en rivière, le jeune saumon dévale vers la mer où il grossit au large du Groenland ou des îles Féroé. Devenu adulte, il retrouve en général sa rivière natale pour s\u2019y reproduire grâce à sa mémoire olfactive, et la grande majorité des géniteurs meurent après le frai.',
    anecdote:'Selon la durée de son séjour en mer, on distingue le castillon (1 hiver en mer, 45 à 75 cm), le saumon de printemps (2 hivers, 75 à 90 cm) et le grand saumon de printemps (3 hivers, plus de 90 cm). Quelques saumons sont comptés chaque année à Poses, mais aucune reproduction naturelle n\u2019est encore connue en amont de l\u2019estuaire.',
    couleur:'#8FB8C9', forme:'torpille', tache:'#3B4A52',
    source:'https://www.seinormigr.fr/fr/saumon-atlantique-7036', dashboard:'https://www.seinormigr.fr/fr/tableau-bord-sat-0996'
  },
  {
    id:'truite-mer', nom:'Truite de mer', photos:['photos/truite-mer/truite-mer-01.jpg', 'photos/truite-mer/truite-mer-02.jpg', 'photos/truite-mer/truite-mer-03.jpg', 'photos/truite-mer/truite-mer-04.jpg', 'photos/truite-mer/truite-mer-05.jpg', 'photos/truite-mer/truite-mer-06.jpg', 'photos/truite-mer/truite-mer-07.jpg', 'photos/truite-mer/truite-mer-08.jpg', 'photos/truite-mer/truite-mer-09.jpg'], photoPage:'https://www.seinormigr.fr/fr/truite-de-mer-e71d', latin:'Salmo trutta trutta', sens:'anadrome',
    taille:'jusqu\u2019à 1 m', poids:'jusqu\u2019à une dizaine de kg', statut:'Préoccupation mineure en France (UICN)',
    cycle:'Cousine du saumon, la truite de mer est un « écotype » migrateur de la truite commune : certains individus partent grossir en mer, d\u2019autres restent sédentaires en rivière. Contrairement au saumon, une bonne partie des géniteurs survit au frai et peut se reproduire plusieurs fois au cours de sa vie.',
    anecdote:'Chez les juvéniles migrateurs, environ trois sur quatre sont des femelles : une stratégie qui permet aux géniteurs de revenir plus grands et de pondre davantage d\u2019œufs. Dans la Seine, la truite de mer est comptée en plus grand nombre que le saumon, avec des remontées observées jusqu\u2019à 450 km de la mer.',
    couleur:'#A9C6B6', forme:'torpille', tache:'#4A5A3E',
    source:'https://www.seinormigr.fr/fr/truite-de-mer-e71d', dashboard:'https://www.seinormigr.fr/fr/tableau-bord-truite-mer-df09'
  },
  {
    id:'alose', nom:'Grande alose', photos:['photos/alose/alose-01.jpg', 'photos/alose/alose-02.jpg', 'photos/alose/alose-03.jpg', 'photos/alose/alose-04.jpg', 'photos/alose/alose-05.jpg', 'photos/alose/alose-06.jpg', 'photos/alose/alose-07.jpg', 'photos/alose/alose-08.jpg', 'photos/alose/alose-09.jpg', 'photos/alose/alose-10.jpg', 'photos/alose/alose-11.jpg'], photoPage:'https://www.seinormigr.fr/fr/grande-alose-0d85', latin:'Alosa alosa', sens:'anadrome',
    taille:'poisson argenté proche de la sardine', poids:'—', statut:'En danger critique d\u2019extinction en France (UICN)',
    cycle:'Après 3 à 7 ans passés en mer à se nourrir de zooplancton, la grande alose remonte la Seine dès que l\u2019eau atteint 10 à 15°C. La ponte, nocturne, s\u2019accompagne d\u2019un tourbillon bruyant de surface appelé le « bull ». Presque tous les géniteurs meurent après la reproduction.',
    anecdote:'2020 a été une année record avec près de 3500 aloses comptées à la station de Poses rive droite (Amfreville-sous-les-Monts). Des cas de reproduction ont même été repérés jusqu\u2019à 400-500 km de la mer, sur la Marne et sur la Seine en amont de Paris.',
    couleur:'#C9CFC0', forme:'alose', tache:'#39424A',
    source:'https://www.seinormigr.fr/fr/grande-alose-0d85', dashboard:'https://www.seinormigr.fr/fr/tableau-bord-alose-c86a'
  },
  {
    id:'lamproie-marine', nom:'Lamproie marine', photos:['photos/lamproie-marine/lamproie-marine-01.jpg', 'photos/lamproie-marine/lamproie-marine-02.jpg', 'photos/lamproie-marine/lamproie-marine-03.jpg', 'photos/lamproie-marine/lamproie-marine-04.jpg', 'photos/lamproie-marine/lamproie-marine-05.jpg', 'photos/lamproie-marine/lamproie-marine-06.jpg', 'photos/lamproie-marine/lamproie-marine-07.jpg'], photoPage:'https://www.seinormigr.fr/fr/lamproie-marine-a53d', latin:'Petromyzon marinus', sens:'anadrome',
    taille:'environ 80 cm, jusqu\u2019à 1,20 m', poids:'jusqu\u2019à 2 kg', statut:'En danger en France (UICN)',
    cycle:'Dépourvue de mâchoires, la lamproie marine se fixe sur d\u2019autres poissons grâce à un disque buccal ventousé pour s\u2019en nourrir en mer. Ses larves, les ammocètes, restent enfouies 5 à 7 ans dans les sédiments avant de gagner la mer. Tous les géniteurs meurent après le frai.',
    anecdote:'Poses accueille la population de lamproies marines la plus importante du bassin Seine-Normandie, avec en moyenne plus de 2000 individus comptés chaque année à la sortie de l\u2019estuaire. Son devenir une fois le barrage franchi reste toutefois encore largement méconnu.',
    couleur:'#8A7A5C', forme:'anguilliforme', tache:'#5C4A32',
    source:'https://www.seinormigr.fr/fr/lamproie-marine-a53d', dashboard:'https://www.seinormigr.fr/fr/tableau-de-bord-lamproie-marine-f55f'
  },
  {
    id:'lamproie-fluviatile', nom:'Lamproie fluviatile', photos:['photos/lamproie-fluviatile/lamproie-fluviatile-01.jpg', 'photos/lamproie-fluviatile/lamproie-fluviatile-02.jpg', 'photos/lamproie-fluviatile/lamproie-fluviatile-03.jpg', 'photos/lamproie-fluviatile/lamproie-fluviatile-04.jpg', 'photos/lamproie-fluviatile/lamproie-fluviatile-05.jpg', 'photos/lamproie-fluviatile/lamproie-fluviatile-06.jpg', 'photos/lamproie-fluviatile/lamproie-fluviatile-07.jpg', 'photos/lamproie-fluviatile/lamproie-fluviatile-08.jpg', 'photos/lamproie-fluviatile/lamproie-fluviatile-09.jpg'], photoPage:'https://www.seinormigr.fr/fr/lamproie-fluviatile-faf3', latin:'Lampetra fluviatilis', sens:'anadrome',
    taille:'25 à 35 cm', poids:'quelques dizaines de grammes', statut:'Vulnérable en France (UICN)',
    cycle:'Plus petite que sa cousine marine, la lamproie fluviatile suit un cycle très proche : des ammocètes enfouies 3 à 6 ans dans la vase, puis une croissance marine parasite avant la remontée et la reproduction, toutes deux nocturnes.',
    anecdote:'Ses capacités de franchissement sont plus limitées que celles de la lamproie marine : l\u2019espèce reste surtout présente sur les parties basses des cours d\u2019eau. C\u2019est sur la Seine et ses affluents estuariens qu\u2019elle est la plus abondante du bassin.',
    couleur:'#8FA0AE', forme:'anguilliforme', tache:'#42525C',
    source:'https://www.seinormigr.fr/fr/lamproie-fluviatile-faf3', dashboard:'https://www.seinormigr.fr/fr/tableau-bord-lamproie-fluviatile-496b'
  },
  {
    id:'anguille', nom:'Anguille européenne', photos:['photos/anguille/anguille-01.jpg', 'photos/anguille/anguille-02.jpg', 'photos/anguille/anguille-03.jpg', 'photos/anguille/anguille-04.jpg', 'photos/anguille/anguille-05.jpg', 'photos/anguille/anguille-06.jpg', 'photos/anguille/anguille-07.jpg', 'photos/anguille/anguille-08.jpg', 'photos/anguille/anguille-09.jpg', 'photos/anguille/anguille-10.jpg', 'photos/anguille/anguille-11.jpg', 'photos/anguille/anguille-12.jpg'], photoPage:'https://www.seinormigr.fr/fr/l-anguille-europeenne-6bca', latin:'Anguilla anguilla', sens:'catadrome',
    taille:'20 à 45 cm (mâles), 35 cm à plus d\u20191 m (femelles)', poids:'jusqu\u2019à 1 kg', statut:'En danger critique d\u2019extinction (UICN)',
    cycle:'Née en mer des Sargasses, la civelle traverse l\u2019Atlantique puis colonise la Seine, où elle grandit plusieurs années (3 à 9 ans pour les mâles, 5 à 18 ans pour les femelles) avant de « s\u2019argenter » et de redescendre, sans se nourrir, vers son lieu de naissance pour s\u2019y reproduire et y mourir.',
    anecdote:'C\u2019est la seule espèce du parcours à migrer en sens inverse des autres, de la rivière vers la mer. À la rampe de Poses rive droite, jusqu\u2019à 476 570 anguilles ont été comptées sur une seule saison, avec des pointes proches de 80 000 individus en une journée au plus chaud de l\u2019été.',
    couleur:'#C9A25C', forme:'anguilliforme', tache:'#7A5A28',
    source:'https://www.seinormigr.fr/fr/l-anguille-europeenne-6bca', dashboard:'https://www.seinormigr.fr/fr/tableau-bord-anguille-a736'
  }
];

/* ============================================================
   DONNEES DES STATIONS DE CONTROLE (STACOMI)
   Sources : www.seinormigr.fr — pages de chaque station (contenus reformulés)
   ============================================================ */
const STATIONS = [
  {
    id:'poses-rg', nom:'Poses — rive gauche', riviere:'Seine',
    distance:'≈ 160 km de la mer', depuis:'Vidéo-comptage depuis 2008 · piège à anguilles depuis 2014',
    gestion:'Syndicat de Léry-Poses · SEINORMIGR',
    desc:'Le barrage de Poses marque la limite de l\u2019estuaire de la Seine : la marée s\u2019y fait encore sentir, et l\u2019ouvrage reste la première porte d\u2019entrée pour tous les migrateurs qui souhaitent continuer vers l\u2019amont. La passe historique, en rive gauche, est installée du côté de la centrale hydroélectrique.',
    chiffre:'Espèce la mieux suivie ici : la lamproie marine. Depuis 2008, les effectifs comptés chaque année varient entre 454 et près de 4900 individus — la population la plus importante du bassin Seine-Normandie.',
    url:'https://www.seinormigr.fr/fr/station-controle-migrations-poses-cd3b'
  },
  {
    id:'poses-rd', nom:'Poses — rive droite (Amfreville-sous-les-Monts)', riviere:'Seine',
    distance:'≈ 160 km de la mer', depuis:'Passe achevée en 2017 · vidéo-comptage et piège à anguilles depuis 2018',
    gestion:'SEINORMIGR (ouvrage Voies Navigables de France)',
    desc:'Construite par Voies Navigables de France en complément de la passe historique de rive gauche, cette seconde passe a nettement augmenté les possibilités de franchissement du barrage de Poses, aussi bien pour les poissons que pour le suivi scientifique.',
    chiffre:'Jusqu\u2019à 476 570 anguilles comptées ici lors de la première saison de piégeage (2018), avec des arrivées massives en été pouvant dépasser 80 000 individus en une seule journée lors des pics de température.',
    url:'https://www.seinormigr.fr/fr/station-controle-migrations-amfreville-sous-monts-78c6'
  },
  {
    id:'pontoise', nom:'Pontoise', riviere:'Oise',
    distance:'14 km de la confluence avec la Seine', depuis:'Passe à 8 bassins à fentes verticales · chute d\u2019environ 1,5 m',
    gestion:'Voies Navigables de France · SEINORMIGR',
    desc:'Sur cet ouvrage de navigation entre Pontoise et Saint-Ouen-l\u2019Aumône, une caméra filme en continu chaque poisson qui franchit la passe, dans un sens comme dans l\u2019autre, permettant de les identifier et de les dénombrer.',
    chiffre:'Une caméra diffuse les passages en direct depuis la station, avec un historique des dix dernières vidéos enregistrées pour chaque espèce rencontrée sur l\u2019Oise.',
    url:'https://www.seinormigr.fr/fr/station-controle-migrations-pontoise-9767',
    live:true
  },
  {
    id:'maisons-alfort', nom:'Maisons-Alfort', riviere:'Marne',
    distance:'2 km de la confluence avec la Seine (plus de 350 km de la mer)', depuis:'Passe à 10 bassins équipée depuis 2009 · chute d\u2019environ 1,85 m',
    gestion:'Voies Navigables de France · SEINORMIGR', statut:'En projet — passe fonctionnelle, comptage en attente d\u2019équipement',
    desc:'Cet ouvrage de navigation sur la Marne dispose d\u2019une chambre d\u2019observation à deux vitres : l\u2019une pour le futur dispositif de vidéo-comptage, l\u2019autre à vocation pédagogique. C\u2019est, des trois observatoires de Voies Navigables de France, le seul adapté pour accueillir du public.',
    chiffre:'Des aménagements sont encore nécessaires avant la mise en service complète du site, qui permettra alors d\u2019observer les migrateurs remontant la Seine puis s\u2019engageant sur la Marne, à plus de 350 km de la mer.',
    url:'https://www.seinormigr.fr/fr/station-controle-migrations-maisons-alfort-f8bc'
  },
  {
    id:'choisy-au-bac', nom:'Choisy-au-Bac (barrage de Carandeau)', riviere:'Aisne',
    distance:'plus de 450 km de la mer', depuis:'Vidéo-comptage depuis 2017',
    gestion:'—',
    desc:'La station de Choisy-au-Bac est située sur le barrage de Carandeau, sur l’Aisne, à seulement 2 km de sa confluence avec l’Oise. Elle permet d’identifier et de comptabiliser les espèces qui s’engagent sur l’Aisne et contribue à évaluer la recolonisation récente du bassin de l’Aisne par les poissons amphihalins.',
    chiffre:'Les premières images de vidéocomptage en 2017 ont permis de détecter 4 saumons et 8 aloses. En 2019, 359 aloses et 5 truites de mer ont été observées sur le site.',
    url:'https://www.seinormigr.fr/fr/station-controle-migrations-choisy-bac-f28e'
  }
];

/* ============================================================
   ILLUSTRATIONS SVG (silhouettes stylisées, type planche naturaliste)
   ============================================================ */
function svgFish(p, big){
  if(p.forme === 'anguilliforme'){
    return `<svg viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg">
      <path d="M8,45 C30,10 70,15 95,40 C120,65 150,20 180,35 C195,42 205,44 212,45 C205,46 195,48 180,55 C150,70 120,25 95,50 C70,75 30,80 8,45 Z" fill="${p.couleur}" opacity="0.95"/>
      <path d="M8,45 C30,10 70,15 95,40 C120,65 150,20 180,35" stroke="${p.tache}" stroke-width="2" fill="none" opacity="0.35"/>
      <circle cx="16" cy="43" r="2.4" fill="${p.tache}"/>
    </svg>`;
  }
  if(p.forme === 'alose'){
    return `<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M18,60 C40,15 110,10 155,35 C185,50 205,58 214,60 C205,62 185,70 155,85 C110,110 40,105 18,60 Z" fill="${p.couleur}"/>
      <path d="M155,35 L214,60 L155,85 Z" fill="${p.tache}" opacity="0.9"/>
      <circle cx="34" cy="55" r="6" fill="${p.tache}" opacity="0.7"/>
      <circle cx="52" cy="53" r="4.4" fill="${p.tache}" opacity="0.55"/>
      <circle cx="68" cy="52" r="3.4" fill="${p.tache}" opacity="0.4"/>
      <circle cx="28" cy="58" r="2.6" fill="#111"/>
    </svg>`;
  }
  return `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M14,50 C24,20 70,14 120,20 C160,25 190,35 210,50 C190,65 160,75 120,80 C70,86 24,80 14,50 Z" fill="${p.couleur}"/>
    <path d="M175,30 L210,50 L175,70 Z" fill="${p.tache}" opacity="0.9"/>
    <circle cx="150" cy="34" r="3" fill="${p.tache}" opacity="0.65"/>
    <circle cx="130" cy="28" r="2.6" fill="${p.tache}" opacity="0.55"/>
    <circle cx="110" cy="24" r="2.2" fill="${p.tache}" opacity="0.5"/>
    <circle cx="140" cy="60" r="2.4" fill="${p.tache}" opacity="0.45"/>
    <path d="M100,20 C108,10 118,8 126,12 C118,16 110,18 100,20 Z" fill="${p.couleur}" opacity="0.85"/>
    <circle cx="24" cy="47" r="2.6" fill="#111"/>
  </svg>`;
}

/* ============================================================
   RENDU : accueil / grille / fiches / nav rivière
   ============================================================ */
function initGrillePoissons(){
  const grille = document.getElementById('grille-poissons');
  grille.innerHTML = POISSONS.map(p => `
    <button class="carte-poisson tap ${p.sens==='anadrome'?'anad':'cata'}" onclick="ouvrirFiche('${p.id}')">
      <div class="photo-espece">
        ${p.photos && p.photos.length ? `<img src="${p.photos[0]}" alt="${p.nom}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\"photo-fallback\">Photo indisponible</span>'">` : `<span class="photo-fallback">Photo de l'espèce<br>à intégrer depuis SEINORMIGR</span>`}
      </div>
      <div class="visuel">${svgFish(p,false)}</div>
      <span class="type-tag">${p.sens === 'anadrome' ? 'Mer → Rivière' : 'Rivière → Mer'}</span>
      <h3>${p.nom}</h3>
      <span class="latin">${p.latin}</span>
    </button>
  `).join('');
}

function initListeEspecesSci(){
  const cible = document.getElementById('liste-especes-sci');
  cible.innerHTML = POISSONS.map(p => `
    <div class="puce-espece">${svgFish(p,false)}<span><strong>${p.nom}</strong> — ${p.latin}</span></div>
  `).join('');
}

function initNavRiviere(){
  const cible = document.getElementById('rn-fishes');
  cible.innerHTML = POISSONS.map(p => `
    <button class="rn-fish tap ${p.sens==='catadrome'?'catadrome':''}" data-id="${p.id}" onclick="allerA('poissons'); ouvrirFiche('${p.id}');">
      <span class="pastille">${svgFish(p,false)}</span>
      <span class="nom-mini">${p.nom.split(' ')[0]}</span>
    </button>
  `).join('');
}

function ouvrirFiche(id){
  const p = POISSONS.find(f => f.id === id);
  if(!p) return;
  document.getElementById('poissons').classList.add('mode-fiche');
  document.getElementById('fiche-corps').innerHTML = `
    <div class="fiche-visuel">
      <div class="fiche-carousel" data-carousel-id="${p.id}">
        <div class="carousel-main" id="carousel-main-${p.id}" data-index="0">
          ${p.photos && p.photos.length ? `<img src="${p.photos[0]}" alt="${p.nom}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\"carousel-placeholder\\">Photo indisponible</div>'">` : `<div class="carousel-placeholder">Ajoutez vos chemins de photos dans<br><strong>photos: [ ... ]</strong> pour ${p.nom}</div>`}
          ${p.photos && p.photos.length > 1 ? `
            <button class="carousel-btn carousel-prev tap" aria-label="Photo précédente" onclick="changerPhoto('${p.id}',-1)">‹</button>
            <button class="carousel-btn carousel-next tap" aria-label="Photo suivante" onclick="changerPhoto('${p.id}',1)">›</button>
            <span class="carousel-counter" id="carousel-counter-${p.id}">1 / ${p.photos.length}</span>
          ` : ''}
        </div>
        ${p.photos && p.photos.length > 1 ? `<div class="carousel-dots" id="carousel-dots-${p.id}">
          ${p.photos.map((_,i)=>`<button class="carousel-dot ${i===0?'actif':''} tap" aria-label="Afficher la photo ${i+1}" onclick="afficherPhoto('${p.id}',${i})"></button>`).join('')}
        </div>
        <div class="carousel-thumbs" id="carousel-thumbs-${p.id}">
          ${p.photos.map((src,i)=>`<button class="carousel-thumb ${i===0?'actif':''} tap" onclick="afficherPhoto('${p.id}',${i})"><img src="${src}" alt="${p.nom} — photo ${i+1}" loading="lazy"></button>`).join('')}
        </div>` : ''}
      </div>
      <div class="cadre">${svgFish(p,true)}</div>
    </div>
    <div class="fiche-texte">
      <span class="fiche-badge ${p.sens==='catadrome'?'cata':''}">${p.sens === 'anadrome' ? '⇡ Migrateur anadrome — mer → rivière' : '⇣ Migrateur catadrome — rivière → mer'}</span>
      <div class="fiche-entete">
        <h2>${p.nom}</h2>
        <span class="latin">${p.latin}</span>
      </div>
      <div class="stat-grille">
        <div class="stat"><div class="label">Taille adulte</div><div class="valeur">${p.taille}</div></div>
        <div class="stat"><div class="label">Poids</div><div class="valeur">${p.poids}</div></div>
        <div class="stat"><div class="label">Statut UICN</div><div class="valeur">${p.statut}</div></div>
        <div class="stat"><div class="label">Observable au</div><div class="valeur">SEINOSCOPE, Poses</div></div>
      </div>
      <p class="long">${p.cycle}</p>
      <div class="fiche-anecdote">${p.anecdote}</div>
      <div>
        <a class="lien-source tap" href="${p.source}" target="_blank" rel="noopener">Fiche complète sur seinormigr.fr →</a>
        <a class="lien-source tap" href="${p.dashboard}" target="_blank" rel="noopener">Tableau de bord des passages →</a>
      </div>
    </div>
  `;
  const main = document.getElementById(`carousel-main-${p.id}`);
  if(main && p.photos && p.photos.length > 1){
    let touchX = null;
    main.addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, {passive:true});
    main.addEventListener('touchend', e => {
      if(touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if(Math.abs(dx) > 35) changerPhoto(p.id, dx < 0 ? 1 : -1);
      touchX = null;
    }, {passive:true});
  }
  document.querySelectorAll('.rn-fish').forEach(b => b.classList.toggle('actif', b.dataset.id === id));
}

function afficherPhoto(id, index){
  const p = POISSONS.find(f => f.id === id);
  if(!p || !p.photos || !p.photos.length) return;
  index = ((index % p.photos.length) + p.photos.length) % p.photos.length;
  const main = document.getElementById(`carousel-main-${id}`);
  if(!main) return;
  main.dataset.index = index;
  const old = main.querySelector('img');
  const src = p.photos[index];
  if(old){
    old.src = src;
    old.alt = `${p.nom} — photo ${index+1}`;
  } else {
    main.innerHTML = `<img src="${src}" alt="${p.nom} — photo ${index+1}" loading="lazy">`;
  }
  const counter = document.getElementById(`carousel-counter-${id}`);
  if(counter) counter.textContent = `${index+1} / ${p.photos.length}`;
  document.querySelectorAll(`#carousel-dots-${id} .carousel-dot`).forEach((b,i) => b.classList.toggle('actif', i === index));
  document.querySelectorAll(`#carousel-thumbs-${id} .carousel-thumb`).forEach((b,i) => b.classList.toggle('actif', i === index));
  const thumb = document.querySelector(`#carousel-thumbs-${id} .carousel-thumb:nth-child(${index+1})`);
  if(thumb) thumb.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
}

function changerPhoto(id, delta){
  const main = document.getElementById(`carousel-main-${id}`);
  const p = POISSONS.find(f => f.id === id);
  if(!main || !p || !p.photos || p.photos.length < 2) return;
  const index = Number(main.dataset.index || 0);
  afficherPhoto(id, index + delta);
}

function fermerFiche(){
  document.getElementById('poissons').classList.remove('mode-fiche');
  document.querySelectorAll('.rn-fish').forEach(b => b.classList.remove('actif'));
}

function choisirOnglet(nom){
  document.querySelectorAll('#seine .onglet').forEach(b => b.classList.toggle('actif', b.dataset.onglet === nom));
  document.querySelectorAll('#seine .panneau-onglet').forEach(p => p.classList.remove('actif'));
  document.getElementById('onglet-' + nom).classList.add('actif');
}

/* ============================================================
   CARTE DES STATIONS
   ============================================================ */
function afficherStation(id){
  const s = STATIONS.find(x => x.id === id);
  if(!s) return;
  document.querySelectorAll('.pin').forEach(b => b.classList.toggle('actif', b.dataset.id === id));
  const cible = document.getElementById('station-detail');
  cible.innerHTML = `
    <span class="fiche-badge ${s.statut ? 'cata' : ''}">${s.statut ? s.statut : 'Station en fonctionnement'}</span>
    <div class="fiche-entete"><h2>${s.nom}</h2><span class="latin">${s.riviere}</span></div>
    <div class="stat-grille">
      <div class="stat"><div class="label">Distance</div><div class="valeur">${s.distance}</div></div>
      <div class="stat"><div class="label">Cours d'eau</div><div class="valeur">${s.riviere}</div></div>
      <div class="stat"><div class="label">Dispositif</div><div class="valeur">${s.depuis}</div></div>
      <div class="stat"><div class="label">Gestion</div><div class="valeur">${s.gestion}</div></div>
    </div>
    <p class="long">${s.desc}</p>
    <div class="fiche-anecdote">${s.chiffre}</div>
    ${s.live ? `<div class="station-live"><p class="live-label">🔴 Caméra de la station en direct</p><iframe src="https://www.youtube.com/embed/live_stream?channel=UC9xh6nfa1C8kXT6e7xy-VUg&controls=1" title="Caméra en direct — station de Pontoise" allowfullscreen loading="lazy"></iframe></div>` : ''}
    <a class="lien-source tap" href="${s.url}" target="_blank" rel="noopener">Voir les données complètes sur seinormigr.fr →</a>
  `;
}

/* ============================================================
   NAVIGATION ENTRE ECRANS + retour auto à la veille
   ============================================================ */
