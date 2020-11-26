const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.new,
        upcoming: action.payload.upcoming,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;

/*
A reducer is a function that determines changes to an application’s state. It uses the 
action it receives to determine this change. We have tools, like Redux, that help manage an 
application’s state changes in a single store so that they behave consistently.
*/
