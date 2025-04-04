function appendImg(){
 const output = document.getElementById('display');
  const img = new Image();
  img.src='./svp8.jpg';
  img.height='600'
  img.width='200'
  for(let i=0;i<1;i++){
    display.appendChild(img);
  }
  }
  

function clearImg(){
    const output = document.getElementById('display');
    display.innerHTML= '';

}
