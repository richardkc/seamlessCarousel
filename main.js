let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({ transform: 'translateX(-300px)' })
bindEvents()
$(next).on('click', function () {
    goToSlide(current + 1)
})
$(previous).on('click', function () {
    goToSlide(current - 1)
})
let timer = setInterval(() => {
    goToSlide(current + 1)
}, 3000);
$('.container').on('mouseenter', function () {
    window.clearInterval(timer)
}).on('mouseleave', function () {
    setInterval(() => {
        goToSlide(current + 1)
    }, 3000);
})
document.addEventListener('visibilitychange',function(e){
    if(document.hidden){
        window.clearInterval(timer)
    } else {
        setInterval(() => {
            goToSlide(current + 1)
        }, 3000);
    }
})




function bindEvents() {
    $('#buttonWrapper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlide(index)
    })
}

function goToSlide(index) {
    if (index > $buttons.length - 1) {
        index = 0
    } else if (index < 0) {
        index = $buttons.length - 1
    }
    if (current === $buttons.length - 1 && index === 0) {  //最后一张到第一张
        console.log('1')
        $slides.css({ transform: `translateX(${-($buttons.length + 1) * 300}px)` })
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({ transform: `translate(${-(index + 1) * 300}px)` }).show()
            })
    } else if (current === 0 && index === $buttons.length - 1) {  //第一张到最后一张
        console.log('2')
        $slides.css({ transform: 'translateX(0)' })
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({ transform: `translateX(${-(index + 1) * 300}px)` }).show()
            })
    } else {
        console.log('3')
        $slides.css({ transform: `translateX(${-(index + 1) * 300}px)` })
    }
    current = index
}


function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}






/*
    $buttons.eq(0).on('click',function(){
        if(current === 2){    //最后一张到第一张
            $slides.css({transform: 'translateX(-1200px)'})
            .one('transitionend',function(){
                $slides.hide().offset()
                $slides.css({transform: 'translateX(-300px)'}).show()
            })
        }else{
            $slides.css({transform: 'translateX(-300px)'})
        }
        current = 0
    })
    $buttons.eq(1).on('click',function(){
        $slides.css({transform: 'translateX(-600px)'})
        current = 1
    })
    $buttons.eq(2).on('click',function(){
        if(current=== 0){    //第一张到最后一张
            $slides.css({transform: 'translateX(0)'})
            .one('transitionend',function(){
                $slides.hide().offset()
                $slides.css({transform: 'translateX(-900px)'}).show()
            })
        }else{
            $slides.css({transform: 'translateX(-900px)'})
        }
        current = 2
    })
}*/


























/*let n 
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
*/


















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