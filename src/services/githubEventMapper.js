export function handleGithubEvent(event) {
    if (!event) {
        return {
            id: 0,
            header: "Oops...",
            text: "something has gone wrong here.",
            project: '',
            createdAt: getCreatedAt({})
        }
    }

    return initialize(event)
}

function initialize(event) {
    const eventType = event.type;

    if (eventType === 'CreateEvent') {
        return handleCreateEvent(event);
    }
    if (eventType === 'IssueCommentEvent') {
        return {
            header: `Commented on issue ${event.payload.issue.title} #${event.payload.issue.number}`,
            project: parseRepositoryName(event),
            createdAt: getCreatedAt(event),
            id: event.id,
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
            id: event.id,
            createdAt: getCreatedAt(event),
        }
    }
    if (eventType === 'WatchEvent') {
        return {
            header: `Watched project ${parseRepositoryName(event)}`,
            createdAt: getCreatedAt(event),
            id: event.id,
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

    if (type === 'repository') {
        return buildResponse(event, `Created project ${parseRepositoryName(event)}`, event.payload.description)
    }

    return undefined;
}

function handleIssuesEvent(event) {
    if (event.payload.action === 'opened') {
        return {
            header: `Created issue for project ${parseRepositoryName(event)}`,
            createdAt: getCreatedAt(event),
            id: event.id,
            text: event.payload.issue.title + ': ' + event.payload.issue.body
        }
    }

    if (event.payload.action === 'closed') {
        return {
            header: `Closed issue #${event.payload.issue.number} ${event.payload.issue.title}`,
            createdAt: getCreatedAt(event),
            id: event.id,
            project: parseRepositoryName(event),
            text: ''
        }
    }
}

function handlePullRequest(event){
    if(event.payload.action === 'opened'){
        return {
            header: `Created Pull Request`,
            createdAt: getCreatedAt(event),
            id: event.id,
            project: parseRepositoryName(event),
            text: event.payload.pull_request.body
        }
    }
    return undefined;
}

function parseRepositoryName(event) {
    let regex = new RegExp(`${event.actor.login}/`, "gi")
    return event.repo.name.replace(regex, '')
}

function buildResponse(event, header, text = ""){
    return {
        header,
        text,
        project: parseRepositoryName(event),
        id: event.id,
        createdAt: getCreatedAt(event),
    }
}

function getCreatedAt(event){
    if(!event.created_at) return new Date()

    return new Date(event.created_at)
}