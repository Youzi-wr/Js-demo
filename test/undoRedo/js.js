
(function () {

  var ctor = function () { };

  var inherits = function (parent, protoProps) {
    var child;

    if (protoProps && protoProps.hasOwnProperty('constructor')) {
      child = protoProps.constructor;
    } else {
      child = function () { return parent.apply(this, arguments); };
    }

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();

    if (protoProps) extend(child.prototype, protoProps);

    child.prototype.constructor = child;
    child.__super__ = parent.prototype;
    return child;
  };

  function extend(target, ref) {
    var name, value;
    for (name in ref) {
      value = ref[name];
      if (value !== undefined) {
        target[name] = value;
      }
    }
    return target;
  };

  var Undo;
  if (typeof exports !== 'undefined') {
    Undo = exports;
  } else {
    Undo = this.Undo = {};
  }

  Undo.Stack = function () {
    this.commands = [];
    this.stackPosition = -1;
    this.savePosition = -1;
  };

  extend(Undo.Stack.prototype, {
    execute: function (command) {

      this._clearRedo();
      command.execute();

      //必须对堆栈数量进行限制，自己去实现吧
      this.commands.push(command);
      this.stackPosition++;
      this.changed();
    },
    undo: function () {
      this.commands[this.stackPosition].undo();
      this.stackPosition--;
      this.changed();
    },
    canUndo: function () {
      return this.stackPosition >= 0;
    },
    redo: function () {
      this.stackPosition++;
      this.commands[this.stackPosition].redo();
      this.changed();
    },
    canRedo: function () {
      return this.stackPosition < this.commands.length - 1;
    },
    save: function () {
      this.savePosition = this.stackPosition;
      this.changed();
    },
    dirty: function () {
      return this.stackPosition != this.savePosition;
    },
    _clearRedo: function () {

      this.commands = this.commands.slice(0, this.stackPosition + 1);
    },
    changed: function () {
    }
  });

  Undo.Command = function (name) {
    this.name = name;
  }

  var up = new Error("override me!");

  extend(Undo.Command.prototype, {
    execute: function () {
      throw up;
    },
    undo: function () {
      throw up;
    },
    redo: function () {
      this.execute();
    }
  });

  Undo.Command.extend = function (protoProps) {
    var child = inherits(this, protoProps);
    child.extend = Undo.Command.extend;
    return child;
  };

}).call(this);

// 使用方式：

var stack = new Undo.Stack(),

  UpCommand = Undo.Command.extend({
    constructor: function (li) {
      this.li = li;
    },
    execute: function () {
      this.li.insertBefore(this.li.prev());
    },
    undo: function () {
      this.li.insertAfter(this.li.next());
    }
  }),
  DownCommand = UpCommand.extend({
    execute: UpCommand.prototype.undo,
    undo: UpCommand.prototype.execute,
  });

