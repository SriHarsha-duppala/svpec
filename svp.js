function appendImg(){
 const output = document.getElementById('display');
  const img = new Image();
  img.src='./svp8.jpg';
  img.height='400'
  img.width='300'

    display.appendChild(img);
  }
  
  

function clearImg(){
    const output = document.getElementById('display');
    display.innerHTML= '';

}
