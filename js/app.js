const tabsContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsWrapper = document.querySelector('.tabheader__items')
const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}
hideTabContent()
const showTabContent = (i = 3) => {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

let i = 0
hideTabContent()
showTabContent(i)
//  setInterval(() => {
//     hideTabContent()
//     showTabContent(i)
//     i++
//  }, 1000)

 tabsWrapper.addEventListener("click", (e) => {
    const target = e.target
    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, idx) => {
            if(target === item){
                console.log(target, idx)
                hideTabContent()
                showTabContent(idx)
            }
        })
    }
})
// SLIDER
const regularTabChange = () => {
    const currentIndex = i;
    const nextIndex = (i + 1) % tabsContent.length; 
    setTimeout(() => {
        tabsContent[currentIndex].style.display = 'none'; 
        tabsContent[nextIndex].style.display = 'block'; 
        tabs[currentIndex].classList.remove('tabheader__item_active');
        tabs[nextIndex].classList.add('tabheader__item_active');
        i = nextIndex;
        regularTabChange(); 
    }, 2000); }

regularTabChange();

const modal=document.querySelector('.modal')
const modalOpenBtn=document.querySelector('.btn_white')
const modalCloseBtn=document.querySelector('.modal__close')

const handleOpenModal=()=>{
    modal.classList.add('show')
    modal.classList.remove('hide')
}

const handleCloseModal=()=>{
    modal.classList.remove('show')
    modal.classList.add('hide')
}

modalOpenBtn.addEventListener('click',handleOpenModal)
modalCloseBtn.addEventListener('click',handleCloseModal)




// timer
const deadline = "2024-5-10"


console.log(deadline)
console.log(new Date)
console.log(new Date(deadline))
console.log(new Date(deadline) - new Date)

const getTime = (deadline) =>{
    const time = new Date (deadline) - new Date
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((time / (1000 * 60 )) % 60)
    const seconds = Math.floor((time / (1000 ))% 60)

    return {
        total: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}
const setTime = (deadline) => {
    const days = document.querySelector("#days")
    const hours = document.querySelector("#hours")
    const minutes = document.querySelector("#minutes")
    const seconds = document.querySelector("#seconds")

    const makeZero = (num) => {
        if(num > 0 && num < 10){
            return`0${num}`
        }else if (num < 0 ){
            return '00'
        }else{
            return num
        }
    }

    const updateClock = () => {
        const t = getTime(deadline)
        days.innerHTML = makeZero(t.days)
        hours.innerHTML = makeZero(t.hours)
        minutes.innerHTML = makeZero(t.minutes)
        seconds.innerHTML = makeZero(t.seconds)
    } 

    setInterval(updateClock, 1000)
}

setTime(deadline)
// Реализация открытие модального окна с фотографиями по нажатию на фотографию
const modal2=document.querySelector('.modal')
const modalImgOpen=document.querySelector('.tabcontainer')
const modalCloseBtn2=document.querySelector('.modal__close')

const handleOpenModal2=()=>{
    modal.classList.add('show')
    modal.classList.remove('hide')
}

const handleCloseModal2=()=>{
    modal.classList.remove('show')
    modal.classList.add('hide')
}

modalImgOpen.addEventListener('click',handleOpenModal)
modalCloseBtn.addEventListener('click',handleCloseModal)

// Убираем скролл сайта

document.body.style.overflow = 'hidden'; 

// class Dog{
//     constructor(size, color){
//         this.size = size
//         this.color = color
//     }
//     bark(){
//         console.log(`bark bark bark!!! I'm dog ${this.size} meters and ${this.color} color`)
//     }
// }

// const whiteDog = new Dog(10, 'white')
// const brownDog = new Dog(4, 'brown')

// class Menu {
//     constructor(img, alt, title, description, price){
//         this.img = img
//         this.alt = alt
//         this.title = title
//         this.description = description
//         this.price = price
//     }
//     render(){
//         const wrapper = document.querySelector("#cardWrapper")
//         const block = document.createElement("div")

//         block.innerHTML = `
// 			<div class="menu__item">
// 				<img src="${this.img}" alt="${this.alt}">
// 				<h3 class="menu__item-subtitle">${this.title}</h3>
// 				<div class="menu__item-descr">${this.description}
// 				</div>
// 				<div class="menu__item-divider"></div>
// 				<div class="menu__item-price">
// 					<div class="menu__item-cost">Цена:</div>
// 					<div class="menu__item-total"><span>$(this.price)</span> грн/день</div>
// 				</div>
// 			</div>`
//         wrapper.append(block)
//     }
// }


