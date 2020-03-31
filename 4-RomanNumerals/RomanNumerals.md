# Task

 Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

 Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Test Cases:
```js
- Test.assertEquals(RomanNumerals.toRoman(1000), 'M')
- Test.assertEquals(RomanNumerals.toRoman(999), "CMXCIX")
- Test.assertEquals(RomanNumerals.toRoman(4), 'IV')
- Test.assertEquals(RomanNumerals.toRoman(1), 'I')
- Test.assertEquals(RomanNumerals.toRoman(1991), 'MCMXCI')
- Test.assertEquals(RomanNumerals.toRoman(2006), 'MMVI')
- Test.assertEquals(RomanNumerals.toRoman(2020), 'MMXX')

- Test.assertEquals(RomanNumerals.fromRoman('XXI'), 21)
- Test.assertEquals(RomanNumerals.fromRoman('I'), 1)
- Test.assertEquals(RomanNumerals.fromRoman('III'), 3)
- Test.assertEquals(RomanNumerals.fromRoman('IV'), 4)
- Test.assertEquals(RomanNumerals.fromRoman('MMVII'), 2007)
- Test.assertEquals(RomanNumerals.fromRoman('MDCLXIX'), 1669)
```

link: https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript