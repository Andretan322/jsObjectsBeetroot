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

