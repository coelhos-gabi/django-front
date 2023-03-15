import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department } from '../model/department';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css'],
})
export class DepartmentFormComponent implements OnInit {
  @Input() department!: Department;
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.form = this.buildForm(this.formBuilder);
  }

  buildForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      departmentName: '',
    });
  }

  addData() {
    this.department = { ...this.form.value };
    console.log(this.department);
    this.departmentService.save(this.department).subscribe();
  }
}
