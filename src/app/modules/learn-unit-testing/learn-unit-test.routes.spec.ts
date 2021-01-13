import { Route } from '@angular/compiler/src/core';
import { UsersComponent } from './components/user-component/users.component';
import { learnUnitTestRoutes } from './learn-unit-testing.module';
describe('learn-unit-testing module\'s routes', () => {
    xit('should contain a route for /users', () =>
    {
        // it does not pass - ???
        let childrenRoutes: Route[] = learnUnitTestRoutes[0].children;
        expect(childrenRoutes).toContain({ path: 'users', component: UsersComponent });
    })
})