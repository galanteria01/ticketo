import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'

export default function CreateTicketButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"}>+ Create Ticket</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a New Ticket</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Create</Button>
          {/* <Button variant={'secondary'}>Cancel</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
