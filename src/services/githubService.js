// import GithubEventData from "../components/events/GithubEventData";
import {handleGithubEvent} from "../components/events/GithubEventData";

const githubApiUrl = 'https://api.github.com/users/';
const githubUsername = 'JeremyCarlsten';

export function getEvents() {
    const localStorageKey = `${githubUsername}-github-events`;
    const localStorageData = localStorage.getItem(localStorageKey);
    console.log('localStorageData', localStorageData)
    if (localStorageData === null) {
        return fetch(githubApiUrl + githubUsername + '/events')
            .then((response) => {
                console.log('response', response)
                return response.json();
            })
            .then(data => {
                let result = data
                    .map((event) => handleGithubEvent(event))
                    .sort((a, b) => {
                        return b.createdAt.getTime() - a.createdAt.getTime();
                    });

                // result = this.combineSimilarCommitEvents(result);

                // localStorage.setItem(localStorageKey, JSON.stringify(result));
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


// function combineSimilarCommitEvents(data) {
//     let result = []
//     // let previousEvent = data[0];
//     //start at second item.
//     for(let index = 1; index <= data.length; index++){
//         data[index]
//     }

//     console.log('result ', result);
//     return result;

// }
