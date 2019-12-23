import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'repository',
    loadChildren: () =>
      import('@pimp-my-pr/pmp-web/repository/shell').then(
        m => m.PmpWebRepositoryShellModule
      )
  },
  {
    path: '',
    redirectTo: 'repository',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class ShellRoutingModule {}