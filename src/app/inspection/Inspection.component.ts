import {
  AfterViewInit,
  Component,
  ComponentRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { of, Subscription } from 'rxjs';
import { APComponent } from './ap/ap.component';
import { QOComponent } from './qo/qo.component';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
})
export class InspectionComponent implements AfterViewInit {
  @ViewChild('roleBasedInspection', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;

  @ViewChild('error') error: TemplateRef<Element>;

  subscriptions: Subscription[] = [];
  role: string | null;
  ngAfterViewInit(): void {
    // change  of('ff') to test error
    // change  of('qo') to qo component
    // change  of('ap') to qo component
    this.subscriptions.push(
      of('ap')
        .pipe()
        .subscribe((role) => {
          console.log('role', role);
          this.generateInspectionComponent(role);
        })
    );
  }

  generateInspectionComponent(role: string) {
    let componentRef = undefined;
    if (this.viewRef) {
      this.viewRef.clear();
    }

    if (role === 'ap') {
      componentRef = this.viewRef.createComponent(APComponent);
      componentRef.instance.data = {
        id: 1,
        name: 'Morgan Accredited Person',
      };
    } else if (role === 'qo') {
      componentRef = this.viewRef.createComponent(QOComponent);
      componentRef.instance.data = {
        id: 1,
        name: 'Eden Quarantine officer',
      };
    } else {
      this.viewRef.createEmbeddedView(this.error);
    }
  }
}
