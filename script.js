window.addEventListener('scroll', () => {  
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    document.getElementById('zoom').style.width = 40 + scrollTop / 5 + '%';
  });