import { AuthenticationProvider } from "./authentication-provider.interface";

export class TokenAuthenticationProvider implements AuthenticationProvider {
    authenticate(): void {
        console.log('Autenticando usuario mediante tokens.');
    }

    authorize(): void {
        console.log('Autorizando usuario mediante tokens.');
    }
}