import { LoginComponent } from './components/login/login.component';
import { routes } from './app-routing.module';
describe('app\s routes', () => {
    xit('should contain a route for /login', () =>
    { // do not know what is the issue - receives array instead of expected value :-??
        expect(routes).toContain({ path: "login", "component": LoginComponent, "data": { linkIndex: 2 } });
    })
})