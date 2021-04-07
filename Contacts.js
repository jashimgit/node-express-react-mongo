class Contacts {
    constructor() {
        this.contacts = [];
    }

    getAllContacts() {
        return this.contacts;
    }

    getContactById(id) {
        return this.contacts.find((contact) => contact.id === id);
    }

    createContact(contact) {
        contact.id = this.contacts.length + 1;
        this.contact.push(contact);
        return contact;
    }

    updateContactById(id, updatedContact) {
        const index = this.contacts.findIndex((contact) => contact.id === id);
        this.contacts[index].name = updatedContact.name || this.contacts[index].name;
        this.contacts[index].phone = updatedContact.phone || this.contacts[index].phone;
        this.contacts[index].email = updatedContact.email || this.contacts[index].email;

        return this.contacts[index];
    }

    deleteContactById(id) {
        const index = this.contacts.findIndex((contact) => contact.id === id);
        const deletedObj = this.contacts[index];

        this.contact = this.contacts.filter((contact) => contact.id !== id);
        return deletedObj;
    }
}

exports.contact = new Contacts();
