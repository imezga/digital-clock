setInterval(clock, 500);
function clock() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (sec < 10) {
        sec = '0' + sec;
    }

    document.getElementById('clock').innerHTML = hour + ':' + min + ':' + sec;
}

clock();
