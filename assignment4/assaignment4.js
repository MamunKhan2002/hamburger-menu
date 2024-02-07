function calculateMoney(ticketSale) {
    // console.log(ticketSale);
    if (ticketSale <= 0) {
        return "Invalid Number";
    }

    const perTicketPrice = 120;
    const gatemanCosts = 500;
    const perStaffLunchCost = 50;
    const totalStaff = 8;

    const totalTicketCost = ticketSale * perTicketPrice;
    const totalStaffLunchCost = totalStaff * perStaffLunchCost;
    const gatemanCostsOrTotalStaffLunchCost = gatemanCosts + totalStaffLunchCost;
    const totalSave = totalTicketCost - gatemanCostsOrTotalStaffLunchCost;
    return totalSave;
}

// console.log(calculateMoney(1));

function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }
    const letter = name.toLowerCase().slice(-1);
    const nameCharacter = ["a", "y", "i", "e", "o", "u", "w"];
    if (nameCharacter.includes(letter)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }

}

// console.log(checkName("RAFEE"));

function deleteInvalids(arrays) {
    if (!Array.isArray) {
        return "Invalid Array";
    }
    let resultArr = [];
    for (const array of arrays) {
        if (typeof array === "number" && !isNaN(array)) {
            resultArr.push(array);
        }
    }
    return resultArr;
}

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));

function password(obj) {
    const birthYearLen = obj.birthYear.toString().length;
    const objKeysLen = Object.keys(obj).length;
    if (birthYearLen !== 4 || objKeysLen !== 3) {
        const text = "invalid";
        return text;
    } else {
        const capitalizedName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
        return `${capitalizedName}#${obj.name}@${obj.birthYear}`;
    }
}


// console.log(password({ name: "rahat", birthYear: 2002 }));


