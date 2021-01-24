// Написати ф-ю <strong> showDeliveryStatus </strong> яка приймає
// масив і виводить на екран інформацію про доставку товара всіх
// типів.

// Якщо прогрес доставки 100 показувати строку "Done"</p>
// Якщо прогрес доставки < 100 показувати строку "In progress"</p>
// Якщо прогрес доставки null показувати строку "Ready for delivery"

const ordersA = [
  { name: "Phone", price: 12300, deliveryProgress: 50, type: 0 },
  { name: "Computer", price: 230000, deliveryProgress: 100, type: 1 },
  { name: "Tablet", price: 5000, deliveryProgress: null, type: 2 },
];

const ordersB = [
  { name: "Phone", price: 12300, deliveryProgress: 50, type: 0 },
  { name: "Tablet", price: 5000, deliveryProgress: null, type: 2 },
];

let showDeliveryStatus = (arr) => {
  for(let el of arr) {
    console.log(
      !el.deliveryProgress ? 'Ready for delivery' :
        el.deliveryProgress === 100 ? 'Done' :
          'In progress'
    )
  }
}

// другой способ )
// let showDeliveryStatus = (arr) => {
//   for(let el of arr) {
//     let values = Object.values(el)
//     if (!!~values.indexOf(100)) console.log('Done')
//     if (!!~values.indexOf(50)) console.log('In progress')
//     if (!!~values.indexOf(null)) console.log('Ready for delivery')
//   }
// }

showDeliveryStatus(ordersA) // "In Progress", "Done", "Ready for delivery"
showDeliveryStatus(ordersB) // "In progress", "Not Ordered", "Ready for delivery"