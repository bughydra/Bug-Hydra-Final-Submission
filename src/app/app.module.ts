import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuildingComponent } from './component/building/building.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { FloorComponent } from './component/floor/floor.component';
import { RoomComponent } from './component/room/room.component';
import { RoomLayoutComponent } from './component/room-layout/room-layout.component';
import {ResidentComponent} from "./component/resident/resident.component";

const routes: Routes = [
  {path: 'buildings', component: BuildingComponent},
  {path: 'floors/:id', component: FloorComponent},
  {path: 'rooms/:id', component: RoomComponent},
  {path: 'room/:id', component: RoomLayoutComponent},
  {path: 'residents/:id', component: ResidentComponent},
  {path: '', redirectTo: '/buildings', pathMatch: 'full'},
  {path: '**', redirectTo: '/buildings', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    FloorComponent,
    RoomComponent,
    RoomLayoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
