document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#todo')
    const addButton = document.querySelector('#add-button')
    const todoList = document.querySelector('#todo-list')
    const alert = document.querySelector('#kimchi')
	
const TODOS_Ls = "toDos";
let toDos = [];

      // '+' 버튼 익명 화살표 함수 
    const addTodo = () => { 
        if (input.value !== '') {
            const item = document.createElement('div')
          // 체크박스
            const checkbox = document.createElement('input')
            checkbox.type='checkbox'
         // text
            const text = document.createElement('span');
          // 제거하기 버튼
            const deleteButton = document.createElement('button')
            deleteButton.textContent="-"

            text.textContent = input.value
            input.value=''
        
			item.appendChild(deleteButton)
            item.appendChild(checkbox)
            item.appendChild(text)
            todoList.appendChild(item)
			
			deleteButton.id = 'deleteButton';
			text.class = 'localtext';
			
			
			const span = document.createElement("span"); // span 태그 생성
  const newId = toDos.length + 1; 
  
  span.innerText = text; // span태그에 input창에 입력한 값 삽입
 

  const toDoObj = {
    text,
    id: newId,
  };
  toDos.push(toDoObj); // toDos에 toDoList 삽입
  saveToDos(); // localStorage에 저장하는 함수
			

    // 체크박스 이벤트 리스너
            checkbox.addEventListener('change', (event) =>{ 
                if (event.currentTarget.checked)
                {
                    text.style.textDecoration='line-through'
                }
                else {
                    text.style.textDecoration='none'
                }
            })

          // 제거하기 버튼 클릭 이벤트 리스너
            deleteButton.addEventListener('click', (event) => {
                todoList.removeChild(event.currentTarget.parentNode)
            })
            input.value =''
            alert.textContent = '입력 성공!'
        }
        else
            alert.textContent = '할 일을 입력하세요!'
    }

    addButton.addEventListener('click', addTodo)

      // 할 일 입력창에서 enter key가 눌렸을 때
    input.addEventListener('keypress', (event) => {
        const ENTER = 13
        if (event.keyCode === ENTER)
            addTodo();
    })
})







function saveToDos() {
  window.localStorage.setItem(TODOS_Ls, JSON.stringify(toDos)); // localStorage에 리스트 저장
}
 
