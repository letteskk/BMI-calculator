const countbutton = document.getElementById('count-button');
countbutton.onclick = function() {
    const height = Number(document.getElementById('height').value)
    const weight = Number(document.getElementById('weight').value)
    let res = document.getElementById('result-number').textContent = Math.round((weight/(height/100)**2)*100)/100
    if (res<18.4) {
        document.getElementById('addit').textContent = '(дефицит веса)'
        addit.style.color = '#C0080B'
    } else if (res>=18.4 && res<=24.9) {
        document.getElementById('addit').textContent = '(нормальный вес)';
        addit.style.color = '#0C9503'
    } else if (height==0 && weight==0) {
        document.getElementById('addit').textContent = '(ошибка)';
        addit.style.color = '#C0080B'
    }
    else {
        document.getElementById('addit').textContent = '(избыточный вес)'
    }
};

const fembutton = document.getElementById('fem');
const malebutton = document.getElementById('male')


fembutton.onclick = function() {
    fembutton.style.backgroundColor = '#9b0f49'
    malebutton.style.backgroundColor = '#0847D8'
};
malebutton.onclick = function() {
    malebutton.style.backgroundColor = '#0d3081'
    fembutton.style.backgroundColor = '#F2116D'
}