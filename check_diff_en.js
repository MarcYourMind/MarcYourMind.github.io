const fs = require('fs');

function readJsonSafe(file) {
    let raw = fs.readFileSync(file, 'utf8');
    if (raw.charCodeAt(0) === 0xFEFF) {
        raw = raw.slice(1);
    }
    return JSON.parse(raw);
}

const en = readJsonSafe('locales/en.json');
const { execSync } = require('child_process');
let oldEnStr = execSync('git show HEAD~1:locales/en.json').toString('utf8');
if (oldEnStr.charCodeAt(0) === 0xFEFF) oldEnStr = oldEnStr.slice(1);
const oldEn = JSON.parse(oldEnStr);

function getDifferences(obj1, obj2, path = '') {
    let diffs = {};
    for (const key in obj1) {
        const currentPath = path ? `${path}.${key}` : key;
        if (typeof obj1[key] === 'object' && obj1[key] !== null) {
            if (!obj2 || typeof obj2[key] !== 'object') {
                diffs[currentPath] = { old: obj2 ? obj2[key] : undefined, new: obj1[key] };
            } else {
                Object.assign(diffs, getDifferences(obj1[key], obj2[key], currentPath));
            }
        } else {
            if (!obj2 || obj1[key] !== obj2[key]) {
                diffs[currentPath] = { old: obj2 ? obj2[key] : undefined, new: obj1[key] };
            }
        }
    }
    return diffs;
}

const diffs = getDifferences(en, oldEn);
console.log(JSON.stringify(diffs, null, 2));
fs.writeFileSync('translation_diffs.json', JSON.stringify(diffs, null, 2));
