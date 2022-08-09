import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  form!: FormGroup;
  get f(){
    return this.form.controls;
  }
  constructor() { }

  ngOnInit(): void {
   
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', Validators.required),
      loanamount: new FormControl('', [Validators.required]),
      loantype: new FormControl('', Validators.required),
      loanterm: new FormControl('', Validators.required),
      Property: new FormControl('', Validators.required)
      
    });
    
  }
  submit(){
    console.log(this.form.value);
    
  }
}

