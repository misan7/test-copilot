export function calculateDaysBetweenDates(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);

    return `${Math.round(Math.abs((firstDate - secondDate) / oneDay))} days`;
}