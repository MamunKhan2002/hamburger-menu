// const woodPerChair = 3 cft;
// const woodPerTable = 12 cft;
// const woodPerBed = 50 cft;

function getTotalQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const woodPerChair = 3;
    const woodPerTable = 12;
    const woodPerBed = 50;

    const totalChairQuantity = woodPerChair * chairQuantity;
    const totalTableQuantity = woodPerTable * tableQuantity;
    const totalBedQuantity = woodPerBed * bedQuantity;
    const totalWoodQuantity = totalChairQuantity + totalTableQuantity + totalBedQuantity;

    return totalWoodQuantity;
}

const totalWood = getTotalQuantity(3, 2, 1);
console.log(totalWood);