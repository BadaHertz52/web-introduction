class GuestBook {
  #nameInputEl;

  #checkBoxInputElList;

  #addBtnEl;

  #resetBtnEl;

  #userData = {
    name: undefined,
    matchingCount: 0,
  };
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#nameInputEl = document.querySelector("#input-name");
    this.#checkBoxInputElList = document.querySelectorAll(
      ".guest-book__movie-checker-container input"
    );
    this.#addBtnEl = document.querySelector(".btn-add");
    this.#resetBtnEl = document.querySelector(".btn-reset");
  }

  #getFormData() {
    const name = this.#nameInputEl.value;
    const checkedArray = [];

    Array.from(this.#checkBoxInputElList).forEach((el) =>
      checkedArray.push(el.checked)
    );

    this.#userData = {
      name: name,
      matchingCount: checkedArray.filter((value) => !!value).length,
    };
  }

  #alertUserData() {
    const { name, matchingCount } = this.#userData;
    const message = `${name}님, 저와 ${matchingCount}개의 취향이 같으시네요!"`;

    alert(message);
  }

  #handleAddBtnClick(event) {
    event.stopPropagation();

    this.#getFormData();
    this.#alertUserData();
  }
  #addEvent() {
    this.#addBtnEl.addEventListener("click", (event) =>
      this.#handleAddBtnClick(event)
    );
  }
}

export default GuestBook;
