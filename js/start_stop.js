document.addEventListener('DOMContentLoaded', function() {     
    let toggleButton = document.getElementById("toggleButton")
    let itsFine = document.getElementById("itsFine");
    let toggleStatus = document.getElementById("toggleStatus");

    itsFine.addEventListener("click", () => {
        chrome.storage.sync.get(["urls"], (item) => {
            chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, (tabs) => {
                var url = tabs[0].url;
                item.urls.push(url)
                chrome.storage.sync.set(item, () => {
                    chrome.tabs.reload()
                });
            });
        })
    })

    chrome.storage.sync.get(["is_on"], (item) => {
        console.log(item)
        toggleStatus.innerHTML = item['is_on'] ? "On" : "Off"
        toggleButton.addEventListener("click", () => {
            is_on = !item['is_on']
            toggleStatus.innerHTML = is_on ? "On" : "Off"
            if (!is_on) {
                chrome.storage.sync.set({"urls":[]});
            }
            chrome.storage.sync.set({"is_on":is_on})
        })
    })
})

