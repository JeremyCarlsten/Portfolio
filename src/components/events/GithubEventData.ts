const defaultEventHeaders: any = {
  "ForkEvent": "Forked project ",
  "WatchEvent": "Watched project "
}



export default class GithubEventData {
  public id: number | undefined;
  public header: string | undefined;
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
      this.createdAt = new Date();
    }
  }

  private initialize(event: any) {
    this.id = event.id;
    this.createdAt = new Date(event.created_at);
    switch(event.type){
      case('PushEvent'): {
          this.header = 'Pushed Commits to ' + this.parseRepositoryName(event);
          this.text = `${event.payload.distinct_size} commits on branch ${event.payload.ref.replace(/refs\/heads\//gi, '')}`
        break;
      }
      case('CreateEvent'): {
        this.handleCreateEvent(event);
        break;
      }
      case('IssueCommentEvent'): {
        this.header = `Commented on project ${this.parseRepositoryName(event)}`;
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
      default: {
        this.header = 'Oops...'
        this.text = '';
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