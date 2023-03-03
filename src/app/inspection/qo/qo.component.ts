import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qo',
  templateUrl: './qo.component.html',
})
export class QOComponent {
  // if need to pass the data from the inspection component use it
  @Input() data: { id: number; name: string };
}
