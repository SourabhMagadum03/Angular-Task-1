import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BuyNowComponent } from "./buy-now/buy-now.component";


const routes : Routes = [
    {path : '', component : HomeComponent},
    {path : 'BuyNow', component : BuyNowComponent},
   {path : '**', redirectTo : '/not-found'} //wildcard route
]


@NgModule({
   imports : [
    RouterModule.forRoot(routes)
   ],
   exports : [
    RouterModule
   ] 
})

export class AppRoutingModel{}