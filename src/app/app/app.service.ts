import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
//   errorData: {};

//   constructor(private http: HttpClient ) {}
//   getWeather(city) {
//     return this.http.get<any>( "https://api.openweathermap.org/data/2.5/weather?q=" +
// city +   "&appid=b89cb7922607189de06b409abde50291").toPromise();
//   }
  
//   private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       console.error("An error occurred:", error.error.message);
//     } else {
//       console.error(
//         `Backend returned code ${error.status}, ` + `body was: ${error.error}`
//       );
//     }
//     this.errorData = {
//       errorTitle: "Oops! Request for document failed",
//       errorDesc: "Something Bad happened. Please try again later."
//     };
//     return throwError(this.errorData);
//   }
}
