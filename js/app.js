const tabsContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}
hideTabContent()
const showTabContent = (i = 0) => {
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

let i = 0

 setInterval(() => {
    hideTabContent()
    showTabContent(i)
    i++
 }, 1000)

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