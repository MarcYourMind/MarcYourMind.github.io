const fs = require('fs');
const es = JSON.parse(fs.readFileSync('locales/es.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('locales/fr.json', 'utf8'));

// RESUME UI
es.resume.ui = {
    "hubTitle": "Centro de Currículos",
    "hubSubtitle": "Selecciona una especialidad para ver un currículum adaptado y un portafolio de experiencia relevante.",
    "exploreTrack": "Explorar Especialidad",
    "tailoredOverview": "Vista general adaptada para roles en {{role}}, incluyendo la tecnología relevante y logros clave.",
    "professionalExperience": "Experiencia Profesional",
    "education": "Educación",
    "skillMatrix": "Matriz de Habilidades",
    "certifications": "Certificaciones",
    "languages": "Idiomas"
};

fr.resume.ui = {
    "hubTitle": "Centre de CV",
    "hubSubtitle": "Sélectionnez une spécialisation pour voir un CV sur mesure et un portfolio d'expériences pertinentes.",
    "exploreTrack": "Explorer la Spécialisation",
    "tailoredOverview": "Aperçu adapté pour les rôles en {{role}}, incluant la stack technologique et les réalisations clés.",
    "professionalExperience": "Expérience Professionnelle",
    "education": "Éducation",
    "skillMatrix": "Matrice de Compétences",
    "certifications": "Certifications",
    "languages": "Langues"
};

// RESUME SHARED
es.resume.shared = {
    "skills": {
        "languages": "Idiomas",
        "backend": "Backend",
        "infrastructure": "Infraestructura",
        "dataScience": "Ciencia de Datos",
        "tradingSystems": "Sistemas de Trading",
        "blockchain": "Blockchain",
        "tools": "Herramientas",
        "aiMl": "IA/ML",
        "frontend": "Frontend"
    },
    "languages": {
        "english": "Inglés",
        "spanish": "Español",
        "french": "Francés",
        "native": "Nativo",
        "workingProficiency": "Competencia Profesional"
    },
    "education": {
        "bristolDegree": "BEng en Ciencias de la Computación y Electrónica",
        "bristolInstitution": "Universidad de Bristol",
        "bristolDescription": "Mantuve un promedio de Matrícula de Honor durante el currículo de ingeniería en Ciencias de la Computación y Electrónica. Hice la transición de los estudios formales durante el último año para escalar un negocio de trading; posteriormente fui galardonado con el nivel BEng por la Universidad de Bristol."
    }
};

fr.resume.shared = {
    "skills": {
        "languages": "Langages de Programmation",
        "backend": "Backend",
        "infrastructure": "Infrastructure",
        "dataScience": "Science des Données",
        "tradingSystems": "Systèmes de Trading",
        "blockchain": "Blockchain",
        "tools": "Outils",
        "aiMl": "IA/ML",
        "frontend": "Frontend"
    },
    "languages": {
        "english": "Anglais",
        "spanish": "Espagnol",
        "french": "Français",
        "native": "Natif",
        "workingProficiency": "Maîtrise Professionnelle"
    },
    "education": {
        "bristolDegree": "BEng en Informatique et Électronique",
        "bristolInstitution": "Université de Bristol",
        "bristolDescription": "J'ai maintenu une moyenne de Première Classe tout au long du programme d'ingénierie en Informatique et Électronique. J'ai interrompu mes études formelles lors de la dernière année afin de développer une entreprise de trading; l'Université de Bristol m'a par la suite décerné le diplôme BEng."
    }
};

fs.writeFileSync('locales/es.json', JSON.stringify(es, null, 4));
fs.writeFileSync('locales/fr.json', JSON.stringify(fr, null, 4));

console.log('Finished updating resume UI and Shared strings.');
