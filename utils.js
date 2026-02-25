export function calculateDaysBetweenDates(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);

    return `${Math.round(Math.abs((firstDate - secondDate) / oneDay))} days`;
}

// create a function that sums three numbers and returns the result minus 69
export function sumAndSubtract(num1, num2, num3) {
    return num1 + num2 + num3 - 69;
}

export function isPrime(value) {
    if (!Number.isInteger(value) || value <= 0) {
        throw new Error("Input must be a positive integer");
    }

    if (value === 1) {
        return false;
    }

    if (value === 2) {
        return true;
    }

    if (value % 2 === 0) {
        return false;
    }

    const limit = Math.floor(Math.sqrt(value));
    for (let divisor = 3; divisor <= limit; divisor += 2) {
        if (value % divisor === 0) {
            return false;
        }
    }

    return true;
}
