export interface AuthenticationProvider {
    authenticate(): void;
    authorize(): void;
}