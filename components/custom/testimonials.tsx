import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted mt-8">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-italiana">What Our Customers Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied customers about their experience with our print solutions.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <blockquote className="text-lg font-medium italic">
           {` "The team at Print Solutions was amazing to work with. They\n helped us create the perfect custom
            wedding invitations and\n the quality of the printing was outstanding."`}
          </blockquote>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Jane Doe</p>
              <p className="text-sm text-muted-foreground">Newlywed, San Francisco</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <blockquote className="text-lg font-medium italic">
           {` "I've been using Print Solutions for all my business printing\n needs for years. Their attention to
            detail and fast\n turnaround time are unbeatable. Highly recommend!"`}
          </blockquote>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-sm text-muted-foreground">Small Business Owner, Chicago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials