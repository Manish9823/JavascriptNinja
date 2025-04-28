
// Call Stack

function skulk(ninja) {
    report(ninja + " skulking.");
}

function report(message) {
    console.log(message);
}

skulk("kuma");
skulk("Yoshi");

// Explaining
// 1. Global object push
// 2. skulk function push
// 3. report function push
// 4. print message (Kuma skulking)
// 5. report function pop
// 6. skulk function pop
// 7. skulk function push
// 8. report function push
// 9. print message (Yoshi skulking)
// 10. report function pop
// 11. skulk function pop
// 12. Global object pop