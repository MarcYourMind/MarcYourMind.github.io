const fs = require('fs');

const en = JSON.parse(fs.readFileSync('locales/en.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('locales/es.json', 'utf8'));

let discrepancies = [];

function checkLengths(obj1, obj2, path = '') {
    for (const key in obj1) {
        const currentPath = path ? `${path}.${key}` : key;
        if (typeof obj1[key] === 'string') {
            const enStr = obj1[key];
            const esStr = obj2 ? obj2[key] : '';
            if (esStr && typeof esStr === 'string') {
                const ratio = esStr.length / enStr.length;
                if (ratio < 0.70 || ratio > 1.30) {
                    discrepancies.push({ path: currentPath, en: enStr, es: esStr, ratio });
                }
            }
        } else if (typeof obj1[key] === 'object' && obj1[key] !== null) {
            if (Array.isArray(obj1[key])) {
                obj1[key].forEach((item, index) => {
                    const esItem = (obj2 && obj2[key]) ? obj2[key][index] : null;
                    if (typeof item === 'string' && typeof esItem === 'string') {
                        const ratio = esItem.length / item.length;
                        if (ratio < 0.70 || ratio > 1.30) {
                            discrepancies.push({ path: `${currentPath}[${index}]`, en: item, es: esItem, ratio });
                        }
                    }
                });
            } else {
                checkLengths(obj1[key], obj2 ? obj2[key] : {}, currentPath);
            }
        }
    }
}

checkLengths(en, es);

console.log(`Found ${discrepancies.length} potential discrepancies based on string length ratio.\n`);
discrepancies.forEach(d => {
    console.log(`PATH: ${d.path} (ratio: ${d.ratio.toFixed(2)})`);
    console.log(`EN: ${d.en}`);
    console.log(`ES: ${d.es}`);
    console.log('---');
});
