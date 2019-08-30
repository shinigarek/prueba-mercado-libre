const regex = /([ATGC])\1{3,4}/;

function validDiagonal(matriz) {
    const lengthMatriz = matriz.length;
    let diagonalA = '';
    let diagonalB = '';
    for (let i = 0; i < lengthMatriz; i++) {
        diagonalA = diagonalA.concat(matriz[i].charAt(i));
        diagonalB = diagonalB.concat(matriz[i].charAt( matriz[i].length - (1 + i) ));
    }
    return validHorizontal([diagonalA, diagonalB])
}

function validHorizontal(matriz) {
    const filterADN = [];
    const lengthMatriz = matriz.length;
    for (let i = 0; i < lengthMatriz; i++) {
        if ( regex.test(matriz[i]) ) {
            filterADN.push(matriz[i]);
        }
    }
    return filterADN.length;
}

function validVertical(matriz) {
    const lengthMatriz = matriz.length;
    const orderMatriz = [];
    for (let i = 0; i < lengthMatriz; i++) {
        const letters = matriz[i].length;
        for (let l = 0; l < letters; l++) {
            if(orderMatriz[l]) {
                orderMatriz[l] = orderMatriz[l].concat(matriz[i].charAt(l));
            } else {
                orderMatriz[l] = matriz[i].charAt(l);
            }
        }
    }

    return validHorizontal(orderMatriz);
}


function isMutant(matriz) {
    const adnHorizontal = validHorizontal(matriz);
    const adnVertical = validVertical(matriz);
    const adnDiagonal = validDiagonal(matriz);
    return (adnHorizontal + adnVertical + adnDiagonal) > 1;
}

module.exports = {
    isMutant
};
