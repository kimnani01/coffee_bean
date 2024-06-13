// visual slide
const visual = new Swiper('.visual', {
        autoplay:{delay:3000},
        loop: true,
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