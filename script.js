/* ============================================
   Christian Marzal della Rovere — Portfolio JS
   ============================================ */

(function () {
  'use strict';

  // ===== i18n dictionary =====
  const i18n = {
    es: {
      'nav.projects': 'Proyectos',
      'nav.stack': 'Stack',
      'nav.about': 'Sobre mí',
      'nav.contact': 'Contacto',
      'hero.line1': 'Builder full-stack',
      'hero.line2': 'Automation & AI',
      'hero.subtitle': 'Construyo SaaS, apps móviles y workflows automatizados con IA. Trilingüe profesional (ES · EN · FR). Pre-IA formado, IA-native en ejecución.',
      'hero.cta_projects': 'Ver proyectos',
      'hero.cta_contact': 'Contacto',
      'hero.status': 'Disponible · Remoto global o París',
      'featured.tag': 'Featured · construido en solitario',
      'featured.title1': 'El ecosistema',
      'featured.subtitle': 'Un SaaS de facturación completo (web + móvil + landing + backend con IA) para autónomos españoles. Construido yo solo: 327 commits, +200 horas, en producción con usuarios reales.',
      'proj.konquerai.desc': 'SaaS multi-tenant para facturación de autónomos con cumplimiento fiscal español (VeriFactu, IVA, IRPF). Numeración atómica de factura en PL/pgSQL, RLS hardening y IA aplicada.',
      'proj.mobile.desc': 'App nativa Flutter para gestión fiscal desde la obra: escáner de facturas con cámara, asistente por voz, caché offline. Build aprobado en TestFlight.',
      'proj.landing.desc': 'Sitio de marketing público de KonquerAI en konquerai.com: Astro + Tailwind v4, animaciones CSS-only y SEO completo (JSON-LD, sitemap, OG). Incluye un chatbot consultor que capta y cualifica leads con preguntas de descubrimiento y les genera un informe personalizado con los beneficios del servicio, más sistema de agenda y llamadas.',
      'proj.backend.desc': '17 workflows en producción que orquestan OCR dual (Gemini→OpenAI), agente conversacional LangChain, ingesta de email→factura y cadena de hash VeriFactu.',
      'proj.metric.hours': 'horas',
      'proj.metric.users': 'beta users',
      'proj.metric.lines': 'líneas Dart',
      'proj.metric.tests_pass': 'tests',
      'proj.metric.testers': 'testers',
      'proj.metric.workflows': 'workflows',
      'proj.metric.nodes': 'nodos flagship',
      'proj.metric.ai_services': 'servicios IA',
      'proj.metric.lighthouse': 'Lighthouse',
      'proj.metric.js_lines': 'líneas JS',
      'proj.metric.runtime_libs': 'libs runtime',
      'proj.metric.wcag': 'WCAG',
      'proj.link.code': 'Código (sanitizado)',
      'proj.link.docs': 'Documentación',
      'proj.link.live': 'Demo en vivo',
      'proj.link.repo': 'Repo',
      'more.tag': 'Más proyectos',
      'more.title': 'Diversidad técnica',
      'more.subtitle': 'Cliente real, ML desde cero, dashboards de datos y backend Python. Variedad para distintos roles.',
      'proj.ceremonias.sub': 'Cliente real · Mallorca',
      'proj.ceremonias.desc': 'Landing de conversión para facilitadora de ceremonias, diseñada en Pencil → React + Vite + Tailwind + Framer Motion. Roadmap: chatbot de reservas y automatización de blog.',
      'proj.heart.sub': 'ML desde cero · ROC-AUC 0.91',
      'proj.heart.desc': 'Red neuronal multicapa implementada desde cero en NumPy (forward, backprop, Adam, Dropout) sin TensorFlow ni PyTorch. Validación 5-fold CV. Dashboard interactivo desplegado.',
      'proj.fifa.sub': 'Dashboard de datos · 19k jugadores',
      'proj.fifa.desc': 'Dashboard interactivo multipágina sobre dataset FIFA 21 (19k jugadores × 106 columnas) con caching diferenciado, gestión de estado y predicción de potencial con scikit-learn.',
      'proj.bookstore.sub': 'Python backend · SQLAlchemy',
      'proj.bookstore.desc': 'Sistema de gestión de librería con arquitectura por capas y patrón Repository: SQLAlchemy ORM, control de stock atómico, facturación PDF y dashboard Streamlit. MySQL.',
      'stack.tag': 'Stack',
      'stack.title': 'Las herramientas que domino',
      'stack.subtitle': 'Solo lo que he usado en proyectos serios. Si no lo pondría en producción mañana, no está aquí.',
      'stack.cat.frontend': 'Frontend',
      'stack.cat.backend': 'Backend',
      'stack.cat.mobile': 'Mobile',
      'stack.cat.data': 'Bases de datos',
      'stack.cat.ai': 'IA & ML',
      'stack.cat.devops': 'DevOps & Infra',
      'metric.commits': 'commits en el SaaS',
      'metric.workflows': 'workflows n8n en producción',
      'metric.rocauc': 'ROC-AUC red neuronal',
      'metric.langs': 'idiomas profesionales',
      'metric.hours': 'horas en el SaaS',
      'metric.projects': 'proyectos documentados',
      'about.tag': 'Sobre mí',
      'about.title': 'No es mi primera carrera.',
      'about.p1': 'Tengo perfil de <strong>cambio de carrera deliberado</strong>. Después de más de una década como concierge en hostelería de lujo internacional (Marriott Opéra y Champs-Élysées en París), decidí formarme como developer y construir un portfolio real, no de tutorial.',
      'about.p2': 'Llevo programando en serio desde finales de 2024 (formación intensiva en ConquerBlocks). Desde agosto de 2025 construyo proyectos propios casi a tiempo completo. <strong>Viví desde dentro la transición pre-IA → IA-native</strong>: aprendí los fundamentos picando código a mano y me adapté a los agentes en tiempo real.',
      'about.p3': 'Lo que me diferencia: una década de <strong>soft skills entrenadas a alto nivel</strong> (comunicación, presión, detalle, multilingüismo), cabeza de producto desde el primer día, y la capacidad de construir un SaaS completo yo solo —front, móvil, backend con IA— como demuestra el ecosistema KonquerAI.',
      'about.strengths_title': 'Lo que vale la pena saber',
      'about.s1': 'Builder solo end-to-end: SaaS + móvil + backend IA',
      'about.s2': 'Cumplimiento fiscal en producción (VeriFactu, IVA)',
      'about.s3': 'Especialidad en automatizaciones n8n + agentes IA',
      'about.s4': 'Trilingüe profesional con experiencia laboral real',
      'about.s5': 'Madurez profesional + cabeza de producto',
      'about.s6': 'Perpetual learner documentado mes a mes',
      'contact.tag': 'Trabajemos juntos',
      'contact.title': '¿Construimos algo?',
      'contact.subtitle': 'Disponible para roles junior full-stack, mobile, backend o automatización. Remoto global o presencial en París / Île-de-France.',
      'contact.email': 'Email',
      'footer.tagline': 'Builder full-stack · ES · EN · FR',
      'footer.built': 'Construido con HTML + CSS + JS vanilla.',
    },
    en: {
      'nav.projects': 'Projects',
      'nav.stack': 'Stack',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.line1': 'Full-stack builder',
      'hero.line2': 'Automation & AI',
      'hero.subtitle': 'I build SaaS, mobile apps and AI-powered automation workflows. Trilingual professional (ES · EN · FR). Trained pre-AI, AI-native in execution.',
      'hero.cta_projects': 'View projects',
      'hero.cta_contact': 'Get in touch',
      'hero.status': 'Available · Global remote or Paris',
      'featured.tag': 'Featured · solo-built',
      'featured.title1': 'The ecosystem',
      'featured.subtitle': 'A complete invoicing SaaS (web + mobile + landing + AI backend) for Spanish freelancers. Built entirely by me: 327 commits, 200+ hours, in production with real users.',
      'proj.konquerai.desc': 'Multi-tenant invoicing SaaS for Spanish freelancers with full tax compliance (VeriFactu, VAT, withholding). Atomic invoice numbering in PL/pgSQL, RLS hardening, applied AI.',
      'proj.mobile.desc': 'Native Flutter app for on-site fiscal management: camera invoice scanner, voice assistant, offline cache. Build approved on TestFlight.',
      'proj.landing.desc': 'KonquerAI\'s public marketing site at konquerai.com: Astro + Tailwind v4, CSS-only motion and full SEO (JSON-LD, sitemap, OG). Includes a consultant chatbot that captures and qualifies leads through discovery questions and generates a personalized report on the service\'s benefits, plus a scheduling and calls system.',
      'proj.backend.desc': '17 production workflows orchestrating dual-AI OCR (Gemini→OpenAI), LangChain conversational agent, email-to-invoice ingestion, and VeriFactu hash chain.',
      'proj.metric.hours': 'hours',
      'proj.metric.users': 'beta users',
      'proj.metric.lines': 'lines of Dart',
      'proj.metric.tests_pass': 'tests',
      'proj.metric.testers': 'testers',
      'proj.metric.workflows': 'workflows',
      'proj.metric.nodes': 'flagship nodes',
      'proj.metric.ai_services': 'AI services',
      'proj.metric.lighthouse': 'Lighthouse',
      'proj.metric.js_lines': 'lines of JS',
      'proj.metric.runtime_libs': 'runtime libs',
      'proj.metric.wcag': 'WCAG',
      'proj.link.code': 'Code (sanitized)',
      'proj.link.docs': 'Documentation',
      'proj.link.live': 'Live demo',
      'proj.link.repo': 'Repo',
      'more.tag': 'More projects',
      'more.title': 'Technical breadth',
      'more.subtitle': 'Real client, ML from scratch, data dashboards and Python backend. Variety for different roles.',
      'proj.ceremonias.sub': 'Real client · Mallorca',
      'proj.ceremonias.desc': 'Conversion landing for a ceremony facilitator, designed in Pencil → React + Vite + Tailwind + Framer Motion. Roadmap: booking chatbot and content automation.',
      'proj.heart.sub': 'ML from scratch · ROC-AUC 0.91',
      'proj.heart.desc': 'Multilayer neural network implemented from scratch in NumPy (forward, backprop, Adam, Dropout), no TensorFlow or PyTorch. 5-fold CV. Live interactive dashboard.',
      'proj.fifa.sub': 'Data dashboard · 19k players',
      'proj.fifa.desc': 'Multi-page interactive dashboard on the FIFA 21 dataset (19k players × 106 columns) with split caching, state management and potential prediction with scikit-learn.',
      'proj.bookstore.sub': 'Python backend · SQLAlchemy',
      'proj.bookstore.desc': 'Bookstore management with layered architecture and Repository pattern: SQLAlchemy ORM, atomic stock control, PDF invoicing and a Streamlit dashboard. MySQL.',
      'stack.tag': 'Stack',
      'stack.title': 'The tools I master',
      'stack.subtitle': 'Only what I have shipped in serious projects. If I would not put it in production tomorrow, it is not here.',
      'stack.cat.frontend': 'Frontend',
      'stack.cat.backend': 'Backend',
      'stack.cat.mobile': 'Mobile',
      'stack.cat.data': 'Databases',
      'stack.cat.ai': 'AI & ML',
      'stack.cat.devops': 'DevOps & Infra',
      'metric.commits': 'commits in the SaaS',
      'metric.workflows': 'n8n workflows in production',
      'metric.rocauc': 'neural network ROC-AUC',
      'metric.langs': 'professional languages',
      'metric.hours': 'hours on the SaaS',
      'metric.projects': 'documented projects',
      'about.tag': 'About',
      'about.title': "It's not my first career.",
      'about.p1': 'I am a <strong>deliberate career changer</strong>. After more than a decade as a concierge in international luxury hospitality (Marriott Opéra and Champs-Élysées in Paris), I decided to retrain as a developer and build a real portfolio, not tutorial projects.',
      'about.p2': 'I have been programming seriously since late 2024 (intensive training at ConquerBlocks). Since August 2025 I have been building my own projects nearly full-time. <strong>I lived the pre-AI → AI-native transition from the inside</strong>: I learned the fundamentals by writing code by hand and adapted to agents in real time.',
      'about.p3': 'What sets me apart: a decade of <strong>soft skills trained at a high level</strong> (communication, pressure, detail, multilingualism), product thinking from day one, and the ability to build a complete SaaS by myself — front, mobile, AI backend — as the KonquerAI ecosystem demonstrates.',
      'about.strengths_title': 'Worth knowing',
      'about.s1': 'Solo builder end-to-end: SaaS + mobile + AI backend',
      'about.s2': 'Tax compliance in production (VeriFactu, VAT)',
      'about.s3': 'Specialty in n8n automations + AI agents',
      'about.s4': 'Trilingual professional with real work experience',
      'about.s5': 'Professional maturity + product mindset',
      'about.s6': 'Documented perpetual learner, month by month',
      'contact.tag': 'Let us work together',
      'contact.title': 'Shall we build something?',
      'contact.subtitle': 'Available for junior full-stack, mobile, backend or automation roles. Global remote or on-site in Paris / Île-de-France.',
      'contact.email': 'Email',
      'footer.tagline': 'Full-stack builder · ES · EN · FR',
      'footer.built': 'Built with vanilla HTML + CSS + JS.',
    },
    fr: {
      'nav.projects': 'Projets',
      'nav.stack': 'Stack',
      'nav.about': 'À propos',
      'nav.contact': 'Contact',
      'hero.line1': 'Builder full-stack',
      'hero.line2': 'Automatisation & IA',
      'hero.subtitle': 'Je construis des SaaS, des applications mobiles et des workflows automatisés avec IA. Trilingue professionnel (ES · EN · FR). Formé avant l\'ère IA, IA-natif à l\'exécution.',
      'hero.cta_projects': 'Voir les projets',
      'hero.cta_contact': 'Me contacter',
      'hero.status': 'Disponible · Remote global ou Paris',
      'featured.tag': 'À la une · construit en solo',
      'featured.title1': 'L\'écosystème',
      'featured.subtitle': 'Un SaaS de facturation complet (web + mobile + landing + backend IA) pour les indépendants espagnols. Construit seul : 327 commits, +200 heures, en production avec de vrais utilisateurs.',
      'proj.konquerai.desc': 'SaaS multi-tenant de facturation pour indépendants espagnols conforme à la fiscalité espagnole (VeriFactu, TVA, retenue). Numérotation atomique en PL/pgSQL, durcissement RLS, IA appliquée.',
      'proj.mobile.desc': 'Application Flutter native pour la gestion fiscale sur chantier : scanner de factures par caméra, assistant vocal, cache hors-ligne. Build approuvé sur TestFlight.',
      'proj.landing.desc': 'Site marketing public de KonquerAI sur konquerai.com : Astro + Tailwind v4, animations CSS uniquement et SEO complet (JSON-LD, sitemap, OG). Inclut un chatbot consultant qui capte et qualifie les leads via des questions de découverte et leur génère un rapport personnalisé sur les bénéfices du service, plus un système d\'agenda et d\'appels.',
      'proj.backend.desc': '17 workflows en production orchestrant un OCR double (Gemini→OpenAI), un agent conversationnel LangChain, l\'ingestion d\'e-mails en factures et une chaîne de hachage VeriFactu.',
      'proj.metric.hours': 'heures',
      'proj.metric.users': 'utilisateurs beta',
      'proj.metric.lines': 'lignes Dart',
      'proj.metric.tests_pass': 'tests',
      'proj.metric.testers': 'testeurs',
      'proj.metric.workflows': 'workflows',
      'proj.metric.nodes': 'nœuds flagship',
      'proj.metric.ai_services': 'services IA',
      'proj.metric.lighthouse': 'Lighthouse',
      'proj.metric.js_lines': 'lignes JS',
      'proj.metric.runtime_libs': 'libs runtime',
      'proj.metric.wcag': 'WCAG',
      'proj.link.code': 'Code (assaini)',
      'proj.link.docs': 'Documentation',
      'proj.link.live': 'Démo en ligne',
      'proj.link.repo': 'Repo',
      'more.tag': 'Plus de projets',
      'more.title': 'Diversité technique',
      'more.subtitle': 'Client réel, ML depuis zéro, tableaux de bord et backend Python. De quoi couvrir différents rôles.',
      'proj.ceremonias.sub': 'Client réel · Majorque',
      'proj.ceremonias.desc': 'Landing de conversion pour une facilitatrice de cérémonies, conçue sur Pencil → React + Vite + Tailwind + Framer Motion. Roadmap : chatbot de réservation et automatisation de blog.',
      'proj.heart.sub': 'ML depuis zéro · ROC-AUC 0,91',
      'proj.heart.desc': 'Réseau de neurones multicouche implémenté depuis zéro en NumPy (propagation, rétropropagation, Adam, Dropout), sans TensorFlow ni PyTorch. Validation 5 plis. Dashboard interactif en ligne.',
      'proj.fifa.sub': 'Dashboard data · 19k joueurs',
      'proj.fifa.desc': 'Dashboard interactif multipage sur le dataset FIFA 21 (19k joueurs × 106 colonnes) avec mise en cache différenciée, gestion d\'état et prédiction du potentiel via scikit-learn.',
      'proj.bookstore.sub': 'Backend Python · SQLAlchemy',
      'proj.bookstore.desc': 'Gestion de librairie avec architecture en couches et pattern Repository : SQLAlchemy ORM, contrôle de stock atomique, facturation PDF et dashboard Streamlit. MySQL.',
      'stack.tag': 'Stack',
      'stack.title': 'Les outils que je maîtrise',
      'stack.subtitle': 'Uniquement ce que j\'ai livré dans des projets sérieux. Si je ne le mettrais pas en production demain, ce n\'est pas ici.',
      'stack.cat.frontend': 'Frontend',
      'stack.cat.backend': 'Backend',
      'stack.cat.mobile': 'Mobile',
      'stack.cat.data': 'Bases de données',
      'stack.cat.ai': 'IA & ML',
      'stack.cat.devops': 'DevOps & Infra',
      'metric.commits': 'commits sur le SaaS',
      'metric.workflows': 'workflows n8n en production',
      'metric.rocauc': 'ROC-AUC du réseau de neurones',
      'metric.langs': 'langues professionnelles',
      'metric.hours': 'heures sur le SaaS',
      'metric.projects': 'projets documentés',
      'about.tag': 'À propos',
      'about.title': 'Ce n\'est pas ma première carrière.',
      'about.p1': 'Je suis dans une <strong>reconversion délibérée</strong>. Après plus d\'une décennie comme concierge dans l\'hôtellerie de luxe internationale (Marriott Opéra et Champs-Élysées à Paris), j\'ai décidé de me former comme développeur et de construire un vrai portfolio, pas des projets de tutoriel.',
      'about.p2': 'Je programme sérieusement depuis fin 2024 (formation intensive chez ConquerBlocks). Depuis août 2025, je construis mes propres projets quasi à plein temps. <strong>J\'ai vécu de l\'intérieur la transition pré-IA → IA-natif</strong> : j\'ai appris les fondamentaux en écrivant le code à la main et je me suis adapté aux agents en temps réel.',
      'about.p3': 'Ce qui me distingue : une décennie de <strong>soft skills entraînées à haut niveau</strong> (communication, pression, détail, multilinguisme), une approche produit dès le premier jour, et la capacité de construire un SaaS complet seul — front, mobile, backend IA — comme le démontre l\'écosystème KonquerAI.',
      'about.strengths_title': 'Ce qu\'il faut savoir',
      'about.s1': 'Builder solo end-to-end : SaaS + mobile + backend IA',
      'about.s2': 'Conformité fiscale en production (VeriFactu, TVA)',
      'about.s3': 'Spécialité automatisations n8n + agents IA',
      'about.s4': 'Trilingue avec expérience pro réelle',
      'about.s5': 'Maturité pro + approche produit',
      'about.s6': 'Perpetual learner documenté chaque mois',
      'contact.tag': 'Travaillons ensemble',
      'contact.title': 'On construit quelque chose ?',
      'contact.subtitle': 'Disponible pour des rôles junior full-stack, mobile, backend ou automatisation. Remote global ou présentiel à Paris / Île-de-France.',
      'contact.email': 'Email',
      'footer.tagline': 'Builder full-stack · ES · EN · FR',
      'footer.built': 'Construit en HTML + CSS + JS vanilla.',
    },
  };

  // ===== Terminal content per language =====
  const terminalContent = {
    es: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'Christian Marzal della Rovere · Full-stack developer junior' },
      { type: 'out', text: 'Especialidad: automatizaciones · IA · SaaS de punta a punta' },
      { type: 'cmd', text: 'cat languages.txt' },
      { type: 'out-sec', text: 'ES Español (nativo) · EN English (Londres) · FR Français (Paris, Marriott)' },
      { type: 'cmd', text: 'ls projects/ | head -3' },
      { type: 'out', text: '→ KonquerAI    SaaS · React 19 + TS + Supabase + n8n' },
      { type: 'out', text: '→ Mobile       Flutter · TestFlight aprobado' },
      { type: 'out', text: '→ Backend      n8n · 17 workflows en producción' },
      { type: 'cmd', text: 'echo $STATUS' },
      { type: 'out', text: 'Disponible · Junior · Remoto o París' },
    ],
    en: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'Christian Marzal della Rovere · Junior full-stack developer' },
      { type: 'out', text: 'Specialty: automation · AI · end-to-end SaaS' },
      { type: 'cmd', text: 'cat languages.txt' },
      { type: 'out-sec', text: 'ES Spanish (native) · EN English (London) · FR French (Paris, Marriott)' },
      { type: 'cmd', text: 'ls projects/ | head -3' },
      { type: 'out', text: '→ KonquerAI    SaaS · React 19 + TS + Supabase + n8n' },
      { type: 'out', text: '→ Mobile       Flutter · TestFlight approved' },
      { type: 'out', text: '→ Backend      n8n · 17 workflows in production' },
      { type: 'cmd', text: 'echo $STATUS' },
      { type: 'out', text: 'Available · Junior · Remote or Paris' },
    ],
    fr: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'Christian Marzal della Rovere · Développeur full-stack junior' },
      { type: 'out', text: 'Spécialité : automatisation · IA · SaaS de bout en bout' },
      { type: 'cmd', text: 'cat languages.txt' },
      { type: 'out-sec', text: 'ES Espagnol (natif) · EN Anglais (Londres) · FR Français (Paris, Marriott)' },
      { type: 'cmd', text: 'ls projects/ | head -3' },
      { type: 'out', text: '→ KonquerAI    SaaS · React 19 + TS + Supabase + n8n' },
      { type: 'out', text: '→ Mobile       Flutter · approuvé TestFlight' },
      { type: 'out', text: '→ Backend      n8n · 17 workflows en production' },
      { type: 'cmd', text: 'echo $STATUS' },
      { type: 'out', text: 'Disponible · Junior · Remote ou Paris' },
    ],
  };

  const htmlLangMap = { es: 'es', en: 'en', fr: 'fr' };

  // ===== Language switcher =====
  function applyLanguage(lang) {
    if (!i18n[lang]) lang = 'en';
    document.documentElement.lang = htmlLangMap[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (i18n[lang][key] !== undefined) {
        el.innerHTML = i18n[lang][key];
      }
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    try { localStorage.setItem('cm_portfolio_lang', lang); } catch (e) {}
    // Restart terminal with new language
    startTerminal(lang);
  }

  function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
    let initial = 'en';
    try {
      const stored = localStorage.getItem('cm_portfolio_lang');
      if (stored && i18n[stored]) initial = stored;
    } catch (e) {}
    applyLanguage(initial);
  }

  // ===== Terminal typewriter =====
  let terminalAnimationId = null;
  function startTerminal(lang) {
    const body = document.getElementById('terminal-body');
    if (!body) return;
    if (terminalAnimationId) {
      clearTimeout(terminalAnimationId);
      terminalAnimationId = null;
    }
    body.innerHTML = '';
    const lines = terminalContent[lang] || terminalContent.en;
    let lineIdx = 0;

    function renderNextLine() {
      if (lineIdx >= lines.length) {
        // Finished — show idle prompt
        const idle = document.createElement('span');
        idle.className = 'terminal-line';
        idle.innerHTML = '<span class="terminal-prompt">christian@portfolio:~$</span> <span class="terminal-cursor"></span>';
        body.appendChild(idle);
        return;
      }
      const item = lines[lineIdx];
      lineIdx++;
      const lineEl = document.createElement('span');
      lineEl.className = 'terminal-line';
      body.appendChild(lineEl);

      if (item.type === 'cmd') {
        const prompt = document.createElement('span');
        prompt.className = 'terminal-prompt';
        prompt.textContent = 'christian@portfolio:~$ ';
        lineEl.appendChild(prompt);
        const cmd = document.createElement('span');
        cmd.className = 'terminal-cmd';
        lineEl.appendChild(cmd);
        typeText(cmd, item.text, 32, () => {
          terminalAnimationId = setTimeout(renderNextLine, 380);
        });
      } else {
        const out = document.createElement('span');
        out.className = item.type === 'out-sec' ? 'terminal-out-secondary' : 'terminal-output';
        out.textContent = item.text;
        lineEl.appendChild(out);
        terminalAnimationId = setTimeout(renderNextLine, 220);
      }
    }
    renderNextLine();
  }

  function typeText(el, text, speed, done) {
    let i = 0;
    function step() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        terminalAnimationId = setTimeout(step, speed + Math.random() * 18);
      } else if (done) {
        done();
      }
    }
    step();
  }

  // ===== Navbar scrolled state =====
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ===== Scroll reveal =====
  function initScrollReveal() {
    const cards = document.querySelectorAll('[data-card]');
    if (!cards.length || !('IntersectionObserver' in window)) {
      cards.forEach((c) => c.classList.add('revealed'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    cards.forEach((c) => obs.observe(c));
  }

  // ===== Number counters =====
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length || !('IntersectionObserver' in window)) {
      counters.forEach((c) => animateCounter(c));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => obs.observe(c));
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.counter);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function frame(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(target * eased);
      el.textContent = prefix + value + suffix;
      if (progress < 1) requestAnimationFrame(frame);
      else el.textContent = prefix + target + suffix;
    }
    requestAnimationFrame(frame);
  }

  // ===== Init =====
  function init() {
    initNavbar();
    initLangSwitcher();
    initScrollReveal();
    initCounters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
