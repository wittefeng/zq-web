// src/components/Timeline.tsx
import React from 'react'

interface TimelineEvent {
  date: string
  title: any
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-12">
        {events.map((event, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center mr-4">
              <div className="bg-cyan-800 text-white rounded-full h-12 w-12 flex items-center justify-center text-sm"></div>
              {index !== events.length - 1 && (
                <div className="border-l-2 text-cyan-800 h-full"></div>
              )}
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-xl">{event.date}</div>
              <div
                className="font-semibold text-sm flex items-center"
                dangerouslySetInnerHTML={{
                  __html: event.title
                }}
              ></div>
              <p className="text-gray-600 text-xs flex items-center">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
