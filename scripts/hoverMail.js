export default function onMail(){
    const mailBox = document.querySelector('.fa-solid');
    const boxMail = document.querySelector('.box');
    
    function showMail(){
        boxMail.classList.add('show-box');    
        onMouseLeave(this, () =>{
           this.addEventListener('mouseleave', () =>{
               boxMail.classList.remove('show-box')
           })
        })
    }
    
    ['touchstart', 'mouseover'].forEach(userevent =>{
        mailBox.addEventListener(userevent, showMail);
    })
    
    function onMouseLeave(element, callback){
            boxMail.setAttribute('data', 'active')
            element.classList.remove('show-box');
            callback();
    }
}

