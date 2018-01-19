const Parent = require('./parent')
const Babysitter = require('./babysitter')
// const Calendar = require('./calendar')
const Faker = require('faker');

// generating random data variables
let randomData = () => {
    let babysitter_data = 
    {
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
        maxchildren: '5',
        experience: '2-3 years',
        hourlyrate: Faker.random.number(),
        mileswilling: Faker.random.number(),
        agegroup: '7 months - 3 years',
        summary: Faker.lorem.sentences(),
        education: Faker.lorem.words(),
        institution: Faker.lorem.words(),
        languages: 'English, Spanish, Alien',
        transportation: 'on',
        smoke: 'on',
        pets: 'on',
        cats: '',
        dogs: 'on'
    }
    
    let calendar_data = null;

    let parent_data = {
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
        dog: 'on',
        cat:''
    };
    return [babysitter_data, calendar_data, parent_data]
}



// Create the tables anew
Parent.sync({force:true})
.then(() => {
   Babysitter.sync({force:true}).then(()=>{
    //    Calenar.sync({force:true}).then(()=> {
        Promise.all(create_all()).then(() => {
            process.exit()
        });
    //    })
   })
});

// create all of the fake data
const create_all = () => {
    let promise = [];
    for (x=0; x < 15; x++) {
        let data = randomData()
        // async(data) => {
            babysitter_data = data[0];
            // calendar_data = data[1];
            parent_data = data[2];
            let babysitter = Babysitter.create(babysitter_data);
            // let calendar = await Calendar.create(calendar_data);
            // calendar.setUser(babysitter);
            // calendar.save();
            let parent = Parent.create(parent_data);
        // })
        promise.push(parent);
    }
    return promise
};
