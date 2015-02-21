function myFunction2() {
    var greeting;
    var time = new Date().getHours();

    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }

    document.getElementById("demo").innerHTML = greeting;
}