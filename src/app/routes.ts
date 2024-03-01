import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { FriendListComponent } from "./friend-list/friend-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AuthGuard } from "./_guards/auth-guard";
import { MemberDetailsComponent } from "./members/member-details/member-details.component";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { MemberEditResolver } from "./_resolver/member-edit.resolver";

export const appRoutes: Routes = [
  {path:'', component: HomeComponent}, //url 'de bir şey girilmemişse
  {path:'home', component: HomeComponent}, //url 'de home yazılmışsa
  {path:'members', component: MemberListComponent, canActivate:[AuthGuard]}, //url 'de members yazılmışsa
  {path:'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver}, canActivate:[AuthGuard]}, //url 'de members yazılmışsa
  {path:'members/:id', component: MemberDetailsComponent, canActivate:[AuthGuard]}, //url 'de members yazılmışsa
  {path:'friends', component: FriendListComponent, canActivate:[AuthGuard]}, //url 'de friends yazılmışsa
  {path:'messages', component: MessagesComponent, canActivate:[AuthGuard]}, //url 'de messages yazılmışsa
  {path:'**', component: NotfoundComponent} //url 'de yukarıdakilerden alakasız bir sey yazılmışsa
];
