const eventHeaderMapping: any = {
  "CreateEvent": "Created project ",
  "IssueCommentEvent": "Commented on project ",
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
        console.log(event.payload)
          this.header = 'Pushed Commits to ' + this.parseRepositoryName(event);
          this.text = `${event.payload.distinct_size} commits on branch ${event.payload.ref.replace(/refs\/heads\//gi, '')}`
        break;
      }
      default: {
        this.header = this.parseHeader(event);
        this.text = this.parseEventText(event);
      }
    }
   
  }

  private parseHeader(event: any): string {
    return eventHeaderMapping[event.type] + this.parseRepositoryName(event);
  }

  private parseRepositoryName(event: any): string {
    let regex = new RegExp(`${event.actor.login}/`, "gi")
    return event.repo.name.replace(regex, '')
  }

  private parseEventText(event: any): string {
      return 'Did something on github';
  }
}