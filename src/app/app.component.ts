import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokemon';
  loadedFeature = 'pokemon';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
