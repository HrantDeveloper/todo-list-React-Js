

function Todo() {
    return (
      <div className="wrapper">
       <h1>todos</h1>
       <input type="text" placeholder="What needs to be done"/>
       <button className="add-btn">Add</button>
       <div className="area"></div>
       <div className="todo-footer">
          <p>{1}/{3} Completed</p>
          <button>Clear Completed</button>
       </div>
      </div>
    );
  }
  
  export default Todo;
  