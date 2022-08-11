let count = 0;
const addItem = () => {
    const inputValue = document.getElementById('input-field').value;
    count++;
    if (inputValue == 0) {
        alert('Please choose an item')
    }
    else {
        const container = document.getElementById('container');
        const subContainer = document.getElementById('sub-container');
        subContainer.innerHTML = `
        <th scope="row">${count}</th>
        <td>Demo</td>
        <td>
        <button onclick="" class="border-0 bg-danger text-white rounded ">Delete</button>
        <button onclick="" class="border-0 bg-danger text-white rounded ">Done</button>
        </td>
`;
    }
}