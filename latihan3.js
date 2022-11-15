var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
} else {
   console.log('The value of the age variable is not numerical')
}

/* switch case*/

var day = `Sunday`;
switch(day) {
    case 'Monday':
    console.log('kerja')
    break;
    case 'Tuesday':
    console.log('kerja')
    break;
    case 'Wednesday':
    console.log('kerja')
    break;
    case 'Thursday':
    console.log('kerja')
    break;
    case 'Friday':
    console.log('kerja')
    break;
    case 'Saturday':
    console.log('malam minggu')
    break;
    case 'Sunday':
    console.log('istirahat')
    break;
    default:
    console.log('There is no such day');
}