import { AuthenticationProvider } from "../authentication/authentication-provider.interface";

export abstract class User {
    protected authenticationProvider: AuthenticationProvider;

    constructor(authenticationProvider: AuthenticationProvider) {
        this.authenticationProvider = authenticationProvider;
    }

    abstract login(): void;
    abstract logout(): void;
    abstract performAction(): void;
}