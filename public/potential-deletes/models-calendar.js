const Sequelize = require('sequelize')
const connection = require('../database');

const availability = connection.define('availability', {
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
})