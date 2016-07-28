console.log('pharzan-2 test')

var btn = document.createElement("BUTTON");        
var t = document.createTextNode("CLICK ME");       
btn.appendChild(t);                                
document.body.appendChild(btn);

console.log({{ page_title }} - Page: {{ current_page }})
