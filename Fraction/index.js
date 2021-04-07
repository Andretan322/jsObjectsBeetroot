`use strict`;

const fraction = {
    upOne: 0,
    downOne: 0,
    upTwo: 0,
    downTwo: 0,

    modify(upOne, downOne, upTwo, downTwo) {
        this.downOne = downOne;
        this.upOne = upOne;
        this.downTwo = downTwo;
        this.upTwo = upTwo;
    },

    nok(nok) {
        this.downOne = nok;
        this.downTwo = nok;
    },
};

const createFractions = () => {
    const upOne = +prompt(`First numerator`);
    const downOne = +prompt(`First divider`);
    const upTwo = +prompt(`Second numerator`);
    const downTwo = +prompt(`Second divider`);

    fraction.modify(upOne, downOne, upTwo, downTwo);
    alert(`First fraction: ${upOne}/${downOne}\nSecond fraction: ${upTwo}/${downTwo}`);
};

const gcd = (n, m) => {
    return m == 0 ? n : gcd(m, n % m);
}

const getNOK = (n, m) => {
    return n * m / gcd(n, m);
}

const setNumerators = (nok, fraction) => {
    fraction.upOne *= nok / fraction.downOne;
    fraction.upTwo *= nok / fraction.downTwo;
};

const checkFractions = () => {
    const fractionCopy = Object.assign({}, fraction);
    if (fractionCopy.downOne != fractionCopy.downTwo) {
        const nok = getNOK(fractionCopy.downOne, fractionCopy.downTwo);
        setNumerators(nok, fractionCopy);
        fractionCopy.nok(nok);
    }
    return fractionCopy;
};

// create function, that check fraction (0, 1)

const getSumFractions = () => {
    const fractionCopy = checkFractions();
    alert(`The sum is ${fractionCopy.upOne + fractionCopy.upTwo}/${fractionCopy.downOne}`);
};

const getDifferenceFractions = () => {
    const fractionCopy = checkFractions();
    alert(`The difference is ${fractionCopy.upOne - fractionCopy.upTwo}/${fractionCopy.downOne}`);
};

const getMultipleFractions = () => {
    const fractionCopy = Object.assign({}, fraction);
    alert(`The multiple is ${fractionCopy.upOne * fractionCopy.upTwo}/${fractionCopy.downOne * fractionCopy.downTwo}`);
}

const getDivisionFractions = () => {
    const fractionCopy = Object.assign({}, fraction);
    alert(`The division is ${fractionCopy.upOne * fractionCopy.downTwo}/${fractionCopy.downOne * fractionCopy.upTwo}`);
}
