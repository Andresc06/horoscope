// Astromonical Message Generator.
// The program will have 2 options:
//// 1- Know your Zodiac Sign: User write its birthday and the program will answer with the zodiac sign.
//// 2- Horoscope: User write its zodiac sign and the program will answer with the horoscope.

//// 1- Know your Zodiac Sign

// Dictionary of zodiac signs
const ZODIAC_SIGNS = { 
    "Capricorn": [[12, 01], [22, 19]], 
    "Aquarius": [[01, 02], [20, 18]],
    "Pisces": [[02, 03], [19, 20]],
    "Aries": [[03, 04], [21, 19]],
    "Taurus": [[04, 05], [20, 20]],
    "Gemini": [[05, 06], [21, 20]],
    "Cancer": [[06, 07], [21, 22]],
    "Leo": [[07, 08], [23, 22]],
    "Virgo": [[08, 09], [23, 22]],
    "Libra": [[09, 10], [23, 22]],
    "Scorpio": [[10, 11], [23, 21]],
    "Sagittarius": [[11, 12], [22, 21]],
    }


// Function to know the zodiac sign
const getZodiacSign = (day, month) => {
  if (day > 31 || day < 1 || month > 12 || month < 1)
    return "Invalid Birthday Day";
  for (const [key, value] of Object.entries(ZODIAC_SIGNS)) {
    if (value[0][0] == month && day >= value[0][1]) {
      return key;
    } else if (value[1][0] == month && day <= value[1][1]) {
      return key;
    }
  }
};

//// 2- Horoscope

// Create dictionary of random messages for Horoscope
const HOROSCOPE = [
  "You will have some troubles in the day, but do not worry. Everything will worth it at the end of the day!",
  "Take care of the people around you, someone will betreat you",
  "You will have a great new today!",
];

// Function to get the horoscope
const getHoroscope = (zodiacSign) => {
  if (zodiacSign in ZODIAC_SIGNS) {
    return HOROSCOPE[Math.floor(Math.random() * HOROSCOPE.length)];
  } else {
    return "Invalid Zodiac Sign";
  }
};

// Main function
const main = () => {
  // Use prompt-sync Node Module to allow user to interact with the program
  const prompt = require("prompt-sync")();

  // Show the options to the user
  let options =
    "\nChoose an option: \n 1- Know your Zodiac Sign \n 2- Horoscope\n 3- Exit\n";
  let exit = 0;
  while (exit === 0) {
    console.log(options);
    let option = prompt(" >> ");
    switch (option) {
      case "1":
        console.log("Write your birthday in the format DD/MM\n");
        let birthday = prompt(" >> ");
        let separated = birthday.split("/");
        let day = separated[0];
        let month = separated[1];
        console.log(`Your zodiac sign is ${getZodiacSign(day, month)}`);
        break;

      case "2":
        console.log("Write your zodiac sign\n");
        let zodiacSign = prompt(" >> ");
        console.log(getHoroscope(zodiacSign));
        break;

      case "3":
        exit = 1;
        return "Bye!\n";

      default:
        console.log("\n Invalid Option");
        break;
    }
  }
};

// Run the program
console.log(main());
