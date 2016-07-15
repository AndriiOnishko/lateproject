$(document).ready(function () {
    "use strict";
    PageAbilitiesHide();
    PageContactHide();
    PageAboutHide();
    PageResumeHide();
    PageProjectsHide();
    PageBlogHide();
});
function PageAboutShow() {
    "use strict";
    $("#page-contact").hide();
    $("#page-abilities").hide();
    $("#page-resume").hide();
    $("#page-projects").hide();
    $("#page-blog").hide();
    $("#page-about").show(500);
}
function PageResumeShow() {
    "use strict";
    $("#page-contact").hide();
    $("#page-abilities").hide();
    $("#page-about").hide();
    $("#page-projects").hide();
    $("#page-blog").hide();
    $("#page-resume").show(500);
}
function PageAbilitiesShow() {
    "use strict";
    $("#page-resume").hide();
    $("#page-contact").hide();
    $("#page-about").hide();
    $("#page-projects").hide();
    $("#page-blog").hide();
    $("#page-abilities").show(500);
}
function PageProjectsShow() {
    "use strict";
    $("#page-contact").hide();
    $("#page-abilities").hide();
    $("#page-resume").hide();
    $("#page-about").hide();
    $("#page-blog").hide();
    $("#page-projects").show(500);
}
function PageBlogShow() {
    "use strict";
    $("#page-contact").hide();
    $("#page-abilities").hide();
    $("#page-resume").hide();
    $("#page-about").hide();
    $("#page-projects").hide();
    $("#page-blog").show(500);
}
function PageContactShow() {
    "use strict";
    $("#page-resume").hide();
    $("#page-abilities").hide();
    $("#page-about").hide();
    $("#page-projects").hide();
    $("#page-blog").hide();
    $("#page-contact").show(500);
}
function PageAbilitiesHide() {
    "use strict";
    $("#page-abilities").hide();
}
function PageContactHide() {
    "use strict";
    $("#page-contact").hide();
}
function PageAboutHide() {
    "use strict";
    $("#page-about").hide();
}
function PageResumeHide() {
    "use strict";
    $("#page-resume").hide();
}
function PageProjectsHide() {
    "use strict";
    $("#page-projects").hide();
}
function PageBlogHide() {
    "use strict";
    $("#page-blog").hide();
}

$('.skillbar').skillBars({

  // number start
    from: 0,
  // number end
    to: false,
  // animation speed
    speed: 4000,
  // how often the element should be up<a href="http://www.jqueryscript.net/time-clock/">date</a>d
    interval: 320,
  // the number of decimal places to show
    decimals: 0,
  // callback method for every time the element is updated,
    onUpdate: null,
  // callback method for when the element finishes updating
    onComplete: null,
  // CSS classes
    classes: {
        skillBarBar : '.skillbar-bar',
        skillBarPercent : '.skill-bar-percent'
    }
});

//Send Form//
$(function() {
    $('#button').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/or4ini@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
            dataType: "json"
        }).done(function() {
            $('#form-contact').html('<h1>Thank you!</h1>');
            $('#form-contact h1').css('margin-bottom','350px');
        });
    });
});

