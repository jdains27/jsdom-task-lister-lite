document.addEventListener("DOMContentLoaded", () => { // load the HTML before the javascript text.
  const handleForm = () => { //get form
    const taskForm = document.querySelector("#create-task-form"); 
    //submission eventlistener
    taskForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const taskInput = event.target.querySelector("#new-task-description");
      console.log(taskInput.value); //list task
      const taskList = document.createElement("li"); //create list
      taskList.innerText = taskInput.value; //assign data to li

      const taskUL = document.querySelector("#tasks"); //append li to ul
      taskUL.append(taskList);

      taskForm.reset(); //resets input field

      const deleteButton = document.createElement("button"); 
      deleteButton.innerText = 'delete';
      console.log(deleteButton);
      taskList.append(deleteButton);
      deleteButton.addEventListener("click", () => {
        //console.log("here")
        taskList.remove();
      });
    });
  };
  handleForm();
});
