import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar as CalendarIcon,
  Clock,
  Video,
  Phone,
  Users,
  Plus,
  X,
  Mail,
  MessageCircle,
  Shield,
  AlertTriangle,
  Info,
  CheckCircle2,
  User,
  Trophy,
  School
} from "lucide-react";
import { format } from "date-fns";

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientName?: string;
  recipientType?: string;
}

export default function ScheduleCallModal({ 
  isOpen, 
  onClose, 
  recipientName = "",
  recipientType = "coach"
}: ScheduleCallModalProps) {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("30");
  const [callType, setCallType] = useState("video");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [attendees, setAttendees] = useState<string[]>([]);
  const [newAttendee, setNewAttendee] = useState("");

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00"
  ];

  const complianceGuidelines = [
    "Dead periods: No in-person contact allowed",
    "Quiet periods: Limited contact restrictions apply",
    "All video calls must be recorded for compliance",
    "Parents/guardians must be notified of all calls",
    "Maximum call duration: 60 minutes"
  ];

  const addAttendee = () => {
    if (newAttendee && !attendees.includes(newAttendee)) {
      setAttendees([...attendees, newAttendee]);
      setNewAttendee("");
    }
  };

  const removeAttendee = (attendee: string) => {
    setAttendees(attendees.filter(a => a !== attendee));
  };

  const handleSchedule = () => {
    // Here you would typically send the data to your backend
    console.log({
      date,
      time,
      duration,
      callType,
      title,
      description,
      attendees,
      recipientName,
      recipientType
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Schedule Video Call
          </DialogTitle>
          <DialogDescription>
            Schedule a compliant recruiting call with {recipientName || "participant"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Compliance Notice */}
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-yellow-800 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Compliance Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-xs text-yellow-700 space-y-1">
                {complianceGuidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>{guideline}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Call Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Call Title</Label>
              <Input
                id="title"
                placeholder="e.g., Recruiting Discussion"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="callType">Call Type</Label>
              <Select value={callType} onValueChange={setCallType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      Video Call
                    </div>
                  </SelectItem>
                  <SelectItem value="phone">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Call
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="45">45 minutes</SelectItem>
                <SelectItem value="60">60 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Attendees */}
          <div className="space-y-2">
            <Label>Attendees</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Add attendee email or name"
                value={newAttendee}
                onChange={(e) => setNewAttendee(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addAttendee()}
              />
              <Button type="button" onClick={addAttendee}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {attendees.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {attendees.map((attendee) => (
                  <Badge key={attendee} variant="secondary" className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {attendee}
                    <button
                      type="button"
                      onClick={() => removeAttendee(attendee)}
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Call Description</Label>
            <Textarea
              id="description"
              placeholder="What will you discuss during this call?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          {/* Compliance Checklist */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Pre-Call Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700">Call will be recorded for compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700">Parents/guardians will be notified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700">Current recruiting period allows contact</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleSchedule}
              disabled={!date || !time || !title}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}