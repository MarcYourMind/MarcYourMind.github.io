const fs = require('fs');

const es = JSON.parse(fs.readFileSync('locales/es.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('locales/fr.json', 'utf8'));

// Fixes for ES
es.hero.title = "Ingeniero de Software Multi-Dominio";
es.hero.subtitle = "Construyendo sistemas de alto rendimiento. Especializado en Trading Cuantitativo (Python y C++), Inteligencia impulsada por IA (Python) y Arquitectura Web3 (Solidity).";

// Fixes for FR
fr.hero.title = "Ingénieur Logiciel Multi-Domaines";
fr.hero.subtitle = "Développement de systèmes haute performance. Spécialisé en Trading Quantitatif (Python et C++), Intelligence propulsée par l'IA (Python) et Architecture Web3 (Solidity).";

fs.writeFileSync('locales/es.json', JSON.stringify(es, null, 4));
fs.writeFileSync('locales/fr.json', JSON.stringify(fr, null, 4));

console.log('Hero sections updated.');
