const UNSUBSCRIBE_TEXTS = ["unsubscribe"];


function findUnsubscribeLink(linkElements)
{
    let unsubscribeLinkElement;
    for (let linkElement of linkElements)
    {
        const text = linkElement.textContent.toLowerCase().trim();

        for (const unsubscribeText of UNSUBSCRIBE_TEXTS)
        {
            if (!text.includes(unsubscribeText))
                continue;

            unsubscribeLinkElement = linkElement;
            break;
        }

        if (unsubscribeLinkElement)
            break;
    }

    return unsubscribeLinkElement;
}


chrome.runtime.onMessage.addListener(() =>
{
    const linkElements = document.querySelectorAll("tbody a")

    const unsubscribeLinkElement = findUnsubscribeLink(linkElements);
    if (!unsubscribeLinkElement)
        return alert("No unsubscribe link found!");

    const shouldContinue = confirm("Are you sure you want to click the unsubscribe button?");
    if (!shouldContinue)
        return;

    unsubscribeLinkElement.click();
});