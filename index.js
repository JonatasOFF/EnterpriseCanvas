const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

window.addEventListener("resize", resizeCanvas, false);

function percentage(totalValue, porcentage) {
    return (porcentage * totalValue) / 100;
}
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawStuff();
}

const drawCloud = (x, y) => {
    c.beginPath();
    c.arc(x, y, 30, Math.PI * 0.5, Math.PI * 1.5);
    c.arc(x + 75, y - 30, 70, Math.PI * 1, Math.PI * 1.85);
    c.arc(x + 152, y - 30, 50, Math.PI * 1.37, Math.PI * 1.91);
    c.arc(x + 200, y, 30, Math.PI * 1.5, Math.PI * 0.5);
    c.moveTo(x + 200, y + 30);
    c.lineTo(x, y + 30);
    c.strokeStyle = "#ace0de78";
    c.stroke();
    c.fillStyle = "#ace0de78";
    c.fill();
};

const windowBuilding = (x, y, height, width) => {
    c.beginPath();
    c.moveTo(x, y + 20);
    c.lineTo(x + width, y);
    c.lineTo(x + width, y + 10);
    c.lineTo(x, y + 30);
    c.fill();
    c.stroke();
};

const bodyBuilding = (x, y, height, width) => {
    const angule = 30;

    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + width, y - angule);
    c.lineTo(x + width, y + height + angule);
    c.lineTo(x, y + height + angule);
    c.lineTo(x, y);
    c.strokeStyle = "#024b6c";
    c.fillStyle = "#014a6b";
    c.fill();
    c.stroke();
    c.beginPath();

    c.moveTo(x + width, y - angule);
    c.lineTo(x + width * 2, y);
    c.lineTo(x + width * 2, y + height + angule);
    c.lineTo(x + width, y + height + angule);
    c.fillStyle = "#0695d9";
    c.strokeStyle = "#0695d9";
    c.fill();
    c.stroke();

    c.strokeStyle = "white";
    c.fillStyle = "white";
    c.save();
    for (let lines = 1; lines < height / 55; lines++) {
        const distance = lines * 55;

        windowBuilding(x, y + distance, height, width);

        c.fillRect(x + width, y + distance, width - width / 2, 10);
    }
};

function drawStuff() {
    const heightBuilding = 780;
    const widthBuilding = 250;

    bodyBuilding(
        window.innerWidth / 2 - widthBuilding,
        150,
        window.innerHeight,
        widthBuilding
    );
    drawCloud( 60, 170);
    drawCloud(window.innerWidth - 300, 120);
    
}

resizeCanvas();
