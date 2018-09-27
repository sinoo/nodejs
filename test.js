import expect from 'expect';
import * as actions from './reddit/actions';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import _ from 'lodash';

describe('actions', () => {
  it('should create an action to select a reddit', () => {
    const reddit = 'reactjs';
    const expectedAction = {
      type: actions.SELECT_REDDIT,
      reddit,
    };
    expect(actions.selectReddit(reddit)).toEqual(expectedAction);
  });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/**
 * 使用中间件模拟 Redux store
 */
function mockStor(getState, expectedActions, done) {
  if (!Array.isArray(expectedActions)) {
    throw new Error('expectedActions should be an array of expected actions.');
  }

  if (typeof done !== 'undefined' && typeof done !== 'function') {
    throw new Error('done should either be undefined or function.');
  }

  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ?
          getState() :
          getState;
      },

      dispatch(action) {
        const expectedAction = expectedActions.shift();

        try {
          expect(action).toEqual(expectedAction);
          if (done && !expectedActions.length) {
            done();
          }

          return action;
        } catch (e) {
          done(e);
        }
      },
    };
  }

  const mockStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(mockStoreWithoutMiddleware);

  return mockStoreWithMiddleware();
}

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', (done) => {
    nock('http://www.reddit.com')
      .get('/r/reactjs.json')
      .reply(200, { data: { children: [{ data:'child1' }, { data:'child2' }] } });

    const expectedActions = [
      { type: actions.REQUEST_POSTS, reddit: 'reactjs' },
      x => {
        delete x.receivedAt;
        console.log(x);
        if (!_.eq(x, { type: actions.RECEIVE_POSTS, reddit: 'reactjs', posts: ['child1', 'child2'] })) {
          throw Error('fff');
        }
      },
    ];
    const store = mockStore({ postsByReddit: { }, selectedReddit: 'reactjs' }, expectedActions, done);
    store.dispatch(actions.fetchPostsIfNeeded('reactjs'));
  });
});
