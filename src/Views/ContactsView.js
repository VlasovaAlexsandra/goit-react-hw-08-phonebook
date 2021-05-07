import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Container from '../components/Container/index';
import ContactForm from '../components/Form/ContactForm/ContactForm';
import ContactList from '../components/Form/ContactList/ContactList';
import Filter from '../components/Form/Filter/Filter';
// import ContactsOperations from '../redux/Contacts/contacts-operations';
// import ContactsSelectors from '../redux/Contacts/contacts-selectors';

// const barStyles = {
//     display: 'flex',
//     alignItems: 'flex-end',
//     marginBottom: 20,
// };

class ContactsView extends Component {


    // componentDidMount() {
    //     this.props.fetchContacts();
    // }

    render() {

        return (
            <Container>
                {/* <div style={barStyles}> */}
                <ContactForm />
                <Filter />
                {/* </div> */}

                <ContactList />
            </Container>
        );
    }
}

// const mapStateToProps = state => ({
//     isLoadingTodos: ContactsSelectors.getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//     fetchContacts: () => dispatch(ContactsOperations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
export default ContactsView;