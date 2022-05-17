const LINK = document.getElementsByClassName('menu__link');

// 1. Найдите все подменю, которые должны открываться и закрываться.
const MENU_SUB = document.querySelectorAll(".menu_sub") 

const MENU_SUB_ARRAY = Array.from(MENU_SUB);


// 2. Перебирайте найденые подменю и у каждого подменю находите рядом ссылки ((1)с помощью closest найдите внешний элемент списка и (2) внутри элемента списка найдите ссылку).
const MENU_ITEMS_SUB = MENU_SUB.forEach(element => element.closest("li.menu__item"));

const MENU_ITEM_SUB_LINK = MENU_ITEMS_SUB.forEach(element => console.log(element.querySelector("a.menu__link")))

const MENU_ITEM_SUB_LINK_ARRAY = Array.from(MENU_ITEM_SUB_LINK);


//3. Для полученных ссылок, при переборе добавляйте обработчик события…То есть обработчик события будет добавлен только для ссылок у которых есть подменю.

MENU_ITEM_SUB_LINK_ARRAY.forEach(element => element.onclick = () => { 

    //4. Внутри обработчика события клика по подменю у вас должна быть ссылка (по которой произошёл клик) и подменю (которое находится рядом).
    let number;
    number = MENU_ITEM_SUB_LINK_ARRAY.indexOf(element);


    //5. Попробуйте найти уже открытое подменю в навигаторе (с помощью селектора).

    numberToClose = () => {
        let a = MENU_SUB_ARRAY.findIndex(element => element.classList.contains("menu_active"));
        if (a > -1) {
            //6. Если открытое подменю существует, то его необходимо закрыть.
            MENU_SUB_ARRAY[a].classList.remove("menu_active");
            return a;
        } else {
            return null;
        }
    }
    

    //7. Далее, необходимо проверить: а какое подменю вы закрыли? Является ли это подменю тем же самым, что и то, которое находится рядом со ссылкой (у которой было событие (из шагов 1 и 4)).
    if (number === a) {
        //9. И последним вариантом остаётся то, что открытое ранее подменю (из 5 шага) совпадает с подменю возле ссылки (из шагов 1 и 4)…В таком случае, следовало просто закрывать ранее открытое подменю, что и должно было выполниться на 6-ом шаге…Вам останется только вернуть false, чтобы не срабатывало обновление страницы.
        
        MENU_SUB.forEach(element => element.classList.remove("menu_active"))
        
        return false
    } else {
        //8. Если это разные элементы, то необходимо открыть подменю, возле которого был клик (из шагов 1 и 4)
        
        MENU_SUB[number].classList.add("menu_active")
        return false
    }
})



// Вариант 1
// const link = document.getElementsByClassName('menu__link');

// const a =  document.querySelectorAll(".menu_sub .menu__link");

// Array.from(link).forEach(element => element.onclick = (e) => {
    
//     let parent = element.closest(".menu__item")
    
//     let menuSub = parent.querySelector(".menu_sub")
    
//     menuSub.classList.toggle("menu_active")

//     return false
//     // e.preventDefault();
// })

// Array.from(a).forEach(element => element.onclick = (e) => {
//     return false
// })