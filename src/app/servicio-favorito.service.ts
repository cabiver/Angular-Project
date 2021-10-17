import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFavoritoService {
  @Output() disparadorDelEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
