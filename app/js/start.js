// Here we write your JS codevar
canv = document.getElementById('canvas');
ctx = canv.getContext('2d');
isMouseDown = false;
coords = [];
setColor = 'black';



canv.width = 512;
canv.height = 512;

//color set
document.getElementById('color').oninput = function name(params) {
    setColor = this.value;
}

//code
canv.addEventListener('mousedown', function () {
    isMouseDown = true;
});
canv.addEventListener('mouseup', function () {
    isMouseDown = false;
    ctx.beginPath();
    coords.push('mouseup');
});




canv.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        let x = e.clientX - ctx.canvas.offsetLeft;
        let y = e.clientY - ctx.canvas.offsetTop;
        coords.push([x, y]);
        ctx.lineWidth = 10 * 2;
        ctx.strokeStyle = setColor;
        ctx.lineTo(x, y);

        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = setColor;
        ctx.fill();

        ctx.beginPath();

        ctx.moveTo(x, y);

    }

});


save = () => {

    localStorage.setItem('coords', JSON.stringify(coords));
   
    
}


saved = () => {
    coords = JSON.parse(localStorage.getItem('coords'));
    
 
      for(let i=0; i<coords.length; i++){
          for(let j=0; j<coords[i].length; j++){
  
console.log(coords);
var
crd = coords.shift(),
e = {
    clientX: crd[0],
    clientY: crd[1]

};
ctx.lineTo(e.clientX, e.clientY);
ctx.lineWidth = 10 * 2;
ctx.strokeStyle = setColor;
ctx.stroke();
ctx.beginPath();
ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
ctx.fillStyle = setColor;;
ctx.fill();

ctx.beginPath();
ctx.moveTo(e.clientX, e.clientY);
        }  }
} 
 
saved ();

replay = () => {
    var
        timer = setInterval(function () {
            if (!coords.length) {
                clearInterval(timer);
                ctx.beginPath();
                return;
            }

            var
                crd = coords.shift(),
                e = {
                    clientX: crd[0],
                    clientY: crd[1]

                };
            ctx.lineTo(e.clientX, e.clientY);
            ctx.lineWidth = 10 * 2;
            ctx.strokeStyle = setColor;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
            ctx.fillStyle = setColor;;
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);

        }, 30);
    document.getElementById('color').oninput = function name(params) {
        setColor = this.value;
    }
}

clear = () => {

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.beginPath();
    ctx.fillStyle = 'black';

}

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 83) {
        //save
        save();
        alert('Saved!!!');
    }
    //
    if (e.keyCode == 82) {
        //replay
        console.log('Replaying....');
        coords = JSON.parse(localStorage.getItem('coords'));
        clear();
        replay();
    }
    // 
    if (e.keyCode == 67) {
        //clear
        clear();
        console.log('Cleared!!!');
        console.log(localStorage.getItem('coords'));
    }

});

/*

window.onload = function() {
    var img = new Image;
    img.onload = function() {
        var ctx = JSON.parse(localStorage.getItem('coords'));
        ctx.drawImage(img, 0, 0);
        /// call next step here...
    }
    img.src = localStorage.getItem('canvas');
}
*/







function getLinkToImage() {
    let town = 'Moscow'
    const url = `https://api.unsplash.com/photos/random?query=town,${town}&client_id=d89de0625cdf019343a6c7c6ce350574f877e9299b299a075058de9e4bc2a48c`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            img.src=data.urls.small;
        });
         
}


let block = document.getElementById('button_search');
var imageLink
block.onclick =  getLinkToImage();


let img = new Image();
  
block.onclick =  function () {
    ctx.drawImage(img, 0 ,0);
}



