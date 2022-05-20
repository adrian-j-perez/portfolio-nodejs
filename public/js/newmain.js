
// the fix https://stackoverflow.com/questions/18602331/why-is-this-jquery-click-function-not-working

// https://www.w3schools.com/jquery/jquery_get_started.asp

$(document).ready(function () {
    $('.navTrigger').click(
        function () {
            $(this).toggleClass('active');
            console.log("Clicked menu");
            $("#mainListDiv").toggleClass("show_list");
            $("#mainListDiv").fadeIn();
        }
    );
});

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

function copyEmail() {

    navigator.clipboard.writeText('adrianjperez@lewisu.edu');
    alert('Emailed copied');

    // put some code that will clpi borad my eila thign for hte icon i should make it more robust later 
}

