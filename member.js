function skilssMember() {
    var skills = document.getElementById("skills").value;
    var member = document.getElementById("member").value;
    var result = skills / member;
    document.getElementById("result").innerHTML = result;
}
