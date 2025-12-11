import { Routes } from '@angular/router';
import { HomepageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'sobre', component: AboutComponent }
];
