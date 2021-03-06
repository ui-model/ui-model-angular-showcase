import {Route, RouterModule} from '@angular/router';
import {UpdateTitleGuard} from './core/update-title.service';
import {showcaseRoutes} from './utils/showcase-routes';
import {Author} from './utils/author';
import {HomeComponent} from './showcase/home/home.component';
import {UpdateMetadataGuard} from './core/update-metadata-guard.service';
import {ShowcaseComponent} from './layout/showcase/showcase.component';

export const routes: Route[] = [
  {
    path: '',
    canActivateChild: [UpdateTitleGuard, UpdateMetadataGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          id: 'home',
          title: 'Home',
          authors: ['wzc'].map(Author.of),
        }
      },
      {
        path: '',
        component: ShowcaseComponent,
        children: showcaseRoutes,
      },
    ],
  },
];

export const routing = RouterModule.forRoot(routes);
