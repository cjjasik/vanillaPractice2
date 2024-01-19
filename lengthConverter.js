// 3. CREATE A LENGTH CONVERTER kilometers -> miles

/**
 * 
 * @param {Integer} km //kilometer input
 * @returns {Interger} //miles
 */

function kiloToMiles (km) {
    let miles = km * 0.62137;
    return miles;
}
console.log(kiloToMiles(10));