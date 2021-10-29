//Gets the Focus so the user need not click the input element
                document.getElementById("task-Input").focus();
                var numTask = 0; //counter variable for number of tasks

                //Default function to add the input task..
                //will also be called by the event listener..
                //
                 function addTask(){
                    var currTask = document.getElementById("task-Input").value; //grabs the value from user input 
                    var preTasklbl =document.getElementById("preTask"); // gets the element to update to ler user know if sucessful or error
                    var errEmptyInp = "Sorry, you did not type anything yet  ...."; //stored the error message if empty
                    
                    //runs the code if the user input is NOT empty
                    if(currTask != ""){
                        numTask = numTask + 1; //increments the counter
                        let idli = "li"+numTask.toString();
                        let idbt = "bt"+numTask.toString();
                        let iid = "i"+numTask.toString();

                        //LIST ITEM <li></li>
                        var node=document.createElement("li"); //creates the element li <list item>
                        node.setAttribute("class","li-elim");
                        node.setAttribute("id",idli);
                        var textnode=document.createTextNode(currTask); // creating the text node with the user input
                        node.appendChild(textnode);//appends the user input to the node or li

                        //BUTTON 
                        var delBtn = document.createElement('button');
                        //delBtn.setAttribute("class","li-elim");
                        delBtn.setAttribute("id",idbt);
                        delBtn.setAttribute("onclick","removeTask("+idli+")");
                        delBtn.innerHTML = "DEL";
                        //DELETE-NOW
                        let icon = document.createElement('span');
                        delBtn.setAttribute("class","material-icons");
                        delBtn.innerHTML = "delete_forever";
                        delBtn.appendChild(icon);

                        node.appendChild(delBtn);
                        
                        
                        
                        document.getElementById("task-Ul").appendChild(node); //appends as a child of ol on the screen
                        document.getElementById("pTaskLbl").innerHTML = numTask; //updating the task count..
                        document.getElementById("task-Input").value = ""; //clearing the input
                        preTasklbl.innerHTML = "just added "+ currTask.bold() + " to your tasks."; // updates the user input is addedd sucessfully along with the input.. preTasklbl is assigned on top
                }else{ alert("Please enter the task below...");

                        preTasklbl.innerHTML = errEmptyInp.fontcolor("red");}

                }


                document.getElementById("task-Input").addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                     addTask();
                }});


                //Remove certain tasks
                function removeTask(x){
                    var liId = x.id;
                    let liit = document.getElementById(liId);
                    liit.remove();
                    numTask = numTask-1;
                    document.getElementById("pTaskLbl").innerHTML = numTask;


                }
