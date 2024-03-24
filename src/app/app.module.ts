import{ HttpClientModule } from "@angular/common/http" ;
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModel } from "./app.routing.model";
import { BuyNowComponent } from './buy-now/buy-now.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle} from '@angular/material/dialog';
import { DialogueComponent } from './dialogue/dialogue.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { HttpService } from "./shared/services/http-data-services";
import { ProductService } from "./shared/services/product-data.service";
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
    declarations : [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        BuyNowComponent,
        DialogueComponent
     
    ],
    imports : [
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
        AppRoutingModel,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        MatDialogModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule
      
        
        
    ],
    providers : [ 
    provideAnimationsAsync(),
    HttpService,
    ProductService
  ],
    bootstrap : [AppComponent],
})

export class AppModule{}