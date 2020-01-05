import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.css']
})
export class CreateVisitComponent implements OnInit {

  visitForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.visitForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    });
  }

  onSubmit(): void {
    console.log(this.visitForm.value);

  }

}
