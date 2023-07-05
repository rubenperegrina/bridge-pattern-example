import { Component } from '@angular/core';
import { AirDelivery } from '../../delivery/air.delivery';
import { LandDelivery } from '../../delivery/land.delivery';
import { Box } from '../../package/box';
import { Envelope } from '../../package/envelope';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html'
})
export class DeliveryComponent {
  landDelivery = new LandDelivery();
  airDelivery = new AirDelivery();

  shipBoxLand() {
    const box = new Box(this.landDelivery);
    box.ship(); // Se envía una caja por tierra.
  }

  shipBoxAir() {
    const box = new Box(this.airDelivery);
    box.ship(); // Se envía una caja por aire.
  }

  shipEnvelopeLand() {
    const envelope = new Envelope(this.landDelivery);
    envelope.ship(); // Se envía un sobre por tierra.
  }

  shipEnvelopeAir() {
    const envelope = new Envelope(this.airDelivery);
    envelope.ship(); // Se envía un sobre por aire.
  }
}
