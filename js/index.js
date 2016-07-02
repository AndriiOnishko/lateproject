$(document).ready(function() {
    "use strict";
    PageAbilitiesHide();
    PageContactHide();
    PageAboutHide();
    PageResumeHide();
    PageProjectsHide();
});
function PageAboutShow() {
    "use strict";
    $("#page-contact").hide();
    $("#page-abilities").hide();
    $("#page-resume").hide();
    $("#page-projects").hide();
    $("#page-about").show(5000);
}
function PageResumeShow() {
    "use strict";
    $("#page-contact").hide();
    $("#page-abilities").hide();
    $("#page-about").hide();
    $("#page-projects").hide();
    $("#page-resume").show();
}
function PageAbilitiesShow() {
    "use strict";
    $("#page-abilities").show();
    $("#page-resume").hide();
    $("#page-contact").hide();
    $("#page-about").hide();
    $("#page-projects").hide();
}
function PageProjectsShow() {
    "use strict";
    $("#page-contact").hide();
    $("#page-abilities").hide();
    $("#page-resume").hide();
    $("#page-about").hide();
    $("#page-projects").show();
}
function PageContactShow() {
    "use strict";
    $("#page-contact").show();
    $("#page-resume").hide();
    $("#page-abilities").hide();
    $("#page-about").hide();
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

