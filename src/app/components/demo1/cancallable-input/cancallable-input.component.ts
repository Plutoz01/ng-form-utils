import { Component, forwardRef, ContentChild, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ConfirmationService } from '../../../services/confirmation.service';

@Component({
  selector: 'fu-cancallable-input',
  templateUrl: './cancallable-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CancallableInputComponent),
      multi: true
    }
  ]
})
export class CancallableInputComponent implements ControlValueAccessor {

  @ContentChild('inputContent') contentChild;

  value: any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private confirmationService: ConfirmationService
  ) {}

  writeValue( newValue: any ) {
    if ( newValue !== this.value ) {
      this.value = newValue;
      this.contentChild.writeValue( this.value );
    }
  }

  registerOnChange( fn: any ) {
    this.contentChild.registerOnChange( ( newValue ) => {
      this.confirmationService.askConfirmation$().subscribe( ( confirmationResult: boolean ) => {
        if ( confirmationResult ) {
          this.value = newValue;
          fn( this.value );
        } else {
          //TODO: fix broken detectChanges to not to use setTimeout
          setTimeout( () => {
            this.contentChild.writeValue( this.value );
            this.changeDetectorRef.detectChanges();
          }, 0 );
        }
      } );
    } );
  }

  registerOnTouched(fn: any) {};
}
