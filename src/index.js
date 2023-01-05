module.exports = function toReadable(number) {
    const numbersArr = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "zero",
    ];
    const elevenToNineteenArr = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tensArr = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const numToStr = number.toString();

    const numbers = (num) => {
        switch (num[0]) {
            case "1":
                return numbersArr[0];
            case "2":
                return numbersArr[1];
            case "3":
                return numbersArr[2];
            case "4":
                return numbersArr[3];
            case "5":
                return numbersArr[4];
            case "6":
                return numbersArr[5];
            case "7":
                return numbersArr[6];
            case "8":
                return numbersArr[7];
            case "9":
                return numbersArr[8];
            case "0":
                return numbersArr[9];
        }
    };

    const elevenToNineteen = (num) => {
        switch (num[0] + num[1]) {
            case "11":
                return elevenToNineteenArr[0];
            case "12":
                return elevenToNineteenArr[1];
            case "13":
                return elevenToNineteenArr[2];
            case "14":
                return elevenToNineteenArr[3];
            case "15":
                return elevenToNineteenArr[4];
            case "16":
                return elevenToNineteenArr[5];
            case "17":
                return elevenToNineteenArr[6];
            case "18":
                return elevenToNineteenArr[7];
            case "19":
                return elevenToNineteenArr[8];
        }
    };

    const tens = (num) => {
        switch (num[0]) {
            case "1":
                return tensArr[0];
            case "2":
                return tensArr[1];
            case "3":
                return tensArr[2];
            case "4":
                return tensArr[3];
            case "5":
                return tensArr[4];
            case "6":
                return tensArr[5];
            case "7":
                return tensArr[6];
            case "8":
                return tensArr[7];
            case "9":
                return tensArr[8];
        }
    };

    const twoLastNumbers = (first, last) => {
        const sliceLast = numToStr.slice(-2);
        // if last num is 0
        if (last === "0") {
            return tens(sliceLast);
            // if the first num is 1
        } else if (first === "1") {
            // if the num in range between 11 and 19
            return elevenToNineteen(sliceLast);
        }
        // other num
        return tens(sliceLast) + " " + numbers(sliceLast[1]);
    };

    // solution for one number
    if (numToStr.length === 1) {
        return numbers(numToStr);
    }

    // solution for two numbers
    if (numToStr.length === 2) {
        return twoLastNumbers(numToStr[0], numToStr[1]);
    }

    // solution for three numbers
    if (numToStr[1] === "0" && numToStr[2] === "0") {
        return numbers(numToStr) + " hundred";
    } else if (numToStr[1] === "0" && numToStr[2] != "0") {
        return numbers(numToStr) + " hundred " + numbers(numToStr[2]);
    }
    return (
        numbers(numToStr[0]) +
        " hundred " +
        twoLastNumbers(numToStr[1], numToStr[2])
    );
};
