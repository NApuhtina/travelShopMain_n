
/* - пример использования методов с generic type <T>
  -  запрос на получение информации о туре
 */
import {IVipTicket, TicketType} from "models/ticket/ticket";
import {initTicketElementTemplate} from "../../templates/ticketInfo";

export function getTicketById<T>(id: string | number): Promise<T[]> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then((response) => response.json())
        .then((data: T[]) => {
            return data;
        });
}


// запрос на на отправку данных - пока не используется


export function postTicketData(postData:string): Promise<{success: boolean}> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then((response) => response.json())
        .then((data: {success: boolean}) => {
            return data;
        });
}

function initTicketInfo(ticket: TicketType | IVipTicket) {
    const targetElement = document.querySelector('.ticket-info');

    const ticketDescription = ticket?.description;
    const ticketOperator = ticket?.tourOperator;
    let vipClientType;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }


    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
    let ticketElemTemplate: string;

    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate+= initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;

}

function initUserData() {
    const userInfo = document.querySelectorAll('.user-info > p');
    let userInfoObj: { [key: string]: string } = {};
    userInfo.forEach((el) => {
        const inputDataName = el.getAttribute('data-name');
        if (inputDataName) {
            const inputElems = el.querySelector('input');
            userInfoObj[inputDataName] = inputElems.value;
        }
    });

    console.log('userInfoObj',userInfoObj)
    return userInfoObj;
}

function initPostData(data: PostData) {
    initUserData();
    postTicketData(data).then((data) => {
        if (data.success) {
            console.log(data.message);
        } else {
            console.log("Ошибка: " + data.message);
        }
    });
}

function registerConfirmButton(): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}
