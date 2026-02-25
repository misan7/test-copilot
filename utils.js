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
