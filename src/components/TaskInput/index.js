import { useState } from "react";
const TaskInput = ({onAdd}) => {
  const [text, setText] = useState();
  const [day, setDay] = useState();
  const [reminder, setReminder] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Text is required");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={true}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        ></input>
      </div>
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default TaskInput;
