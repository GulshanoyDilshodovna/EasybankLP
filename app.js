//consts
const btn  = document.getElementById('btn')
const navLeft = document.getElementById('navleft')

//let
let boolean = true

btn.addEventListener('click', function(){
    if(boolean){
        navLeft.classList.remove('hide')
        btn.innerHTML = `<i class="fas fa-times"></i>`
        boolean = false
    }
    else{
        navLeft.classList.add('hide')
        btn.innerHTML = `<i class="fas fa-bars"></i>`
        boolean = true
    }
})