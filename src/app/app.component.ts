import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';
  username = ''

  empty_username()
  {
    this.username = ''
  }

  button_clicks = 0;
  button_clicks_arr:number[] = []

  log_clicks()
  {
    this.button_clicks += 1;
    this.button_clicks_arr.push(this.button_clicks);
  }

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  evenOrOdd(seconds: number)
  {
    if (seconds % 2 == 0)
    {
      this.evenNumbers.push(seconds);
    }
    else
    {
      this.oddNumbers.push(seconds);
    }
  }




  

}
