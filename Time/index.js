`use strict`;

const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    modify(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    },

    addSeconds(seconds) {
        this.seconds += seconds;
    },

    addMinutes(minutes) {
        this.minutes += minutes;
    },

    addHours(hours) {
        this.hours += hours;
    },
};

const setTime = () => {
    const hours = +prompt(`Hours`);
    const minutes = +prompt(`Minutes`);
    const seconds = +prompt(`Seconds`);

    time.modify(hours, minutes, seconds);
};

const showTime = () => {
    const date = new Date(0, 0, 0, time.hours, time.minutes, time.seconds);
    const message = `Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    alert(message);
};

const addSeconds = () => {
    const askSeconds = +prompt(`Seconds`);

    time.addSeconds(askSeconds);
    showTime();
};

const addMinutes = () => {
    const askMinutes = +prompt(`Minutes`);

    time.addMinutes(askMinutes);
    showTime();
};

const addHours = () => {
    const askHours = +prompt(`Hours`);

    time.addHours(askHours);
    showTime();
};






