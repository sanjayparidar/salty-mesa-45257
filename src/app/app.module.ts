import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { DriversComponent } from './drivers/drivers.component';
import { OrdersComponent } from './orders/orders.component';

import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { FormsModule } from '@angular/forms';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { UnverifiedUserComponent } from './unverified-user/unverified-user.component';
import { GrdFilterPipe } from './grd-filter.pipe';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { TransactionComponent } from './transaction/transaction.component';
import { DetailstransactionComponent } from './detailstransaction/detailstransaction.component';
import { UnverifiedDriverComponent } from './unverified-driver/unverified-driver.component';
import { DriverCostConfigurationComponent } from './driver-cost-configuration/driver-cost-configuration.component';
import { ConfigurationOfCostComponent } from './configuration-of-cost/configuration-of-cost.component';




const appRoutes:Routes=[
  { path: '', component: LoginComponent},
  {path:'index',component:IndexComponent ,canActivate: [AuthGuard]},
  {path:'user',component:UserComponent,canActivate: [AuthGuard]},
  {path:'orders',component:OrdersComponent,canActivate: [AuthGuard]},
  {path:"pending_orders",component:PendingOrdersComponent},
  {path:"drivers",component:DriversComponent,canActivate: [AuthGuard]},
  {path:"addnewuser",component:AddNewUserComponent,canActivate: [AuthGuard]},
  {path:"unverified_user",component:UnverifiedUserComponent,canActivate: [AuthGuard]},
  {path:"transaction",component:TransactionComponent,canActivate:[AuthGuard]},
  {path:"detailtransaction/:id",component:DetailstransactionComponent,canActivate:[AuthGuard]},
  {path:"unverified_driver",component:UnverifiedDriverComponent,canActivate:[AuthGuard]},
  {path:"driver_cost_configuration",component:DriverCostConfigurationComponent,canActivate:[AuthGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    TopbarComponent,
    SidebarComponent,
    UserComponent,
    DriversComponent,
    OrdersComponent,
    
    PendingOrdersComponent,
    AddNewUserComponent,
    UnverifiedUserComponent,
    GrdFilterPipe,
    TransactionComponent,
    DetailstransactionComponent,
    UnverifiedDriverComponent,
    DriverCostConfigurationComponent,
    ConfigurationOfCostComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [LoginComponent,MyserviceService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
