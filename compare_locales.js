const fs = require('fs');

const en = JSON.parse(fs.readFileSync('locales/en.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('locales/es.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('locales/fr.json', 'utf8'));

function flattenObj(obj, parent = '', res = {}) {
    for (let key in obj) {
        let propName = parent ? parent + '.' + key : key;
        if (typeof obj[key] == 'object' && obj[key] !== null) {
            flattenObj(obj[key], propName, res);
        } else {
            res[propName] = obj[key];
        }
    }
    return res;
}

const flatEn = flattenObj(en);
const flatEs = flattenObj(es);
const flatFr = flattenObj(fr);

const keys = Object.keys(flatEn);
let output = '';

for (const key of keys) {
    output += `Key: ${key}\n`;
    output += `EN: ${flatEn[key]}\n`;
    output += `ES: ${flatEs[key]}\n`;
    output += `FR: ${flatFr[key]}\n`;
    output += `\n`;
}

fs.writeFileSync('locales_comparison.txt', output);
console.log('Done');
