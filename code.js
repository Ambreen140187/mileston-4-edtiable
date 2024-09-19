// get form and display area
var forms = document.getElementById("Resume-form");
var resume = document.getElementById('resume-display');
forms.addEventListener("submit", function (event) {
    // prevant page reload
    event.preventDefault();
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phon = document.getElementById("phon").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("Education").value;
    var skill = document.getElementById("skills").value;
    // genrate resume covtent dynamicalt
    var ResumeHtml = "<h2><b>Editable resume</b></h2>\n<h3><b>personal information</b></h3>\n<p><b>name:</b><span contentediable=\"true\">".concat(name, "</span></p>\n<p><b>email:</b><span contentediable=\"true\">").concat(email, "</span></p>\n<p><b>phon:</b><span contentediable=\"true\">").concat(phon, "</span></P>\n<h3>experience</3>\n<p contentediable=\"true\">").concat(experience, "</p>\n<h3>Education</p>\n<p contentediable=\"true\">").concat(education, "</p>\n<h3>skills</h3>\n<pcontentediable=\"true\">").concat(skill, "<h3>");
    //display the genrate resume
    if (resume) {
        resume.innerHTML = ResumeHtml;
    }
    else {
        console.error("the resume display element is missing");
    }
    ;
});
