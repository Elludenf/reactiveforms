import { AppComponent } from './app.component';
import { AttributesListComponent } from './components/challenge/attributes-template/attributes-list/attributes-list.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { ErrorMessagesDirective } from './directives/error-messages.directive';
import { ChallengeDirective } from './directives/challenge.directive';
import { ValidatorsService } from './services/validators.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttributesTemplateComponent } from './components/challenge/attributes-template/attributes-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    AttributesListComponent,
    AttributesTemplateComponent,
    ErrorMessagesDirective,
    ChallengeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [ValidatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
