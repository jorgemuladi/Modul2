function calculateThirdAngle(angleA: number, angleB: number): number {
    return 180 - (angleA + angleB);
}

// Inputs
const a = 80;
const b = 65;

// Calculate third angle
const angleC = calculateThirdAngle(a, b);

// Output the result
console.log(`The third angle is: ${angleC}`);
