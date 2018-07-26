"use strict";

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    add(info) {
        this.contacts.push(info);
    }

    printAll(info) {
        let contactsLen = this.contacts.length;
        for (let i = 0; i < contactsLen; i++) {            
            console.log(this.contacts[i]);
        }
    }
    // upDate();
}
class Contact {

    constructor(name, phone, email, relation) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.relation = relation;
    }
  
}

// const book = new AddressBook();
const book = new AddressBook();
book.add(new Contact("Jonathon", "3137892345", "jonB@yahoo.com", "Myself"));
// const contact2 = new AddressBook();
book.add(new Contact("Josh", "3135670098", "joshC@aol.com", "friend"))
console.log(book);
book.printAll();