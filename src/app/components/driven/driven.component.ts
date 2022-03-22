import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css']
})
export class DrivenComponent {
  name:string=''
  lastname:string=''
  username:string=''
  cpf:string=''
  telefone:string=''
  address:string=''
  complemento:string=''
  senha:string=''
  senha2:string=''
  
  constructor(public dialog:MatDialog){}
  
  submit():void{
    if (this.senha!=this.senha2)
    return alert('Senhas Diferentes');else{
      console.log('Enviado')
    }
    const dialogRef = this.dialog.open(DialogComponent)

    dialogRef.componentInstance.dname=this.name
    dialogRef.componentInstance.dlastname=this.lastname
    dialogRef.componentInstance.dusername=this.username
    dialogRef.componentInstance.dcpf=this.cpf
    dialogRef.componentInstance.dtelefone=this.telefone
    dialogRef.componentInstance.daddress=this.address
    dialogRef.componentInstance.dcomplemento=this.complemento
    dialogRef.componentInstance.dsenha=this.senha
  }


  
}
