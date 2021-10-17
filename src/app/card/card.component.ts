import { Component, OnInit, Input } from '@angular/core';
import { ServicioFavoritoService } from '../servicio-favorito.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;
  image:string;
  constructor(private servicioFavorito: ServicioFavoritoService) {
    this.image ='';  
    
  }
  ngOnInit(): void {
  }

  agregarFavorito(): void {
    console.log(this.dataEntrante)
    this.servicioFavorito.disparadorDelEvent.emit(this.dataEntrante);
  }
}
