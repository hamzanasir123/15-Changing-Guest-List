

let Guest_list :string[] = ['Kashif','Waqas','Naveed','Azher'];

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + '\n\nIts my pleasure to invite you in our party.\n\nThankyou!\n\n') ;

}

let absent_Guest :string = 'Naveed' ;


let new_Guest :string = 'Hafeez Khan' ;

Guest_list[0] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + '\n\nIts my pleasure to invite you in our party.\n\nThankyou!\n\n') ;

}

console.log(`${absent_Guest} is not coming to the party.`)






