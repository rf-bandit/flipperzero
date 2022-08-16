This script has been tested with the [Flipper Zero](https://github.com/flipperdevices) by [Flipper Devices](https://flipperzero.one/)
It is a rewrite of [Defplex](https://githib.com/defplex)'s script for the P4wnP1 ALOA in Ducky Script.
## NOTE
Do not indiscriminately use this script unless you are sure - some devices may erase themselves after x amount of failed attempts.

## Install
copy **top65_4digit_pin_bf.txt** to **/badusb/** on your Flipper Zero SD card.

## Usage

Field use would be to potentially unlock an Android device that utilizes a 4 digit pin. 

This method is different to other HID attacks forcing the 0000 to 9999 keyspace in that it uses a wordlist:

- 65 of the top 4 digit pins sorted from most used to least used

- 10 pins derived from "0 1 2 3" that are the most frequently appearing digits in the top 1000 most commonly used pins

- 5 of the least used pins to factor in the targets OpSec

- 20 randomly generated pins as a last ditch effort

- 3 commented out pins at the tail of the script to enter targets DOB if known

## Parameters

The script was designed within the parameters of time, speed and power.

**Time**: a full run of the script is around the 15 minute mark whereas forcing the entire keyspace can take as long as 16 hours. 

**Speed**: this wordlist solution can stastistically yield a result much faster.

**Power**: it is the assumption you acquire the Android device as is with battery health + charge are unknown variables.



