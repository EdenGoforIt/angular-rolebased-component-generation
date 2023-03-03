import {
  AfterViewInit,
  Component,
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
    if (this.viewRef) {
      this.viewRef.clear();
    }

    if (role === 'ap') {
      this.viewRef.createComponent(APComponent);
    } else if (role === 'qo') {
      this.viewRef.createComponent(QOComponent);
    } else {
      this.viewRef.createEmbeddedView(this.error);
    }
  }
}
