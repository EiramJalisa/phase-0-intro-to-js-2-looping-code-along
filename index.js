function writeCards(array, string){
    const messages = [] 
    for (let i = 0; i < array.length; i++) {
      messages.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
     debugger;
    }
    return messages;
  }
  
  function countDown (){
    let countDown = 0
    while (countDown < 11){
      console.log(countDown++)
    }
  }