import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  // Arrage
  // each test should run in an isolated world
  beforeAll(() => {
    // what needs to be executed before all tests
  });

  beforeEach(() => {
    // setup
    // before each test component should be reinitialized so that previously runned test won't affect running test
    component = new VoteComponent();
  })

  afterEach(() => {
    // tear down
  });

  it('should raise voteChanged event when upvoted', () => {
    // because event emitter is an observabale we can subscribe to get the event raised
    // INITIALIZATION
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv);
    // ACT
    component.upVote();
    // expect(component.totalVotes).not.toBeNull(); this test will pass even though we have a bug in the component
    expect(component.totalVotes).toBe(1);
  });
  
  // define as many tests as there are execution paths for all methods of the component
  // a test or spec is defined by it() function
  // this is in the case we do not have the event emitter:
  // it('should increment totalVotes when upvoted', () => {
  //   // Act - call a method
  //   component.upVote();
  //   // Assert
  //   expect(component.totalVotes).toBe(1);
  // });

  it('should decrement totalVotes when downvoted', () => {
    // Act - call a method
    component.downVote();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });

  afterAll(() => {
    // what needs to be executed after all tests
  })
});