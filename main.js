const numberOfIngredients = 3; // Количество ингредиентов

let ingredientCalories = 0 //Калорийность ингредиента
let totalCalories = 0 //Общая калорийность блюда
let ingredientArray = [] //Массив для хранения калорий ингредиентов
let index = 0 //Индекс продукта

// Функция выводит текст в документ
function printText(text, className) {
  let paragraph = document.createElement('p')
  paragraph.textContent = text
  paragraph.classList.add(className)
  return paragraph
}

// Функция выводит один ингредиент с описанием
function listItemIngredient(index, title, caloriesPer100g, weight) {
  ingredientCalories = Math.round((caloriesPer100g * weight) / 100) //калорийность 1 ингредиента
  totalCalories = totalCalories + ingredientCalories // Прибавляем к общей калорийности блюда

  let listItem = document.createElement('li')
  listItem.classList.add('list__item')

  //переменная textContent принимает строку 
  let textContent = `
            ${index + ')'}
            ${title},
            калорийность: ${caloriesPer100g} ккал,
            вес: ${weight} гр,
            всего: ${ingredientCalories} ккал
            `

  //переменная принимает функцию,которая принимает 2 аргумента/ 
  // 1 аргумент название переменной с текстовым контентом и 2 аргумент название класса
  let paragraph = printText(textContent, 'list__item-paragraph')

  listItem.append(paragraph)
  return listItem
}

// Функция вывода суммарной калорийности блюда
function totalAllDishCalories(value) {

  const totalDishCalWrapper = document.createElement('div')
  totalDishCalWrapper.classList.add('total')

  let text = `Калорийность всего блюда: ${value} ккал`

  totalDishCalWrapper.append(text)
  return totalDishCalWrapper
}

const container = document.createElement('div')
container.classList.add('container')

const title = document.createElement('h1')
title.classList.add('subtitle')
title.textContent = `Калькулятор калорийности блюда`


let list = document.createElement('ul')
list.classList.add('list')

//Цикл принимает данные об ингредиенте и выводит их 
for (let i = 1; i <= numberOfIngredients; i++) {
  index++; // Увеличиваем индекс

  let nameOfIngredient = prompt(`Введите название ингредиента ${index}`);
  let caloriesOfIngredient = Number(prompt(`Введите калорийность ингредиента ${index}`));
  let weightOfIngredient = Number(prompt(`Введите вес ингредиента ${index}`));

  let listItem = listItemIngredient(index, nameOfIngredient, caloriesOfIngredient, weightOfIngredient);
  list.append(listItem);
}

//Блок калорийности всего блюда
let finalCalories = totalAllDishCalories(totalCalories)


// list.append(listItem1, listItem2, listItem3)
container.append(title, list, finalCalories)
document.body.append(container)