import { AuthenticationProvider } from "./authentication-provider.interface";

export class OAuthAuthenticationProvider implements AuthenticationProvider {
    authenticate(): void {
        console.log('Autenticando usuario mediante OAuth.');
    }

    authorize(): void {
        console.log('Autorizando usuario mediante OAuth.');
    }
}