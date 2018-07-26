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

    deleteAt(index) {
        index = prompt("Enter Index Number To Delete ")
        this.contacts.splice(index,1);
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

const book = new AddressBook();
book.add(new Contact("Jonathon", "3137892345", "jonB@yahoo.com", "Myself"));
book.add(new Contact("Josh", "3135670098", "joshC@aol.com", "friend"))
console.log(book);
book.printAll();
book.deleteAt();
book.printAll();