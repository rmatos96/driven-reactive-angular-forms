import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component implements OnInit {

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
