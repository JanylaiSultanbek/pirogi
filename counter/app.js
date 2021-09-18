const decrease = document.querySelector('.decrease'),
      reset = document.querySelector('.reset'),
      increase = document.querySelector('.increase'),
      number = document.querySelector('.num');
let counter = 0;

decrease.addEventListener('click', () => {
    counter--;
    hum()
})


increase.addEventListener('click', () => {
    counter++;
    hum()
})

reset.addEventListener('click', () => {
    counter = 0;
    hum()
});

function hum(params) {
    number.textContent = counter;
    if(counter == 0){
        number.style.color = 'grey'
    }else if( counter < 0 ){
        number.style.color = 'red'
    }else if(counter > 0){
        number.style.color = 'green'
    }
}
































// const decrease = document.querySelector('.decrease'),
//       reset = document.querySelector('.reset'),
//       increase = document.querySelector('.increase'),
//       number = document.querySelector('.num');
// let counter = 0;
 
// decrease.addEventListener('click', () =>{
//     counter--
//     hum();
// });

// increase.addEventListener('click', () =>{
//     counter++
//     hum();
// });

// reset.addEventListener('click', () =>{
//     counter = 0;
//     hum();
// })

// function hum(params) {
//     number.textContent = counter;
//     if(counter == 0){
//         number.style.color = 'grey'
//     } else if (counter < 0) {
//         number.style.color = 'red'
//     } else if (counter > 0) {
//         number.style.color = 'green'
//     }
// }





































// const decrease = document.querySelector('.decrease'),
//       reset = document.querySelector('.reset'),
//       increase = document.querySelector('.increase'),
//       number = document.querySelector('.num');
// let counter = 0;

// decrease.addEventListener('click', () =>{
//     counter++
//     number.innerText = counter;
//     if(counter > 0){
//         number.style.color = 'green'
//     }else if(counter == 0){
//         number.style.color = 'grey'
//     }
//     console.log('kaka');
// });
// increase.addEventListener('click', () =>{
//     counter--;
//     number.innerText = counter;
//     if(counter < 0){
//         number.style.color = 'red'
//     }else if(counter == 0){
//         number.style.color = 'grey'
//     }
// });
// reset.addEventListener('click', () =>{
//     counter = 0;
//     number.innerText = counter;
//     number.style.color = 'grey';
    
// });



































































// const decrease = document.querySelector('.decrease'),
//       reset = document.querySelector('.reset')
//       increase = document.querySelector('.increase'),
//       number = document.querySelector('.num');
// // let counter = 0;

// decrease.addEventListener('click', () =>{
//     counter++;
//     number.innerText = counter;
//     number.style.color = "green"
    
// });

// increase.addEventListener('click', () =>{
//     counter--;
//     number.innerText = counter;
//     number.style.color = "red"
    
// });

// reset.addEventListener('click', () =>{
//     number.innerText = 0;

//     console.log('kaka');
// });