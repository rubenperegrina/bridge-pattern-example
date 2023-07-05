import { DeliveryMethod } from "../delivery/delivery-method.interface";

export abstract class Package {
    protected deliveryMethod: DeliveryMethod;

    constructor(deliveryMethod: DeliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }

    abstract ship(): void;
}