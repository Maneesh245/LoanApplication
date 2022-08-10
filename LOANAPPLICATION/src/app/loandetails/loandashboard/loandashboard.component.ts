import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loandetail } from 'src/app/model/loandetail';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { LoanService } from 'src/app/service/loan.service';


@Component({
  selector: 'app-loandashboard',
  templateUrl: './loandashboard.component.html',
  styleUrls: ['./loandashboard.component.css']
})
export class LoandashboardComponent implements OnInit {

  SearchDetail!: FormGroup;
   role!:string;  
  loandetails:loandetail[]=[];
  loandata:loandetail[]=[];

  constructor(private fb:FormBuilder,public loanService: LoanService,private route: Router,private authenticationService: AuthenticationService) {
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
 
    this.getalldata();
   
  }
  
   getalldata()
   {
    this.loanService.getAll().subscribe((data: loandetail[])=>{
      this.loandetails = data;
      this.loandata=data;
      console.log(this.loandetails);
      console.log(data);

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
         this.getalldata();
    })
  }
  SearchDetails()
  {
    this.loandata = this.loandetails.filter(item => (item.firstname == (this.SearchDetail.get('FirstName')!.value))|| (item.lastname == (this.SearchDetail.get('LastName')!.value))||(item.id == (this.SearchDetail.get('LoanNumber')!.value)));
    //this.posts = data;
      console.log(this.loandetails);
  } 
  Logout()
  {
    alert();
   this.authenticationService.logout();
  }
 
}