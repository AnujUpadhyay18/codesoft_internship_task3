function opentab(tab) {
    let tab_links = document.getElementsByClassName('tab_links');
    let tab_contents = document.getElementsByClassName('tab_content');
    
    for (let link of tab_links) {
        link.classList.remove('active_link');
    }
    for (let content of tab_contents) {
        content.classList.remove('actve');
    }
    event.currentTarget.classList.add('active_link');
    document.getElementById(tab).classList.add('actve');
}
let sidemenu=document.getElementById('sidemenu');
  function openmenu(){
    sidemenu.style.right='0';
  }
  function closemenu(){
    sidemenu.style.right='-200px';
  }

  let chaek=null;
  let op=()=>{
    
      document.getElementsByClassName('hide')[0].style.display='block';
      btn.innerHTML='See less'
      chaek=!null;
    

  }
  let cl=()=>{
    
      document.getElementsByClassName('hide')[0].style.display='none';
      btn.innerHTML='See more'
      chaek=null;
    
  }
  let btn=document.getElementsByClassName('btn')[0]
  btn.addEventListener('click',()=>{
    if(chaek==null){
      op();
    }
    else{
      cl();
    }
  });