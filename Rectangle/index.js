const rectangle = {
    topLeftX: 0,
    topLeftY: 0,
    bottomRightX: 0,
    bottomRightY: 0,

    modify(topX, topY, bottomX, bottomY) {
        this.topLeftX = topX;
        this.topLeftY = topY;
        this.bottomRightX = bottomX;
        this.bottomRightY = bottomY;
    },
};

function createRectangle() {
    const topX = +prompt('Enter the Top Left X point');
    const topY = +prompt('Enter the Top Left Y point');
    const bottomX = +prompt('Enter the Bottom Left X point');
    const bottomY = +prompt('Enter the Bottom Left Y point');

    rectangle.modify(topX, topY, bottomX, bottomY);
    console.log(rectangle);
}

function getRectanglePoints() {
    alert(`Your rectangle:\n
    Top Left X: ${rectangle.topLeftX}\n
    Top Left Y: ${rectangle.topLeftY}\n
    Bottom Right X: ${rectangle.bottomRightX}\n
    Bottom Right y: ${rectangle.bottomRightY}`);
}

function getRectangleWidth() {
    return(rectangle.bottomRightX - rectangle.topLeftX);

}

function getRectangleHeight() {
    return(rectangle.topLeftY - rectangle.bottomRightY);
}

function getRectangleArea() {
    return (getRectangleWidth() * getRectangleHeight());
}

function getRectanglePerimeter() {
    return (2*(getRectangleWidth() + getRectangleHeight()));
}

function changeRectangleWidth() {
    const askWidthDelta = +prompt("How much change width?");

    rectangle.bottomRightX += askWidthDelta;
    getRectanglePoints();
}

function changeRectangleHeight() {
    const askHeightDelta = +prompt("How much change height?");

    rectangle.topLeftY += askHeightDelta;
    getRectanglePoints();
}

function changeRectangleSize() {
    changeRectangleWidth();
    changeRectangleHeight();
    getRectanglePoints();
}

function moveRectangleX() {
    const askMoveDelta = +prompt("How much move by X?");

    rectangle.topLeftX += askMoveDelta;
    rectangle.bottomRightX += askMoveDelta;
}

function moveRectangleY() {
    const askMoveDelta = +prompt("How much move by Y?");

    rectangle.topLeftY += askMoveDelta;
    rectangle.bottomRightY += askMoveDelta;
}

function isInsideRectangle() {
    const askPointX = +prompt("Enter the X point");
    const askPointY = +prompt("Enter the Y point");

    if ((askPointX >= rectangle.topLeftX)
        && (askPointX <= rectangle.bottomRightX)
        && (askPointY <= rectangle.topLeftY)
        && (askPointY >= rectangle.bottomRightY)) {
        alert("Your point is in rectangle");
    } else {
        alert("Your point isn't in rectangle");
        }
}



