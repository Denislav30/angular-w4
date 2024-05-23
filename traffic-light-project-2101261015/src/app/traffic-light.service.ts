import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrafficLightService {
  private colorTopBottom = new BehaviorSubject<string>('red');
  private colorLeftRight = new BehaviorSubject<string>('green');
  private emergency = new BehaviorSubject<boolean>(false);

  constructor() {
    this.startCycle();
  }

  getColorTopBottom() {
    return this.colorTopBottom.asObservable();
  }

  getColorLeftRight() {
    return this.colorLeftRight.asObservable();
  }

  getEmergencyState() {
    return this.emergency.asObservable();
  }

  startCycle() {
    const cycle = [
      { topBottom: 'red', leftRight: 'green', duration: 5000 },
      { topBottom: 'yellow', leftRight: 'yellow', duration: 2000 },
      { topBottom: 'green', leftRight: 'red', duration: 5000 },
      { topBottom: 'yellow', leftRight: 'yellow', duration: 2000 }
    ];
    let index = 0;
    const cycleInterval = () => {
      this.colorTopBottom.next(cycle[index].topBottom);
      this.colorLeftRight.next(cycle[index].leftRight);
      setTimeout(() => {
        index = (index + 1) % cycle.length;
        cycleInterval();
      }, cycle[index].duration);
    }
    cycleInterval();
  }

  triggerEmergency() {
    this.emergency.next(true);
    this.colorTopBottom.next('yellow');
    this.colorLeftRight.next('yellow');
    setTimeout(() => {
      this.emergency.next(false);
      this.startCycle();
    }, 10000);
  }
}