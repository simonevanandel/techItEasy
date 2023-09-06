// PSEUDO-CODE
// we gaan ervan uit dat we een array van beschikbare scherm-groottes aangeleverd krijgen
// we hebben een eind-string nodig om alle sizes in op te slaan
// voor iedere size:
// geef de size weer + 'inches'
// reken de inches om in cm (afgerond) en zet het tussen haakjes met 'cm' erachter
// als er nog een size achter komt te staan, scheid ze dan met een |
// we hebben de output ergens anders nodig, dus gebruiken we 'return'

function createScreenSizesString(sizesArray) {
    let output = '';

    for (let i = 0; i < sizesArray.length; i++) {
        const currentSizeInches = sizesArray[i];
        const currentSizeCm = Math.round(sizesArray[i] * 2.54);

        // Format de string
        output = output + `${currentSizeInches} inch (${currentSizeCm} cm)`;

        // Als we nog NIET bij de laatste size zijn, voeg dan een | toe aan het eind
        if (i < sizesArray.length - 1) {
            output = `${output} | `;
        }
    }

    return output;
}

export default createScreenSizesString;