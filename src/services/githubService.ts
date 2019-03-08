import GithubEventData from "../components/events/GithubEventData";

const githubApiUrl: string = 'https://api.github.com/users/';
const githubUsername: string = 'JeremyCarlsten';


export default class GithubService {

    public static getEvents():Promise<any> {
        const localStorageKey = `${githubUsername}-github-events`;
        const localStorageData = localStorage.getItem(localStorageKey);
        if(localStorageData == undefined){
            return fetch(githubApiUrl + githubUsername + '/events')
            .then((response: any) => {
                if(response.status === 200){
                    let contentType = response.headers.get('Content-Type')
                    if (contentType && contentType === 'application/json') {
                        let data:any = response.clone();
                        
                        data.json()
                            .map((event: any) => new GithubEventData(event))
                            .sort((a:GithubEventData, b:GithubEventData) => {
                                return b.createdAt.getTime() - a.createdAt.getTime(); 
                            });
                            
                        localStorage.setItem(localStorageKey, response.text());
                        return data
                    }
                }
                return response
            });
        }else {
            return Promise.resolve(JSON.parse(localStorageData));
        }
    }

}