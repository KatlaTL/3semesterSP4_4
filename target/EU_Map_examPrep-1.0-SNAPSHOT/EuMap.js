window.onload = function () {
    var svg = document.getElementById("svg2");
    svg.addEventListener("click", function (evt) {
        var pathArr = document.getElementsByTagName("path");
        for (var i = 0; i < pathArr.length; i++) {
            pathArr[i].style.fill = "#c0c0c0";
        }
        evt.target.style.fill = "red";
        var landCode = evt.target.id;
        console.log(landCode);
        var url = "http://localhost:8084/EU_Map_examPrep/MapControl?codes=" + landCode;
        var conf = {method: 'get'};
        var promise = fetch(url, conf);
        promise.then(function (response) {
            return response.text();
        }).then(function (text) {
            var textArr = JSON.parse(text);
            var textMsg = "Country: " + textArr[0].name + "\n Population: " + textArr[0].population + "\n Area: " + textArr[0].area + "\n Borders: " + textArr[0].borders; 
            console.log(textArr[0].name);
            document.getElementById("landText").innerText = textMsg;
        });
    });
};