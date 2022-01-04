const people = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(people,emotion){

  const displayArray = [];
  for(let i = 0; i < people.length; i++) { 
    displayArray.push(`Thank you, ${people[i]}, for the wonderful ${emotion} gift!`);
    } 
        return displayArray;
  }

writeCards(['Guadalupe', 'Ollie', 'Aki'], "surprise");

function countDown(){
    let count = 10;
    while (count >= 0) {
        console.log(count--);
    }
}
countDown(10);