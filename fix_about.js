const fs = require('fs');
const es = JSON.parse(fs.readFileSync('locales/es.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('locales/fr.json', 'utf8'));

// ABOUT
es.about.title = 'La Mente Detrás Del Código';
es.about.subtitle = {
    layers: '+6 Años Construyendo Productos',
    activity: 'De la Idea → A Producción',
    search: 'Impulsado por la Curiosidad',
    target: 'Ingeniero Enfocado en Producto'
};
es.about.description = [
    "Soy ingeniero de software e ingeniero electrónico con pasión por transformar ideas en productos. Tengo una sólida formación en desarrollo de software, desarrollo de IA y aplicación de matemáticas a sistemas de trading. Aprendo rápido y puedo asimilar nuevas tecnologías rápidamente. También trabajo bien en equipo y disfruto de entornos colaborativos.",
    "Creo que mi propósito en la vida es hacer del mundo un lugar mejor construyendo tecnología.",
    "Doy lo mejor de mí cuando estoy resolviendo problemas difíciles. Contribuyendo a algo más grande que yo mismo.",
    "Actualmente dedico mi tiempo a construir plataformas, desarrollar proyectos de IA, operar con criptomonedas y desarrollar mi disciplina.",
    "Busco unirme a un equipo de personas con ideas afines que quieran cambiar el mundo un paso a la vez."
];

fr.about.title = "L'Esprit Derrière Le Code";
fr.about.subtitle = {
    layers: '+6 Ans de Création de Produits',
    activity: "De l'Idée → À la Production",
    search: 'Alimenté par la Curiosité',
    target: 'Ingénieur Axé sur le Produit'
};
fr.about.description = [
    "Je suis ingénieur logiciel et ingénieur en électronique, passionné par la transformation d'idées en produits. J'ai une solide expérience en développement de logiciels, développement d'IA et application des mathématiques aux systèmes de trading. J'apprends vite et peux assimiler de nouvelles technologies rapidement. Je suis également un joueur d'équipe et j'apprécie de travailler dans un environnement collaboratif.",
    "Je crois que mon but dans la vie est de rendre le monde meilleur en créant des technologies.",
    "Je suis à mon meilleur lorsque je résous des problèmes difficiles. Contribuer à quelque chose de plus grand que moi-même.",
    "Actuellement, je passe mon temps à concevoir des plateformes, à développer des projets d'IA, à opérer sur le marché des cryptomonnaies et à développer ma discipline.",
    "Je cherche à rejoindre une équipe de personnes partageant les mêmes idées, désirant changer le monde étape par étape."
];

fs.writeFileSync('locales/es.json', JSON.stringify(es, null, 4));
fs.writeFileSync('locales/fr.json', JSON.stringify(fr, null, 4));

console.log('Finished updating about section.');
