import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loandetail } from 'src/app/model/loandetail';
import { LoanService } from 'src/app/service/loan.service';


@Component({
  selector: 'app-loandashboard',
  templateUrl: './loandashboard.component.html',
  styleUrls: ['./loandashboard.component.css']
})
export class LoandashboardComponent implements OnInit {

  SearchDetail!: FormGroup;
   role!:string;  
   child ="Parent component";
  loandetails:loandetail[]=[
    {
    id :1,
    firstname: "Maneesh",
    lastname: "b",
    loanamount: 12,
    loantype: "Secured",
    loanterm: 1,
    Property: "qcwe"
},
{
  id :2,
  firstname: "roshani",
  lastname: "b",
  loanamount: 12,
  loantype: "Secured",
  loanterm: 1,
  Property: "qcwe"
},
{
  id :3,
  firstname: "a",
  lastname: "b",
  loanamount: 12,
  loantype: "Secured",
  loanterm: 1,
  Property: "qcwe"
}
  ]
  
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private fb:FormBuilder,public loanService: LoanService,private route: Router) {
    this.role= (localStorage.getItem("Role")!.toString());
    this.SearchDetail = this.fb.group({
      FirstName: [null,Validators.required ],
      LastName: [null,Validators.required],
      LoanNumber: [null,Validators.required]
    });
   }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.loanService.getAll().subscribe((data: loandetail[])=>{
      this.loandetails = data;
      console.log(this.loandetails);
    })  
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.loanService.delete(id).subscribe(res => {
         this.loandetails = this.loandetails.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
  SearchDetails()
  {
    alert(this.SearchDetail.get('FirstName')!.value);
    this.loandetails = this.loandetails.filter(item => (item.firstname == (this.SearchDetail.get('FirstName')!.value))|| (item.lastname == (this.SearchDetail.get('LastName')!.value))||(item.id == (this.SearchDetail.get('LoanNumber')!.value)));
    //this.posts = data;
      console.log(this.loandetails);
  } 
  Logout()
  {
    alert();
    localStorage.clear();
    this.route.navigate(['/', 'Login']); 
  }
}