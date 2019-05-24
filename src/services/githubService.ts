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
                 return response.json();
            })
            .then(data => {
                let result = data.map((event: any) => new GithubEventData(event))
                .sort((a:GithubEventData, b:GithubEventData) => {
                    return b.createdAt.getTime() - a.createdAt.getTime(); 
                });
                
                localStorage.setItem(localStorageKey, JSON.stringify(result));
                return result
            }).catch((error) => {
                console.error(error)
                return error;
            });
        }else {
            console.log("sending localstorage");
            return Promise.resolve(JSON.parse(localStorageData));
        }
    }

}