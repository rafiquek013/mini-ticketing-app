import React from 'react'
import TicketItem from './TicketItem'
import TicketCounter from "./TicketCounter";

export default function TicketList({ tickets, onToggleStatus, onDelete }) {
  if (!Array.isArray(tickets) || tickets.length === 0) {
    return <div className="empty">No tickets found.</div>
  }

  return (
    <div className="ticket-list">
      <h2 className='mb-1'>Tickets ({tickets.length})</h2>
      <TicketCounter tickets={tickets} />
      {tickets.map(t => (
        <TicketItem
          key={t.id}
          ticket={t}
          onToggle={() => onToggleStatus(t.id)}
          onDelete={() => onDelete(t.id)}
        />
      ))}
    </div>
  )
}
