import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { loandetail } from '../model/loandetail';
import { LoanService } from './loan.service';

fdescribe('LoanService', () => {
  let service: LoanService;
  let Mockservice:HttpClient;
  
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      
      imports: [HttpClientModule],
      providers: [LoanService]
    });
    service = TestBed.inject(LoanService);
 

  });

     it('should getall data', () => {
     let mockresponse:loandetail[]=[
        {
          "id": 1,
          "firstname": "Maneesh",
          "lastname": "Nishad",
          "loantype": "Secured",
          "loanamount": 10000,
          "loanterm": 2,
          "property": "R2j54 Mohan garden"
        },
        {
          "id": 2,
          "firstname": "Pradeep",
          "lastname": "PAnday",
          "loantype": "Unsecured",
          "loanamount": 100200,
          "loanterm": 21,
          "property": "R244 Mohan garden"
        }
      ];
      spyOn(service,"getAll").and.returnValues(of(mockresponse));
      let response!:loandetail[];
      
      service.getAll().subscribe((data: loandetail[])=>{
        response = data;
      })  
      expect(response).toEqual(mockresponse);
   });
  
});
