import GithubService from './githubService';
// import GithubEventData from '../components/events/GithubEventData';

function mockFetch(data: any, ok = true) {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok,
        status: ok ? 200 : 500,
        json: () => data
      })
    );
}
  

describe('github-serivce', () => {
   const dummyData = [{"id": "123", "type": "bogus"}]

    beforeEach(() => {
      window.sessionStorage.clear();
    })

    // it('should get events from github', async () => {
    //     window.fetch = mockFetch(dummyData) 
    //     expect.assertions(2);

    //     let result = await GithubService.getEvents();
    //     console.log("result ", result)
    //     expect(result.length).toBe(1);
    //     expect(window.sessionStorage.getItem('JeremyCarlsten-github-events')).not.toBe(null)
    // });

    // it('should get events from github none found', async () => { 
    //     window.fetch = mockFetch([], false)
    //     expect.assertions(1);

      
    //     let result = await GithubService.getEvents();
        
    //     expect(result.length).toBe(0);
    // })

    
    // it('should combine commit events within 1h for the same project', async () => { 
    //   window.fetch = mockFetch([{"id": 1, "type": "CommitEvent"}, {"id": 2, "type": "CommitEvent"}])
    //   expect.assertions(1);

    
    //   let result = await GithubService.getEvents();
      
    //   expect(result.length).toBe(1);
    // })

    it('combineLikeCommitEvents', () => {
      let result = GithubService.combineSimilarCommitEvents([new GithubEventData({"id": 1, "type": "CommitEvent"}), new GithubEventData({"id": 3, "type": "CommitEvent"}), new GithubEventData({"id": 2, "type": "CommitEvent"}),]);

      expect(result.length).toBe(1)
    })
})