var faker = require('faker');

function generatePersons() {
    let persons = [];

    for (let id = 0; id <= 50; id++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email();
        let phone = faker.phone.phoneNumberFormat();
        let age = faker.random.number({min:25, max:55});
        let address = faker.address.streetAddress("###");
        let company = faker.company.companyName(0);

        persons.push({
            "age": age,
            "name": {
                "first": firstName,
                "last": lastName
            },
            "company": company,
            "email": email,
            "phone": phone,
            "address": address
        });
    }

    return { "persons-list": persons };
}
module.exports = generatePersons;