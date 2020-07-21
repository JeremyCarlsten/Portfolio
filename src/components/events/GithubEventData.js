// const defaultEventHeaders = {
//   "ForkEvent": "Forked project ",
//   "WatchEvent": "Watched project "
// }

export function handleGithubEvent(event) {

    if (!event) {
        return {
            id: 0,
            header: "Oops...",
            text: "something has gone wrong here.",
            project: '',
            createdAt: new Date()
        }
    }

    return initialize(event)
}

function initialize(event) {
    const eventType = event.type;

    console.log('event', event)

    if (eventType === 'PushEvent') {
        const events = event.payload.commits.reduce((acc, commit) => {
            return acc + "\n* " + commit.message
        });

        return {
            header: `Pushed ${event.payload.distinct_size} Commits on branch ${event.payload.ref.replace(/refs\/heads\//gi, '')}`,
            project: parseRepositoryName(event),
            text: '',
            createdAt: new Date(),
            events
        }
    }
    if (eventType === 'CreateEvent') {
        return handleCreateEvent(event);
    }
    if (eventType === 'IssueCommentEvent') {
        return {
            header: `Commented on issue ${event.payload.issue.title} #${event.payload.issue.number}`,
            project: parseRepositoryName(event),
            createdAt: new Date(),
            text: event.payload.comment.body
        }
    }
    if (eventType === 'PullRequestEvent') {
        return handlePullRequest(event)
    }
    if (eventType === 'ForkEvent') {
        return {
            header: `Forked project ${parseRepositoryName(event)}`,
            text: '',
            createdAt: new Date(),
        }
    }
    if (eventType === 'WatchEvent') {
        return {
            header: `Watched project ${parseRepositoryName(event)}`,
            createdAt: new Date(),
            text: ''
        }
    }
    if (eventType === 'IssuesEvent') {
        return handleIssuesEvent(event)
    }

    return undefined


}

function handleCreateEvent(event) {
    let type = event.payload.ref_type;
    if (type === 'branch') {
        return {
            header: `Created branch ${event.payload.ref} on ${parseRepositoryName(event)}`,
            createdAt: new Date(),
            text: ''
        }
    }

    if (type === 'repository') {
        return {
            header: `Created project ${parseRepositoryName(event)}`,
            createdAt: new Date(),
            text: event.payload.description
        }
    }

    return {
        header: 'Created ' + parseRepositoryName(event),
        createdAt: new Date(),
        text: 'asdf'
    }
}

function handleIssuesEvent(event) {
    if (event.payload.action === 'opened') {
        return {
            header: `Created issue for project ${parseRepositoryName(event)}`,
            createdAt: new Date(),
            text: event.payload.issue.title + ': ' + event.payload.issue.body
        }
    }

    if (event.payload.action === 'closed') {
        return {
            header: `Closed issue #${event.payload.issue.number} ${event.payload.issue.title}`,
            createdAt: new Date(),
            project: parseRepositoryName(event),
            text: ''
        }
    }
}

function handlePullRequest(event){
    if(event.payload.action === 'opened'){
        return {
            header: `Created Pull Request`,
            createdAt: new Date(),
            project: parseRepositoryName(event),
            text: event.payload.pull_request.body
        }
    }
    if(event.payload.action === 'closed'){
        return {
            header: `Closed Pull Request #${event.payload.number}`,
            project: parseRepositoryName(event),
            createdAt: new Date(),
        }
    }
}

function parseRepositoryName(event) {
    let regex = new RegExp(`${event.actor.login}/`, "gi")
    return event.repo.name.replace(regex, '')
}