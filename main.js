let n 
initialization()

setInterval(() => {
    makeLeave(getImage(n))
    .one('transitionend',(e) => {
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n += 1
},3000)



//函数区
function initialization(){
    n=1
    $(`.images>img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}
function count(n){
    if(n>5){
        n = n%5
        if (n===0){
            n=5
        }
    }
    return n
}
function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    $node.removeClass('enter current').addClass('leave')
    return $node
}
function makeEnter($node){
    $node.removeClass('current leave').addClass('enter')
}
function getImage(n){
    return $(`.images>img:nth-child(${count(n)})`)
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