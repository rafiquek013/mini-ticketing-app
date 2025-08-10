import React, { useState, useMemo, useEffect } from "react";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const uid = () =>
  Date.now().toString(36) + Math.random().toString(36).slice(2, 9);

const initial = [
  {
    id: uid(),
    title: "Login issue",
    description: "Cannot login since yesterday",
    priority: "High",
    status: "open",
    createdAt: Date.now() - 1000000,
  },
  {
    id: uid(),
    title: "Page layout broken",
    description: "Header overlaps content on mobile",
    priority: "Medium",
    status: "open",
    createdAt: Date.now() - 500000,
  },
  {
    id: uid(),
    title: "Feature request",
    description: "Add export to CSV",
    priority: "Low",
    status: "closed",
    createdAt: Date.now() - 200000,
  },
];

export default function App() {
  // Persist to localStorage for convenience
  const [tickets, setTickets] = useState(() => {
    try {
      const raw = localStorage.getItem("tickets_v1");
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  const [query, setQuery] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem("tickets_v1", JSON.stringify(tickets));
    } catch {}
  }, [tickets]);

  /* Add a new ticket */
  function addTicket({ title, description, priority }) {
    const t = {
      id: uid(),
      title: title.trim(),
      description: description.trim(),
      priority,
      status: "open",
      createdAt: Date.now(),
    };
    setTickets((prev) => [t, ...prev]);
  }

  /* Toggle open/closed */
  function toggleStatus(id) {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "closed" ? "open" : "closed" }
          : t
      )
    );
  }

  /* Optional: delete ticket */
  function deleteTicket(id) {
    setTickets((prev) => prev.filter((t) => t.id !== id));
  }

  /* Filtered tickets derived from query (title or description) */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tickets;
    return tickets.filter((t) => {
      return (
        (t.title || "").toLowerCase().includes(q) ||
        (t.description || "").toLowerCase().includes(q)
      );
    });
  }, [tickets, query]);

  return (
    <div className="main-dash">
      <div className="container">
        <h1 className="text-center mb-5 mt-1">Mini Ticketing App</h1>
        <div className="row d-flex align-items-start">
          <div className="col-12 col-md-6 mb-4">
            <div className="card  p-5 sticky-card">
              <TicketForm onAddTicket={addTicket} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="pt-0 p-3">
              {tickets.length > 0 && (
                <SearchBar value={query} onChange={setQuery} />
              )}
              <TicketList
                tickets={filtered}
                onToggleStatus={toggleStatus}
                onDelete={deleteTicket}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
