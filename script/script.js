// visual slide
const visual = new Swiper('.visual', {
        autoplay:{delay:3000},
        loop: true,
        effect: "fade",
        navigation:{
            nextEl:'.visual_wrap .swiper-button-next',
            prevEl:'.visual_wrap .swiper-button-prev',
        }
    }
)
// md pick slide
const pick = new Swiper('.pick', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
        speed: 3000,
        autoplay:{delay:3000},
        loop: true,
        pagination:{
            el:'.pick .swiper-pagination', //부모 필수
            type:'bullets',
            clickable: true,
        }   
    }    
)
// 신상품
const new_slide = new Swiper('.new_slide', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        speed: 3000,
        autoplay:{delay:3000},
        loop: true,
        pagination:{
            el:'.new_slide .swiper-pagination', //부모 필수
            type:'bullets',
            clickable: true,
        }   
})
// 팝업 상세페이지
const item_popup = new Swiper('.item_popup', {
        autoplay:{delay:3000},
        loop: true,
        navigation:{
            nextEl:'.item_popup .swiper-button-next',
            prevEl:'.item_popup .swiper-button-prev',
        }   
    }
)
//--------------------------------
//top버튼 스크롤을 내리면 나타나기
const top_btn = document.querySelector('.top_btn')
//console.log(top_btn)
window.addEventListener('scroll', function(){
    //console.log(this.window.pageYOffset)//200
    if(window.pageYOffset >= 200){
        top_btn.style.display = 'block'
    }else{
        top_btn.style.display = 'none'
    }
})
//settimeout
//--------------------------------
//메뉴에 마우스오버 시 서브 메뉴 나타나기
const gnb = document.querySelectorAll('nav .gnb > li')
for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        //console.log(i)
        i.lastElementChild.style.display = 'flex'
    })
    //메뉴에 마우스아웃 시 서브 메뉴 사라지기
    i.addEventListener('mouseout',()=>{
        i.lastElementChild.style.display = 'none'
    })
}
//---------------------------------
//검색버튼 클릭시 검색버튼 바꾸기
const search_btn = document.querySelector('#search_btn')
const search_bg = document.querySelector('.search_wrap .bg')
search_btn.addEventListener('click',()=>{
    search_btn.classList.toggle('search_on')
    //검색 버튼 클릭시 검색창 나타나기
    search_bg.classList.toggle('search_display')
})
//---------------------------------
//------------------버튼에 마우스 올렸을 때 quickview
const item_a = document.querySelectorAll('.pick .swiper-wrapper .swiper-slide a')
for(let i of item_a){
    i.addEventListener('mouseover', ()=>{
        i.lastElementChild.style.display = 'block'
    })
    i.addEventListener('mouseout', ()=>{
        i.lastElementChild.style.display = 'none'
    })
}
//-------------------quickview 클릭시 팝업 보이기
const quickview = document.querySelectorAll('.quickview')
const popup_bg = document.querySelector('.popup_bg')
//console.log(quickview, popup_bg)
for(let i of quickview){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
        popup_bg.style.display= 'block'
    })
}
//---------------------창닫기 버튼 클릭시 팝업 사라지기
const popup_close = document.querySelector('#popup_close')
popup_close.addEventListener('click',()=>{
    popup_bg.style.display= 'none'
})
//---------------------------------
//------------------------수량 증가 감소
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const count_input = document.querySelector('#count')
let count = 1 //기본변수
plus.addEventListener('click', ()=>{
    //console.log('+')
    count++
    count_input.value = count
})
minus.addEventListener('click',()=>{
    console.log('-')
    count > 1 ? count-- : count
    count_input.value = count
})
//---------------------------------
//-------------------------pick
//-------------------------슬라이드 정지버튼 클릭 시 플레이버튼으로 변경
const pause_pick = document.querySelector('.pick .page_btn .pause')
const play_pick = document.querySelector('.pick .page_btn .play')
pause_pick.firstElementChild.addEventListener('click', ()=>{
    pause_pick.style.display = 'none'
    //플레이버튼 보이기
    play_pick.style.display = 'block'
    //슬라이드 정지
    pick.autoplay.stop()
})
play_pick.firstElementChild.addEventListener('click',()=>{
    play_pick.style.display = 'none'
    pause_pick.style.display = 'block'
    pick.autoplay.start()
})
//-------------------------new
//-------------------------슬라이드 정지버튼 클릭 시 플레이버튼으로 변경
const pause_new = document.querySelector('.new_slide .page_btn .pause')
const play_new = document.querySelector('.new_slide .page_btn .play')
pause_new.firstElementChild.addEventListener('click', ()=>{
    pause_new.style.display = 'none'
    //플레이버튼 보이기
    play_new.style.display = 'block'
    //슬라이드 정지
    new_slide.autoplay.stop()
})
play_new.firstElementChild.addEventListener('click',()=>{
    play_new.style.display = 'none'
    pause_new.style.display = 'block'
    new_slide.autoplay.start()
})
