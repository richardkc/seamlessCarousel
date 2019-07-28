$('.images>img:nth-child(1)').addClass('current')
$('.images>img:nth-child(n+2)').addClass('enter')
let n = 1
setInterval(() => {
    $(`.images>img:nth-child(${count(n)})`).removeClass('current').addClass('leave')
    .one('transitionend',(e) => {
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $(`.images>img:nth-child(${count(n+1)})`).removeClass('enter').addClass('current')
    n += 1
},1000)



function count(n){
    if(n>5){
        n = n%5
        if (n===0){
            n=5
        }
    }
    return n
}






















/*setTimeout(() => {
    $('.images>img:nth-child(1)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').one('transitionend',(e) => {
        $(e.currentTarget).addClass('right').css({transform: 'none'})
    })
}, 1000);
setTimeout(() => {
    $('.images>img:nth-child(2)').css({
        transform: 'translateX(-200%)'
    })
    $('.images>img:nth-child(3)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').one('transitionend',(e) => {
        $(e.currentTarget).addClass('right').css({transform: 'none'})
    })
}, 2000);
setTimeout(() => {
    $('.images>img:nth-child(3)').css({
        transform: 'translateX(-200%)'
    })
    $('.images>img:nth-child(1)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(3)').one('transitionend',(e) => {
        $(e.currentTarget).addClass('right').css({transform: 'none'})
    })
}, 3000);*/