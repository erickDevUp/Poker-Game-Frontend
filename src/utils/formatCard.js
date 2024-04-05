export function formatCard(card) {
    // Extraer el valor y el palo de la carta
    const [value, suit] = card.match(/\[ (.+?) (❤|♦|♣|♠) \]/).slice(1);

    // Convertir el valor a mayúsculas y reemplazar los números por sus equivalentes en letras
    let formattedValue = value.toUpperCase();
    if (value.match(/[0-9]/)) {
       formattedValue = value.replace('10', 'T'); // Convertir 10 a T
    } else if (value === 'A') {
       formattedValue = 'A';
    } else if (value === 'K') {
       formattedValue = 'K';
    } else if (value === 'Q') {
       formattedValue = 'Q';
    } else if (value === 'J') {
       formattedValue = 'J';
    }else if (value ==='T') {
        formattedValue = '10'
    }
   
    // Convertir el palo a una letra
    let formattedSuit ;
    switch (suit) {
        case '❤':
            formattedSuit = 'H'; // Convertir ❤ a H
            break;
        case '♦':
            formattedSuit = 'D'; // Convertir ♦ a D
            break;
        case '♣':
            formattedSuit = 'C'; // Convertir ♣ a C
            break;
        case '♠':
            formattedSuit = 'S'; // Convertir ♠ a S
            break;
     }
    
   
    // Devolver el valor y el palo formateados
    return `${formattedSuit}${formattedValue}`;
   }
   