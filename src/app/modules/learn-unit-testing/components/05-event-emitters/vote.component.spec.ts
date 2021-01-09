import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    // beause event emitter is an observabale we can subscribe to get the event raised
    // INITIALIZATION
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv);
    // ACT
    component.upVote();
    // expect(component.totalVotes).not.toBeNull(); this test will pass even though we have a bug in the component
    expect(component.totalVotes).toBe(1);
  });
});