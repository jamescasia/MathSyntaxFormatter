document.addEventListener("DOMContentLoaded", function(event) { 
    var typingTimer;
    var doneTypingInterval = 400;
    
    let doneTyping = function() {
	if ($("#ltx").val() != "") {
	    $("#results").html("<p>$"+$("#ltx").val()+"$</p>");
	    MathJax.Hub.Queue(["Typeset",MathJax.Hub])
	} else {
	    $("#results").empty();
	}
    }
    
    $("#ltx").keyup(function(){
	clearTimeout(typingTimer);
	typingTimer = setTimeout(doneTyping, doneTypingInterval);
    });
});

window.onload = () => {
	document.getElementById('ltx').addEventListener('keydown', e => {
		e.key == 'Enter' ? newData() : null
	})

	function newData(){
		var curr = document.getElementById('results').innerHTML
		if(curr != ''){
			// dis.push(curr)
			// var temp = ''
			// for(i = 0; i < dis.length; i++){
			// 	// temp = `<br><h2 class="text-center bord" id="results"><p>$${temp}${dis[i]}$</p></h2>`
			// 	temp += dis[i]
				
			// }
			document.getElementById('ltx').value = ''
			// document.getElementById('ans').innerHTML = temp
			curr = `<div class="addNew">${curr}</div>`
			document.getElementById('ans').insertAdjacentHTML("beforeend", curr)
			MathJax.Hub.Queue(["Typeset",MathJax.Hub])
			// console.log(curr)
		}
	}
}