// ==UserScript==
// @name          Clean Google Search URL
// @saveId        Clean_Google_Search_Url
// @author        SumTips
// @description   Unscrambles urls on Google search
// @homepage      http://sumtips.com/
// @match         *://*.google.com/search*
// @match         *://*.google.nl/search*
// @match         *://*.google.co.in/search*
// @match         *://*.google.us/search*
// @match         *://*.google.ca/search*
// @version       1.0
// ==/UserScript==
{
    let onlyUrl = window.location.href.split('?')[0];
    let search = location.search.substring(1);
    let searchParams = new URLSearchParams(search);
    search = Object.fromEntries([...searchParams]);
    Object.keys(search).forEach((key) => key == 'q' || delete search[key]);
    const qs = '?' + new URLSearchParams(search).toString()
    let pureUrl = onlyUrl + qs;
    history.pushState({}, window.title, pureUrl);
    history.replaceState({}, window.title, pureUrl);
}
