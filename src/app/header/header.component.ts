import {Component, Inject, OnInit} from '@angular/core';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from '../shared/services/http-data-services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  ngOnInit(): void {
    this.htppServ.getProduct();
  }
  constructor(public dialog: MatDialog, private htppServ : HttpService ) {}

  openDialog() {
   const dialogRef =  this.dialog.open(DialogueComponent, {
      width : '600px',
      height: '600px',
      data: {
        MyName : 'Sourabh',
        FavoriteNo : '03'
     
      },
    });
    dialogRef.afterClosed().subscribe({
      next : result => {
        console.log(`Dialog result: ${result}`);
      }
    });
  }
}
