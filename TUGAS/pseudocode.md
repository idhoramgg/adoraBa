Project 1
1. START
3. DECLARE 'number' with value number
4. DECLARE 'converter' with 3600
5. DECLARE 'result'
7. STORE 'number' with a number
8. CALCULATE 'number' multiplication with 'converter'
9. STORE multiplication to 'result'
10. SHOW 'result' 
11. END

Project 2
1. START
2. DECLARE 'number1' with value number
3. DECLARE 'number2' with value number
4. DECLARE 'result' with nvalue number
5. STORE 'number1' with any number
6. STORE 'number2' with any number
7. if 'number1' > 'number2'
    DISPLAY 'number1' as 'result'
   else if 'number2' > 'number1'
    DISPLAY 'number2' as 'result'
   else
    DISPLAY 'wrong input'
8. END

Project 3
1. START
2. DECLARE 'traveler', 'initialPrice', 'price'
3. STORE 'initialPrice' with 600000
4. STORE 'price' as 'initialPrice' * 'traveler'
5. IF 'traveler' != 0
    DISPLAY 'price'
   ELSE
    DISPLAY 'wrong input'
6. END

Project 4
1. START
2. DECLARE 'number', 'input'
3. STORE 'number' with 0
4. WHILE 'number' < 'input'
    DISPLAY 'number' + 1
   DISPLAY 'input'
5. END

Project 5
1. START
2. DECLARE 'input', 'minNumber', 'num'
3. STORE 'minNumber' with 1
4. WHILE 'minNumber' < 'input'
     IF 'minNumber' % 3 == 0
     DISPLAY 'fizz'
    ELSE IF 'minNumber' % 5 == 0
     DISPLAY 'buzz'
    ELSE
     DISPLAY 'wrong input'
    minNumber++
5. END

let input, minNumber;
minNumber = 1;
input = prompt(Number())

for(minNumber; input > minNumber; minNumber++){
    if(minNumber / 3 == 0){
        console.log('Fizz')
    } else if( minNumber / 5 == 0){
        console.log('Buzz')
    } else {
        console.log(minNumber)
    }
}
