import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  isSlideOut = true;
  label:string='';
  constructor(private router: Router,    private route: ActivatedRoute  ) {
    this.route.data.subscribe((data) => {
      this.label = data['label'];
    });
  }

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }

  onDash() {
    this.router.navigate(['/budget-planner/dashboard']);
    
  }
  onProfile() {
    this.router.navigate(['/budget-planner/profile']);
  }

  onHistory() {
    this.router.navigate(['/budget-planner/history']);
  }

  onLogout() {
    this.router.navigate(['/budget-planner/login']);
  }
}
