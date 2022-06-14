import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qpsistemas';
  adicionados: any;



  dados($event: any): void {
    console.log($event);
    this.adicionados = $event;
  }
}
