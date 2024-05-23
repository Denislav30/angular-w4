import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficLightService } from '../traffic-light.service';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {
  @Input() position!: 'top' | 'bottom' | 'left' | 'right';  
  color = 'red';
  buttonDisabled = true;

  constructor(private trafficLightService: TrafficLightService) {}

  ngOnInit(): void {
    if (this.position === 'top' || this.position === 'bottom') {
      this.trafficLightService.getColorTopBottom().subscribe(color => {
        this.color = color;
        this.buttonDisabled = color === 'red';
      });
    } else {
      this.trafficLightService.getColorLeftRight().subscribe(color => {
        this.color = color;
        this.buttonDisabled = color === 'red';
      });
    }
  }

  handleButtonClick(): void {
    if (this.color === 'yellow') {
      alert('Неправилно пресичане');
    }
  }
}