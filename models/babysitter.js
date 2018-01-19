const Sequelize = require('sequelize');
const connection = require('../database');

const Babysitter = connection.define('babysitter', {
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
        type: Sequelize.STRING,
        // allowNull: false,
        // validate: {
        //     is: {
                // arg: /^yes$|^no$/,
                // msg: 'The value for transportation must be yes or no.'
        //     }
        // }
    },
    smoke: {
        type: Sequelize.STRING,
        // allowNull: false,
        // validate: {
        //     is: {
                // arg: /^yes$|^no$/,
                // msg: 'The value for smoking must be yes or no.'
        //     }
        // }
    },
    pets: {
        type: Sequelize.STRING,
        // allowNull: false,
        // validate: {
        //     is: {
                // arg: /^yes$|^no$/,
                // msg: 'The value for liking pets must be yes or no.'
        //     }
        // }
    },
    cats: {
        type: Sequelize.STRING,
        // allowNull: false,
        // validate: {
        //     is: {
                // arg: /^yes$|^no$/,
                // msg: 'The value for liking cats must be yes or no.'
        //     }
        // }
    },
    dogs: {
        type: Sequelize.STRING,
        // allowNull: false,
        // validate: {
        //     is: {
                // arg: /^yes$|^no$/,
                // msg: 'The value for liking dogs must be yes or no.'
        //     }
        // }
    },
    SunMorning: {
        type: Sequelize.BOOLEAN
    },
    SunAfternoon: {
        type: Sequelize.BOOLEAN
    },
    SunEvening: {
        type: Sequelize.BOOLEAN
    },
    SunOvernight: {
        type: Sequelize.BOOLEAN
    },
    MonMorning: {
        type: Sequelize.BOOLEAN
    },
    MonAfternoon: {
        type: Sequelize.BOOLEAN
    },
    MonEvening: {
        type: Sequelize.BOOLEAN
    },
    MonOvernight: {
        type: Sequelize.BOOLEAN
    },
    TuesMorning: {
        type: Sequelize.BOOLEAN
    },
    TuesAfternoon: {
        type: Sequelize.BOOLEAN
    },
    TuesEvening: {
        type: Sequelize.BOOLEAN
    },
    TuesOvernight: {
        type: Sequelize.BOOLEAN
    },
    WedMorning: {
        type: Sequelize.BOOLEAN
    },
    WedAfternoon: {
        type: Sequelize.BOOLEAN
    },
    WedEvening: {
        type: Sequelize.BOOLEAN
    },
    WedOvernight: {
        type: Sequelize.BOOLEAN
    },
    ThurMorning: {
        type: Sequelize.BOOLEAN
    },
    ThurAfternoon: {
        type: Sequelize.BOOLEAN
    },
    ThurEvening: {
        type: Sequelize.BOOLEAN
    },
    ThurOvernight: {
        type: Sequelize.BOOLEAN
    },
    FriMorning: {
        type: Sequelize.BOOLEAN
    },
    FriAfternoon: {
        type: Sequelize.BOOLEAN
    },
    FriEvening: {
        type: Sequelize.BOOLEAN
    },
    FriOvernight: {
        type: Sequelize.BOOLEAN
    },
    SatMorning: {
        type: Sequelize.BOOLEAN
    },
    SatAfternoon: {
        type: Sequelize.BOOLEAN
    },
    SatEvening: {
        type: Sequelize.BOOLEAN
    },
    SatOvernight: {
        type: Sequelize.BOOLEAN
    }
});


// on first run you will need to enable force = true
connection.sync ({
    // force: true
}).then( () => {

});

module.exports = Babysitter;