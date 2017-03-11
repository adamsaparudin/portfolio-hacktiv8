function getMemo(e) {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/memos',
    body: 'json',
    success: (data) => {
      $('#isimemo').empty()
      for(let i=0; i<data.length; i++) {
        let year = new Date(data[i].dueDate).getUTCFullYear()
        let month = new Date(data[i].dueDate).getUTCMonth()
        let day = new Date(data[i].dueDate).getUTCDate()
        $('#isimemo').append(`<tr>
                                <td>${i + 1}</td>
                                <td>${data[i].title}</td>
                                <td>${data[i].done}</td>
                                <td>${year}-${month}-${day}</td>
                                <td><button type="button" onclick=deleteMemo('http://localhost:3000/api/memos/${data[i]._id}')>Delete</button>
                                    <button class="edit-memo" type="button">Edit</button>
                                </td>
                                <td style="display: none">${data[i]._id}</td>

                              </tr>`)
      }
    }
  })
}

function createMemo() {
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/memos',
    data: $('#createMemo').serialize(),
    success: (data) => {
      $('#createMemo').trigger("reset")
    }
  })
}

$('#create-memo').on('click', (e) => {
  createMemo()
  getMemo()
})

function deleteMemo(url) {
  $.ajax({
    type: 'DELETE',
    url: url,
    success: (data) => {
      $('#isimemo').val('')
      getMemo()
    }
  })
}

function reqEditMemo(url) {
  $.ajax({
    method: 'PUT',
    url: url,
    data: $('#editMemo').serialize(),
    success: (doc) => {
      getMemo()
    }
  })
}



function editMemo() {
  let i = $(this).parent().siblings().eq(0).html()
  let title = $(this).parent().siblings().eq(1).html()
  let done = $(this).parent().siblings().eq(2).html()
  let date = $(this).parent().siblings().eq(3).html()
  let id = $(this).parent().siblings().eq(4).html()
  $(this).parent().parent("tr").replaceWith(`
    <tr>
      <td>${i}</td>
      <td><input type="text" name="title" value="${title}"></td>
      <td><input type="text" name="done" value="${done}"></td>
      <td><input type="text" name="dueDate" value="${date}"></td>
      <td><button class="editmemo" type="button" onclick=reqEditMemo('http://localhost:3000/api/memos/${id}')>Update</button>
      </td>
    </tr>
    `)
}



$("table").on("click", ".edit-memo", editMemo)


$(document).ready ( () => {
  getMemo()
})
