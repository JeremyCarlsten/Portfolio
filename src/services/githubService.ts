import GithubEventData from "../components/events/GithubEventData";

const githubApiUrl: string = 'https://api.github.com/users/';
const githubUsername: string = 'JeremyCarlsten';



export default class GithubService {

    public static getEvents(): Promise<any> {
        const localStorageKey = `${githubUsername}-github-events`;
        const localStorageData = localStorage.getItem(localStorageKey);
        if (localStorageData == undefined) {
            return fetch(githubApiUrl + githubUsername + '/events')
                .then((response: any) => {
                    return response.json();
                })
                .then(data => {
                    let result = data.map((event: any) => new GithubEventData(event))
                        .sort((a: GithubEventData, b: GithubEventData) => {
                            return b.createdAt.getTime() - a.createdAt.getTime();
                        });

                    result = this.combineSimilarCommitEvents(result);

                    localStorage.setItem(localStorageKey, JSON.stringify(result));
                    return result
                }).catch((error) => {
                    console.error(error)
                    return error;
                });
        } else {
            console.log("sending localstorage");
            return Promise.resolve(JSON.parse(localStorageData));
        }
    }


    static combineSimilarCommitEvents(data: Array<GithubEventData>): any {
        let result: Array<GithubEventData> = []
        let previousEvent = data[0];
        //start at second item.
        for(let index = 1; index <= data.length; index++){
            data[index]
        }

        console.log('result ', result);
        return result;

    }

}