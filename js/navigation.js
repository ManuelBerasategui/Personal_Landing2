(function(){
    const Nosotros = document.querySelector('.nosotros-item')

    Nosotros.addEventListener('click', ()=>{
        ToggleEvent(document.querySelector('.nav2-oculto-container').classList.add('nav2--show'))
        
    })
}())