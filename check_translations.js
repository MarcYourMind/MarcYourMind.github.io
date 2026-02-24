const fs = require('fs');

const en = JSON.parse(fs.readFileSync('locales/en.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('locales/es.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('locales/fr.json', 'utf8'));

// The user states: "Some translations do not match the original english text. They match the old text. Fix it so that all languages match what is written in english. Do not modify the english text."
// So EN is the source of truth, but some ES/FR keys might not be correctly translated corresponding to the NEW EN text.

function findDiscrepancies(enObj, esObj, frObj, path = '') {
    for (const key in enObj) {
        if (typeof enObj[key] === 'string') {
            // Find texts that might be same as english or out of sync. Actually let's just create an object 
            // where we map the changes directly since we want them to reflect EN.
            // But we can't do semantic checking easily without an LLM.
        } else if (typeof enObj[key] === 'object' && enObj[key] !== null) {
            findDiscrepancies(enObj[key], esObj?.[key] || {}, frObj?.[key] || {}, path + key + '.');
        }
    }
}

// Let's print out what we found out from the previous Git patches:
// 1. In recent commit we updated projects.nasdaq, projects.illuvium, projects.cruzcampo?
// Let's specifically check formatting of projects
const projs = ["illuvium", "cruzcampo", "nasdaq", "toptrader", "chainchampions", "technex"];
for (const p of projs) {
    console.log(`\n--- ${p.toUpperCase()} ---`);
    console.log("EN desc:", en.projects?.[p]?.description);
    console.log("ES desc:", es.projects?.[p]?.description);
    console.log("FR desc:", fr.projects?.[p]?.description);
    console.log("EN long:", en.projects?.[p]?.longDescription);
    console.log("ES long:", es.projects?.[p]?.longDescription);
    console.log("FR long:", fr.projects?.[p]?.longDescription);
}
