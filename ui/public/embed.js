(function() {
    var scriptUrl = 'http://bibleverse.lcl/static/js/main.3700a2bc.js'; // Adjusted for local URL
    var cssUrl = 'http://bibleverse.lcl/static/css/main.79b3e974.css'; // Adjusted for local URL

    var script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    document.body.appendChild(script);

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    document.head.appendChild(link);

    script.onload = function() {
        console.log('App loaded successfully');
    };
})();