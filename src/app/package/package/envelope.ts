import { DeliveryMethod } from "../delivery/delivery-method.interface";
import { Package } from "./package";

export class Envelope extends Package {
    constructor(deliveryMethod: DeliveryMethod) {
        super(deliveryMethod);
    }

    ship(): void {
        console.log('Se envía un sobre');
        this.deliveryMethod.shipPackage();
    }
}