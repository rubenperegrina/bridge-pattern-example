import { AuthenticationProvider } from "../authentication/authentication-provider.interface";
import { User } from "./user";

export class AdminUser extends User {
    constructor(authenticationProvider: AuthenticationProvider) {
        super(authenticationProvider);
    }

    login(): void {
        console.log('Iniciando sesión como administrador.');
        this.authenticationProvider.authenticate();
    }

    logout(): void {
        console.log('Cerrando sesión como administrador.');
    }

    performAction(): void {
        console.log('Realizando acción permitida para administrador.');
        this.authenticationProvider.authorize();
    }
}