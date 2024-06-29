"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tours_1 = require("@rest/tours");
const modalService_1 = require("@services/modal/modalService");
function openModal() {
}
window["openModal"] = function () {
    var modal = new modalService_1.ModalService();
    modal.open('<p>hi</p>');
};
window["goToTours"] = function () {
    window.location.href = "/pages/tours/";
};
(0, tours_1.getTours)();
//# sourceMappingURL=index.js.map