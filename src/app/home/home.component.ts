import { Component, OnInit } from '@angular/core';
import { ResService } from '../res.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public cards:any=[];
  constructor(private RestService: ResService){
    
  }
  ngOnInit(): void {
    this.cargarData();
  // this.cards = [
    // {
    //   title: 'video 1', 
    //   subTitule:'hola',
    //   img:'https://image.api.playstation.com/vulcan/img/rnd/202011/0204/z1pq3XZqNdzOMreUCbJhaCN3.png'
    // },
    // {
    //   title: 'video 2', 
    //   subTitule:'hola',
    //   img:'https://www.smashbros.com/images/og/kirby.jpg'
    // }
  // ];
  }
  public cargarData(){
    this.RestService.get('../assets/gets/titulos.json')
      .subscribe(res => {
        console.log(res);
        this.cards = res;
      });
  }
}
