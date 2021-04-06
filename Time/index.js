`use strict`;

const askTime = () => {
    const time = prompt(`Enter the time\nExample: 00:00:00`);
    return(time.split(`:`));
}

const createTime = () => {
    const arrTime = askTime();
    checkTime(arrTime);
    const time = new Date(0, 0, 0, arrTime[0], arrTime[1], arrTime[2]);

    alert(`Time: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}