import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contato } from 'src/app/models/contato/contato.model';
import { Nota } from 'src/app/models/nota';

@Component({
  selector: 'app-nota-crud',
  templateUrl: './nota-crud.page.html',
  styleUrls: ['./nota-crud.page.scss'],
})
export class NotaCrudPage implements OnInit {
  ionicForm!: FormGroup;
  
  service = inject(ContatosService)
  contatos$!: Observable<Contato[]>;
  nota: Nota = new Nota; 

  searchEmissor: string = '';
  filterEmissor: Contato[] = [];

  constructor(public formBuilder: FormBuilder) {}
  ngOnInit() {

    this.contatos$ = this.service.getContatos()

    this.ionicForm = this.formBuilder.group({

      emissor: ['', [Validators.required]],
      destinatario: ['', [Validators.required]],
      items: [
        '',
      ]
    });
  }
  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm = () => {
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

  ionViewDidLoad() {
    this.setFilteredEmissor();
  }

  setFilteredEmissor(){
    console.log("Search value: " + this.ionicForm.get("emissor")!.value)
    this.service.filterContatos(  this.ionicForm.get("emissor")!.value  );
    this.filterEmissor = this.service.filterData
  }
  
  emissorChange(e:any) {
    console.log('ionChange fired with value: ' + JSON.stringify( e.detail ));
    this.ionicForm.get("emissor")!.patchValue( e.detail.value ) 
  }

  emissorFocus(e:any) {
    console.log('emissorFocus fired with value: ' + JSON.stringify( e.detail ));
  }
}
