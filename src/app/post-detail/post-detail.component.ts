import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResService } from '../res.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {
  public respuesta:any;
  public form: FormGroup;
  constructor(
    private router:ActivatedRoute,
    private res:ResService,
    private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        text: ['', Validators.required]
      })
    
  }

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
  enviarData(id:number) {
    this.res.post(`assets/gets/titulos.json`,
    this.from.value)
      .subscribe(res =>{
        console.log(res)
      })
  }
}
