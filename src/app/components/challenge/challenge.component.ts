import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html'
})
export class ChallengeComponent {

  categories: string[] = ['Device info','Sensors','Settings','Commands', 'Metadata'];

  constructor() { }

}