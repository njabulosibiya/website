window.onload = function() {
    if (localStorage.getItem("visited") === null) {
        setTimeout(function() {
            var modal = document.getElementById("myModal");
            modal.classList.remove("fade-in");
            modal.classList.add("fade-out");
            setTimeout(function() {
                modal.style.display = "none";
            },1000);
        },5000);
        localStorage.setItem("visited", "true");
    } else {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
}