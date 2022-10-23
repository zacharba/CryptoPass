chrome.tabs.query(
    {
        active: true,
        currentWindow: true
    },
    ([currentTab]) => {
        const url = new URL(currentTab.url);
        const domain = url.hostname;

        var curl = document.getElementById("curl")
        if (curl) {
            curl.innerHTML = (url);
        }
    }
  );

document.addEventListener('DOMContentLoaded', function() {
    var accP = document.getElementById("accountPage");
    if (accP) {
        accP.addEventListener("click", handler);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var newP = document.getElementById("newPopUp");
    if (newP) {
        newP.addEventListener("click", newpop);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var addA = document.getElementById("addAccount");
    if (addA) {
        addA.addEventListener("click", addacc);
    } 
});

document.addEventListener('DOMContentLoaded', function() {
    var back = document.getElementById("back");
    if (back) {
        back.addEventListener("click", return2Sender);
    }    
});
 
function handler(){
    window.open("cryptopass-Accounts.html", '_blank');
}

function newpop() {
    window.location.href="popupTest.html";
}

function addacc() {
    window.location.href="addAccountPopUp.html";
}

function return2Sender(){
    window.location.href="popup.html";
}