const message = document.querySelector('.message'),
      addbtn = document.querySelector('.add'),
      todo = document.querySelector('.todo'),
      btnDelete = document.querySelectorAll('.btnDelete')


      addbtn.addEventListener('click', () =>{
          if(message.value !== ''){
              todo.innerHTML +=`
                <li>
                   <span>${message.value}</span>
                   <button class='btnDelete'>удалить</button>
                </li>
              `

              message.value = ''

              

          }else{
              alert('введите текст')
          }
      })