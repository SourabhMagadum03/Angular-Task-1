import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../shared/services/http-data-services';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.scss'
})
export class DialogueComponent implements OnInit{
  submitted = false;
  myProductForm : FormGroup | any;
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private httpServ : HttpService){}
ngOnInit(){
  this.myProductForm = new FormGroup({
    productImg : new FormControl ('', [Validators.required]),
    productNam : new FormControl ('', Validators.required),
    productPri : new FormControl ('', [Validators.required]),
    productQun : new FormControl (''),
    
  });
}
createProduct(){
  this.submitted = true;
  console.log(this.myProductForm.value)
  this.httpServ.postProduct(this.myProductForm.value)
  this.myProductForm.reset();
}
}

