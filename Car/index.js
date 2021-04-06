`use strcit`;

const askParameters = () => {
    const vendor = prompt(`Vendor`).toUpperCase();
    const model = prompt(`Model`).toUpperCase();
    const year = +prompt(`Year`);
    const speed = +prompt(`Speed`);

    return [vendor, model, year, speed];
}

const createCar = () => {
    const parameters = askParameters();
    return {
        vendor: parameters[0],
        model: parameters[1],
        year: parameters[2],
        speed: parameters[3],
    }
}

const getInfo = (car) => {
    // const askCar = prompt(`What car do you want?`);
    const message = `Vendor: ${car.vendor}\nModel: ${car.model}\nYear: ${car.year}\nSpeed: ${car.speed}`;
    alert(message);
}


const audi = createCar();
getInfo(audi);

