const fs = require('fs');

const en = JSON.parse(fs.readFileSync('locales/en.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('locales/es.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('locales/fr.json', 'utf8'));

let results = [];

function traverse(objEn, objEs, objFr, path = '') {
    for (const key in objEn) {
        const currentPath = path ? `${path}.${key}` : key;
        const valEn = objEn[key];
        const valEs = objEs ? objEs[key] : null;
        const valFr = objFr ? objFr[key] : null;

        if (typeof valEn === 'string') {
            results.push({
                path: currentPath,
                en: valEn,
                es: valEs || '',
                fr: valFr || ''
            });
        } else if (Array.isArray(valEn)) {
            valEn.forEach((item, index) => {
                results.push({
                    path: `${currentPath}[${index}]`,
                    en: item,
                    es: (valEs && valEs[index]) ? valEs[index] : '',
                    fr: (valFr && valFr[index]) ? valFr[index] : ''
                });
            });
        } else if (typeof valEn === 'object' && valEn !== null) {
            traverse(valEn, valEs || {}, valFr || {}, currentPath);
        }
    }
}

traverse(en, es, fr);
fs.writeFileSync('all_translations.json', JSON.stringify(results, null, 2));
