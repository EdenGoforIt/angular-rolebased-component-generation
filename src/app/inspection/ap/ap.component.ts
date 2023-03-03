import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ap',
  templateUrl: './ap.component.html',
})
export class APComponent {
  // if need to pass the data from the inspection component use it
  @Input() data: { id: number; name: string };
}
