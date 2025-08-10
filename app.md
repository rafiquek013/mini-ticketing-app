# Mini Ticketing App — Answers

## 1. Component Structure
The app is divided into small, focused components — `TicketForm`, `TicketList`, `TicketItem`, `TicketCounter`, and `SearchBar`.  
Each component has one main purpose, making the code easier to understand, update, and reuse.  
The `App` component holds the main data and functions, passing information to child components when needed.  
Ticket display logic stays in `TicketList` and `TicketItem`, while form handling stays in `TicketForm`.

## 2. State Management
All ticket data and the search text are stored in `App` using `useState`.  
This ensures there is one central place for all important information (single source of truth).  
Child components receive data through props and send updates back through callback functions.  
This approach avoids duplicate data and keeps everything in sync.

## 3. Performance Considerations
If the app grows to 1,000+ tickets:
- Use list virtualization (`react-window`) so only visible tickets render.
- Use `useMemo` to speed up filtering.
- Add a short delay (debounce) to search input to prevent unnecessary updates.
- For very large apps, consider Context API or a state management library.

## 4. Search Behavior Improvements
- Add debounced search to reduce lag.
- Highlight matching text in results.
- Add filters for status and priority.
- Show helpful suggestions when no results are found.

## 5. Tools and Setup
Used React with Vite for fast setup and development.  
Used standard React hooks (`useState`, `useMemo`, `useEffect`) for data handling and performance.  
Bootstrap was used for UI styling and tooltips.
