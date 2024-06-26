import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionComponent } from './intersection/intersection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IntersectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}