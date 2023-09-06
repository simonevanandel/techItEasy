// PSEUDO-CODE
// als we één tv-prijs als getal aangeleverd krijgen, plak daar dan een euro-teken en ,- bij.
// we hebben de output ergens anders nodig, dus gebruiken we 'return'

function createProductPrice(price) {
    return `€${price},-`;
    // dit mag ook:
    // return '€ ' + tv.price + ',-';
}

export default createProductPrice;