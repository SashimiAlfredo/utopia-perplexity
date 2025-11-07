document.getElementById('openBlank').addEventListener('click', () => {
  chrome.tabs.create({ url: 'about:blank' });
});
