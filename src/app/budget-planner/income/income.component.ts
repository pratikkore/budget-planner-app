import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss',
})
export class IncomeComponent {
  incomeForm: any;
  selectedMonth: any;
  januaryIncomes: any[] = [
    { source: 'salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  februaryIncomes: any[] = [
    { source: 'salary', amount: 5000, investments: '401(k)' },
    { source: 'Rental Income', amount: 5000, investments: 'Real Estate' },
  ];
  marchIncomes: any[] = [
    { source: 'salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
    { source: 'rental Income', amount: 10000, investments: 'Real Estate' },
  ];
  monthSelected: boolean = false;

  constructor(public fb: FormBuilder, private router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleDateString('default', {
      month: 'long',
    });
  }
  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.januaryIncomes.push(newIncome);
          break;
        case 'February':
          this.februaryIncomes.push(newIncome);
          break;
        case 'March':
          this.marchIncomes.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({
        month: '',
        source: '',
        amount: '',
        investments: '',
      });
    }
  }
  onChange(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilterdIncomes();
  }

  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getIncomeForMonth(month)) {
      totalIncome += income.amount;
    }
    return totalIncome;
  }

  getIncomeForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.januaryIncomes;

      case 'February':
        return this.februaryIncomes;

      case 'March':
        return this.marchIncomes;
      default:
        return [];
    }
  }

  getFilterdIncomes() {
    let filterdIncome: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filterdIncome = [...this.januaryIncomes];
        break;

      case 'February':
        filterdIncome = [...this.februaryIncomes];
        break;

      case 'March':
        filterdIncome = [...this.marchIncomes];
        break;
      default:
        break;
    }
    return filterdIncome;
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }

  saveForm() {
    console.log('form saved!');
  }
}
