import GithubEventData from "../components/events/GithubEventData";

const githubApiUrl: string = 'https://api.github.com/users/';
const githubUsername: string = 'JeremyCarlsten';


export default class GitlabService {

    constructor(){}

    getEvents():Promise<any> {
        
        return fetch(githubApiUrl + githubUsername + '/events')
            .then(res => res.json())
            .then((response: any) => {
                return response
                .map((event: any) => new GithubEventData(event))
                .sort((a:GithubEventData, b:GithubEventData) => {
                    return b.createdAt.getTime() - a.createdAt.getTime(); 
                });
            });
    }

}