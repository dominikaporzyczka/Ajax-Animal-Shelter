let animalInfo;
const animalsNav = document.querySelectorAll('.animals-list_animal');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function () {
    if (xhr.status === 200) {
        animalInfo = JSON.parse(xhr.responseText);
    }
}

for (let i = 0; i < animalsNav.length; i++) {
    animalsNav[i].addEventListener('click', function () {
        display(i);
    });
}

function display(index) {
    document.getElementById('animal_name').innerHTML = animalInfo[index].name;
    document.getElementById('animal_photo').src = animalInfo[index].photo;
    document.getElementById('animal_age').innerHTML = animalInfo[index].age;
    document.getElementById('animal_description').innerHTML = animalInfo[index].description;
}