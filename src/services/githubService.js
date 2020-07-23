
import {handleGithubEvent} from "../services/githubEventMapper";

const githubApiUrl = 'https://api.github.com/users/';
const githubUsername = 'JeremyCarlsten';

export function getEvents() {
    const sessionStorageKey = `${githubUsername}-github-events`;
    const sessionStorageData = sessionStorage.getItem(sessionStorageKey);
    
    if (sessionStorageData === null) {
        return fetch(githubApiUrl + githubUsername + '/events')
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let result = data
                    .map((event) => handleGithubEvent(event))

                if(process.env.NODE_ENV !== "development")
                    sessionStorage.setItem(sessionStorageKey, JSON.stringify(result));
                    
                return result
            }).catch((error) => {
                console.error(error)
                return error;
            });
    } else {
        return Promise.resolve(JSON.parse(sessionStorageData));
    }
}
