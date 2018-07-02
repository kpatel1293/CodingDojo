// Clock Hand Angles

// Regardless of how hard a Dojo student works (and they should work very hard),
// they always need time every now and then to unwind - not unlike hands on a clock.
// Traditional clocks are increasingly uncommon, but most people can still read an
// analog clock's rotating hands of hours, minutes and seconds.

// Create function clockHandAngles(seconds) that, given the number of seconds
// since 12:00:00, will print the angles (in degrees) of the hour, minute and
// second hands. As a quick review, there are 360 degrees in a full rotation.

// Examples: Given clockHandAngles(3600) (equivalent to 1:00:00),
// print "Hour Hand: 30 degs. Minute Hand: 0 degs. Second Hand: 0 degs.".
// For an input parameter seconds of 119730 (equivalent to 9:15:30 plus 24 hrs!),
// you should log "Hour Hand: 277.75 degs. Minute Hand: 93 degs.
// Second Hand: 180 degs.". Note: in the second example, the angle for the
// minute hand is not simply 90 degrees; it has advanced a bit further,
// because of the additional 30 seconds in that minute so far.

// Second: Also calculate and print degrees for an additional "Week Hand"
// that rotates once each week.

function clockHandAngles(num)
{
    var day = 3600 * 12;

    var minute = num / 60;
    var hour = minute / 60;
    console.log(day);
}

console.log(clockHandAngles(3600));
console.log(clockHandAngles(119730));
