let whitelist = [
    "google.com",
    "stackoverflow.com",
    "slack.com"
]

chrome.storage.sync.get(['is_on'], (is_on) => {
    console.log(is_on)
    if(is_on['is_on']) {
        chrome.storage.sync.get(["urls"], (item) => {
            for(var x in whitelist) {
                let on = whitelist[x]
                if(window.location.href.indexOf(on) == -1) {
                    if (!item.urls || item.urls.indexOf(window.location.href) == -1) {
                        document.getElementsByTagName("html")[0].innerHTML = "<p/><p/><p/><p/><p/><p/><center><h1 style='font-size:350px'>No</h1></center>"
                    }
                }
            }
        })
    }
});
