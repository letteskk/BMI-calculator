const countbutton = document.getElementById('count-button');

countbutton.onclick = function() {
    const height = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);
    let res = document.getElementById('result-number').textContent = Math.round((weight/(height/100)**2)*100)/100;
    if (res < 18.4) {
        addit.textContent = eng_flag ? '(underweight)' : '(дефицит веса)';
        addit.style.color = '#C0080B';
    } else if (res >= 18.4 && res <= 24.9) {
        addit.textContent = eng_flag ? '(normal weight)' : '(нормальный вес)';
        addit.style.color = '#0C9503';
    } else {
        addit.textContent = eng_flag ? '(overweight)' : '(избыточный вес)';
        addit.style.color = '#C0080B'; 
    }
};

const fembutton = document.getElementById('fem');
const malebutton = document.getElementById('male');

fembutton.onclick = function() {
    fembutton.style.backgroundColor = '#9b0f49';
    malebutton.style.backgroundColor = '#0847D8';
};
malebutton.onclick = function() {
    malebutton.style.backgroundColor = '#0d3081';
    fembutton.style.backgroundColor = '#F2116D';
};

let eng_flag = false;

const flag = document.getElementById('flag');
const header = document.getElementById('header');
const heightInput = document.getElementById('heightInput');
const weightInput = document.getElementById('weightInput');
const sexText = document.getElementById('sexText');
const resText = document.getElementById('resText');

flag.addEventListener('click', () => {
    if (!eng_flag) {
        flag.src = 'eng_flag.png';
        header.textContent = 'BMI Calculator';
        heightInput.textContent = 'enter your height';
        weightInput.textContent = 'enter your weight';
        sexText.textContent = 'your sex';
        fembutton.textContent = 'female'; 
        malebutton.textContent = 'male';   
        countbutton.textContent = 'calculate';
        resText.textContent = 'your result:';
        
        if (addit.textContent == '(дефицит веса)') addit.textContent = '(underweight)';
        else if (addit.textContent == '(нормальный вес)') addit.textContent = '(normal weight)';
        else if (addit.textContent == '(избыточный вес)') addit.textContent = '(overweight)';
        else if (addit.textContent == '(ошибка)') addit.textContent = '(error)';
        eng_flag = true;
    } else {
        flag.src = 'rus_flag.png';
        header.textContent = 'Калькулятор ИМТ';
        heightInput.textContent = 'введите ваш рост (см)';
        weightInput.textContent = 'введите ваш вес (кг)';
        sexText.textContent = 'ваш пол';
        fembutton.textContent = 'женский';
        malebutton.textContent = 'мужской';
        countbutton.textContent = 'рассчитать';
        resText.textContent = 'ваш результат:';
        
        if (addit.textContent == '(underweight)') addit.textContent = '(дефицит веса)';
        else if (addit.textContent == '(normal weight)') addit.textContent = '(нормальный вес)';
        else if (addit.textContent == '(overweight)') addit.textContent = '(избыточный вес)';
        else if (addit.textContent == '(error)') addit.textContent = '(ошибка)';

        eng_flag = false;
    }
});