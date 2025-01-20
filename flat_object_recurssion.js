// consider below obj as input
const obj = {
    name: 'vinod',
    work: 'IT',
    address: {
        office: {
            name: 'Accenture',
            location: 'Bangalore'
        },
        personal: {
            name: 'home',
            location: {
                city: 'Bangalore',
                area: 'Nagarbhavi',
            }
        }
    }
};

/* Expected output return an object with only one level as sample provided below
result = {
    user_name: 'vinod',
    user_work: 'IT',
    user_address_office_name: 'Accenture',
    user_address_office_location: 'Bangalore',
    user_address_personal_name: 'home',
    user_address_personal_location_city: 'Bangalore',
    user_address_personal_location_area: 'Nagarbhavi'
}
*/

// ------ SOLUTION ------- //

let output = {};
const flatenObj = (obj, parent) => {
    for(keys in obj){
        if (typeof(obj[keys]) === 'object') {
            flatenObj(obj[keys], `${parent}_${keys}`);
        } else {
            const res_key = `${parent}_${keys}`
            output[res_key] = obj[keys];
        }
    }
}

flatenObj(obj,'user');
console.log(output);
