import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        AppRouting,
        SharedModule
    ],

    declarations: [
        AppComponent,
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
