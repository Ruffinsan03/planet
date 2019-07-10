var {about} = required('./about.js');
var {contact} = required('./contact.js');
var {notFound} = required('./404.js');

var Saturn = '53';

console.log('Welcome to the weekly planetarium display of "The Birth and Death of a planet"');

if(saturn === 'tall'){
    console.log({about});
}

else if(saturn === gassy){
    console.log({contact});
}

else{
    console.log(notFound);
}
