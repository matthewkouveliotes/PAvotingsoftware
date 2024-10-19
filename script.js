function countVote() {
    document.getElementById("harris").style.backgroundColor = "#32a852";
    document.getElementById("main").innerHTML += '<br><p>You\'re selecting | Kamala D. Harris | Are you sure?</p><br><button id="yes" onclick="yes()">Yes</button><button onclick="yes()">No</button>';
}

function yes() {
    document.getElementById("yes").style.backgroundColor = "#32a852";
    document.getElementById("main").innerHTML += "<br><p>Vote confirmed for Kamala D. Harris!</p>";
}