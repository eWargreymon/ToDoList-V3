import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public tarea: any
  ){ 
    
    this.formulario = new FormGroup({
      titulo: new FormControl('',[
        Validators.required,
        Validators.maxLength(15)
      ]),
      descripcion: new FormControl(),
      prioridad: new FormControl(),
      estado: new FormControl(),
      fecha: new FormControl(),
      id: new FormControl()
    });

    // console.log(tarea);

  }

  ngOnInit(): void {    
  }

  formValues(){
    this.formulario.value.estado = this.tarea.estado;
    this.formulario.value.fecha = Date.now();
    this.formulario.value.id = this.tarea.id;
    return this.formulario.value;
  }

}
