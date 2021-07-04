const overHundred = function(nummer){
    if (nummer > 100) { 
        return true;
    } return false;
};

const result = overHundred(100);
console.log(result);

const result2 = overHundred(5);
console.log(result2);

const result3 = overHundred(101);
console.log(result3);

const result4 = overHundred(5000);
console.log(result4);

//Bovenstaande functie produceert iets, namelijk of het klopt dat een getal groter dan 100 is.

/* const add = function(number1, number2) {
    const sum = number1 + number2;
    if (sum > 10) {
        return sum;
    } return "is too low"
}

const result = add (4, 5);
console.log(result);*/

const bouncerBot = function(maxnumber, clubnumber, minage) {
    if (minage < 21) {
        console.log("This is a club for adults");
    } else if (clubnumber > maxnumber) {
        console.log("It's too busy now, come back later");
    } else {
        console.log("Come in");
    }
}

bouncerBot(100, 75, 15);
bouncerBot(100, 100, 21);
bouncerBot(50, 75, 22);

//Bovenstaande functie doet iets, namelijk laat een boodschap zien afhankelijk van leeftijd en aantal mensen in de club

const bouncerBot2 = function(maxnumber, clubnumber, minage) {
    if (minage < 21) {
        return "This is a club for adults";
    } else if (clubnumber > maxnumber) {
        return "It's too busy now, come back later";
    } else {
        return "Come in";
    }
}

const result5 = bouncerBot2 (100, 75, 15);
console.log(result5);

const result6 = bouncerBot2 (100, 100, 21);
console.log(result6);

const result7 = bouncerBot2 (50, 75, 22);
console.log(result7);

const averageArray = function(numbers) {
    const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
    const unrounded = sum / numbers.length;
    const average = Math.round(unrounded);
    return average;
}

const result8 = averageArray ([1, 2, 3, 4, 5]);
console.log(result8);

const result9 = averageArray ([2, 5, 8, 3, 6]);
console.log(result9);

const result10 = averageArray ([20, 35, 118, 73, 26]);
console.log(result10);

//Bovenstaande functie produceert iets, namelijk het afgeronde gemiddelde
