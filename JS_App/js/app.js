function addName() {
  let userInput = document.getElementById('userInput').value;
  let data = [];
  data.push(userInput);
  let parentNode = document.getElementById('studentList');
  if(!_.isEmpty(userInput)) {
    let node = _.map(data, (index, key) => {
        return `<li>
                    <span>hi</span>
                    <button>Delete</button>
                </li>`;
    });
    console.log(node);
    //parentNode.appendChild(node);
  //   let parentWrap = document.createElement('li');
  //   parentWrap.setAttribute('class', 'clearfix list-group-item list-group-item-success');
  //   let textContent = document.createElement('span');
  //   textContent.setAttribute('class', 'pull-left studentName')
  //   let deleteButton = document.createElement('button');
  //   deleteButton.setAttribute('class', 'pull-right btn btn-danger')
  //   deleteButton.textContent = 'Delete'
  //   textContent.innerHTML = userInput;
  //   document.getElementById('studentList').appendChild(parentWrap);
  //   parentWrap.appendChild(textContent);
  //   parentWrap.appendChild(deleteButton);
  //   document.getElementById('userInput').value = '';
  //   deleteButton.addEventListener('click', function (e) {
  //     e.currentTarget.parentElement.classList.add('hide');
  //   });
  // } else {
  //   alert('enter student name');
  // }
  }
}
//
// function searchName() {
//     let searchTerm = event.currentTarget.value;
//     let list = document.getElementsByClassName('studentName');
//     let result = _.filter(list, (index, key) => {
//         return index.innerHTML.indexOf(searchTerm) > -1 ;
//     });
//     let data  = _.map(result, (index, key) => {
//         return index.innerHTML;
//     });
//     let searchResult = _.map(data, (value, key) => {
//         return `<span>${value}</span>`;
//     });
// }
