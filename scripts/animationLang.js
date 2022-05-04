export default function animationLang(){
    
    const span = document.querySelectorAll('.langs p');
    const arr = Array.from(span);
    arr[0].classList.add('active');

    let index = 0;
    
    setInterval(() =>{
        
        index == arr.length - 1 ? index = 0 : index++; 
    
        arr.forEach(item => item.classList.remove('active'))
        arr[index].classList.add('active');
    }, 1500)
}

