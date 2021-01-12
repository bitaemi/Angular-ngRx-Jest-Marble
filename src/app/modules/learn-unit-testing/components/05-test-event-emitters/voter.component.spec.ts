import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('Integration Testing VoterComponent', () => {
    let component: VoterComponent;
    let fixture: ComponentFixture<VoterComponent>;
    beforeEach(() => {
        // for integration testing we cannot create the instance of the component
        // we need to ask Angular to create that instance for us
        // using utility methods from TestBed class we, fisrt create a dinamic module for our component
        TestBed.configureTestingModule({
            declarations: [VoterComponent] // for this simple component there's no need of imports or providers array
        });
        // now we instruct Angular to create the component
        // TestBed.createComponent(VoterComponent); // this returns a component fixture of type <VoterComponent>
        // so this component fixture is a wrapper over our component's instance and also over its template
        fixture = TestBed.createComponent(VoterComponent);
        // use it to get an instange of the component, can run change detection manually and also get one or more of the injected dependencies in this component,
        component = fixture.componentInstance;
        // the fixture.nativeElement = the root DOM element for this component's template
        // the fixture.debugElement = a wrapper around nativeElement providing useful methods for quering the DOM
    });

    it('should render total votes', () => {
        component.myVote = 1;
        component.othersVote = 20;
        // need to explicitlly tell Angular when to perform change detection because in testing env, it does not run as it normally does
        fixture.detectChanges();

        let debugElem = fixture.debugElement.query(By.css('vote-count')); // returns first HTML element that matches the interogation
        // can use By with .directive instead of .css and it will return the DOM element on which the specified directive is applied
        let el = debugElem.nativeElement; // debugElement is of type HTMLElement
        expect(el.innerText).toContain(21);// if we would have used toBe the test would have been too fragile
        // when working with strings better use toContain instead of toBe
    });

    it('should highlight the upvoted button, if I had upvoted', () => {
        component.myVote = 1;
        fixture.detectChanges();
        let debugElem = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
        // no need for native element to check for the existence of a class on the html element - use classes property of debugElem
        expect(debugElem.classes['highlighted']).toBeTruthy();
    });

    it('should increase total votes when I click the upvote button', () => {
        let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
        // we need to explicitly trigger the click:
        button.triggerEventHandler('click', null); // this is for integration testing
        // for Unit testing you will simply have: component.upVote();
        expect(component.totalVotes).toBe(1);
    });
});