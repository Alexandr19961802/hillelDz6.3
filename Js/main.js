let contactBook = {
    contacts: [
      { name: "Александр", phone: "123456789", email: "olex@example.com" },
      { name: "Мария", phone: "987654321", email: "maria@example.com" }
    ]
  };
  
let seach="Александр"
let found="Не найдено"
for(let i=0;i<contactBook.contacts.length;i++){
    if(contactBook.contacts[i].name===seach){
        found=contactBook.contacts[i]
    }

}
console.log(found)
contactBook.contacts.push({name:"Иван",phone:"123455667",email:"ivan@example.com"})

console.log(contactBook.contacts)
