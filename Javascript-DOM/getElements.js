document.getElementById('h1').innerHTML = 'This content changed with JS, My ID called "h1"';
document.getElementsByClassName('p')[0].innerHTML = 'This content changed with JS, My class called "p"';
document.getElementsByTagName('div')[0].innerHTML = 'This content changed with JS, My tag name is "div"';

//you cam use either `document.querySelector('tagName || .class || #id')`
//you cam use either `document.querySelectorAll('tagName || .class || #id')`