import { Component, OnInit } from '@angular/core';
import { Summary } from '../summary';
import { FinanceService } from '../finance.service';
import { Year } from '../year';
@Component({
    selector: 'app-finance',
    templateUrl: './finance.component.html',
    styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
    constructor(private financeService: FinanceService) {

    }


    summary: Summary;
    selectedYear: Year;

    getSummary(): void {
        this.financeService.getSummary().subscribe(summary => {
            this.summary = summary;
            this.selectedYear = summary.years.find(year => year.year === 2018);
        });
    }
    getYearSummary(selectedYearId) {
        this.selectedYear = this.summary.years.find(year => year.year === selectedYearId);
    }

    ngOnInit() {
        this.getSummary();
    }


}
