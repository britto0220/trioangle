import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedataService {
  public activityMsg = new BehaviorSubject<any>("");
  
  activityLogShare = this.activityMsg.asObservable();
  listArray: Array<any> = [];

  constructor(
  ) { }

 
  activity(data) {
    this.activityMsg.next(data);
  }

}

