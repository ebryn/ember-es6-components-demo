class EmberComponent {
  trigger() {
    console.log('trigger', arguments);
  }
}

EmberComponent.isComponentFactory = true;

EmberComponent.proto = function() {
  return this.prototype;
};

EmberComponent.create = function() {
  return new this(...arguments);
};

class HelloWorldComponent extends EmberComponent {

}

export default HelloWorldComponent;