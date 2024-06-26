import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [MatIconModule, SideNavComponent, CommonModule],
})
export class DashboardComponent {
  constructor(private router: Router) {}
  // income
  lastMonthsIncome = ['January: $10000', 'february:$2100', 'march: $3213'];
  currentMonthdIncome = '$20000';

  // expense
  lastMonthsExpense = ['January: $10000', 'february:$2100', 'march: $3213'];
  currentMonthdExpense = '$20000';

  //todolist

  todoTransactions = [
    { description: 'Pay electricity bill' },
    { description: 'Submit monthly report' },
    { description: 'Buy groceries' },
    { description: 'Call isurance company' },
  ];

  //Current month income
  totalCurrentMonthIncome = 20000;
  totalCurrentMonthExpense = 1500;

  onIncome() {
    this.router.navigate(['/budget-planner/income']);
  }

  onExpense() {
    this.router.navigate(['/budget-planner/expense']);
  }

  onTodo() {
    this.router.navigate(['/budget-planner/todo']);
  }

  get currentMonthSavings(): number {
    return  this.totalCurrentMonthIncome-this.totalCurrentMonthExpense
  }
}
