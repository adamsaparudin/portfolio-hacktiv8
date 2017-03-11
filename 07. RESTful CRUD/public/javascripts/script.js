function getMemo() {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/memos',
    body: 'json',
    success: (data) => {
      for(let i=0; i<data.length; i++) {
        console.log(data[i]);
        let year = new Date(data[i].dueDate).getUTCFullYear()
        let month = new Date(data[i].dueDate).getUTCMonth()
        let day = new Date(data[i].dueDate).getUTCDate()
        $('#isimemo').append(`<tr>
                                <td>${i + 1}</td>
                                <td>${data[i].title}</td>
                                <td>${data[i].done}</td>
                                <td>${year}-${month}-${day}</td>
                              </tr>`)
      }
    }
  })
}

$(document).ready ( () => {
  getMemo()
})
