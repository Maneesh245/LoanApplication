import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { loandetail } from 'src/app/model/loandetail';
import { LoanService } from 'src/app/service/loan.service';


@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {

  loandetail!: loandetail;

           
  id!: number;
  form!: FormGroup;
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public loanService: LoanService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    this.loanService.find(this.id).subscribe((data: loandetail)=>{
      this.loandetail = data;
      console.log(data);
    }); 
       
    this.form = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, Validators.required),
      loanamount: new FormControl(null, [Validators.required]),
      loantype: new FormControl(null, Validators.required),
      loanterm: new FormControl(null, Validators.required),
      property: new FormControl(null, Validators.required)
      
    });
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.loanService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('loanDetails');
    })
  }
    
}