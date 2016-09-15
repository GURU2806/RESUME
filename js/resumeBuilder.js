/*
This is empty on purpose! Your code to build the resume will go here.
 */
linebreak = document.createElement("br");
//var blank = document.createElement("\u00A0");
var foo = document.createTextNode("\u00A0");
var bio = {
	"name":"Gurdeep Singh Saini",
	"role":"Full Stack Developer",
	"contacts":{
	           "mobile": "07827104967",
		   "email": "gurdeepsingh2806@gmail.com",
	           "github": "www.gurdeep_singh@github.com",
		   "twitter": "@twitter",
		   "Linkedin": "in.linkedin.com/in/gurdeep-singh-855a92b1",
		   "location": "India,Lucknow,Uttar Pradesh"
		    },
	"welcomeMessage": "I am self-motivated person driven by curiosity.I am also keen to learn new technologies to hone my skills.",
	"skills": ["JAVA","JDBC","SQL","Coding","Hardworking"],
	"bioPic":"images/gurdeeppics-min.jpg"
	   }
var newskills=bio.skills.join("   ,     ");
var forname=HTMLheaderName.replace("%data%",bio.name);
var forrole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(forrole).prepend(forname);
//var forcontact=HTMLcontactGeneric.replace("%contact%',"CONTACTS");
var formobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var foremail=HTMLemail.replace("%data%",bio.contacts.email);
var forgithub=HTMLgithub.replace("%data%",bio.contacts.github);
var fortwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
var forlocation=HTMLlocation.replace("%data%",bio.contacts.location);
var forpic=HTMLbioPic.replace("%data%",bio.bioPic);
var formessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var forskills=HTMLskills.replace("%data%",newskills);
var forlinkedin=HTMLlinkedin.replace("%data%",bio.contacts.Linkedin);
//$("#topContacts").append(formobile).append(foremail).append(forlinkedin).append(forgithub).append(forlocation).append(formessage).append(HTMLskillsStart).append(forskills);
$("#topContacts").prepend(forlocation).prepend(forskills).prepend(foo).prepend(HTMLskillsStart).append(foo).prepend(formessage).prepend(foo).prepend(forpic).prepend(forgithub).prepend(forlinkedin).prepend(foremail).prepend(formobile);
var education = {
"schools":[
{
"name":"JSS ACADEMY OF TECHNICAL EDUCATION",
"location":"NOIDA",
"degree":"BACHELORS' DEGREE(B.TECH)",
"Major":"Electronics and Communication with 79.3%",
"Year":"2012-2016"
},
{
"name":"SCHOLARS' HOME SCHOOL",
"location":"LUCKNOW",
"degree":"ISC",
"Major":"Physics,Chemistry,Mathematics and Computer Science with 89.6%",
"Year":"2012"
},
{
"name":"GREEN FIELDS SCHOOL",
"location":"LUCKNOW",
"degree":"ICSE",
"Major":"Physics,Chemistry,Mathematics and Computer Applications with 91%",
"Year":"2010"
}
],
"Independent_Courses":
[
{
"title":"JAVA",
"url":"www.javatpoint.com, www.tutorialspoint.com"
},
{
"title":"SQL",
"url":"www.javatpoint.com, www.tutorialspoint.com"
},
{
"title":"JDBC",
"url":"www.javatpoint.com, www.tutorialspoint.com"	
}
]
}

function displayeducation()
{
$("#education").append(HTMLschoolStart);
for( schools in education.schools)
{
var newname=HTMLschoolName.replace("%data%",education.schools[schools].name);
var newdegree=HTMLschoolDegree.replace("%data%",education.schools[schools].degree);
var newnamedegree=newname+newdegree;
var newdate=HTMLschoolDates.replace("%data%",education.schools[schools].Year);
var newlocation=HTMLschoolLocation.replace("%data%",education.schools[schools].location);
var newmajor=HTMLschoolMajor.replace("%data%",education.schools[schools].Major);
$(".education-entry:last").append(newnamedegree);
$(".education-entry:last").append(newdate);
$(".education-entry:last").append(newlocation);
$(".education-entry:last").append(newmajor);
}
}
displayeducation();



function displayonline()
{
$("#education").append(HTMLonlineClasses);
$("#education").append(HTMLschoolStart);
for(courses in education.Independent_Courses)
{
var newtitle=HTMLonlineTitle.replace("%data%",education.Independent_Courses[courses].title);
var newurl=HTMLonlineURL.replace("%data%",education.Independent_Courses[courses].url);
$(".education-entry:last").append(newtitle);
$(".education-entry:last").append(newurl);
}
}
displayonline();



var projects = {
"projects":[
{
"title":"DESIGN OF A WIDEBAND AND HIGH GAIN FED PATCH ANTENNA USING ARITIFICIAL MAGNETIC CONDUCTOR STRUCTURE",
"desig":"Student",
"dates":"2016",
"description":"This project was to enhance the overall gain and bandwidth of micro-strip patch antenna, which is overall low, so that it can be applied to wider range of applications."+
"We have simulated various AMC Structures using CST software.Some of them are:"+
"a) AMC WITH SQUARE PATCH AND SLOT,"+
"b) AMC WITH TWO SQUARE SLOTS,"+
"c) AMC WITH CIRCULAR PATCH AND SQUARE SLOT,"+
"d) AMC WITH ANNULAR AND SQUARE SLOT"+
"We have also designed Array of rectangular unit cell and analyse its properties like Reflection Coefficient vs Frequency."+
"Then, We have designed and simulated the Micro-Strip Patch Antenna and observes its gain and bandwidth and then used AMC Structure along with antenna to enhance its gain and bandwidth."+
"Through this project I acquired basic knowledge of using CST Software and became acquainted with the AMC Structures and its importance."
}
]
}
function displayprojects()
{
$("#projects").append(HTMLprojectStart);
for(pro in projects.projects)
{
var newprojecttitle=HTMLprojectTitle.replace("%data%",projects.projects[pro].title);
var newdesig=HTMLworkTitle.replace("%data%",projects.projects[pro].desig);
var newtitledesig=newprojecttitle+newdesig;
var newprojectdates=HTMLprojectDates.replace("%data%",projects.projects[pro].dates);
var newprojectdesc=HTMLprojectDescription.replace("%data%",projects.projects[pro].description);
$(".project-entry:last").append(newtitledesig);
$(".project-entry:last").append(newprojectdates);
$(".project-entry:last").append(newprojectdesc);
}
}
displayprojects();


var work={
"workexperience":[
{
"name":"L&T Hydrocarbon Engineering Limited",
"designation":"Summer Intern",
"date":"June 2015- July 2015",
"location":"Powai,Maharashtra,India",
"description":"Point to Multi-point Microwave Communication in licensed and unlicensed frequency spectrum at Offshore oil & gas platforms:-"+"\n"+
"During the period of training, I had learnt the basic architecture of communication systems between"+ 
"Offshore and onshore platforms and various terminologies used in it."+"\n"+
"I also had performed  the radio link budget calculation for the existing MHNRD-III Well-Head Platforms in both licensed and unlicensed frequency spectrum and prepared various excel sheets of them and compared the results obtained from licensed and unlicensed frequency spectrum."+"\n"+
"I also had used Radio Mobile Simulation Software to verify the results obtained manually through excel."
}
]
}

function displayworkexperience()
{
$("#workExperience").append(HTMLworkStart);
for(wo in work.workexperience)
{
var newname=HTMLworkEmployer.replace("%data%",work.workexperience[wo].name);
var newdesig=HTMLworkTitle.replace("%data%",work.workexperience[wo].designation);
var newnamedesig=newname+newdesig;
var newdate=HTMLworkDates.replace("%data%",work.workexperience[wo].date);
var newlocation=HTMLworkLocation.replace("%data%",work.workexperience[wo].location);
var newdesc=HTMLworkDescription.replace("%data%",work.workexperience[wo].description);
$(".work-entry").append(newnamedesig);
$(".work-entry").append(newdate);
$(".work-entry").append(newlocation);
$(".work-entry").append(newdesc);
}
}
displayworkexperience();

function inName(name){
name=name.trim().split(" ");
console.log(name);
return name[2]+" "+name[0];
}
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);



