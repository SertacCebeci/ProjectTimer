var ui_report = document.getElementById("ui");
var web_proto = document.getElementById("web");
var research = document.getElementById("res");
var app = document.getElementById("app");
var backend = document.getElementById("back");
var playstore = document.getElementById("play");
var market_release = document.getElementById("market");


var ui_report_time = new Date("November 26 2020 12:00");
var web_proto_time = new Date("November 27 2020 23:00");
var research_time = new Date("November 28 2020 23:00");
var app_time = new Date("November 30 2020 23:00");
var backend_time = new Date("December 1 2020 23:00");
var playstore_time = new Date("December 2 2020 23:00");
var market_release_time = new Date("December 3 2020 23:00");

var current = new Date();


var timer = setInterval( () => {
    current = new Date();
    ui_report.innerHTML = "Finish UI Report: " + msToTime(ui_report_time - current);
    web_proto.innerHTML = "Finish Web Prototype: " + msToTime(web_proto_time - current);
    research.innerHTML = "Finish Vue Android App Research: " + msToTime(research_time - current);
    app.innerHTML = "Finish Vue Android App: " + msToTime(app_time - current);
    backend.innerHTML = "Finish Backend: " + msToTime(backend_time - current);
    playstore.innerHTML = "Finish Playstore Upload (test): " + msToTime(playstore_time - current);
    market_release.innerHTML = "Market Release: " + msToTime(market_release_time - current);

}, 1000)



function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)))


    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return seconds > -1 ? `${hours} : ${minutes} : ${seconds}` : "Passed"
}