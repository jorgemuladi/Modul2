function getInitials(name: string): string {
    const names = name.split(' ');
    return names.map(n => n.charAt(0).toUpperCase()).join('');
}

// Input
const fullName = 'John Doe';

// Get initials
const initials = getInitials(fullName);

// Output the result
console.log(`Initials: ${initials}`);
