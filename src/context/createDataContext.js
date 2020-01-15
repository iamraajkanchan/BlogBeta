import React from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    // actions = { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
      //boundAction[addBlogPost] = actions[addBlogPost](dispatch)
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
