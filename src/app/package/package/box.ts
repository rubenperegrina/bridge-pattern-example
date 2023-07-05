import { DeliveryMethod } from "../delivery/delivery-method.interface";
import { Package } from "./package";

export class Box extends Package {
    constructor(deliveryMethod: DeliveryMethod) {
        super(deliveryMethod);
    }

    ship(): void {
        console.log('Se envía una caja');
        this.deliveryMethod.shipPackage();
    }
}