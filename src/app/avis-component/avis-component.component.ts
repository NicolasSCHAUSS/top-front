import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avis } from '../models'

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.css']
})
export class AvisComponentComponent implements OnInit {

  @Output() eventAvis: EventEmitter<Avis> = new EventEmitter<Avis>();
  
  constructor() { }

  like() {
    this.eventAvis.emit(Avis.AIMER);
  }

  dislike() {
    this.eventAvis.emit(Avis.DETESTER);
  }

  ngOnInit() {
  }

}
