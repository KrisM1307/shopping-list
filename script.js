const sendInput = document.querySelector("#input");
const groceries = document.querySelector(".groceries");

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const item = sendInput.value;

        if (item !== '') {
            const newItem = document.createElement('div');
            newItem.classList.add('items');
            newItem.textContent = item;

            groceries.append(newItem);

            newItem.addEventListener('click', function() {
                newItem.classList.toggle('done');
            });
        }
        sendInput.value = '';
    }
})

/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */