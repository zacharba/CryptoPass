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
            curl.innerHTML = (domain);
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

document.addEventListener('DOMContentLoaded', function() {
    var back = document.getElementById("settingsPage");
    if (back) {
        back.addEventListener("click", toSettings);
    }    
});

document.addEventListener('DOMContentLoaded', function() {
    var template = document.getElementById("templateContent");
    if (template) {
        template.addEventListener("click", toTemplate);
    }    
});

 
function handler(){
    window.open("cryptopass-Accounts.html", '_blank');
}


function addacc() {
    window.location.href="cryptopass-AddAccountPopup.html";
}

function return2Sender(){
    window.location.href="cryptopass-Popup.html";
}

function toSettings(){
    window.open("cryptopass-blockedSites.html")
}

function toTemplate(){
    window.location.href="crpytopass-PopupTemp.html";
}