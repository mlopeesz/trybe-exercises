// Importação do Redux
const Redux = require('redux');

// Action de Login
const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

// Constante com o estado inicial
const ESTADO_INICIAL = {
  login: false,
  email: "",
  };

// Criação do Reducer com o estado inicial  
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

// Criação da Store com o Reducer  
  const store = Redux.createStore(reducer);

// Console.log SEM a action
console.log(store.getState());

// Dispatch da Action
store.dispatch(fazerLogin("alguem@email.com"));

// Console.log COM a action
console.log(store.getState());
