import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  GET_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  CLEAR_CONTACTS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: [action.payload, ...state.contacts],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.map((contact) => {
          return contact.id === action.payload.id ? action.payload : contact;
        }),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null,
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        loading: false,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        loading: false,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
