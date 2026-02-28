class _S {
  element = null;
  constructor(_tag) {
    if (typeof _tag == "string") this.element = document.createElement(_tag);
    else this.element = _tag;
  }
  id(_id) {
    this.element.id = _id;
    return this;
  }
  with(..._elements) {
    _elements.forEach((el) => {
      if (el instanceof _S) this.element.append(el.element);
      else this.element.append(el);
    });
    return this;
  }
  prepend(..._elements) {
    for (let i = _elements.length - 1; i >= 0; i--) {
      if (_elements[i] instanceof _S)
        this.element.prepend(_elements[i].element);
      else this.element.prepend(_elements[i]);
    }
    return this;
  }
  add_to(_element) {
    if (_element instanceof _S) _element.element.append(this.element);
    else _element.append(_element);
    return this;
  }
  insert(_i, ..._elements) {
    const reference = this.children[_i].element;
    for (let i = _elements.length - 1; i >= 0; i--) {
      if (_elements[i] instanceof _S)
        this.element.insertBefore(_elements[i].element, reference);
      else this.element.insertBefore(_elements[i], reference);
    }
    return this;
  }

  insert_to(_i, _element) {
    if (_element instanceof _S)
      _element.element.insertBefore(this.element, _element.element.children[i]);
    else _element.insertBefore(this.element, _element.children[i])
    return this;
  }
  attribute(_name, _value) {
    this.element.setAttribute(_name, _value);
    return this;
  }
  style(_name, _value) {
    this.element.style[_name] = _value;
    return this;
  }
  set(_name, _value) {
    this.element[_name] = _value;
    return this;
  }
  get(_name) {
    return this.element[_name];
  }
  text(_text) {
    this.element.innerText = _text;
    return this;
  }
  src(_src) {
    this.element.src = _src;
    return this;
  }
  handler(event, f) {
    this.element.addEventListener(event, f);
    return this;
  }
  get children() {
    return Array.from(this.element.children).map((item) => S(item));
  }
  only(_element){
    this.element.innerHTML = "";
    this.element.innerText = "";
    this.with(_element);
  }
  get size(){
    const rect = this.element.getBoundingClientRect();
    return {
      x: rect.right-rect.left,
      y: rect.bottom-rect.top
    };
  }
}
const S = (x) => new _S(x);
