import { Component, OnInit } from '@angular/core';
import { AdminUserService } from '../service/admin-user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminUserService: AdminUserService) { }
  instructors;
  students
  ngOnInit(): void {
    this.adminUserService.getInstructorsDetails()
    .pipe(first())
      .subscribe(
        data => {
          this.instructors = data;
        },
        error => {
          console.log('In Error')
          return console.log(error);
        })
        this.adminUserService.getStudentsDetails()
    .pipe(first())
      .subscribe(
        data => {
          this.students = data;
        },
        error => {
          console.log('In Error')
          return console.log(error);
        })

  }

}
