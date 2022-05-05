// idをもとに要素を取得する。
const addbutton = document.getElementById("add-button")
const memoinput = document.getElementById("memo-input")
const memocontainer = document.getElementById("memo-container")

addbutton.onclick = function () {
  const createddiv = document.createElement("div")
  createddiv.textContent = memoinput.value
  memocontainer.append(createddiv)
  const deletediv = document.createElement("div")
  deletediv.className = "deletediv"
  const deleteButton = document.createElement("button")
  memocontainer.append(deleteButton)
  deleteButton.onclick = function () {
    addbutton.remove()
  }
  addbutton.append(deleteButton)
}
