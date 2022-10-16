chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    var tab = tabs[0];
    document.getElementById("curl").innerHTML = "Current Tab: " + (tab.url);
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("accountPage").addEventListener("click", handler);
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("newPopUp").addEventListener("click", newpop);
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("back").addEventListener("click", return2Sender);
});
 
function handler() {
    window.open("cryptopass-Accounts.html", '_blank');
}

function newpop() {
    window.location.href="popupTest.html";
}

function return2Sender(){
    window.location.href="popup.html";
}