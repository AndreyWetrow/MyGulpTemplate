const getTemplateShow = (data = [], placeholder, selectedId) => {
  let text = placeholder ?? "По умолчанию";

  const items = data.map((item) => {
    let cls = "";
    if (item.id === selectedId) {
      text = item.value;
      cls = "selected";
    }
    return `
      <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
    `;
  });
  return `
  <div class="select__backdrop" data-type="backdrop"></div>
  <div class="select__input" data-type="input">
    <span data-type="value">${text}</span>
  </div>
  <div class="select__dropdown">
    <ul class="select__list">
      ${items.join("")}
    </ul>
  </div>
  `;
};

class SelectShow {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;

    this.render();
    this.setup();
    // console.log(this.$el);
  }

  render() {
    const { placeholder, data } = this.options;
    if (this.$el) {
      this.$el.classList.add("selectShow");
      this.$el.innerHTML = getTemplateShow(data, placeholder, this.selectedId);
    }
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    if (this.$el) {
      this.$el.addEventListener("click", this.clickHandler);
      this.$value = this.$el.querySelector('[data-type="value"]');
    }
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    // console.log(event.target.dataset);
    if (type === "input" || type === "value") {
      this.toggle();
    }
    if (type === "item") {
      const id = event.target.dataset.id;
      this.select(id);
    }
    if (type === "backdrop") {
      this.close();
    }
  }

  get isOpen() {
    return this.$el.classList.contains("open");
  }
  get current() {
    return this.options.data.find((item) => item.id === this.selectedId);
  }

  select(id) {
    this.selectedId = id;
    this.$value.textContent = this.current.value;
    this.$el.querySelectorAll('[data-type="item"]').forEach((element) => {
      element.classList.remove("selected");
    });
    this.$el.querySelector(`[data-id = "${id}"]`).classList.add("selected");
    this.options.onSelect ? this.options.onSelect(this.current) : null;
    this.close();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.$el.classList.add("open");
  }
  close() {
    this.$el.classList.remove("open");
  }
  destroy() {
    this.$el.removeEventListener("click", this.clickHandler);
    this.$el.innerHTML = "";
  }
}

export { getTemplateShow, SelectShow };
