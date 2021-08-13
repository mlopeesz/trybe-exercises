function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.getElementById('days');

  for (let day in dezDaysList) {
    let monthDaysListItem = document.createElement('li');
    monthDaysListItem.innerText = dezDaysList[day];
    monthDaysListItem.className = 'day';

    if (dezDaysList[day] === 24 || dezDaysList[day] === 25 || dezDaysList[day] === 31) {
      monthDaysListItem.classList.add('holiday');
    }

    if (dezDaysList[day] === 4 || dezDaysList[day] === 11 || dezDaysList[day] === 18 || dezDaysList[day] === 25) {
      monthDaysListItem.classList.add('friday');
    }

    monthDaysList.appendChild(monthDaysListItem);
  }
}

createDaysOfTheMonth();

// Exercício 2
const holidayButton = document.createElement('button');

function createHolidayButton() {
  holidayButton.id = 'btn-holiday';
  holidayButton.innerText = 'Feriados'
  const divButton = document.querySelector('.buttons-container');
  divButton.appendChild(holidayButton);
}

createHolidayButton();

// Exercício 3

function holidayButtonEvent() {
  const getHolidays = document.querySelectorAll('.holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const newColor = 'white';

  holidayButton.addEventListener('click', function() {
    for (let i = 0; i < getHolidays.length; i += 1) {
      if (getHolidays[i].style.backgroundColor === backgroundColor) {
        getHolidays[i].style.backgroundColor = newColor;
      } else {
        getHolidays[i].style.backgroundColor = backgroundColor;
      }
    }
  })
}

holidayButtonEvent();