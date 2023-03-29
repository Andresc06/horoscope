// Astromonical Message Generator.
// The program will have 2 options:
//// 1- Know your Zodiac Sign: User write its birthday and the program will answer with the zodiac sign.
//// 2- Horoscope: User write its zodiac sign and the program will answer with the horoscope.

// 1- Know your Zodiac Sign

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

    if(day > 31 || day < 1 || month > 12 || month < 1) return 'Invalid Birthday Day';
    for (const [key, value] of Object.entries(ZODIAC_SIGNS)) {
        if (value[0][0] == month && day >= value[0][1]) {
            return key;
        } else if (value[1][0] == month && day <= value[1][1]) {
            return key;
        }
    }
}


// Horoscope
const HOROSCOPE = ['You will have some troubles in the day, but do not worry. Everything will worth it at the end of the day!', 'Take care of the people around you, someone will betreat you', 'You will have a great new today!'];

// Function to get the horoscope
const getHoroscope = (zodiacSign) => {
    if (zodiacSign in ZODIAC_SIGNS) {
        return HOROSCOPE[Math.floor(Math.random() * HOROSCOPE.length)];
    } else {
        return 'Invalid Zodiac Sign';
    }
}