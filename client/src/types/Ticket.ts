type Ticket = {
  id: string,
  title: string,
  description: string,
  status: 'PENDING' | 'INPROGRESS' | "COMPLETED" | "BACKLOG",
  assignee: string
}