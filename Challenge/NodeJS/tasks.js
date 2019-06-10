
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  var l = text.length;
  var input = text.split(" ");
 if (text === 'quit\n' || text === 'exit\n' ){
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else if(text === 'help\n')
  {
    help();
  }
  else if(text === 'list\n')
  {
    list();
  }
  
   else if(text.trim().slice(0,3) === 'add')
  {
    add(text,l);
  }
  else if (text.trim().slice(0,6) === 'remove') {
    remove(text);
  }

else if(input[0] === 'edit' || text === 'edit\n'){
  edit(input, text);
}
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log('hello' + "!" .trim());
  
}
function tex(text){
  console.log(text);
  
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}


/*
*List
*
*/

function list(){
  
  for(i=0; i<s.length;i++){
  console.log((i+1)+'.'+s[i])
  
}
}
/*
*ADD*/
function add(text,length){
   
  if(length>5){
    s.push(text.trim().substring(4,length))
  
  }
  else{
    console.log('error')
  }
}

/*
*Remove
*/
var s = ['hello\n','help\n','exit or quit\n'];

var objet = [{


   task1:'Hello',
    done : true},
    
  {task2: 'help',
  done : false

 },

  {task3: 'exit',
  done: true

},]

function remove(n){
  var number = n.charAt(7);
  if( n=='remove\n'){
    s.splice(s.length-1,1)
  }
  else if(number>s.length){
    console.log('Please enter the right number of task to remove');
  }
  else{
  for (number;number<s.length+1;number++){
    s.splice(number-1,1)
    break;
  }}
}
/*
*edit
*/
function edit(input,text){
  if(text === 'edit\n'){
    console.log('error')
  }
 else if(isNaN(parseInt(input[1]))){
   input.shift();
 s.splice(s.length-1,1,input.join(" "))

}
else{

  var whichTaskToEdit = input[1];

  input.shift();
  input.shift();

  s.splice(whichTaskToEdit-1,1,input.join(" ").replace("\n", ""))
}

}



///////////////////////////
// list all possible commands exists in code below.
// will list hello & quit .
///////////////////////////
function help(){
  console.log("-- hello [welcome message]" + "!".trim());
  console.log("-- quit OR exit [exit from app]"+ "!".trim());
}

// The following line starts the application
startApp("Amani")
