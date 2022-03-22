import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog'
import { Dialog2Component } from '../dialog2/dialog2.component';

@Component({
  selector: 'reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent{
  
  dados:FormGroup=new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastname:new FormControl('', [Validators.required, Validators.minLength(5)]),
    username:new FormControl('', [Validators.required, Validators.minLength(5)]),
    cpf:new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
    contato:new FormArray([new FormControl('', [Validators.required, Validators.minLength(5)])]),
    address:new FormControl('', [Validators.required, Validators.minLength(5)]),
    complemento:new FormControl(''),
    senha:new FormControl('', [Validators.required]),
    senha2:new FormControl('', [Validators.required])
  })

  tel:FormArray=this.dados.get('contato')as FormArray

  senha1=this.dados.get('senha')as FormControl
  confirmarsenha=this.dados.get('senha2')as FormControl

  novo():void{
    this.tel.push(new FormControl('', [Validators.required, Validators.minLength(5)]))
  }
  
  constructor(public dialog:MatDialog){}

  submit():void{
    if(this.senha1.value!=this.confirmarsenha.value){
      alert('As senhas são diferentes')
    } else{
    
    let dialogRef = this.dialog.open(Dialog2Component)

    dialogRef.componentInstance.dname=(this.dados.get('name') as FormControl).value
    dialogRef.componentInstance.dlastname=(this.dados.get('lastname') as FormControl).value
    dialogRef.componentInstance.dusername=(this.dados.get('username') as FormControl).value
    dialogRef.componentInstance.dcpf=(this.dados.get('cpf') as FormControl).value
    dialogRef.componentInstance.dtelefone=(this.dados.get('contato') as FormControl).value
    dialogRef.componentInstance.daddress=(this.dados.get('address')as FormControl).value
    dialogRef.componentInstance.dcomplemento=(this.dados.get('complemento')as FormControl).value
    dialogRef.componentInstance.dsenha=(this.dados.get('senha')as FormControl).value
    }
  }
  }



