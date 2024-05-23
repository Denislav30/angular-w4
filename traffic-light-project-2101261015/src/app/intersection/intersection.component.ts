import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';
import { TrafficLightService } from '../traffic-light.service';

@Component({
  selector: 'app-intersection',
  standalone: true,
  imports: [CommonModule, TrafficLightComponent],
  templateUrl: './intersection.component.html',
  styleUrls: ['./intersection.component.css'],
  providers: [TrafficLightService]
})
export class IntersectionComponent {
  emergencyActive = false;

  constructor(public trafficLightService: TrafficLightService) {}

  triggerEmergency() {
    if (!this.emergencyActive) {
      this.emergencyActive = true;
      this.trafficLightService.triggerEmergency();
      setTimeout(() => {
        this.emergencyActive = false;
      }, 20000);  
    }
  }
}