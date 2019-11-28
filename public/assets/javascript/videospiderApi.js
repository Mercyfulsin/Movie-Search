var ticketUrl = "";
var videoUrl = "";
var ticketID = "";
var query;
// import API from "../../util/API";

$(document).ready(function () {
    query = localStorage.getItem("title");
});

function updateUrl() {
    const obj = { movie: omdbId };
    console.log("The obj", obj);
    $.ajax({ url: "/api/spider/", type: 'POST', data: obj })
        .then(reply => {
            console.log("DB Reply", reply);
            videoUrl = `https://videospider.stream/getvideo?key=XQfajbgr6UlJuc8S&video_id=${omdbId}&ticket=${reply}`;
            getVideo();
        }).catch(err => console.log("err", err));
};


function getVideo() {
    console.log("Hello", videoUrl);
    $("#freelink").attr("src", videoUrl);
}