(function(){
    const leftArrow = document.querySelector('.slider-arrow-left')
    const rightArrow = document.querySelector('.slider-arrow-right')
    const imgs = document.querySelectorAll('.slider-imgs')
    var imgId = Number(document.querySelector('.slider-imgs').id)

    leftArrow.addEventListener('click', ()=>{
            if(imgId === 1){
                document.getElementById(imgId).classList.remove('slider-imgs--show')
                imgId = 3
                document.getElementById(imgId).classList.add('slider-imgs--show')
            }

            else{
                document.getElementById(imgId).classList.remove('slider-imgs--show')
                imgId -= 1
                document.getElementById(imgId).classList.add('slider-imgs--show')
            }

        })
    rightArrow.addEventListener('click', ()=>{
        console.log('fse')
        if(imgId === 3){
            document.getElementById(imgId).classList.remove('slider-imgs--show')
            imgId = 1
            document.getElementById(imgId).classList.add('slider-imgs--show')
        }
        else{
            document.getElementById(imgId).classList.remove('slider-imgs--show')
            imgId += 1
            document.getElementById(imgId).classList.add('slider-imgs--show')
        }
    })

        
    
}())