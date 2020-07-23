import { handleGithubEvent } from '../services/githubEventMapper';
import 'chance';

describe('githubEventMapper', ()=> {

    describe('createEvent', () => {
        it('should handle new project', () => {
            const createdAt = new Date();
            const description = chance.string();
            const event = createEvent('CreateEvent', createdAt, {ref_type: 'repository', description})

            const actual = handleGithubEvent(event)
            
            expect(actual.header).toEqual(`Created project ${event.repo.name}`)
            expect(actual.text).toEqual(description)
            expect(actual.createdAt).toEqual(createdAt)
        })

        it('should return default create event if no ref_type', () => {
            const createdAt = new Date();
            const description = chance.string();
            const event = createEvent('CreateEvent')

            const actual = handleGithubEvent(event)
            
            expect(actual).toEqual(undefined)
        })
    });
});

function createEvent(type, createdAt, payloadOverrides = {}){
    return {
        type,
        actor: {
            login: chance.name()
        },
        repo: {
            name: chance.name()
        },
        created_at: createdAt?.toISOString(),
        payload: {
            commits: [{message: chance.word()}],
            ref: chance.word(),
            issue: {
                title: chance.name(),
                number: chance.natural()
            },
            ...payloadOverrides
        }
    }
}