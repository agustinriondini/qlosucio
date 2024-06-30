$(document).ready(function() {

    var actualver = $('#updateVer').text();
    var checkChannel = $('#channel').text();
    var lastUpdate = "v1.2.2 build86(30062024)";
    var releaseChannel = "Stable";

    if (actualver !== lastUpdate) {
        $('#updateVer').text(lastUpdate);
    }
    if (checkChannel !== releaseChannel){
        $('#channel').text(releaseChannel);
    }
});

