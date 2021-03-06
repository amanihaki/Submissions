
/**
 * Starts the application
 * This is the function that is run when the app starts	
￼
HTMLCSSJAVASCRIPTSQLPHPBOOTSTRAPHOW TOPYTHONMORE XEXERCISES REFERENCES 

 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
// var path;
//     if(process.argv[2]){
//          path = process.argv[2];
//     }
//     else{
//          path = 'database.json';
//     }
  var fs=require('fs');


  //  save data when i type exit or quit.
const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

  function startApp(name){
  // if(!fs.existsSync(path)){
  //   storeData(task,path);
  //   }
  //   task= JSON.parse(loading(path));
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
  var splittingText = text.trim().split(" ");
  var input = text.split(" ");
 if (text === 'quit\n' || text === 'exit\n' ){
    quit();
  }
  else if(splittingText[0] === 'hello' || text == 'hello\n'){
    hello(splittingText);
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
  else if(text.trim() === 'done')
  {
    list2(text);
  }

else if(input[0] === 'edit' || text === 'edit\n'){
  edit(input, text);
}
else if(text === 'check\n' || input[0]=="check"){
  check(text,input );
}
else if(text === 'uncheck\n' || input[0]=="uncheck"){
  uncheck(text,input );
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
  // var tex=text.trim();
  console.log(text.join().replace('\n' , '').replace(',' , ' ') + "!")

}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  storeData(objects, 'database.json');
  console.log('Quitting now, goodbye!')
  process.exit();

}

/*
***Help
*
*
***/

function help(text){
  console.log("-- hello [welcome message]" + "!".trim());
  console.log("-- quit OR exit [exit from app]"+ "!".trim());
  console.log("-- list"+ "!".trim());
  console.log("-- check & uncheck" + "!".trim());
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

var objects = [{


      task:'Hello',
    done: false},

  
  { task: 'help',
  done: false}

 ,

  
    {task: 'exit',
  done: false

}]

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
/*
*list
*/
function list2(text){
 
      
  for(var i = 0; i<objects.length; i++){
  
    if(objects[i].done === true){
      console.log((i+1) +". [✓] "+objects[i].task + "  "+ objects[i].done)

    }else{
      console.log( (i+1) +". [ ] "+objects[i].task+ "  "+ objects[i].done)
    }

  }
}

/*
*Check and uncheck
*/

function check(text,input){
  if(text === 'check\n'){
    console.log('error')
  }  
  else if(input[0]==='check' && !isNaN(input[1])){
    
       if(objects[input[1]-1].done===false){
         
           objects[input[1]-1].done= true
         list2(text) ;
     }}}
 
     function uncheck(text,input){
      if(text === 'uncheck\n'){
        console.log('error')
      }  
      else if(input[0]==='uncheck' && !isNaN(input[1])){
        
           if(objects[input[1]-1].done===true){
             
               objects[input[1]-1].done= false
             list2(text) ;
         }}}

///////////////////////////
// list all possible commands exists in code below.
// will list hello & quit .
///////////////////////////


// The following line starts the application
startApp("Amani")
