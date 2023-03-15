import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, Observable } from 'rxjs';
import { DepartmentFormComponent } from '../department-form/department-form.component';
import { Department } from '../model/department';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  dataSource!: Department[];
  displayedColumns: string[] = ['DepartmentId', 'DepartmentName', 'actions'];

  constructor(
    private departmentService: DepartmentService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.departmentService
      .getAll()
      .subscribe((departments) => (this.dataSource = departments));
  }

  openDialog() {
    const dialogRef = this.dialog.open(DepartmentFormComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  updateData(id: number) {}
  removeData(id: number) {
    this.departmentService.delete(id).subscribe();
  }
}
