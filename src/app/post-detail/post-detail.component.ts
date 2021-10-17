import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResService } from '../res.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {
public respuesta:any;
  constructor(private router:ActivatedRoute, private res:ResService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap:any) =>{
      const {params} = paramMap
      this.cargarData(params)
    })
  }

  cargarData(id:number) {
    this.res.get(`assets/gets/titulos.json`)
      .subscribe(res =>{
        console.log(res)
        this.respuesta= res
      })
  }
}
