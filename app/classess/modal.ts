export class Modal {
    private readonly id: string;
    private readonly tourName: string;
    private readonly imageUrl: string;
    private readonly location: string;
    private readonly price: number;
    private readonly duration: string;
    public static currentModal: Modal = undefined;

    constructor (id: string) {
        if (Modal.currentModal) {
            Modal.removeCurrentModal();
        }
        Modal.currentModal = this;
        this.id = id;
    }

    public open(template: string): void {
        const divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.classList.add('modal-element');

        document.body.appendChild(divWrap);

        // Закрытие модального окна по клику на 'close-modal'
        const closeBtn = divWrap.querySelector('close-modal');

        // Важно! Используйте closeBtn после проверки
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                Modal.removeCurrentModal();
            });
        }

        document.body.appendChild(divWrap);
    }

    public remove(): void {
        const modalEl = document.getElementById(this.id);
        if (modalEl) {
            modalEl.parentNode.removeChild(modalEl);
        }
    }

    public static removeCurrentModal(): void {
        if (Modal.currentModal) {
            Modal.currentModal.remove();
            Modal.currentModal = undefined;
        }
    }
}