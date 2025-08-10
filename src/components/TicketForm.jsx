import React, { useState } from "react";

export default function TicketForm({ onAddTicket }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return alert("Title is required");
    onAddTicket({ title, description, priority });
    setTitle("");
    setDescription("");
    setPriority("Low");
  }

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <h2>Create Ticket</h2>
      <div className="form-field">
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Short title"
        />
      </div>
      <div className="form-field">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the issue"
          rows="5"
        />
      </div>
      <div className="form-field">
        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary p-4 pt-2 pb-2 mt-3">
        Save
      </button>
    </form>
  );
}
