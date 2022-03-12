$(document).ready(function() {

$('.aniview').AniView();

var options = {
    animateClass: 'animate__animated', // for v3 or 'animate__animated' for v4
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.aniview').AniView(options);


});


