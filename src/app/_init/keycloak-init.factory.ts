import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';


export function initializeKeycloak(keycloak: KeycloakService): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                await keycloak.init({
                    config: {
                        url: environment.keycloak.issuer,
                        realm: environment.keycloak.realm,
                        clientId: environment.keycloak.clientId
                    },
                    loadUserProfileAtStartUp: false,
                    initOptions: {
                        onLoad: 'check-sso',
                        silentCheckSsoRedirectUri: window.location.origin + '/assets/verify-sso.html',
                        flow: 'standard',
                        pkceMethod: 'S256',
                        checkLoginIframe: false
                    },
                    enableBearerInterceptor: true,
                    bearerPrefix: 'Bearer',
                    bearerExcludedUrls: ['/assets', '/public', '/cdn.lokos.in'] // ! add exclues here
                });

                // Listen for events to handle token refresh
                keycloak.keycloakEvents$.subscribe((event: any) => {
                    if (event && event.type === KeycloakEventType.OnTokenExpired) {
                        // Token has expired, try to refresh it
                        keycloak
                            .updateToken(0)
                            .then((refreshed) => {
                                if (refreshed) {
                                    console.log('Token refreshed successfully');
                                } else {
                                    // keycloak.login();
                                    console.error('Token refresh failed');
                                }
                            })
                            .catch((error) => {
                                console.error('Error during token refresh:', error);
                            });
                    }
                });

                resolve(keycloak);
            } catch (error) {
                reject(error);
            }
        });
    };
}
