let filterBabysitters = (parent_filters) => {
    let f = {}

    let filterNames = ['transportation', 'sun_morning', 'sun_afternoon', 'sun_evening', 'sun_overnight', 'mon_morning', 'mon_afternoon', 'mon_evening', 'mon_overnight',
        'tues_morning', 'tues_afternoon', 'tues_evening', 'tues_overnight', 'wed_morning', 'wed_afternoon', 'wed_evening', 'wed_overnight', 'thurs_morning', 'thurs_afternoon', 'thurs_evening', 'thurs_overnight',
        'fri_morning', 'fri_afternoon', 'fri_evening', 'fri_overnight', 'sat_morning', 'sat_afternoon', 'sat_evening', 'sat_overnight']

    // hourlyrate = parent_filters.hourlyrate
    // NEED TO ADD <

    // false, since parents would only want non-smokers if they select this
    if (parent_filters.smoke === false) {
        f.smoke = parent_filters.smoke
    }

    for (x = 0; x < filterNames.length; x++) {
        let testValue = `parent_filters.${filterNames[x]}`;
        let addToF = `f.${filterNames[x]}`;
        let value = `parent_filters.${filterNames[x]}`
        if (testValue === true) {
            addToF = value;
        };
        console.log(f)
    };


        // f.transportation = parent_filters.transportation,
        // f.smoke = parent_filters.smoke,
        // f.sun_morning = parent_filters.sun_morning,
        // f.sun_afternoon = parent_filters.sun_afternoon,
        // f.sun_evening = parent_filters.sun_evening,
        // f.sun_overnight = parent_filters.sun_overnight,
        // f.mon_morning = parent_filters.mon_morning,
        // f.mon_afternoon = parent_filters.mon_afternoon,
        // f.mon_evening = parent_filters.mon_evening,
        // f.mon_overnight = parent_filters.mon_overnight,
        // f.tues_morning = parent_filters.tues_morning,
        // f.tues_afternoon = parent_filters.tues_afternoon,
        // f.tues_evening = parent_filters.tues_evening,
        // f.tues_overnight = parent_filters.tues_overnight,
        // f.wed_morning = parent_filters.wed_morning,
        // f.wed_afternoon = parent_filters.wed_afternoon,
        // f.wed_evening = parent_filters.wed_evening,
        // f.wed_overnight = parent_filters.wed_overnight,
        // f.thurs_morning = parent_filters.thurs_morning,
        // f.thurs_afternoon = parent_filters.thurs_afternoon,
        // f.thurs_evening = parent_filters.thurs_evening,
        // f.thurs_overnight = parent_filters.thurs_overnight,
        // f.fri_morning = parent_filters.fri_morning,
        // f.fri_afternoon = parent_filters.fri_afternoon,
        // f.fri_evening = parent_filters.fri_evening,
        // f.fri_overnight = parent_filters.fri_overnight,
        // f.sat_morning = parent_filters.sat_morning,
        // f.sat_afternoon = parent_filters.sat_afternoon,
        // f.sat_evening = parent_filters.sat_evening,
        // f.sat_overnight = parent_filters.sat_overnight
    return f;
}

module.exports = filterBabysitters;