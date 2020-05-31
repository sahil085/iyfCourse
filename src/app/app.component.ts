import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {CommonResponse} from './common-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public number: number;
  public email: string;
  courseApiUrl = `${environment.apiUrl}/iyf/register`;

  constructor(private http: HttpClient) {
  }


  onSubmit = () => {
    if (!this.email || !this.number) {
      alert('Both fields are required');
    } else if (this.number && this.number.toString().length !== 10) {
      alert('Contact number is invalid');
    } else if (this.email && !this.validateEmail(this.email)) {
      alert('Email is not valid');
    } else {
      this.http.post<CommonResponse>(this.courseApiUrl, {email: this.email, mobileNumber: this.number})
        .subscribe(resp => {
          if (resp.successMessage) {
            alert('Thanks for verifying details. Session details will sent to your registered mobile number');
          }
          if(resp.errorMessage) {
            alert('Oops..! some error occured please try again');
          }
        });
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
