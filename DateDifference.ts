function calculateDateDifference(date1: string, date2: string): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const differenceInTime = d2.getTime() - d1.getTime();
    return differenceInTime / (1000 * 3600 * 24); // Convert milliseconds to days
}

// Inputs
const date1 = '2024-03-19';
const date2 = '2024-03-21';

// Calculate difference
const difference = calculateDateDifference(date1, date2);

// Output the result
console.log(`Difference in days: ${difference}`);
