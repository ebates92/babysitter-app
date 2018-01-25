const Parent = require('./parent');
const Babysitter = require('./babysitter');
const Filter = require('./filter');
const Faker = require('faker');
const Messages = require('./messages');

// generating random data variables
let randomData = () => {
    let babysitter_data = 
    {
        isnew: false,
        facebook_profile_id: Faker.random.number(),
        emailaddress: Faker.internet.email(),
        password: 'SuperH@rdP@ssw0rd',
        firstname: Faker.name.firstName(),
        lastname: Faker.name.lastName(),
        address: '30 Leslie Street NE',
        city: 'Atlanta',
        state: 'Georgia',
        zipcode: '30307',
        image: '/json_images/good-babysitter.jpg',
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
        isnew: false,
        facebook_profile_id: Faker.random.number(),
        emailaddress: Faker.internet.email(),
        password: 'SuperH@rdP@ssw0rd',
        firstname: Faker.name.firstName(),
        lastname: Faker.name.lastName(),
        address: '30 Leslie Street NE',
        city: 'Atlanta',
        state: 'Georgia',
        zipcode: '30307',
        image: '/json_images/good-babysitter.jpg',
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
Parent.sync({force:true})
.then(() => {
   Babysitter.sync({force:true}).then(()=>{
       Filter.sync({force:true}).then(()=> {
            create_all();
       });
   });
});

Messages.sync({force:true})
.then(()=> {
    console.log('created messages table')
}
)

// create all of the fake data
const create_all = () => {
    let promise = [];
    for (x=0; x < 15; x++) {
        let data = randomData()
            let babysitter_data = data[0];
            let filter_data = data[1];
            let parent_data = data[2];
            console.log(filter_data)
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

