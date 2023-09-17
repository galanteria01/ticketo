import CreateTicketButton from '@/components/custom/create-ticket-button'
import TicketCard from '@/components/custom/ticket-card'
import TicketsTable from '@/components/custom/tickets-table'
import { Input } from '@/components/ui/input'
import { tickets } from '@/lib/data'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <nav className='flex items-center justify-between w-full'>
        <h3 className='font-semibold text-2xl'>Tickets</h3>
        <div className='flex'>
          <CreateTicketButton />
        </div>
      </nav>
      <div className='flex flex-col flex-1 w-full'>
        <TicketsTable />
      </div>
    </main>
  )
}
