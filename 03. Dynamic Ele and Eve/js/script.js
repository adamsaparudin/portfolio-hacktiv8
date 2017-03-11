function addTodo() {
  $('#list-todo').append("<li class='list-todo'>" + $('.todo-detail').val() + "<br> <button class='done-todo'>Mark as Done</button><button class='remove-todo'>Remove</button> </li>")
  $('.todo-detail').val('')
}

function removeTodo() {
  $(this).parent('li.list-todo').remove()
}

function todoDone() {
  $(this).parent('li.list-todo').addClass("done")
}

// add Jquery UI Sortable if you want to sort that shit

$(".add-todo").on("click", addTodo)
$("#list-todo").on("click", ".remove-todo", removeTodo)
$("#list-todo").on("click", ".done-todo", todoDone)
