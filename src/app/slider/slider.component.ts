import { Component, OnInit } from '@angular/core';
import { ServicioFavoritoService } from '../servicio-favorito.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

  constructor(private servicioFavorito: ServicioFavoritoService) { }
  public listaDeVideos:Array<any> =[]
  ngOnInit(): void {
    this.servicioFavorito.disparadorDelEvent.subscribe(data=>{
      console.log('data resibida')
      console.log(data)
      this.listaDeVideos.push(data)
    })
  }

}
