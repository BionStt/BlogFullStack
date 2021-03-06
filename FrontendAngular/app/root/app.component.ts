/**
 * App Root 
 * ----------------------
 *  1. set router
 *  2. check active user 
 *  3. navigate to user 
 */
import {Component} from 'angular2/core';
import {HomeComponent} from '../home/home.component';
import {ProfileComponent} from '../profile/profile.component';
import {Login} from '../login/login.component';
import {Signup} from '../signup/signup.component';
import {Fab} from '../fab/fab.component';
// ROUTER_DIRECTIVES : to user [routerLink] in navigation 
// RouteConfig : to set router configrations
import {ROUTER_DIRECTIVES,RouteConfig,Router} from 'angular2/router'
import {SharedService}from '../services/shared.service'
@Component({
    selector: 'my-app',
    templateUrl:'app/root/view/app.view.html',
    styleUrls:['app/root/style/app.styles.css'],
    directives:[HomeComponent,ProfileComponent,Login,Signup,Fab,ROUTER_DIRECTIVES]
})
// set router opjects 
@RouteConfig([ 
  {path:'/home',name:'Home',component:HomeComponent},
  {path:'/profile/:id',name:'Profile',component:ProfileComponent},
  {path:'/login',name:'Login',component:Login,useAsDefault:true},
  {path:'/signup',name:'Signup',component:Signup},
  // else
  {
    path: '/**',
    redirectTo: ['Login']
  }
])
export class AppComponent { 
  activeUser:any = null ;
  constructor(private sharedService:SharedService,private router:Router){

    sharedService.activeUserChange.subscribe(
      activeUser => { 
            console.log("root notified with active user change",activeUser);
            if(activeUser && activeUser.hasOwnProperty('id')){
              //navigate to home
               this.router.navigate(['Home',{}]);
            }else{
              // navigate to login page
              this.router.navigate(['Login',{}]);
            }
            this.activeUser = activeUser ;
          }
    )
  }
}