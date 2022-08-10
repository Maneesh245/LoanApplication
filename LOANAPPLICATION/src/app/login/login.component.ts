import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { AuthResponseDto } from '../model/AuthResponseDto';
import { HttpErrorResponse } from '@angular/common/http';
// import { first } from 'rxjs/operators';


@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
  LoginDetails!: FormGroup;
    role!:string;
    returnUrl!: string;
    errorMessage: string = '';
    showError!: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
       
    ) {
       
    }

    ngOnInit() {
        this.LoginDetails = this.formBuilder.group({
            username: [null,Validators.required ],
            Password: [null,Validators.required]
          });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields


    Login() {
        

        // stop here if form is invalid
        if (this.LoginDetails.invalid) {
            return;
        }
        const credentials = JSON.stringify(this.LoginDetails.value);
      
        this.authenticationService.login(this.LoginDetails.value)
        .subscribe({
            next: (res:AuthResponseDto) => {
             if(res.isAuthSuccessful)
             {
             localStorage.setItem("Role", res.role);
             this.router.navigate(['/', 'loanDetails']);
             }
             else
             {
              alert(res.errorMessage)
                this.errorMessage =res.errorMessage;
                this.showError = true;
             }

          },
          error: (err: HttpErrorResponse) => {
            this.errorMessage = err.message;
            this.showError = true;
         
          }})
        }
}
