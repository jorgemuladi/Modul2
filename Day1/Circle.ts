function calculateCircleProperties(radius: number): { diameter: number, circumference: number, area: number } {
    const diameter = radius * 2;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    return { diameter, circumference, area };
}

// Inputs
const radius = 5;

// Calculate properties
const circleProperties = calculateCircleProperties(radius);

// Output the result
console.log(`Diameter: ${circleProperties.diameter}, Circumference: ${circleProperties.circumference.toFixed(4)}, Area: ${circleProperties.area.toFixed(3)}`);
