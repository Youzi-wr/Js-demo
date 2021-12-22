// --------------- 命令模式：
// --------------- action + 执行函数 + 撤销函数 = 操作命令对象
class Manager {
  constructor(initialState) {
    this.state = initialState;
    this.commands = [];
    this.undoCommands = [];
  }

  addCommand(command) {
    this.state = command.execute(this.state);
    this.commands.push(command);
    this.undoCommands = []; // 产生新分支
  }

  undo() {
    const command = this.commands.pop();
    this.state = command.undo(this.state);
    this.undoCommands.push(command);
  }

  redo() {
    const command = this.undoCommands.pop();
    this.state = command.execute(this.state);
    this.commands.push(command);
  }
}

const manager = new Manger({});

// -------------------------------

class ChangePositionCommand {
  constructor(property, distance) {
    this.property = property; // 如：'left'
    this.distance = distance; // 如： 10
  }

  execute(state) {
    const newState = { ...state }
    newState[this.property] += this.distance;
    return newState;
  }

  undo(state) {
    const newState = { ...state }
    newState[this.property] -= this.distance;
    return newState;
  }
}

// --------------------------------

buttonElem.addEventListener('click', () => {
  const command = new ChangePositionCommand('left', 10);
  manager.addCommand(command);
});


// ~~~~~~~~~~~~~~~~ 数据快照式：
// ~~~~~~~~~~~~~~~~ 1）应用的状态数据需要集中管理，不应该分散在各个组件
// ~~~~~~~~~~~~~~~~ 2）数据更改流程中有统一的地方可以做数据快照存储

const state = {
  timeline: [], //存储数据快照的数组
  current: -1,  //当前数据快照的指针，为 timeline 的索引
  limit: 1000,  //规定了 timeline 的最大长度，防止存储的数据量过大
};

const highOrderReducer = (reducer) => {
  return (state, action) => {
    // 进行 undo、redo 的拦截
    if (action.type === 'undo') {
      return {
        ...state,
        current: Math.max(0, state.current - 1),
      };
    }
    // 进行 undo、redo 的拦截
    if (action.type === 'redo') {
      return {
        ...state,
        current: Math.min(state.timeline.length - 1, state.current + 1),
      };
    }

    state = { ...state };
    const { timeline, current, limit } = state;
    // 执行真实的业务reducer
    const newState = reducer(timeline[current], action);
    // timeline处理
    state.timeline = timeline.slice(0, current + 1); //进行新操作时，应该抛弃当前节点后的操作，产生一个新的操作分支；
    state.timeline.push(newState);
    state.timeline = state.timeline.slice(-limit); //只保留最近的 limit 个数据快照；
    state.current = state.timeline.length - 1;
    return state;
  };
}

// 真实的业务reducer
function reducer(state, action) {
  switch (action.type) {
    case 'xxx':
      newState = setIn(state, ['components', 0, 'width'], 200)
      return newState;
  }
}

const store = createStore(highOrderReducer(reducer), initialState);

store.dispatch({ type: 'undo' }) ;
store.dispatch({ type: 'redo' });