(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeInjection);
  } else {
    initializeInjection();
  }

  function initializeInjection() {
    const container = document.createElement('div');
    container.id = 'utopia-perplexity-container';
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;background:white;';

    const iframe = document.createElement('iframe');
    iframe.src = 'https://utopiaweb.org/';
    iframe.style.cssText = 'width:100%;height:100%;border:none;margin:0;padding:0;';

    const banner = document.createElement('div');
    banner.style.cssText = 'position:fixed;bottom:10px;right:10px;background:rgba(0,0,0,0.8);color:#00d4ff;padding:8px 12px;border-radius:4px;font-family:Arial;font-size:12px;z-index:999999;cursor:pointer;font-weight:bold;';
    banner.textContent = '✨ Made with Perplexity';

    container.appendChild(iframe);
    document.body.appendChild(container);
    document.body.appendChild(banner);
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }
})();
