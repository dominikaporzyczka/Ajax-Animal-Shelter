let animalInfo;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function () {
    if (xhr.status === 200) {
        animalInfo = JSON.parse(xhr.responseText);
    }
}