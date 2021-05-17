import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { NecessaryitemComponent } from './necessaryitem/necessaryitem.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutUsComponent,
    HeaderComponent,
    
    ItemComponent,
    
    NecessaryitemComponent,
    
    AddUserComponent,
    
    UserListComponent,
    
    LoginComponent,
    
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  

    RouterModule.forRoot(
      [
        {
          path:'',
          component:HomeComponent
        }
        ,
        {
          path:'about-us',
          component:AboutUsComponent
        },

        {
          path:'item',
          component:ItemComponent
        }
        ,
        {
          path:'product',
          component:ProductComponent
        },
        {
          path:'necessaryitem',
          component:NecessaryitemComponent

        },
        {path:'add-user',component:AddUserComponent},
        {path:'login',component:LoginComponent},
        {path:'user_list',component:UserListComponent},
        {path:'payment',component:PaymentComponent}
        
      ]
    
       
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
