import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardService } from './card/card.service';
import { CustomRouteReuseStrategy } from './customReuseStrategy';
import { GeneralComponent } from './general/general.component';

const appRoutes: Routes = [
  { path: 'card/:id',
    component: CardComponent
  },
  {
    path:'general',
    component: GeneralComponent
  },
  { path: '',
    redirectTo: '/general',
    pathMatch: 'full'    
  },
  /*{ path: '**', component: PageNotFoundComponent }*/
];


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    },
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
