/* ============================================
   Christian Marzal della Rovere — Portfolio JS
   ============================================ */

(function () {
  'use strict';

  // ===== i18n dictionary =====
  const i18n = {
    es: {
      'nav.services': 'Servicios',
      'nav.projects': 'Proyectos',
      'nav.stack': 'Stack',
      'nav.about': 'Sobre mí',
      'nav.contact': 'Contacto',
      'hero.line1': 'Webs y automatizaciones con IA',
      'hero.line2': 'para pymes y autónomos',
      'hero.subtitle': 'Diseño webs que traen clientes y construyo automatizaciones con IA que quitan trabajo manual. Trilingüe (ES · EN · FR), con sistemas en producción y clientes reales.',
      'hero.cta_projects': 'Ver trabajos',
      'hero.cta_contact': 'Contacto',
      'hero.status': 'Disponible para proyectos · Remoto',
      'services.tag': 'Servicios',
      'services.title': 'Lo que puedo hacer por tu negocio',
      'services.subtitle': 'Tres formas de trabajar juntos, sin humo y con sistemas que ya están en producción.',
      'services.web.title': 'Diseño y desarrollo web',
      'services.web.desc': 'Webs rápidas, bien posicionadas y pensadas para conseguir clientes: desde una landing hasta la web completa de tu negocio. konquerai.com, livingone.es y oolexperience.com son trabajo mío.',
      'services.auto.title': 'Automatización e IA',
      'services.auto.desc': 'Chatbots que responden a tus clientes, bots de WhatsApp y workflows que eliminan tareas repetitivas. En producción: un bot de WhatsApp para un grupo de spas y 17 workflows automatizando facturación.',
      'services.consult.title': 'Consultoría IA para pymes',
      'services.consult.desc': 'Vemos juntos dónde la IA te ahorra horas cada semana y lo ponemos en marcha. Sin tecnicismos y sin venderte nada que no necesites.',
      'featured.tag': 'Featured · construido en solitario',
      'featured.title1': 'El ecosistema',
      'featured.subtitle': 'Un SaaS de facturación completo (web + móvil + landing + backend con IA) para autónomos españoles. Construido yo solo: 1.062 commits, +200 horas, en producción con usuarios reales.',
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
      'more.subtitle': 'Webs y bots para clientes reales, más proyectos técnicos que muestran cómo trabajo.',
      'proj.spabot.sub': 'Cliente real · Automatización WhatsApp',
      'proj.spabot.desc': 'Bot de WhatsApp que rellena los huecos de última hora de un grupo de spas de lujo en Mallorca: cuando cae una cancelación, avisa solo a las terapeutas libres y asigna la reserva a la primera que acepta, con cierre atómico (cero dobles reservas). Sistema determinista, sin coste de IA por mensaje.',
      'proj.livingone.sub': 'Cliente real · Web de hotel',
      'proj.livingone.desc': 'Web para un B&B en Peñíscola orientada a reserva directa, con copywriting persuasivo y diseño responsive. El hotel suma un 8,5/10 en Booking con más de 1.300 reseñas.',
      'proj.ceremonias.sub': 'Cliente real · Mallorca',
      'proj.ceremonias.desc': 'Landing de conversión para facilitadora de ceremonias, diseñada en Pencil → React + Vite + Tailwind + Framer Motion. Roadmap: chatbot de reservas y automatización de blog.',
      'proj.heart.sub': 'ML desde cero · ROC-AUC 0.91',
      'proj.heart.desc': 'Red neuronal multicapa implementada desde cero en NumPy (forward, backprop, Adam, Dropout) sin TensorFlow ni PyTorch. Validación 5-fold CV. Dashboard interactivo desplegado.',
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
      'about.p1': 'Vengo de la <strong>hostelería de lujo</strong>: más de una década como concierge en París (Marriott Opéra y Champs-Élysées), atendiendo cada día a clientes muy exigentes. Hoy pongo ese trato y ese ojo por el detalle al servicio de pymes y autónomos.',
      'about.p2': 'Me formé como desarrollador en 2024 (ConquerBlocks) y desde entonces construyo sistemas reales: webs para clientes, bots de WhatsApp y un SaaS propio con 17 automatizaciones en producción. <strong>Trabajo con IA a diario y sé explicarla sin tecnicismos.</strong>',
      'about.p3': 'Lo que me diferencia: hablo tu idioma, entiendo el negocio antes que la tecnología y construyo yo mismo lo que propongo. Si algo no te ahorra tiempo o no te trae clientes, no te lo propongo.',
      'about.strengths_title': 'Por qué trabajar conmigo',
      'about.s1': 'Construyo yo mismo: web, móvil y automatizaciones',
      'about.s2': 'Sistemas en producción con clientes reales',
      'about.s3': 'Especialista en n8n, chatbots y agentes de IA',
      'about.s4': 'Trilingüe: español, inglés y francés',
      'about.s5': 'Una década de atención al cliente de lujo',
      'about.s6': 'Comunicación clara, sin tecnicismos',
      'contact.tag': 'Trabajemos juntos',
      'contact.title': '¿Construimos algo?',
      'contact.subtitle': '¿Tienes una pyme o eres autónomo? Cuéntame qué te quita tiempo o qué quieres conseguir con tu web, y te propongo algo concreto. Trabajo en remoto con España y Francia.',
      'contact.email': 'Email',
      'footer.tagline': 'Webs · Automatización IA · ES · EN · FR',
      'footer.built': 'Construido con HTML + CSS + JS vanilla.',
    },
    en: {
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.stack': 'Stack',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.line1': 'Websites and AI automation',
      'hero.line2': 'for small businesses',
      'hero.subtitle': 'I design websites that bring in customers and build AI automations that remove manual work. Trilingual (ES · EN · FR), with production systems and real clients.',
      'hero.cta_projects': 'See my work',
      'hero.cta_contact': 'Get in touch',
      'hero.status': 'Available for projects · Remote',
      'services.tag': 'Services',
      'services.title': 'What I can do for your business',
      'services.subtitle': 'Three ways we can work together, no fluff, with systems already in production.',
      'services.web.title': 'Web design & development',
      'services.web.desc': 'Fast, well-ranked websites built to win customers: from a landing page to your full business site. konquerai.com, livingone.es and oolexperience.com are my work.',
      'services.auto.title': 'Automation & AI',
      'services.auto.desc': 'Chatbots that answer your customers, WhatsApp bots and workflows that remove repetitive tasks. In production: a WhatsApp bot for a spa group and 17 workflows automating invoicing.',
      'services.consult.title': 'AI consulting for SMBs',
      'services.consult.desc': 'We look at where AI can save you hours every week and set it up together. Plain language, and nothing you do not need.',
      'featured.tag': 'Featured · solo-built',
      'featured.title1': 'The ecosystem',
      'featured.subtitle': 'A complete invoicing SaaS (web + mobile + landing + AI backend) for Spanish freelancers. Built entirely by me: 1,062 commits, 200+ hours, in production with real users.',
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
      'more.subtitle': 'Websites and bots for real clients, plus technical projects that show how I work.',
      'proj.spabot.sub': 'Real client · WhatsApp automation',
      'proj.spabot.desc': 'WhatsApp bot that fills last-minute gaps for a luxury spa group in Mallorca: when a cancellation hits, it pings only the available therapists and assigns the slot to the first who accepts, with atomic close (zero double-bookings). Deterministic system, no per-message AI cost.',
      'proj.livingone.sub': 'Real client · Hotel website',
      'proj.livingone.desc': 'Website for a B&B in Peñíscola focused on direct bookings, with persuasive copy and responsive design. The hotel holds an 8.5/10 on Booking across 1,300+ reviews.',
      'proj.ceremonias.sub': 'Real client · Mallorca',
      'proj.ceremonias.desc': 'Conversion landing for a ceremony facilitator, designed in Pencil → React + Vite + Tailwind + Framer Motion. Roadmap: booking chatbot and content automation.',
      'proj.heart.sub': 'ML from scratch · ROC-AUC 0.91',
      'proj.heart.desc': 'Multilayer neural network implemented from scratch in NumPy (forward, backprop, Adam, Dropout), no TensorFlow or PyTorch. 5-fold CV. Live interactive dashboard.',
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
      'about.p1': 'I come from <strong>luxury hospitality</strong>: over a decade as a concierge in Paris (Marriott Opéra and Champs-Élysées), serving highly demanding guests every day. Today I bring that same care and eye for detail to small businesses and freelancers.',
      'about.p2': 'I retrained as a developer in 2024 (ConquerBlocks) and have been building real systems since: client websites, WhatsApp bots and my own SaaS with 17 automations in production. <strong>I work with AI daily and can explain it without jargon.</strong>',
      'about.p3': 'What sets me apart: I speak your language, I understand business before technology, and I build what I propose myself. If something will not save you time or bring you customers, I will not pitch it.',
      'about.strengths_title': 'Why work with me',
      'about.s1': 'I build it myself: web, mobile and automations',
      'about.s2': 'Production systems with real clients',
      'about.s3': 'Specialist in n8n, chatbots and AI agents',
      'about.s4': 'Trilingual: Spanish, English and French',
      'about.s5': 'A decade of luxury customer service',
      'about.s6': 'Clear communication, no jargon',
      'contact.tag': 'Let us work together',
      'contact.title': 'Shall we build something?',
      'contact.subtitle': 'Run a small business or work for yourself? Tell me what eats your time or what you want from your website, and I will propose something concrete. Remote, working with Spain and France.',
      'contact.email': 'Email',
      'footer.tagline': 'Websites · AI automation · ES · EN · FR',
      'footer.built': 'Built with vanilla HTML + CSS + JS.',
    },
    fr: {
      'nav.services': 'Services',
      'nav.projects': 'Projets',
      'nav.stack': 'Stack',
      'nav.about': 'À propos',
      'nav.contact': 'Contact',
      'hero.line1': 'Sites web et automatisations IA',
      'hero.line2': 'pour les PME et indépendants',
      'hero.subtitle': 'Je conçois des sites qui apportent des clients et je construis des automatisations IA qui suppriment le travail manuel. Trilingue (ES · EN · FR), avec des systèmes en production et des clients réels.',
      'hero.cta_projects': 'Voir mes réalisations',
      'hero.cta_contact': 'Me contacter',
      'hero.status': 'Disponible pour des projets · Remote',
      'services.tag': 'Services',
      'services.title': 'Ce que je peux faire pour votre entreprise',
      'services.subtitle': 'Trois façons de travailler ensemble, sans blabla, avec des systèmes déjà en production.',
      'services.web.title': 'Conception et développement web',
      'services.web.desc': 'Des sites rapides, bien référencés et pensés pour gagner des clients : d\'une landing page au site complet de votre entreprise. Konquerai.com, livingone.es et oolexperience.com sont mon travail.',
      'services.auto.title': 'Automatisation et IA',
      'services.auto.desc': 'Chatbots qui répondent à vos clients, bots WhatsApp et workflows qui suppriment les tâches répétitives. En production : un bot WhatsApp pour un groupe de spas et 17 workflows automatisant la facturation.',
      'services.consult.title': 'Conseil IA pour les PME',
      'services.consult.desc': 'Nous regardons ensemble où l\'IA peut vous faire gagner des heures chaque semaine, puis nous le mettons en place. Sans jargon et sans vous vendre ce dont vous n\'avez pas besoin.',
      'featured.tag': 'À la une · construit en solo',
      'featured.title1': 'L\'écosystème',
      'featured.subtitle': 'Un SaaS de facturation complet (web + mobile + landing + backend IA) pour les indépendants espagnols. Construit seul : 1.062 commits, +200 heures, en production avec de vrais utilisateurs.',
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
      'more.subtitle': 'Des sites et des bots pour des clients réels, plus des projets techniques qui montrent ma façon de travailler.',
      'proj.spabot.sub': 'Client réel · Automatisation WhatsApp',
      'proj.spabot.desc': "Bot WhatsApp qui comble les créneaux de dernière minute d'un groupe de spas de luxe à Majorque : dès qu'une annulation tombe, il n'alerte que les thérapeutes disponibles et attribue le créneau à la première qui accepte, avec clôture atomique (zéro double réservation). Système déterministe, sans coût d'IA par message.",
      'proj.livingone.sub': 'Client réel · Site d\'hôtel',
      'proj.livingone.desc': 'Site web pour un B&B à Peñíscola axé sur la réservation directe, avec un copywriting persuasif et un design responsive. L\'hôtel affiche 8,5/10 sur Booking avec plus de 1 300 avis.',
      'proj.ceremonias.sub': 'Client réel · Majorque',
      'proj.ceremonias.desc': 'Landing de conversion pour une facilitatrice de cérémonies, conçue sur Pencil → React + Vite + Tailwind + Framer Motion. Roadmap : chatbot de réservation et automatisation de blog.',
      'proj.heart.sub': 'ML depuis zéro · ROC-AUC 0,91',
      'proj.heart.desc': 'Réseau de neurones multicouche implémenté depuis zéro en NumPy (propagation, rétropropagation, Adam, Dropout), sans TensorFlow ni PyTorch. Validation 5 plis. Dashboard interactif en ligne.',
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
      'about.p1': 'Je viens de <strong>l\'hôtellerie de luxe</strong> : plus d\'une décennie comme concierge à Paris (Marriott Opéra et Champs-Élysées), au service quotidien de clients très exigeants. Je mets aujourd\'hui ce soin et ce sens du détail au service des PME et des indépendants.',
      'about.p2': 'Je me suis formé comme développeur en 2024 (ConquerBlocks) et je construis depuis des systèmes réels : des sites pour des clients, des bots WhatsApp et mon propre SaaS avec 17 automatisations en production. <strong>Je travaille avec l\'IA au quotidien et je sais l\'expliquer sans jargon.</strong>',
      'about.p3': 'Ce qui me distingue : je parle votre langue, je comprends le business avant la technologie et je construis moi-même ce que je propose. Si quelque chose ne vous fait pas gagner de temps ou ne vous apporte pas de clients, je ne vous le propose pas.',
      'about.strengths_title': 'Pourquoi travailler avec moi',
      'about.s1': 'Je construis moi-même : web, mobile et automatisations',
      'about.s2': 'Systèmes en production avec des clients réels',
      'about.s3': 'Spécialiste n8n, chatbots et agents IA',
      'about.s4': 'Trilingue : espagnol, anglais et français',
      'about.s5': 'Une décennie de service client de luxe',
      'about.s6': 'Communication claire, sans jargon',
      'contact.tag': 'Travaillons ensemble',
      'contact.title': 'On construit quelque chose ?',
      'contact.subtitle': 'Vous avez une PME ou êtes indépendant ? Dites-moi ce qui vous prend du temps ou ce que vous attendez de votre site, et je vous propose quelque chose de concret. Remote, avec l\'Espagne et la France.',
      'contact.email': 'Email',
      'footer.tagline': 'Sites web · Automatisation IA · ES · EN · FR',
      'footer.built': 'Construit en HTML + CSS + JS vanilla.',
    },
  };

  // ===== Terminal content per language =====
  const terminalContent = {
    es: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'Christian Marzal della Rovere · Consultor IA y desarrollador web' },
      { type: 'out', text: 'Servicios: webs · automatizaciones · consultoría IA para pymes' },
      { type: 'cmd', text: 'cat languages.txt' },
      { type: 'out-sec', text: 'ES Español (nativo) · EN English (Londres) · FR Français (Paris, Marriott)' },
      { type: 'cmd', text: 'ls projects/ | head -3' },
      { type: 'out', text: '→ KonquerAI    SaaS propio · 17 workflows IA en producción' },
      { type: 'out', text: '→ RellenaHueco Bot WhatsApp · grupo de spas, Mallorca' },
      { type: 'out', text: '→ Webs        livingone.es · oolexperience.com · konquerai.com' },
      { type: 'cmd', text: 'echo $STATUS' },
      { type: 'out', text: 'Disponible · Proyectos freelance · Remoto' },
    ],
    en: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'Christian Marzal della Rovere · AI consultant & web developer' },
      { type: 'out', text: 'Services: websites · automation · AI consulting for SMBs' },
      { type: 'cmd', text: 'cat languages.txt' },
      { type: 'out-sec', text: 'ES Spanish (native) · EN English (London) · FR French (Paris, Marriott)' },
      { type: 'cmd', text: 'ls projects/ | head -3' },
      { type: 'out', text: '→ KonquerAI    Own SaaS · 17 AI workflows in production' },
      { type: 'out', text: '→ RellenaHueco WhatsApp bot · spa group, Mallorca' },
      { type: 'out', text: '→ Websites     livingone.es · oolexperience.com · konquerai.com' },
      { type: 'cmd', text: 'echo $STATUS' },
      { type: 'out', text: 'Available · Freelance projects · Remote' },
    ],
    fr: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'Christian Marzal della Rovere · Consultant IA et développeur web' },
      { type: 'out', text: 'Services : sites web · automatisation · conseil IA pour PME' },
      { type: 'cmd', text: 'cat languages.txt' },
      { type: 'out-sec', text: 'ES Espagnol (natif) · EN Anglais (Londres) · FR Français (Paris, Marriott)' },
      { type: 'cmd', text: 'ls projects/ | head -3' },
      { type: 'out', text: '→ KonquerAI    SaaS propre · 17 workflows IA en production' },
      { type: 'out', text: '→ RellenaHueco Bot WhatsApp · groupe de spas, Majorque' },
      { type: 'out', text: '→ Sites        livingone.es · oolexperience.com · konquerai.com' },
      { type: 'cmd', text: 'echo $STATUS' },
      { type: 'out', text: 'Disponible · Projets freelance · Remote' },
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
    let initial = 'es';
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
