// PSEUDO-CODE
// als we één tv object aangeleverd krijgen, pak daar dan de naam (tv.name), merk (tv.brand) en type (tv.type) uit
// plak [merk] [type] - [naam] aan elkaar
// we hebben de output ergens anders nodig, dus gebruiken we 'return'

function createProductName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
    // dit mag ook:
    // return tv.brand + ' ' + tv.type + ' - ' + tv.name;
}

export default createProductName;