let count = 0;
const addItem = () => {
    count++;
    const inputValue = document.getElementById('input-field').value;
    if (inputValue == '') {
        alert('Please choose an item')
    }
    else {
        const container = document.getElementById('container');
        const subContainer = document.createElement('tr');
        subContainer.innerHTML = `
        <th scope="row">${count}</th>
        <td>${inputValue}</td>
        <td>
            <button onclick="" class="btn btn-danger btn-delete">
            Delete</button>
            <button onclick="" class="btn btn-success btn-done ">
            Done</button>
        </td>
        `;
        container.appendChild(subContainer);
        document.getElementById('input-field').value = '';

        const deleteButton = document.getElementsByClassName('btn-delete');
        for (const button of deleteButton) {
            button.addEventListener('click', function (event) {
                event.target.parentNode.parentNode.style.display = 'none';
            })
        }
        const doneButton = document.getElementsByClassName('btn-done');
        for (const button of doneButton) {
            button.addEventListener('click', function (event) {
                event.target.parentNode.parentNode.style.display = 'none';
            })
        }

    }
}