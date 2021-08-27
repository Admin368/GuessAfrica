// Africa
var countryIndex = 0;
var numberOfCountries = 56;
var won = 0;
var lost = 0;
var wonColor = "green";
var lostColor = "red";
var mistakeColor = "yellow";
var idleColor = "#E2B727";

var textColor = "#E2B727";
var backgroundColor = "#323437";

var clockedStarted = false;
var maxTime = 60;
var time = maxTime;
var clockTimer;

var state = "preGame"; //preGame //Game //postGame

let countries = ["Algeria", "Angola", "Benin", "Botswana", "Burkina-Faso", "Burundi", "Cameroon", "Central-African-Republic", "Chad", "Comoros", "Congo", "Democratic-Republic-of-Congo", "Ivory-Coast", "Djibouti", "Egypt", "Equatorial-Guinea", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mayotte", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Reunion", "Rwanda", "Saint-Helena", "Sao-Tome-and-Principe", "Senegal", "Seychelles", "Sierra-Leone", "Somalia", "South-Africa", "South-Sudan", "Sudan", "Swaziland", "Tanzania", "Togo", "Tunisia", "Uganda", "Western-Sahara", "Zambia", "Zimbabwe"];
// let countries = ["Algeria", "Angola", "Benin", "Botswana", "Burkina-Faso", "Burundi", "Cameroon", "Cape-Verde", "Central-African-Republic", "Chad", "Comoros", "Congo", "Democratic-Republic-of-Congo", "Ivory-Coast", "Djibouti", "Egypt", "Equatorial-Guinea", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Mayotte", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Reunion", "Rwanda", "Saint-Helena", "Sao-Tome-and-Principe", "Senegal", "Seychelles", "Sierra-Leone", "Somalia", "South-Africa", "South-Sudan", "Sudan", "Swaziland", "Tanzania", "Togo", "Tunisia", "Uganda", "Western-Sahara", "Zambia", "Zimbabwe"];
$(document).ready(function() {
    updateInfo();
    setBody();
    write(countries[countryIndex]);
    for (var x = 0; x < numberOfCountries; x++) {
        var id = "#" + countries[x];
        console.log(id);
        $(id).css("fill", idleColor);
    }

    $('path').click(function() {
        if (state != "postGame") {
            if (clockedStarted == false) {
                clockedStarted = true;
                startClock();
            }
            if (this.id == countries[countryIndex]) {
                $("#" + this.id).css("fill", wonColor);
                console.log(this.id);
                // countryIndex++;
                write(countries[countryIndex]);
                won++;
            } else {
                lost++;
                if (('#' + this.id).css("fill") != lostColor) {
                    write("Wrong");
                }
                $("#" + this.id).css("fill", mistakeColor);

                $("#" + countries[countryIndex]).css("fill", "red");

            }
            countryIndex++;
            updateInfo();
        }

    });

    $("#reset").click(function() { reset(); });
});

function startClock() {
    clockTimer = setInterval(function() {
        time--;
        if (time <= 0) {
            clearInterval(clockTimer);

        } else {
            $('#clock').text(time);
            console.log(time);
        }
    }, 1000);
}

function reset() {
    // window.location.reload();
    $('path').css("fill", idleColor);
    won = 0;
    lost = 0;
    clearInterval(clockTimer);
    time = 30;
    clockedStarted = false;
    countryIndex = 0;
    updateInfo();
}

function setBody() {
    $('.info').css("color", textColor);
    $('body').css("background-color", backgroundColor);
}

function updateInfo() {
    updateWon();
    updateLost();
    $('#clock').text(time);
    write(countries[countryIndex]);
}

function write(text) {
    if (countryIndex <= numberOfCountries) {
        $('#text').text("Find " + text);
    }
}

function updateWon() {
    $('#won').text("Won:" + won);
}

function updateLost() {
    $('#lost').text("Mistakes:" + lost);
}