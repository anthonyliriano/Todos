import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { IAppState, todoReducer, INITIAL_STATE } from './redux/reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension){
    ngRedux.configureStore(todoReducer, INITIAL_STATE, [], devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}
