const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#';
    for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
  };
  let intervalId;
  const startColor=function(){
    if(!intervalId)
    intervalId=setInterval(changeBg,1000);
    function changeBg(){
      document.body.style.backgroundColor=randomColor();
    }
  }
  document.querySelector('#start').addEventListener('click',startColor);
  document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId=null;
  });