var click1 = false;
var click2 = false;

function countVote() {
    if(click1) return;
    click1 = true;
    document.getElementById("harris").style.backgroundColor = "#32a852";
    document.getElementById("main").innerHTML += '<br><p>You\'re selecting | Kamala D. Harris | Are you sure?</p><br><button id="yes" onclick="yes()">Yes</button><button onclick="yes()">No</button>';
}

function yes() {
    if(click2) return;
    click2 = true;
    document.getElementById("yes").style.backgroundColor = "#32a852";
    document.getElementById("main").innerHTML += "<br><p>Vote confirmed for Kamala D. Harris!</p>";
}