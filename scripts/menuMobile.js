export default function menuMobile(){
    
    const btn = document.querySelector('[data="btn"]');
    const links = document.querySelector('.links');

    function dropMenu(){
        links.classList.toggle('active');
        btn.classList.toggle('active');

        outsideClick(this,() =>{
            this.classList.remove('active');
            links.classList.remove('active');
        });
    }

    function outsideClick(element, callback){
        const html = document.documentElement;
        html.addEventListener('click', handleOutside);

        function handleOutside(event){
            if(!element.contains(event.target)){
                callback();
            }
        }
}

    ['touchstart', 'click'].forEach(userEvent =>{
        btn.addEventListener(userEvent, dropMenu);
    }) 
    
}

  