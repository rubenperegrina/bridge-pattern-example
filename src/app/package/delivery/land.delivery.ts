import { DeliveryMethod } from "./delivery-method.interface";

export class LandDelivery implements DeliveryMethod {
    shipPackage(): void {
        console.log('El paquete se envía por tierra.');
    }
}