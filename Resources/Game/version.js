$(document).ready(function() {

    var actualver = $('#updateVer').text();
    var checkChannel = $('#channel').text();
    var lastUpdate = "v1.2.1 build#6(27062024)";
    var releaseChannel = "Testing";

    if (actualver !== lastUpdate) {
        $('#updateVer').text(lastUpdate);
    }
    if (checkChannel !== releaseChannel){
        $('#channel').text(releaseChannel);
    }
});

