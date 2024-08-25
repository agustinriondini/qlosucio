$(document).ready(function() {

    var actualver = $('#updateVer').text();
    var checkChannel = $('#channel').text();
    var lastUpdate = "v1.2.3 build88(25082024)";
    var releaseChannel = "Stable";

    if (actualver !== lastUpdate) {
        $('#updateVer').text(lastUpdate);
    }
    if (checkChannel !== releaseChannel){
        $('#channel').text(releaseChannel);
    }
});

