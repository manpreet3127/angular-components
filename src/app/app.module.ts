import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MyContainerComponent } from "./myContainer/myContainer.component";
import { MyTopnavContainer } from "./myContainer/topnav/topnav.component";
import { HeaderComponent } from "./myContainer/header/header.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MyContainerComponent,
    MyTopnavContainer,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
