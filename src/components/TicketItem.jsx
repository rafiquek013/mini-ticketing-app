import React, { useEffect } from "react";
import { FiRefreshCw, FiCheckCircle, FiTrash2 } from "react-icons/fi";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

function short(text, n = 120) {
  if (!text) return "";
  return text.length > n ? text.slice(0, n) + "…" : text;
}

export default function TicketItem({ ticket, onToggle, onDelete }) {
  const priorityClass =
    ticket.priority === "High"
      ? "btn-danger"
      : ticket.priority === "Medium"
      ? "btn-warning"
      : "btn-primary";

  useEffect(() => {
    // Initialize all tooltips after render
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((el) => {
      new bootstrap.Tooltip(el);
    });
  }, []);

  return (
    <div
      className={`ticket-item p-3 card mb-4 ${
        ticket.status === "closed" ? "closed" : ""
      }`}
    >
      <div className="left">
        <div className="meta mb-2">
          <span className={`pill btn mr-2 ${priorityClass}`}>
            {ticket.priority}
          </span>
        </div>
        <h3>{ticket.title}</h3>
        <p className="desc">{short(ticket.description)}</p>
      </div>

      <div className="actions">
        <button
          onClick={onToggle}
          className={`btn btn-${
            ticket.status === "closed" ? "secondary" : "success"
          } small mr-3`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={ticket.status === "closed" ? "Reopen" : "Close"}
        >
          {ticket.status === "closed" ? <FiRefreshCw /> : <FiCheckCircle />}
        </button>
        <button
          onClick={onDelete}
          className="btn small btn-danger"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Delete"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}
