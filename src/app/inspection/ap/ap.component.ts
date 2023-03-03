import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ap',
  templateUrl: './ap.component.html',
})
export class APComponent {
  @Input() data: { id: number; name: string };

  // @Input('data') set data(value: any) {
  //   console.log('value', value);
  // }
}
