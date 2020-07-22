import { getEvents } from './githubService';

function mockFetch(data, ok = true) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok,
      status: ok ? 200 : 500,
      json: () => data
    })
  );
}


describe('github-serivce', () => {
  const dummyData = [{
    id: "123",
    type: "PushEvent",
    actor: {
      login: "bogus"
    },
    repo: {
      name: 'Some Repo'
    },
    payload: {
      commits: [{}],
      ref: "bogus"
    }
  }]

  beforeEach(() => {
    window.sessionStorage.clear();
  })

  it('should get events from github', async () => {
    window.fetch = mockFetch(dummyData)

    let result = await getEvents();

    expect(result.length).toBe(1);
    expect(result[0].id).toBe("123")
    expect(window.sessionStorage.getItem('JeremyCarlsten-github-events')).not.toBe(null)
  });

  it('should get events from github none found', async () => { 
      window.fetch = mockFetch([], false)

      let result = await getEvents();

      expect(result.length).toBe(0);
  })
})