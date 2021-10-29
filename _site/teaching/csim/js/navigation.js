
/** This is a really hacky way to load the navigation bar to the main html pages **/

var navbar =
// First, draw the logo image and the title
['<div id="head">',
'<div id="logo">',
// '<a href="home.html"><img id="logo_img" src="images/AI_logo_transparent.png" alt="AI_logo" /></a>',
'</div>',
'<div id="title">',
'<h1>Computer Simulations and Interactive Media </h1>',
'</div>',
'</div>',

// Begin navigation list
'<ul id="list-nav">',

// Home Submenu
'<li><a href="home.html">Home</a></li>',

// Course Schedule Submenu
'<li><a href="course_schedule.html">Course Schedule</a></li>',

// Lecture Submenu
//'<li><a href="lecture_videos.html">Lectures</a></li>',

// Homework Submenu
'<li><a href="assignments.html">Assignments</a></li>',

// Project Submenu
'<li><a href="project.html">Creative Project</a></li>',

// Instructor's Guide Submenu
"<li><a href='instructors_guide.html'>Instructor's Guide</a></li>",
//'<ul>',
//"<li><a href='instructors_guide.html'>Overview</a>",
//"<li><a href='course_policies.html'>Course Policies</a></li>",
//"</ul>",
//"</li>",

"<li><a href='students_guide.html'>Student's Guide</a></li>",

// More Courses Submenu
'<li><a href="resources.html">Resources</a>',
'</li>',

'<li><a href="contact.html">Contact</a></li>',
'</ul>'].join('');

document.write(navbar);
