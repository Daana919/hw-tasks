// 4. Запросить у пользователя информацию для регистрации(логин, пароль, подтверждение пароля), проверить пароли на совпадение, 
//    если не совпадают вывести сообщение типа: Пароли не совпадают; также длинна пароля должна быть не менее 6ти символов и не может состоять из пробелов, 
//    сохранить данные в объект(подтверждение пароля не нужно сохранять), также по умолчанию добавить объекту ключ isAuth: false; 
//    после регистрации предложить пользователю авторизацию на сайте, если согласен, то запросить у него логин и пароль, сверить их с данными из объекта,
//     если все совпадает, то необходимо поменять значение ключа isAuth на true;

//  let username = prompt('Введите логин');
// const pass = prompt('Введите пароль');
// let passCon = prompt('Введите пароль повторно');
// let obj;

// if (pass === passCon && pass.trim().length >=6 && pass.trim()){
//      obj = {username, pass, isAuth: false }  
// let auth = confirm('авторизоваться на сайте?');{
// if (auth){
//     let login2 = prompt('Введите логин');
//     let pass2 = prompt('Введите пароль');
//     if (pass2 === obj.pass && login2 == obj.username){
//         obj.isAuth = true;
//     console.log(obj); 
//     } } else {
//         alert('Данные не совпадают')
//     }}}
//     else {
//         alert('Ошибка')
// }

// 3. Запросить у пользователя имя, возраст, профессию, хобби,
//  сохранить данные в объект, распечатать результат, данные необходимо заросить одним промптом

// let data = prompt('Введите имя, возраст, профессию, хобби');
// let obj = data.split(' ');
// let obj2 = {};
// obj2.name = obj[0];
// obj2.age = obj[1];
// obj2.pofession = obj[2];
// obj2.hobby = obj[3];


// // let obj2 = {
// // name: 'Helen',
// // };
// // obj2.name = 'Tom';
// // obj2.age = '17' 

// console.log(obj2);


6. //Дан объект с продуктами:
// let products = {
//     'Milk': 100,
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10
// }, запросить у пользователя одним промптом какие продукты он хочет приобрести, затем вывести сообщение с конечной суммой заказа 


// let products = {
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10,
//     'Milk': 100
// }
// let str = prompt('Какие продукты вы хотите приобрести?')
// let counter = 0;
// // let test = 70||50||20||30||10||100
// if (str === 'Sugar') {
//     alert(counter + 70) 
// } else if (str === 'Butter') {
//     alert(counter + 50) 
// } else if (str === 'Bread') {
//     alert(counter + 20) 
// } else if (str === 'Water') {
//     alert(counter + 30) 
// } else if (str === 'Salt') {
//     alert(counter + 10) 
// } else if (str === 'Milk') {
//     alert(counter + 100) 
// }  

//не решено


//1. Написать программу, которая будет имитировать счет в банке, сначала пользователю предлагается внести сумму на депозит(сумма должна быть положительной), 
// затем необходимо спросить у пользователя, хочет ли он пойти за покупками, если нет, вывести сообщение типа: До встречи! Если он выберет вариант покупок, 
// тогда необходимо запросить ифнормацию о том, какой продукт он хочет купить и сколько он стоит(макс 3 продукта), продукты сохранить в отдельный объект в 
// формате(название продукта: цена), также необходимо отнять стоимость продуктов от счета в банке, необходимо проверить достаточно ли средств, если средств
//  недостаточно вывести ошибку. 
// В конце работы программа должна распечатать объект с покупками и оставшуюся сумму на счете

// let per = +prompt('Внесите сумму на депозит')
// let  bankAccount;


//     let con = confirm ('хотите ли пойти за покупками?')
//         if (con == false && per > 0) {
//             alert ('До встречи!') 
//     }
//         else if (con == true){ 
//         let milk = +prompt('сколько стоит молоко?')
//         let meat = +prompt('сколько стоит мясо?')
//         let onion = +prompt('сколько стоит лук?')
//         let obj = {milk:milk, 
//         meat:meat, 
//         onion:onion}
//         console.log(obj);

//         let ostatok = bankAccount - (+obj.milk) - (+obj.meat) - (+obj.onion);
//         console.log(ostatok);
//     if (bankAccount < (+obj.milk) + (+obj.onion) + (+obj.meat)) {
//         console.log('Недостаточно средств');
//     } else {
//         console.log(bankAccount - (+obj.milk) - (+obj.onion) - (+obj.meat));
//         alert(`Ваши покупки milk:${+obj.milk}, potato:${obj.onion}, meat:${obj.meat}, ostatok:${ostatok}`)
//     }
// } 

  


// 5. Дан объект: 
// {
//     username: 'Tom',
//     age: 35,
//     work: 'IT',
//     pet: {
//         type: 'Cat',
//         name: 'Barsik',
//         color: 'White',
//         age: 3
//     }
// }, запросить у пользователя информацию о том, какой ключ он хочет изменить и значение на которое нужно менять 
//данные под этим ключом, учесть, что есть вложенный объект

// let obj = {
//         username: 'Tom',
//         age: 35,
//         work: 'IT',
//         pet: {
//         type: 'Cat',
//         name: 'Barsik',
//         color: 'White',
//         age: 3
//         }}

//          let auth = prompt();
// // switch(auth){
//     case 'username':
//         let username = prompt();
//         obj.username = us;
//         break;
//     case 'age':
//         let age = prompt();
//         obj.age = age;
//         break; 
//     case 'work':
//         let work = prompt();
//         obj.work = work;
//         break;
//     case 'type':
//         let type = prompt();
//         obj.pet.type = type;
//         break;
//     case 'name':
//         let namepet = prompt();
//         obj.pet.type = namepet;
//         break;
//     case 'color':
//         let color = prompt();
//         obj.pet.color = color;
//         break;
//     case 'pet age':
//         let age2 = prompt();
//         obj.pet.age = age2;
//     }
//     console.log(obj);