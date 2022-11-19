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
            curl.value = (domain);
        }
    }
);

document.addEventListener('DOMContentLoaded', function() {
    var back = document.getElementById("back");
    if (back) {
        back.addEventListener("click", return2Sender);
    }    
});

function return2Sender(){
    window.location.href="cryptopass-Popup.html";
}


