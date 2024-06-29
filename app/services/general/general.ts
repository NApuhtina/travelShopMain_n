
/* Общие методы используются для вставки текста в header   footer*/

/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
export function initHeaderTitle(ticketName: string, selector:string) {
    const headerElement= document.querySelector('header')as HTMLElement;
    const targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        (targetItem as HTMLElement).innerText = ticketName;
    } else {
        console.error('Элемент с селектором ' + selector + ' не найден.');
    }
}

export function initFooterTitle(ticketName: string, selector: string) {
    const headerElement = document.querySelector('footer') as HTMLElement;
    const targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        (targetItem as HTMLElement).innerText = ticketName;
    }
}
