let namasteBtn = document.querySelector('button');//this is DOM (Document object model ) here queryselctor is a funstion who selector the element
                  namasteBtn.addEventListener('click',inputMsg);//add event for that jab hum selector pe click karenge toh ek pop-up show hoga

                  function inputMsg(){
                      let name=prompt('Enter Name of Student ');  //prompt for display output and take input from user   it show pop-up
                      namasteBtn.textContent='Roll No.1  '  +name;
       
                    }