import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { FriendListComponent } from "./friend-list/friend-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AuthGuard } from "./_guards/auth-guard";

export const appRoutes: Routes = [
  {path:'', component: HomeComponent}, //url 'de bir şey girilmemişse
  {path:'home', component: HomeComponent}, //url 'de home yazılmışsa
  {path:'members', component: MemberListComponent, canActivate:[AuthGuard]}, //url 'de members yazılmışsa
  {path:'friends', component: FriendListComponent, canActivate:[AuthGuard]}, //url 'de friends yazılmışsa
  {path:'messages', component: MessagesComponent, canActivate:[AuthGuard]}, //url 'de messages yazılmışsa
  {path:'**', component: NotfoundComponent} //url 'de yukarıdakilerden alakasız bir sey yazılmışsa
];
