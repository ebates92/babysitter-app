require('dotenv').config()

const Parent = require('./parent');
const Babysitter = require('./babysitter');
const Filter = require('./filter');
const Match = require('./match')
const Faker = require('faker');
const Messages = require('./messages');
const Authentication = require('./authentication')

// generating random data variables
let randomData = (index) => {
    let babysitter_data = 
    {
        authenticationId: index + 1,
        address: '30 Leslie Street NE',
        city: 'Atlanta',
        state: 'Georgia',
        birthyear: 1988,
        birthmonth: 09,
        birthdate: 02,
        gender: 'Female',
        maxchildren: '5',
        experience: '2-3 years',
        hourlyrate: Faker.random.number(),
        mileswilling: Faker.random.number(),
        agegroup: '7 months - 3 years',
        summary: Faker.lorem.sentences(),
        education: Faker.lorem.words(),
        institution: Faker.lorem.words(),
        languages: 'English, Spanish, Alien',
        transportation: true,
        smoke: true,
        pets: true,
        cats: false,
        dogs: true,
        sun_morning: true,
        sun_afternoon: true,
        sun_evening: true,
        sun_overnight: true,
        mon_morning: false,
        mon_afternoon: false,
        mon_evening: false,
        mon_overnight: true,
        tues_morning: true,
        tues_afternoon: false,
        tues_evening: false,
        tues_overnight: true,
        wed_morning: false,
        wed_afternoon: false,
        wed_evening: false,
        wed_overnight: false,
        thurs_morning: true,
        thurs_afternoon: true,
        thurs_evening: true,
        thurs_overnight: true,
        fri_morning: false,
        fri_afternoon: false,
        fri_evening: true,
        fri_overnight: true,
        sat_morning: true,
        sat_afternoon: true,
        sat_evening: false,
        sat_overnight: false
    }
    
    let filter_data = {
        transportation: true,
        smoke: true,
        hourlyrate: 15,
        sun_morning: true,
        sun_afternoon: true,
        sun_evening: true,
        sun_overnight: true,
        mon_morning: false,
        mon_afternoon: false,
        mon_evening: false,
        mon_overnight: true,
        tues_morning: true,
        tues_afternoon: false,
        tues_evening: false,
        tues_overnight: true,
        wed_morning: false,
        wed_afternoon: false,
        wed_evening: false,
        wed_overnight: false,
        thurs_morning: true,
        thurs_afternoon: true,
        thurs_evening: true,
        thurs_overnight: true,
        fri_morning: false,
        fri_afternoon: false,
        fri_evening: true,
        fri_overnight: true,
        sat_morning: true,
        sat_afternoon: true,
        sat_evening: false,
        sat_overnight: false
    };

    let parent_data = {
        authenticationId: (index + 16),
        address: '30 Leslie Street NE',
        city: 'Atlanta',
        state: 'Georgia',
        zipcode: '30307',
        birthyear: '1988',
        birthmonth: '09',
        birthdate: '02',
        gender: 'Female',
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
    return [babysitter_data, filter_data, parent_data]
}



// Create the tables anew
Authentication.sync({force:true})
    .then(() => {
        // createAuthentication()
        Babysitter.sync({force:true}).then(()=>{
            Parent.sync({force:true}).then(()=> {
                Filter.sync({force:true}).then(()=> {
                    Match.sync({force:true}).then(()=> {
                        createAuthentication()
                        create_all();
                    });
                });
            });
        });
    });

Messages.sync({force:true})
    .then(()=> {
        console.log('created messages table')
    }
)

const createAuthentication = () => {
    for (x=0; x < 15; x++) {
        Authentication.create({
            type: 'babysitter',
            isnew: true,
            facebook_profile_id: x,
            emailaddress: 'ebates92@gmail.com',
            firstname: Faker.name.firstName(),
            lastname: Faker.name.lastName(),
            image: '/json_images/good-babysitter.jpg',
        })
    }
    for (x=0; x < 15; x++) {
        Authentication.create({
            type: 'parent',
            isnew: true,
            facebook_profile_id: (x+15),
            emailaddress: 'ebates92@gmail.com',
            firstname: Faker.name.firstName(),
            lastname: Faker.name.lastName(),
            image: '/json_images/good-babysitter.jpg',
        })
    }
}

// create all of the fake data
const create_all = () => {
    let promise = [];
    for (x=0; x < 15; x++) {
        let data = randomData(x)
            let babysitter_data = data[0];
            let filter_data = data[1];
            let parent_data = data[2];
            let babysitter = Babysitter.create(babysitter_data);
            Parent.create(parent_data).then((parent) => {
                Filter.create(filter_data)
                    .then((filter) => {
                        filter.setParent(parent);
                        filter.save();
                    })
                })
            promise.push(babysitter);
    }
    return promise
};

