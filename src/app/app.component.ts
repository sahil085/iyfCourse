import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public number: number;
  public email: string;

  onSubmit = () => {
    console.log(this.number, this.email);
  }
}
