import GithubService from './githubService';

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
      window.localStorage.clear();
    })

    it('should get events from github', async () => {
        window.fetch = mockFetch(dummyData) 
        expect.assertions(2);

        let result = await GithubService.getEvents();
        console.log("result ", result)
        expect(result.length).toBe(1);
        expect(window.localStorage.getItem('JeremyCarlsten-github-events')).not.toBe(null)
    });

    it('should get events from github none found', async () => { 
        window.fetch = mockFetch([], false)
        expect.assertions(1);

      
        let result = await GithubService.getEvents();
        
        expect(result.length).toBe(0);
    })
})