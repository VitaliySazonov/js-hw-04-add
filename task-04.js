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

let deliveryStatus = val => {
  return !val ? 'Ready for delivery' :
    val === 100 ? 'Done' :
      'In progress'
}

let showDeliveryStatus = arr => {
  let statuses = []
  for(let el of arr)
    statuses[el.type] = deliveryStatus(el.deliveryProgress)
  let result = []
  for (let item of statuses)
    !item ? result.push('Not Ordered') : result.push(item)
  console.log(result)
}

showDeliveryStatus(ordersA) // "In Progress", "Done", "Ready for delivery"
showDeliveryStatus(ordersB) // "In progress", "Not Ordered", "Ready for delivery"
