const fs = require('fs');
const es = JSON.parse(fs.readFileSync('locales/es.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('locales/fr.json', 'utf8'));

// HOME
es.home = {
    stats: {
        years: 'Años Exp.',
        projects: 'Proyectos',
        certs: 'Certificados Prof.',
        languages: 'Idiomas'
    },
    featuredProjects: {
        title: 'Proyectos Destacados',
        subtitle: 'Una selección de desafíos de ingeniería de alto impacto y avances tecnológicos.',
        viewAll: 'Todos los Proyectos'
    },
    insights: {
        title: 'Perspectivas de Ingeniería',
        subtitle: 'Inmersiones profundas en sistemas de baja latencia, IA multi-agente y arquitectura de grado de producción.',
        viewAll: 'Ver Todos los Artículos',
        readMore: 'Leer Más'
    }
};

fr.home = {
    stats: {
        years: 'Années Exp.',
        projects: 'Projets',
        certs: 'Certificats Prof.',
        languages: 'Langues'
    },
    featuredProjects: {
        title: 'Projets en Vedette',
        subtitle: 'Une sélection de défis d\'ingénierie à fort impact et d\'avancées technologiques.',
        viewAll: 'Tous les Projets'
    },
    insights: {
        title: 'Perspectives d\'Ingénierie',
        subtitle: 'Plongées approfondies dans les systèmes à faible latence, l\'IA multi-agents et l\'architecture de production.',
        viewAll: 'Voir Tous les Articles',
        readMore: 'Lire Plus'
    }
};

// ARTICLES
es.articles = {
    title: "Perspectivas y Artículos",
    subtitle: "Inmersiones profundas en desafíos de ingeniería, patrones arquitectónicos y el futuro de la tecnología.",
    back: "Volver a Artículos",
    readFull: "Leer Artículo Completo",
    share: "Compartir Artículo",
    discuss: "Discutir conmigo",
    toc: "Tabla de Contenidos"
};

fr.articles = {
    title: "Perspectives & Articles",
    subtitle: "Plongées approfondies dans les défis d'ingénierie, les modèles architecturaux et l'avenir de la technologie.",
    back: "Retour aux Articles",
    readFull: "Lire l'Article Complet",
    share: "Partager l'Article",
    discuss: "Discuter avec moi",
    toc: "Table des Matières"
};

// CONTACT
es.contact = {
    title: "Construyamos el Futuro",
    subtitle: "¿Tienes un proyecto en mente? Envíame un mensaje y te responderé en menos de 24 horas.",
    emailTitle: "Envíame un Correo",
    callTitle: "Llámame",
    socialsTitle: "Redes Sociales",
    whatsappTitle: "Omite el correo.",
    whatsappDesc: "Soy más receptivo en WhatsApp. Haz clic abajo para iniciar una conversación directamente conmigo.",
    whatsappButton: "Mensaje en WhatsApp"
};

fr.contact = {
    title: "Construisons l'Avenir",
    subtitle: "Vous avez un projet en tête ? Envoyez-moi un message et je vous répondrai dans les 24 heures.",
    emailTitle: "Envoyez-moi un Email",
    callTitle: "Appelez-moi",
    socialsTitle: "Réseaux Sociaux",
    whatsappTitle: "Évitez l'email.",
    whatsappDesc: "Je suis plus réactif sur WhatsApp. Cliquez ci-dessous pour démarrer une conversation directement avec moi.",
    whatsappButton: "Message sur WhatsApp"
};

// FOOTER
es.footer = {
    description: "Ingeniero de Software construyendo sistemas de alto rendimiento, transformando ideas complejas en soluciones elegantes centradas en el usuario. Impulsado por una profunda creencia y compromiso de usar la tecnología como una fuerza para el bien. Motivado por crear tecnología que resuelva problemas significativos y mejore vidas.",
    builtWith: "Construido con Next.js, Framer Motion y Pasión."
};

fr.footer = {
    description: "Ingénieur Logiciel concevant des systèmes haute performance, transformant des idées complexes en solutions élégantes centrées sur l'utilisateur. Poussé par une conviction et un engagement profonds d'utiliser la technologie comme une force pour le bien. Motivé par la création de technologies qui résolvent des problèmes significatifs et améliorent des vies.",
    builtWith: "Construit avec Next.js, Framer Motion et Passion."
};

// SEO
es.seo = {
    title: "MarcYourMind | Ingeniero de Software Multi-Dominio",
    description: "Portafolio personal de MarcYourMind, un Ingeniero de Software Senior construyendo sistemas de alto rendimiento en arquitecturas Cuantitativas, de IA, Web3 y Backend."
};

fr.seo = {
    title: "MarcYourMind | Ingénieur Logiciel Multi-Domaines",
    description: "Portfolio personnel de MarcYourMind, un Ingénieur Logiciel Senior concevant des systèmes haute performance dans les architectures Quantitatives, IA, Web3 et Backend."
};

// OPEN SOURCE
es.opensource = {
    title: "Contribuciones de Código Abierto",
    subtitle: "Una colección de proyectos públicos, experimentos y contribuciones a la comunidad de desarrolladores.",
    communityFirst: "La Comunidad Primero",
    pageSubtitle: "Creo en retribuir a la comunidad. Aquí tienes algunos de mis proyectos y contribuciones de código abierto más impactantes.",
    ctaTitle: "¿Quieres colaborar?",
    ctaSubtitle: "Siempre estoy buscando proyectos interesantes a los que contribuir. Si estás trabajando en algo innovador, hablemos.",
    viewGithub: "Ver Perfil de GitHub",
    projects: {
        "binance-data-processing": "Análisis de datos de Binance para ideas de bots de trading e investigación de mercado.",
        "ML-Algorithms-Analysis": "Estudio de varios algoritmos de ML usando python para entender visualmente los aspectos de cada algoritmo.",
        "NinjaFocus": "Bot de trading para Solana conectado a Telegram para señales de trading en tiempo real.",
        "Cervantes-AI-Story-Writer": "Escritor de historias multi-agente usando LLMs para generar narrativas infinitas.",
        "linktrees": "Sitios web tipo linktree orientados a móviles con diversos estilos de marca.",
        "HiveFrequency": "Arquitectura GAN+RNN para generación de música en vivo en tiempo real.",
        "Dartboard-Detection": "Algoritmo de detección de dianas implementado en C++ con algoritmos de Visión por Computadora OpenCV."
    }
};

fr.opensource = {
    title: "Contributions Open Source",
    subtitle: "Une collection de projets publics, d'expériences et de contributions à la communauté des développeurs.",
    communityFirst: "La Communauté d'Abord",
    pageSubtitle: "Je crois en l'importance de redonner à la communauté. Voici quelques-uns de mes projets et contributions open source les plus percutants.",
    ctaTitle: "Envie de collaborer ?",
    ctaSubtitle: "Je suis toujours à la recherche de projets intéressants auxquels contribuer. Si vous travaillez sur quelque chose de novateur, parlons-en.",
    viewGithub: "Voir Profil GitHub",
    projects: {
        "binance-data-processing": "Analyse de données Binance pour la conception de bots de trading et l'étude de marché.",
        "ML-Algorithms-Analysis": "Étude visuelle de nombreux algorithmes ML via Python pour mieux comprendre chaque modèle.",
        "NinjaFocus": "Bot de trading Solana relié à Telegram pour des signaux en direct en temps réel.",
        "Cervantes-AI-Story-Writer": "Système multi-agents d'écriture exploitant les LLM pour générer des récits infinis.",
        "linktrees": "Écosystème de pages web type Linktree ultra optimisées pour le format mobile.",
        "HiveFrequency": "Architecture hybride GAN+RNN ciblant la création musicale temps réel en concert.",
        "Dartboard-Detection": "Algorithme de détection de cibles de fléchettes en C++ via OpenCV."
    }
};

// CREATIVE
es.creative = {
    title: "Autoexpresión",
    artTitle: "Galería de Arte",
    musicTitle: "Paisajes Sonoros",
    philosophyTitle: "Filosofía",
    listenNow: "Escuchar Ahora",
    heroTagline: "La Creatividad es la Voz del Alma",
    artSubtitle: "Una colección de experimentos visuales, pinturas digitales y bocetos que exploran forma, color y emoción.",
    artNote: "Todo el arte visual presentado aquí está dibujado a mano meticulosamente usando lápices y bolígrafos negros tradicionales, luego digitalizado para su exposición.",
    musicSubtitle: "Viajes sonoros compuestos para facilitar el enfoque, la meditación y la resonancia emocional.",
    worksLabel: "Obras",
    tracksLabel: "Pistas",
    philosophy: "Mi arte es un viaje hacia la intensidad abstracta, creado con lápices, lápices de colores y rotuladores negros. Me centro en colores vibrantes y saturados y formas geométricas intrincadas que desafían la percepción e invitan a una profunda introspección. Del mismo modo, mi música (como Shaboom) es una exploración de paisajes sonoros de alta energía y complejidad rítmica.",
    items: {
        art1: { title: "Portal Cromático", description: "Una intensa exploración geométrica de simetría y colores vibrantes, que irradia desde una silueta central." },
        art2: { title: "Geometría Fúngica", description: "Formas de hongos orgánicos contrastadas contra una cuadrícula triangular ágil y vibrante." },
        art3: { title: "Esfera Monocromática", description: "Un complejo patrón esférico en blanco y negro que evoca profundidad y movimiento de rotación." },
        art4: { title: "Enredos Neurales", description: "Una colorida y caótica red de líneas interconectadas que representan redes complejas." },
        art5: { title: "Monograma MARC", description: "Un monograma estilizado y caligráfico renderizado en atrevida tinta negra con elegantes florituras." },
        art6: { title: "Flujo Triple", description: "Un diseño circular inspirado en el trisquel con tres formas orgánicas entrelazadas." },
        art7: { title: "Radiancia Prismática", description: "Un estudio color de alta intensidad que emplea lápices de color creando una vívida sensación de energía radiante." },
        art8: { title: "Ritmo Abstracto", description: "Una rica composición rítmica trazando líneas y figuras canalizando la energía visual de mis audios." },
        art9: { title: "Contornos Vívidos", description: "Una fluida exploración a la forma realzando en color y trazo mediante marcadores y tonos marcados y saturados." },
        art10: { title: "Pirámides Dimensionales", description: "Un boceto minimalista de dos entrelazadas pirámides explorando espacios negativos." }
    }
};

fr.creative = {
    title: "Expression Personnelle",
    artTitle: "Galerie d'Art",
    musicTitle: "Paysages Sonores",
    philosophyTitle: "Philosophie",
    listenNow: "Écouter Maintenant",
    heroTagline: "La Créativité est la Voix de l'Âme",
    artSubtitle: "Une collection d'expériences visuelles, de peintures et de croquis explorant la forme, la couleur et l'émotion.",
    artNote: "Toutes les œuvres d'art visuel présentées ici sont méticuleusement dessinées à la main avec des crayons de bois et des stylos noirs traditionnels, puis numérisées.",
    musicSubtitle: "Des voyages sonores composés pour faciliter la concentration, la méditation et la résonance émotionnelle.",
    worksLabel: "Œuvres",
    tracksLabel: "Pistes",
    philosophy: "Mon art est un voyage dans l'intensité abstraite, élaboré avec des crayons, des crayons de couleur et des marqueurs noirs. Je me concentre sur des couleurs vibrantes et saturées, et des formes géométriques complexes qui défient la perception et invitent à une profonde introspection. De même, ma musique (en tant que Shaboom) est une exploration de paysages sonores à haute énergie et de complexité rythmique.",
    items: {
        art1: { title: "Portail Chromatique", description: "Une intense exploration géométrique de symétrie et couleurs vibrantes, rayonnant depuis une silhouette centrale." },
        art2: { title: "Géométrie Fongique", description: "Formes de champignons organiques disposées sur une grille triangulaire nette et vibrante." },
        art3: { title: "Sphère Monochromatique", description: "Un modèle sphérique complexe en noir et blanc inspirant la profondeur et le mouvement de rotation." },
        art4: { title: "Enchevêtrements Neuronaux", description: "Une toile chaotique et colorée de lignes interconnectées représentant des réseaux complexes." },
        art5: { title: "Monogramme MARC", description: "Un monogramme calligraphique stylisé rendu à l'encre noire avec des courbes élégantes." },
        art6: { title: "Flux Triple", description: "Une conception circulaire inspirée du triskèle avec trois structures organiques entrelacées." },
        art7: { title: "Éclat Prismatique", description: "Une étude colorée intense utilisant des crayons de couleur pour créer un effet d'énergie incandescente." },
        art8: { title: "Rythme Abstrait", description: "Composition rythmique de lignes et de formes imitant l'intensité canalisée de ma musique." },
        art9: { title: "Contours Frappants", description: "Exploration expérimentale de forme soulignée aux marqueurs de peinture audacieux et tons saturés." },
        art10: { title: "Pyramides Frontales", description: "Dessin épuré en noir de pyramides se superposant, axé sur la profondeur avec des espaces négatifs." }
    }
};

fs.writeFileSync('locales/es.json', JSON.stringify(es, null, 4));
fs.writeFileSync('locales/fr.json', JSON.stringify(fr, null, 4));

console.log('Finished updating minor UI sections.');
