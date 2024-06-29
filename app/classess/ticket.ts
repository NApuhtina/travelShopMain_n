
export interface ITicket {
    id: number;
    description: string;
    name: string;
    price: string;
    tourOperator: string;
    location: {
        x: string; //  Изменил тип на строку (string)
        y: string; // Изменил тип на строку (string)
    };
    hotel: string;
}

export interface IVipTicket extends ITicket {
    vipNumber: number;
    vipStatus: string;
}

export type TicketType = ITicket | IVipTicket;

export class ITicket implements TicketType {
    id: number;
    description: string;
    name: string;
    price: string;
    tourOperator: string;
    location: { x: string; y: string };
    hotel: string;
    vipNumber?: number; //  Добавлен VIP-номер
    vipStatus?: string; //  и VIP-статус

    constructor(ticketData: TicketType) {
        this.id = ticketData.id;
        this.description = ticketData.description;
        this.name = ticketData.name;
        this.price = ticketData.price;
        this.tourOperator = ticketData.tourOperator;
        this.location = ticketData.location;
        this.hotel = ticketData.hotel;
        this.vipNumber = ticketData.vipNumber; //  Проверка на наличие VIP-номера
        this.vipStatus = ticketData.vipStatus; //  Проверка на наличие VIP-статуса
    }
}