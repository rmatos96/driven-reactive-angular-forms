import { Component, OnInit } from '@angular/core';
import {DrivenComponent} from '../driven/driven.component'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  dname:string=''
  dlastname:string=''
  dusername:string=''
  dcpf:string=''
  dtelefone:string=''
  daddress:string=''
  dcomplemento:string=''
  dsenha:string=''
  dsenha2:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
