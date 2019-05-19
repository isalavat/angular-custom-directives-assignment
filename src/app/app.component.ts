import { Component } from '@angular/core';
/**
 * @source - https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/content
 * (Angular Course on Udemy.com)
 * Simple component containing arrays of even and odd numbers.
 * Also containing some properties for working with the custom
 * directives
 * @author salavat
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showOnlyOddNumbers: boolean;
  oddNumbers = [1, 3, 5, 7];
  evenNumbers = [2, 4, 6, 8];
  value = 3;
  constructor(){
    this.showOnlyOddNumbers = false;
  }
}
