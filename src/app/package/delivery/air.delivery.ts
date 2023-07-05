import { DeliveryMethod } from "./delivery-method.interface";

export class AirDelivery implements DeliveryMethod {
    shipPackage(): void {
        console.log('El paquete se envía por aire.');
    }
}