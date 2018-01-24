const Faker = require('faker')

module.exports = (profile) => {

    let defaultParent = {
        isnew: true,
        facebook_profile_id: profile.id,
        emailaddress: Faker.internet.email(),
        password: 'SuperH@rdP@ssw0rd',
        firstname: 'undefined',
        lastname: 'undefined',
        address: '30 Leslie Street NE',
        city: 'Atlanta',
        state: 'Georgia',
        zipcode: '30307',
        image: '/json_images/good-babysitter.jpg',
        birthyear: '1988',
        birthmonth: '09',
        birthdate: '02',
        gender: 'undefined',
        boys: '3',
        boys_0_6months: '1',
        boys_7months_3years: '2',
        boys_4_6years: '0',
        boys_7_11years: '0',
        boys_12_years: '0',
        girls: '2',
        girls_0_6months: '0',
        girls_7months_3years: '0',
        girls_4_6years: '1',
        girls_7_11years: '0',
        girls_12_years: '1',
        dog: true,
        cat: true
    };

    return defaultParent;
}
