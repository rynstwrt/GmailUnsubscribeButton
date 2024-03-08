const MAIL_URL_REGEX = /https:\/\/mail.google.com\/mail\/u\/\d+\/#inbox\/.+/;


chrome.action.onClicked.addListener(async tab =>
{
    const url = tab.url.toString();

    if (url.match(MAIL_URL_REGEX))
        await chrome.tabs.sendMessage(tab.id, { });
});