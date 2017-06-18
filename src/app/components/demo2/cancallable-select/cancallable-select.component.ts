import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { CancallableControlValueAccessorComponent } from '../cancallable-control-value-accessor';
import { ConfirmationService } from '../../../services/confirmation.service';

@Component( {
  selector: 'fu-cancallable-select',
  templateUrl: './cancallable-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => CancallableSelectComponent ),
      multi: true
    }
  ]
} )
export class CancallableSelectComponent extends CancallableControlValueAccessorComponent {

  @Input() options = [ 'one', 'two', 'three' ]

  @ViewChild( 'select' ) selectRef: ElementRef;

  // @Override parent's callback
  onValueChangeCancalled() {
    // TODO: same problem as demo1: html element is out of sync despite of calling detectChanges in any form.
    // Should search a better way than writing DOM directly
    this.selectRef.nativeElement.value = this.value;
  }
}
