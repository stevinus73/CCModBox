var src="https://stevinus73.github.io/CCModBox/";
var CodeUrl = function(url) {return src+"src/"+url};

// loading
var script=document.querySelector('script[src="https://stevinus73.github.io/CCModBox/idleModAlpha.js"]');
script.setAttribute('type','module');

var LoadModule = function (url, callback, error) {
    var js = document.createElement('script');
    js.setAttribute('type', 'module');
    if (js.readyState) {
        js.onreadystatechange = function () {
            if (js.readyState === "loaded" || js.readyState === "complete") {
                js.onreadystatechange = null;
                if (callback) callback();
            }
        };
    }
    else if (callback) {
        js.onload = callback;
    }
    if (error) js.onerror = error;
    js.setAttribute('src', CodeUrl(url));
    document.head.appendChild(js);
    return js;
}

var en;
var mod;

var CreateMod = function (engine) {
    en = engine.IdlersPocket;
    en.LoadMod('IdleModAlpha', function() {
        

        
    })
}

var GetModule = function (element, callback) {
    import(element.getAttribute('src'))
        .then((module) => callback(module))
        .catch((e) => console.error(e));
}
GetModule(LoadModule("engine.js"), CreateMod);