import React, { useContext, Fragment, useEffect } from 'react';
import ContactContext from '../../context/Contact/contactContext';
import { ContactItem } from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';

export const Contacts = () => {
  const contactContext = useContext(ContactContext);

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  const { contacts, filtered, getContacts, loading } = contactContext;

  if (contacts && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered != null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact}></ContactItem>
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact}></ContactItem>
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
