// document.title : access the website title = <title>title</title>
console.log(`Website title is: ${document.title}`); // Website title is: Javascript DOM!

// document.forms : accss forms in the website = <form> </form>
var p = document.querySelector('#p-form');
p.innerHTML = `Your E-mail is: <mark>${document.forms[0].e1.value}</mark>, this is an input with a <mark>${document.forms[0].e1.type}</mark> value`;

// document.images : access images in the website = <img>
var p_img = document.querySelector('#p-img');
p_img.innerText = document.images[0].src;
