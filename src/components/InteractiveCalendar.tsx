
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

const InteractiveCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const timeSlots = [
    { time: '08:00', available: true },
    { time: '10:00', available: false },
    { time: '12:00', available: true },
    { time: '14:00', available: true },
    { time: '16:00', available: false },
  ];

  const upcomingBookings = [
    { date: '2024-01-20', time: '09:00', client: 'Eskom Holdings', type: 'Maintenance', location: 'Roodepoort' },
    { date: '2024-01-22', time: '14:00', client: 'SANParks', type: 'Installation', location: 'Kruger Park' },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const isToday = (day: number | null) => {
    if (!day) return false;
    const today = new Date();
    return day === today.getDate() && 
           selectedDate.getMonth() === today.getMonth() && 
           selectedDate.getFullYear() === today.getFullYear();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Calendar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Schedule Maintenance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Month navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}
              >
                Previous
              </Button>
              <h3 className="font-semibold">
                {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}
              >
                Next
              </Button>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
              {getDaysInMonth(selectedDate).map((day, index) => (
                <button
                  key={index}
                  className={`p-2 h-10 rounded hover:bg-muted transition-colors ${
                    day ? 'hover:bg-primary hover:text-white' : ''
                  } ${isToday(day) ? 'bg-primary text-white' : ''}`}
                  disabled={!day}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time Slots & Bookings */}
      <Card>
        <CardHeader>
          <CardTitle>Available Times</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot.time}
                variant={selectedSlot === slot.time ? "default" : "outline"}
                disabled={!slot.available}
                onClick={() => setSelectedSlot(slot.time)}
                className="flex items-center justify-center space-x-2"
              >
                <Clock className="h-4 w-4" />
                <span>{slot.time}</span>
              </Button>
            ))}
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-medium mb-3">Upcoming Bookings</h4>
            <div className="space-y-2">
              {upcomingBookings.map((booking, index) => (
                <div key={index} className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{booking.type}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {booking.date} at {booking.time}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{booking.client}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{booking.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveCalendar;
