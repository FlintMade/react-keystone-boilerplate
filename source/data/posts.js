// ACTION TYPES
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';


// STATE
const initialState = {
  posts: [],
  loaded: false
};


// REDUCER
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case LOAD_POSTS_SUCCESS:
    return {...state,
      posts: action.result.posts,
      loaded: true
    };
  case LOAD_POSTS:
  case LOAD_POSTS_FAILURE:
  default:
    return state;
  }
}


// HELPERS
export function isLoaded(state) {
  return state.posts && state.loaded;
}


// ACTIONS
export function loadPosts() {
  return {
    types: [LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE],
    promise: (client) => client.get('/api/posts')
  };
}
