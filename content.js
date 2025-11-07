(function() {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://utopiaweb.org/';
  iframe.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;border:none;margin:0;padding:0;z-index:999998;';
  
  const banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;bottom:10px;right:10px;background:rgba(0,0,0,0.8);color:#00d4ff;padding:8px 12px;border-radius:4px;font-family:Arial;font-size:12px;z-index:999999;cursor:pointer;';
  banner.textContent = '✨ Made with Perplexity';
  
  document.documentElement.appendChild(iframe);
  document.documentElement.appendChild(banner);
  document.body.style.margin = '0';
  document.body.style.padding = '0';
})();
