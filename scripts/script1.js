"use strict";

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    add(info) {
        this.contacts.push(info);
        console.log(book);
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

do{
    const select = prompt("Would You Like To (A)dd, (D)elete, (P)rint Or (Q)uit? (A/D/P/Q)");
    switch (select.toLocaleLowerCase()){
        case "a": this.name = newName;
                  this.phone = newPhone;
                  this.email = newEmail;
                  this.relation = newRelation;
                  newName = prompt("Enter New Contact (Name).");
                  newPhone = prompt("Enter New Contact (Phone).");
                  newEmail = prompt("Enter New Contact (Email).");
                  newRelation = prompt("Enter New Contact (Relation).");
                  add();

    }
}
while(select !== "Q")
book.printAll();
book.deleteAt();
book.printAll();