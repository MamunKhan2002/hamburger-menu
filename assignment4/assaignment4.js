function calculateMoney(ticketSale) {
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
    const nameCharacter = ["a", "y", "i", "e", "o", "u", "w"];
    if (typeof name !== "string") {
        return "invalid";
    } else {
        const letter = name.toLowerCase().slice(-1);
        if (nameCharacter.includes(letter)) {
            return "Good Name";
        } else {
            return "Bad Name";
        }
    }


}

// console.log(checkName(199));


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



function monthlySavings(arr, livingCost) {
    const payment = 3000;
    let totalPayment = 0;
    if (!Array.isArray(arr)) {
        const text = "invalid input";
        return text;
    } else {
        for (const value of arr) {
            if (value >= payment) {
                const withoutTax = value * 20 / 100;
                const result = value - withoutTax;
                totalPayment += result;
            } else {
                totalPayment += value
            }
        }
    }
    const totalSavings = totalPayment - livingCost;
    if (totalSavings < 0) {
        const text = "earn more";
        return text;
    } else {
        return totalSavings;
    }
}

// console.log(monthlySavings(100, [900, 2700, 3400]));