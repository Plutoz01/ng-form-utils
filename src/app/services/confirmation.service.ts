import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class ConfirmationService {

  askConfirmation$(): Observable<boolean> {
    return Observable.create( ( observer: Observer<boolean> ) => {
      observer.next( this.retrieveConfirmationFromUser() );
      observer.complete();
    } );
  }

  private retrieveConfirmationFromUser(): boolean {
    return confirm('Please confirm, are you sure?');
  }

}
