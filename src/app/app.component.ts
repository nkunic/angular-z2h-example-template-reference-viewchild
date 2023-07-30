import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sendInput(input, channel) {
    // console.log(input);
    console.log(input.value);
    // console.log(channel);
    console.log(channel.innerText);
  }
}
