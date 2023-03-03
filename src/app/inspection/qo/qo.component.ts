import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qo',
  templateUrl: './qo.component.html',
})
export class QOComponent {
  @Input() data: { id: number; name: string };
}
