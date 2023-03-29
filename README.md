# Zodiac Sign and Horoscope Program
This program is designed to help you discover your zodiac sign based on your birthday, and to provide a random horoscope message based on your zodiac sign.

### How to Use

The program will present you with two options:

**Know your Zodiac Sign:** You will be prompted to enter your birthday in the format DD/MM, and the program will respond with your zodiac sign.

**Horoscope:** You will be prompted to enter your zodiac sign, and the program will respond with a randomly generated horoscope message.

> You can exit the program by selecting option 3.

### How It Works

The program is written in JavaScript and includes two functions:

```getZodiacSign(day, month)```

This function takes in a day and month value representing your birthday, and returns your corresponding zodiac sign.

The function uses a dictionary of zodiac signs with their corresponding date ranges to determine your zodiac sign. If the provided day and month values are invalid, the function returns an "Invalid Birthday Day" message.

```getHoroscope(zodiacSign)```

This function takes in a zodiacSign value and returns a randomly generated horoscope message.

The function uses a dictionary of random messages for each zodiac sign to return a random horoscope message for the provided zodiacSign. If the provided zodiacSign value is invalid, the function returns an "Invalid Zodiac Sign" message.

The main function ```main()``` is responsible for presenting the user with the program options and handling the user's selection. It uses the [prompt-sync](https://www.npmjs.com/package/prompt-sync) Node module to allow the user to interact with the program. The program will continue running until the user selects option 3 to exit.