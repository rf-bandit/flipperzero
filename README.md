This script is written to work with the P4wnP1 ALOA by Marcus Mengs (MaMe82)
https://github.com/RoganDawes/P4wnP1_aloa

Field use would be to potentially unlock an Android device that utilizes a 4 digit pin. 

This method is different to other HID attacks forcing the 0000 to 9999 keyspace in that it uses a wordlist:

-65 of the top 4 digit pins sorted from most used to least used

-10 pins derived from "0 1 2 3" that are the most frequently appearing digits in the top 1000 most commonly used pins

-5 of the least used pins to factor in the targets OpSec

-20 randomly generated pins as a last ditch effort

-3 commented out pins at the tail of the script to enter targets DOB if known




The script was designed within the parameters of time, speed and power.

Time: a full run of the script is around the 15 minute mark whereas forcing the entire keyspace can take as long as 16 hours. 

Speed: this wordlist solution can stastistically yield a result much faster.

Power: it is the assumption you acquire the Android device as is with battery health + charge are unknown variables.




This version has only been tested on Android 4.4 for now.
