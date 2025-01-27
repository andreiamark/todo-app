import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoService } from './services/todo.services';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule to imports
  ],
  providers: [TodoService],
})
export class AppModule {}
