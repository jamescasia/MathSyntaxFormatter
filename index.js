var box = document.getElementById("box");

var node = `<div><div>`

function add (e){ 
    return  `<div >
    ${e}
            </div>`;

   // return  '<div class="article"><a href =' +article.url+'><h2>'+article.title+'</h2><img src ='+article.urlToImage+'><p>'+article.description+'</p></a></div>';
}

function runScript(e) {
    //See notes about 'which' and 'key'
    // alert('dafa');
    if (e.keyCode == 13) {
        // alert('dafa');
        var tb = document.getElementById("scriptBox");
        eval(tb.value);
        return false;
    } 
    box.appendChild( add(e));
 
}
