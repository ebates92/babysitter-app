const Sequelize = require('sequelize');
const connection = require('../database');

const Babysitter = connection.define('babysitter', {
    type: {
        type: Sequelize.STRING,
    },
    isnew: {
        type: Sequelize.BOOLEAN,
    },
    facebook_profile_id: {
        type: Sequelize.STRING,
    },
    emailaddress: {
        type: Sequelize.STRING,
        // unique: true,
        // allowNull: false,
        // validate: {
        //     is: {
        //         args: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //         msg: 'Please enter a valid email address.'
        //     }
        // }
    },
    password: {
        type: Sequelize.STRING,
        // allowNull: false,
        // validate: {
        //     is: {
        //         args: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        //         msg: 'Passwords must contain a combination of 6 characters, capital letters, lowercase letters and special characters.'
        //     }
        // }
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
    },
    city: {
        type: Sequelize.STRING,
    },
    state: {
        type: Sequelize.STRING,
    },
    zipcode: {
        type: Sequelize.INTEGER,
        // allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
    },
    birthyear: {
        type: Sequelize.INTEGER,
        // allowNull: false,
    },
    birthmonth: {
        type: Sequelize.INTEGER,
        // allowNull: false,
    },
    birthdate: {
        type: Sequelize.INTEGER,
        // allowNull: false,
    },
    gender: {
        type: Sequelize.STRING,
        // allowNull: false,
        // validate: {
        //     is: {
        //         args: /^male$|^female$/,
        //         msg: 'The value for gender must be either male or female.'
        //     }
        // }
    },
    maxchildren: {
        type: Sequelize.INTEGER,
    },
    experience: {
        type: Sequelize.STRING,
    },
    hourlyrate: {
        type: Sequelize.INTEGER,
        // allowNull: false,
    },
    mileswilling: {
        type: Sequelize.INTEGER,
        // allowNull: false,
    },
    agegroup: {
        type: Sequelize.STRING,
    },
    summary: {
        type: Sequelize.TEXT,
        // validate: {
            // len:{
            //     args: [20,150],
            //     msg: 'Please enter between 20 - 150 characters.'
            // }
        // }
    },
    education: {
        type: Sequelize.STRING,
    },
    institution: {
        type: Sequelize.STRING,
    },
    languages: {
        type: Sequelize.STRING,
        defaultValue: 'English',
    },
    transportation: {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
        // validate: {
        //     is: {
                // arg: /^yes$|^no$/,
                // msg: 'The value for transportation must be yes or no.'
        //     }
        // }
    },
    smoke: {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
        // validate: {
        //     is: {
                // arg: /^yes$|^no$/,
                // msg: 'The value for smoking must be yes or no.'
        //     }
        // }
    },
    pets: {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
        // validate: {
        //     is: {
                // arg: /^yes$|^no$/,
                // msg: 'The value for liking pets must be yes or no.'
        //     }
        // }
    },
    cats: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
        // allowNull: false,
        // validate: {
        //     is: {
                // arg: /^yes$|^no$/,
                // msg: 'The value for liking cats must be yes or no.'
        //     }
        // }
    },
    dogs: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
        // allowNull: false,
        // validate: {
        //     is: {
                // arg: /^yes$|^no$/,
                // msg: 'The value for liking dogs must be yes or no.'
        //     }
        // }
    },
    sun_morning: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    sun_afternoon: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    sun_evening: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    sun_overnight: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    mon_morning: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    mon_afternoon: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    mon_evening: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    mon_overnight: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    tues_morning: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    tues_afternoon: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    tues_evening: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    tues_overnight: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    wed_morning: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    wed_afternoon: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    wed_evening: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    wed_overnight: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    thurs_morning: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    thurs_afternoon: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    thurs_evening: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    thurs_overnight: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    fri_morning: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    fri_afternoon: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    fri_evening: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    fri_overnight: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    sat_morning: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    sat_afternoon: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    sat_evening: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    sat_overnight: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});


// // on first run you will need to enable force = true
// connection.sync ({
//     // force: true
// }).then( () => {

// });

module.exports = Babysitter;