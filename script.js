const qa = [
  {
    q: 'Для какого праздника сделан этот современный интернет подарок?',
    a: [
      {
        text: 'День рождения',
        bool: false,
      },
      {
        text: '8 марта',
        bool: false,
      },
      {
        text: 'Новый год',
        bool: true,
        linkPart: 'С',
      },
      {
        text: 'Говной день',
        bool: false,
      }
    ]
  },
  {
    q: 'Кому принадлежит подарок?',
    a: [
      {
        text: 'Влад и Кристина',
        bool: true,
        linkPart: 'НОВЫМ',
      },
      {
        text: 'Мне',
        bool: false,
      },
      {
        text: 'Рубан дед',
        bool: false,
      },
      {
        text: 'Говной день',
        bool: false,
      }
    ]
  },
  {
    q: 'Сколько пачек табака было закупленно на рынке?',
    a: [
      {
        text: 'Одна',
        bool: false,
      },
      {
        text: 'Десять',
        bool: false,
      },
      {
        text: 'Рубан дед',
        bool: false,
      },
      {
        text: 'Двадцать пять',
        bool: true,
        linkPart: 'ГОДОМ',
      }
    ]
  },
  {
    q: 'Лучший отпуск?',
    a: [
      {
        text: 'Турция',
        bool: false,
      },
      {
        text: 'Испания',
        bool: false,
      },
      {
        text: 'Партенит',
        bool: true,
        linkPart: 'ДРУЗЬЯ',
      },
      {
        text: 'Тайланд',
        bool: false,
      }
    ]
  },
  {
    q: 'Имя для лучшей машины?',
    a: [
      {
        text: 'Опель',
        bool: false,
      },
      {
        text: 'Мазда',
        bool: false,
      },
      {
        text: 'Рыгло',
        bool: true,
        linkPart: 'Я',
      },
      {
        text: 'Пежо',
        bool: false,
      }
    ]
  },
  {
    q: 'Подарок на день рождения в ялте?',
    a: [
      {
        text: 'Red Label',
        bool: true,
        linkPart: 'ОЧЕНЬ',
      },
      {
        text: 'Деньги',
        bool: false,
      },
      {
        text: 'Первый сэкз',
        bool: false,
      },
      {
        text: 'Без подарка',
        bool: false,
      }
    ]
  },
  {
    q: 'Кто боится ночевать один?',
    a: [
      {
        text: 'Рубан дед',
        bool: false,
      },
      {
        text: 'Савелий буйволенок',
        bool: false,
      },
      {
        text: 'Влад',
        bool: false,
      },
      {
        text: 'Кристина',
        bool: true,
        linkPart: 'РАД',
      },
    ]
  },
  {
    q: 'ВОПРОС ДЛЯ КРИСТИНЫ! Марка Витиной машины?',
    a: [
      {
        text: 'KIA',
        bool: false,
      },
      {
        text: 'Nissan',
        bool: false,
      },
      {
        text: 'Mazda',
        bool: false,
      },
      {
        text: 'Opel',
        bool: true,
        linkPart: 'БЫТЬ',
      },
    ]
  },
  {
    q: 'Где лучший в мире магазин лошадей?',
    a: [
      {
        text: 'Зоомагазин',
        bool: false,
      },
      {
        text: 'Великие луки',
        bool: true,
        linkPart: 'С',
      },
      {
        text: 'Санкт-Петербург',
        bool: false,
      },
      {
        text: 'Что происходит',
        bool: false,
      },
    ]
  },
  {
    q: 'С кем лучше всего отмечать новый год?',
    a: [
      {
        text: 'Без Рубана!',
        bool: false,
      },
      {
        text: 'Одному',
        bool: false,
      },
      {
        text: 'Родители',
        bool: false,
      },
      {
        text: 'В кругу друзей',
        bool: true,
        linkPart: 'ВАМИ',
      },
    ]
  },
];
let progressCount = 0;
let qaIndex = 0;

const winner = document.querySelector('#winner');
const linkButton = document.querySelector('#link-button');
let linkToGift = 'https://swipe98rus.github.io/xmas-quiz/';

//For test link button
linkButton.innerHTML = linkToGift;
//--------------------


const question = document.querySelector('#question');
const progress = document.querySelector('.determinate');
const answers = [
  document.querySelector('#answer1'),
  document.querySelector('#answer2'),
  document.querySelector('#answer3'),
  document.querySelector('#answer4'),
];

function updQuiz(){
  clearQuiz();
  fillQuiz(qa[qaIndex]);
}

function fillQuiz(qa){
  question.innerHTML = qa.q;
  answers.map( (ans, index) => {
    ans.childNodes[3].innerHTML = qa.a[index].text;
    ans.childNodes[1].onchange = () => {
      onChange(qa.a[index], ans.childNodes[3]);
    };
  })
}

function clearQuiz(){
  question.innerHTML = '';
  answers.map( ans => {
    ans.childNodes[1].checked = false;
    ans.childNodes[1].onchange = '';
    ans.childNodes[3].innerHTML = '';
    ans.childNodes[3].style.color = 'silver';
  })
}

function onChange(qa, ans){
  const text = qa.linkPart;
  const bool = qa.bool;

  if (bool) {
    if(qaIndex < 9 ) {
      ans.style.color = '#64dd17';
      progressCount += 10; 
      progress.style.width = `${progressCount}%`;
      linkToGift = `${linkToGift}${text}/`;
      linkButton.innerHTML = linkToGift;
      // linkButton.href = linkToGift;
      qaIndex += 1;
      setTimeout( () => {
        updQuiz();
      }, 1000)
    } else {
      ans.style.color = '#64dd17';
      progressCount += 10; 
      progress.style.width = `${progressCount}%`;
      linkToGift = `${linkToGift}${text}/`;
      linkButton.innerHTML = linkToGift;
      // linkButton.href = linkToGift;
      winner.style.display = 'block';
      winnerAnim();
    }
  } else {
    ans.style.color = '#ff3d00';
  }
}

fillQuiz(qa[qaIndex]);

function winnerAnim(){
let start =  Date.now();

let timer = setInterval(function() {
  // сколько времени прошло с начала анимации?
  let timePassed = Date.now() - start;

  if (timePassed >= 1500) {
    clearInterval(timer); // закончить анимацию через 2 секунды
    return;
  }

  // отрисовать анимацию на момент timePassed, прошедший с начала анимации
  draw(timePassed);

}, 20);

// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
function draw(timePassed) {
  winner.style.opacity = `${timePassed / 1500}`; 
}
};

