let filterBabysitters = (parent_filters) => {
    let f = {}
    // hourlyrate = parent_filters.hourlyrate,
        f.transportation = parent_filters.transportation,
        f.smoke = parent_filters.smoke,
        f.sun_morning = parent_filters.sun_morning,
        f.sun_afternoon = parent_filters.sun_afternoon,
        f.sun_evening = parent_filters.sun_evening,
        f.sun_overnight = parent_filters.sun_overnight,
        f.mon_morning = parent_filters.mon_morning,
        f.mon_afternoon = parent_filters.mon_afternoon,
        f.mon_evening = parent_filters.mon_evening,
        f.mon_overnight = parent_filters.mon_overnight,
        f.tues_morning = parent_filters.tues_morning,
        f.tues_afternoon = parent_filters.tues_afternoon,
        f.tues_evening = parent_filters.tues_evening,
        f.tues_overnight = parent_filters.tues_overnight,
        f.wed_morning = parent_filters.wed_morning,
        f.wed_afternoon = parent_filters.wed_afternoon,
        f.wed_evening = parent_filters.wed_evening,
        f.wed_overnight = parent_filters.wed_overnight,
        f.thurs_morning = parent_filters.thurs_morning,
        f.thurs_afternoon = parent_filters.thurs_afternoon,
        f.thurs_evening = parent_filters.thurs_evening,
        f.thurs_overnight = parent_filters.thurs_overnight,
        f.fri_morning = parent_filters.fri_morning,
        f.fri_afternoon = parent_filters.fri_afternoon,
        f.fri_evening = parent_filters.fri_evening,
        f.fri_overnight = parent_filters.fri_overnight,
        f.sat_morning = parent_filters.sat_morning,
        f.sat_afternoon = parent_filters.sat_afternoon,
        f.sat_evening = parent_filters.sat_evening,
        f.sat_overnight = parent_filters.sat_overnight
    return f;
}

module.exports = filterBabysitters;