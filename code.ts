// get form and display area
const forms=document.getElementById("Resume-form") as HTMLFormElement;
const resume=document.getElementById('resume-display') as HTMLDivElement;
forms.addEventListener("submit",(event:Event)=>{
    // prevant page reload
    event.preventDefault();
    // collect input values
    const name=(document.getElementById("name") as HTMLInputElement).value;
    const email=(document.getElementById("email") as HTMLInputElement).value
    const phon=(document.getElementById("phon") as HTMLInputElement).value
    const experience=(document.getElementById("experience") as HTMLInputElement).value
    const education=(document.getElementById("Education") as HTMLInputElement).value
    const skill=(document.getElementById("skills") as HTMLInputElement).value
// genrate resume covtent dynamicalt
const ResumeHtml=
`<h2><b>Editable resume</b></h2>
<h3><b>personal information</b></h3>
<p><b>name:</b><span contentediable="true">${name}</span></p>
<p><b>email:</b><span contentediable="true">${email}</span></p>
<p><b>phon:</b><span contentediable="true">${phon}</span></P>
<h3>experience</3>
<p contentediable="true">${experience}</p>
<h3>Education</p>
<p contentediable="true">${education}</p>
<h3>skills</h3>
<pcontentediable="true">${skill}<h3>`


//display the genrate resume
if(resume) {
resume.innerHTML=ResumeHtml;

}else{
  console.error("the resume display element is missing")
}

;
})








