const defaultEventHeaders: any = {
  "ForkEvent": "Forked project ",
  "WatchEvent": "Watched project "
}



export default class GithubEventData {
  public id: number | undefined;
  public header: string | undefined;
  public project: string | undefined;
  public text: string | undefined;
  public createdAt: Date;

  constructor(event:any) {
    if(event !== undefined){
      this.initialize(event);
      this.createdAt = event.created_at ? new Date(event.created_at) : new Date(); //separated from initializer for lack of undefined.
    } else {
      this.id = 0;
      this.header =  'Oops...';
      this.text =  'Something has gone wrong with this event.';
      this.project = ''
      this.createdAt = new Date();
    }
  }

  private initialize(event: any) {
    this.id = event.id;
    this.createdAt = new Date(event.created_at);
    switch(event.type){
      case('PushEvent'): {
          this.header = `Pushed ${event.payload.distinct_size} Commits on branch ${event.payload.ref.replace(/refs\/heads\//gi, '')}`
          this.project = this.parseRepositoryName(event);
          this.text = '';
          event.payload.commits.forEach((commit: any) => {
            this.text = this.text + "\n* " + commit.message
          });
  
        break;
      }
      case('CreateEvent'): {
        this.handleCreateEvent(event);
        break;
      }
      case('IssueCommentEvent'): {
        this.header = `Commented on issue ${event.payload.issue.title}(!${event.payload.issue.number})`;
        this.project = this.parseRepositoryName(event)
        this.text = event.payload.comment.body
        break;
      }
      case('PullRequestEvent'): {
        this.header = `Created Pull Request on project ${this.parseRepositoryName(event)}`;
        this.text = event.payload.pull_request.body
        break;
      }
      case('ForkEvent'): {
        this.header = `Forked project ${this.parseRepositoryName(event)}`;
        this.text = ''
        break;
      }
      case('WatchEvent'): {
        this.header = `Watched project ${this.parseRepositoryName(event)}`;
        this.text = ''
        break;
      }
      case('IssuesEvent'): {
        if(event.payload.action === 'opened'){
          this.header = `Created issue for project ${this.parseRepositoryName(event)}`;
          this.text = event.payload.issue.title + ': ' + event.payload.issue.body
        }
        else if(event.payload.action === 'closed'){
          this.header = `Closed issue ${event.payload.issue.title}`;
          this.text = `for project ${this.parseRepositoryName(event)}`;
        }
        else if(event.payload.action === 'created'){

        }
          break;
      }
      default: {
        this.header = 'Oops...'
        this.text = 'Looks like this event type is not parsed.';
      }
    }
  }

  private handleCreateEvent(event: any) {
    let type = event.payload.ref_type;
    if (type == 'branch') {
      this.header = `Created branch ${event.payload.ref} on ${this.parseRepositoryName(event)}`;
      this.text = '';
    }
    else if (type == 'repository') {
      this.header = `Created project ${this.parseRepositoryName(event)}`;
      this.text = event.payload.description;
    }
    else {
      this.header = 'Created ' + this.parseRepositoryName(event);
      this.text = `asdf`;
    }
  }

  private parseHeader(event: any): string {
    console.log(event);
    return defaultEventHeaders[event.type] + this.parseRepositoryName(event);
  }

  private parseRepositoryName(event: any): string {
    let regex = new RegExp(`${event.actor.login}/`, "gi")
    return event.repo.name.replace(regex, '')
  }
}