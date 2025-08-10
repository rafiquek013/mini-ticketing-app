import React from 'react'

export default function TicketCounter({ tickets }) {
  const list = Array.isArray(tickets) ? tickets : []
  const openCount = list.filter(t => (t && t.status) ? t.status !== 'closed' : true).length
  return <div className="ticket-counter">You have <strong>{openCount}</strong> open tickets</div>
}
