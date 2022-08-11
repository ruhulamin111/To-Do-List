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
            <button onclick="" class="border-0 bg-danger text-white rounded ">
            Delete</button>
            <button onclick="" class="border-0 bg-success text-white rounded ">
            Done</button>
        </td>
`;
        container.appendChild(subContainer);
        document.getElementById('input-field').value = '';
    }
}