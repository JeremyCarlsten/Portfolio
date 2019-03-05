import EventData from "../components/events/EventData";

const githubApiUrl: string = 'https://api.github.com/users/';
const githubUsername: string = 'JeremyCarlsten';

const eventHeaderMapping: any = {
    "PushEvent": "Pushed Commits to ",
    "CreateEvent": "Created project ",
    "IssueCommentEvent": "Commented on project ",
    "ForkEvent": "Forked project ",
    "WatchEvent": "Watched project "
}

export default class GitlabService {

    constructor(){}

    getEvents():Promise<any> {
        
        return fetch(githubApiUrl + githubUsername + '/events')
            .then(res => res.json())
            .then((response: any) => {
                return response
                .map((event: any) => {
                    let header = eventHeaderMapping[event.type] + this.parseRepositoryName(event.repo.name);
                    
                    return new EventData(event.id, header, 'did something on gitlab', new Date(event.created_at));
                })
                .sort((a:EventData, b:EventData) => {
                    return b.createdAt.getTime() - a.createdAt.getTime(); 
                });
            });
    }

    private parseRepositoryName(reponame: string): string {
        let regex = /JeremyCarlsten\//gi
        return reponame.replace(regex, '')
    }
}