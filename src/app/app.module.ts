import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from './recipes/recipe.service';
import { AuthInterceptor } from './shared/auth.interceptor';
import { DataStorageService } from './shared/data-storage.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesModule } from './recipes/recipes.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RecipesModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
