`use strict`;

const time = {
    hours,
    minutes,
    seconds,

    modify(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    },
};

const setTime = () => {
    const hours = +prompt(`Hours`);
    const minutes = +prompt(`Minutes`);
    const seconds = +prompt(`Seconds`);

    time.modify(hours, minutes, seconds);
}

const showTime = () => {
    const createTime = new Date(0, 0, 0, time.hours, time.minutes, time.seconds);
    const message = `Time: ${createTime.getHours()}:${createTime.getMinutes()}:${createTime.getSeconds()}`;
    alert(message);
}


