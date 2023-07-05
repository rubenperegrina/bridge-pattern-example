import { AuthenticationProvider } from "../authentication/authentication-provider.interface";
import { User } from "./user";

export class RegularUser extends User {
    constructor(authenticationProvider: AuthenticationProvider) {
        super(authenticationProvider);
    }

    login(): void {
        console.log('Iniciando sesión como usuario regular.');
        this.authenticationProvider.authenticate();
    }

    logout(): void {
        console.log('Cerrando sesión como usuario regular.');
    }

    performAction(): void {
        console.log('Realizando acción permitida para usuario regular.');
        this.authenticationProvider.authorize();
    }
}