// adds Report here to context menu 
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: "Report",
        id: "Report",
        contexts: ["all"]
    });
    // adds Under 18 as a 'childId' to Report
    chrome.contextMenus.create({
        title: "Report Under 18",
        id: "RepU18",
        contexts: ["all"],
        parentId: "Report"

    });
    // adds Reprot over 18 to cpntext menu as well 
    chrome.contextMenus.create({
        title: "Report Over 18",
        id: "RepO18",
        contexts: ["all"],
        parentId: "Report"
    });
});
// creates the fuction of opening the sopecific links when the context menu id is clicked 
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "RepU18") {
        console.log("RepU18 Clicked");
        const RepUrl = "https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/remove-nude-image-shared-online/";
        chrome.tabs.create({ index: tab.index + 1, url: RepUrl, selected: true });
    } else if (info.menuItemId === "RepO18") {
        console.log("RepO18 Clicked");
        const RepUrl = "https://www.victimsupport.org.uk/crime-info/types-crime/cyber-crime/image-based-sexual-abuse/";
        chrome.tabs.create({ index: tab.index + 1, url: RepUrl, selected: true });
    };
});
