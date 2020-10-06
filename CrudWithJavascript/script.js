let selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    let formData = readFormData();
    if (selectedRow == null) {
      insertNewRecord(formData);
    } else {
      updateRecord(formData);
      resetForm();
    }
  }
}
function readFormData() {
  let formData = {};
  formData["nomeCompleto"] = document.querySelector('#nomeCompleto').value;
  formData["codigo"] = document.querySelector('#codigo').value;
  formData["salario"] = document.querySelector('#salario').value;
  formData["cidade"] = document.querySelector('#cidade').value;
  return formData
}

function insertNewRecord(data) {
  let table = document.querySelector('#listaEmpregados').getElementsByTagName('tbody')[0]
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.nomeCompleto;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.codigo;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.salario;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.cidade;
  cell4 = newRow.insertCell(4)
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                     <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
  document.querySelector('#nomeCompleto').value = '';
  document.querySelector('#codigo').value = '';
  document.querySelector('#salario').value = '';
  document.querySelector('#cidade').value = '';
  selectedRow = null
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.querySelector("#nomeCompleto").value = selectedRow.cells[0].innerHTML;
  document.querySelector("#codigo").value = selectedRow.cells[1].innerHTML;
  document.querySelector("#salario").value = selectedRow.cells[2].innerHTML;
  document.querySelector("#cidade").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.nomeCompleto;
  selectedRow.cells[1].innerHTML = formData.codigo;
  selectedRow.cells[2].innerHTML = formData.salario;
  selectedRow.cells[3].innerHTML = formData.cidade;
}

function onDelete(td) {
  if (confirm('Tem certeza que deseja deletar?')) {
    row = td.parentElement.parentElement;
    document.querySelector("#listaEmpregados").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.querySelector("#nomeCompleto").value == "") {
      isValid = false;
      document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
      isValid = true;
      if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
          document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}