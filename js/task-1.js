// Задача 1. Пакування товарів
//функція isEnoughCapacity обчислює, чи помістяться всі товари в контейнер при пакуванні.
// Функція оголошує два параметри: products, containerSize
// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.

function isEnoughCapacity(products, containerSize) {
    // змінна, у якій буде зберігатись кількість одиниць
    let quantity = 0;
    // перебираємо об'єкт products
    for (const product in products) {
    // на кожній ітерації до змінної quantity додаємо значення product
        quantity += products[product];
    // якщо значення змінної quantity більше за максимальну кількість одиниць (containerSize)
        if (quantity > containerSize) {
    // то повертаємо false
            return false;
        }
    }
    // в інакшому випадку повертаємо true
    return true;
    }

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false