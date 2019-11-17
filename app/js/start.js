

/*

let ro = document.createElement('div');
ro.id = 'rows';
ro.className = "row";
document.body.append(ro);
document.getElementById('rows').style.width = '700px';
document.getElementById('rows').style.display = 'flex';
document.getElementById('rows').style.justifyContent = 'space-around';
document.getElementById('klaviatura').appendChild(ro);

//

function addKey(first, second){
    let equal = document.createElement('div');
    equal.id = "button"
    equal.className = "buttons"
    equal.innerHTML = `<span>${first}</span><sup>${second}</sup>`;
    document.getElementById('rows').appendChild(equal);
   
    //document.querySelector('div').onclick=()=>{
       // addKey('ё', '~');
        
       // }
       document.querySelector('div').addEventListener('click', ()=>{
        addKey('ё', '~'); 
       })
};



addKey('ё', '~');
addKey('1', '!');
addKey('2', '@');
addKey('3', '#');
addKey('4', '$');
addKey('5', '%');
addKey('6', '^');
addKey('7', '&');
addKey('8', '*');
addKey('9', '(');
addKey('0', ')');
addKey('-', '_');
addKey('=', '+');
addKey('\\', '|');
var examples = document.querySelectorAll('.buttons');

for (var i = 0; i < examples.length; i++) {
    // Add the class margin to the individual elements.
  examples[i].classList.add("key");
  }
*/
 
let button = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 92, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
let input = document.createElement('input');
input.id ="result"
document.body.append(input);
document.getElementById("result").classList.add("result");


let klav = document.createElement('div');
    klav.id = 'keyboard';
    
    document.body.append(klav);
    document.getElementById("keyboard").classList.add("klaviatura");


/*document.onkeypress =(event)=>{
//console.log(event);
button.push(event.charCode);
console.log(button);
}*/
 

init = () => {
    
    let out = '';
   
    for (let i=0; i<button.length; i++){
        if(i == 13 || i==25 || i== 36){
            out+= '<div class="clearFix"></div>';
        }
        out+='<div  class="button-key data="'+button[i]+'">'+String.fromCharCode(button[i]) + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
    
}


init();
document.onkeypress =(event)=>{
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelector('#keyboard .button-key[data="'+event.keyCode+'"]').classList.add('active');
}
 

 