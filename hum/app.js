const burger = document.querySelector('.burger'),
      remove = document.querySelector('.close'),
      nav = document.querySelector('nav');

      burger.addEventListener('click', () => {
        nav.style.right = '0'  
        console.log('kaka');
      })
      remove.addEventListener('click', () => {
          nav.style.right = '-100px'
      })







// const button = document.querySelectorAll('#toggle'),
//       nav = document.querySelector('nav');


// button.forEach((elem) => {
//     elem.addEventListener('click', ()=> {
//         nav.classList.toggle('kaka');
//     });
  
// });




// const arr = [1,2,3,4],
//     arr2 = [1,2,3,4];

//   const arr1 = arr.map((num) => {
//     return num+1
    
//   });
// console.log(arr1);




// setTimeout(() => {
//     console.log(1);
// }, 100);



// console.log(2);