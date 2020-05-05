// set up text to print, each item in array is new line
var aText = new Array(
    "Oh hello there! I'm Kyle Caparoso.",
    "A software engineer,",
    "avid Minecrafter,",
    "fitness fanatic,",
    "home DIYer,",
    "animal lover,",
    "and many more...",
    "This is my website &hearts;"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
var nCounter = 0;

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }

    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
            nCounter += 1;
        }
    }
    else {
        setTimeout("typewriter()", iSpeed);

        if (nCounter == (aText.length - 1)) {
            setTimeout(showButtons, iSpeed * iArrLength);
        }
    }


}

function showButtons() {
    var dButtons = document.getElementById("buttons");
    dButtons.style.display = "block";

}


typewriter();



//
function openSkills(evt, skillsno) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(skillsno).style.display = "block";
    evt.currentTarget.className += " active";
  }