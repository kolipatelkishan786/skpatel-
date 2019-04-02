import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: 'index', redirectTo: '/index', pathMatch: 'full'},
  {path: '', component: IndexComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
