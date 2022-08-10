import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';

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
  constructor(private loanService: LoanService,private router: Router) { }

  ngOnInit(): void {
   
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', Validators.required),
      loanamount: new FormControl('', [Validators.required]),
      loantype: new FormControl('', Validators.required),
      loanterm: new FormControl('', Validators.required),
      property: new FormControl('', Validators.required)
      
    });
    
  }
  submit(){
    console.log(this.form.value);
    this.loanService.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('loanDetails');
    })
  }
}

