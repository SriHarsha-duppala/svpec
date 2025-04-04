function appendImg(){
 const output = document.getElementById('display');
  const img = new Image();
  img.src='./shd.jpg';
  img.height='100'
  img.width='100'
  for(let i=0;i<1;i++){
    display.appendChild(img);
  }
  }
  

function clearImg(){
    const output = document.getElementById('display');
    display.innerHTML= '';

}
