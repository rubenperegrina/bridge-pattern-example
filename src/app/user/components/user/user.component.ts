import { Component } from '@angular/core';
import { OAuthAuthenticationProvider } from '../../authentication/oauth-authentication-provider';
import { TokenAuthenticationProvider } from '../../authentication/token-authentication-provider';
import { RegularUser } from '../../user/regular-user';
import { AdminUser } from '../../user/admin-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  tokenAuthenticationProvider = new TokenAuthenticationProvider();
  oauthAuthenticationProvider = new OAuthAuthenticationProvider();

  createAdminUser() {
    const adminUser = new AdminUser(this.tokenAuthenticationProvider);
    adminUser.login(); // Iniciando sesión como administrador. Autenticando usuario mediante tokens.
    adminUser.performAction(); // Realizando acción permitida para administrador. Autorizando usuario mediante tokens.
    adminUser.logout(); // Cerrando sesión como administrador.
  }

  createRegularUser() {
    const regularUser = new RegularUser(this.oauthAuthenticationProvider);
    regularUser.login(); // Iniciando sesión como usuario regular. Autenticando usuario mediante OAuth.
    regularUser.performAction(); // Realizando acción permitida para usuario regular. Autorizando usuario mediante OAuth.
    regularUser.logout(); // Cerrando sesión como usuario regular.
  }
}
