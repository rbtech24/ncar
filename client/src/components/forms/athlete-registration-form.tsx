import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertAthleteSchema, type InsertAthlete } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";

interface AthleteRegistrationFormProps {
  onClose: () => void;
}

const sportsOptions = [
  "Football", "Basketball", "Baseball", "Softball", "Soccer", "Tennis", "Track & Field", 
  "Swimming", "Volleyball", "Wrestling", "Golf", "Cross Country", "Lacrosse", "Hockey"
];

const stateOptions = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", 
  "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", 
  "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const gradeOptions = ["9th", "10th", "11th", "12th", "Post-Graduate"];
const divisionOptions = ["Division I", "Division II", "Division III", "NAIA", "NJCAA"];
const regionOptions = ["Northeast", "Southeast", "Midwest", "Southwest", "West", "Pacific"];

export default function AthleteRegistrationForm({ onClose }: AthleteRegistrationFormProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [step, setStep] = useState(1);

  const form = useForm<InsertAthlete>({
    resolver: zodResolver(insertAthleteSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      graduationYear: new Date().getFullYear() + 1,
      currentGrade: "",
      sport: "",
      position: "",
      height: "",
      weight: "",
      gpa: undefined,
      satScore: undefined,
      actScore: undefined,
      address: "",
      city: "",
      state: "",
      zipCode: "",
      currentSchool: "",
      coachName: "",
      coachEmail: "",
      coachPhone: "",
      parentFirstName: "",
      parentLastName: "",
      parentEmail: "",
      parentPhone: "",
      athleticAchievements: "",
      academicHonors: "",
      extracurriculars: "",
      recruitingGoals: "",
      interestedDivisions: [],
      interestedRegions: [],
      videoLinks: "",
      additionalInfo: "",
    },
  });

  const createAthleteMutation = useMutation({
    mutationFn: (data: InsertAthlete) => 
      apiRequest("/api/athletes", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }),
    onSuccess: () => {
      toast({
        title: "Registration Successful!",
        description: "Your athlete profile has been created successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/athletes"] });
      onClose();
    },
    onError: (error) => {
      toast({
        title: "Registration Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertAthlete) => {
    createAthleteMutation.mutate(data);
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
          <CardTitle className="text-2xl font-bold text-blue-600">Athlete Registration</CardTitle>
          <CardDescription>
            Create your athlete profile to get discovered by college coaches
          </CardDescription>
          <div className="flex items-center gap-2 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${
                  i <= step ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      {...form.register("firstName")}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...form.register("lastName")}
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="john.smith@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    {...form.register("phone")}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      {...form.register("dateOfBirth")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentGrade">Current Grade *</Label>
                    <Select onValueChange={(value) => form.setValue("currentGrade", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {gradeOptions.map((grade) => (
                          <SelectItem key={grade} value={grade}>
                            {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    {...form.register("address")}
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      {...form.register("city")}
                      placeholder="Atlanta"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Select onValueChange={(value) => form.setValue("state", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        {stateOptions.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      {...form.register("zipCode")}
                      placeholder="30309"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Athletic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sport">Sport *</Label>
                    <Select onValueChange={(value) => form.setValue("sport", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sport" />
                      </SelectTrigger>
                      <SelectContent>
                        {sportsOptions.map((sport) => (
                          <SelectItem key={sport} value={sport}>
                            {sport}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="position">Position/Event</Label>
                    <Input
                      id="position"
                      {...form.register("position")}
                      placeholder="Point Guard, Pitcher, etc."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      {...form.register("height")}
                      placeholder="5'10&quot;"
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight">Weight</Label>
                    <Input
                      id="weight"
                      {...form.register("weight")}
                      placeholder="150 lbs"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="graduationYear">Graduation Year *</Label>
                  <Input
                    id="graduationYear"
                    type="number"
                    {...form.register("graduationYear", { valueAsNumber: true })}
                    placeholder="2025"
                  />
                </div>
                <div>
                  <Label htmlFor="currentSchool">Current School *</Label>
                  <Input
                    id="currentSchool"
                    {...form.register("currentSchool")}
                    placeholder="Atlanta High School"
                  />
                </div>
                <div>
                  <Label htmlFor="athleticAchievements">Athletic Achievements</Label>
                  <Textarea
                    id="athleticAchievements"
                    {...form.register("athleticAchievements")}
                    placeholder="List your athletic achievements, awards, records..."
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="videoLinks">Video Links</Label>
                  <Textarea
                    id="videoLinks"
                    {...form.register("videoLinks")}
                    placeholder="YouTube, Hudl, or other video links..."
                    rows={2}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Academic Information</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="gpa">GPA</Label>
                    <Input
                      id="gpa"
                      type="number"
                      step="0.01"
                      {...form.register("gpa", { valueAsNumber: true })}
                      placeholder="3.8"
                    />
                  </div>
                  <div>
                    <Label htmlFor="satScore">SAT Score</Label>
                    <Input
                      id="satScore"
                      type="number"
                      {...form.register("satScore", { valueAsNumber: true })}
                      placeholder="1200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="actScore">ACT Score</Label>
                    <Input
                      id="actScore"
                      type="number"
                      {...form.register("actScore", { valueAsNumber: true })}
                      placeholder="24"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="academicHonors">Academic Honors</Label>
                  <Textarea
                    id="academicHonors"
                    {...form.register("academicHonors")}
                    placeholder="Honor roll, academic awards, scholarships..."
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="extracurriculars">Extracurricular Activities</Label>
                  <Textarea
                    id="extracurriculars"
                    {...form.register("extracurriculars")}
                    placeholder="Student government, volunteer work, clubs..."
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="coachName">Current Coach Name</Label>
                    <Input
                      id="coachName"
                      {...form.register("coachName")}
                      placeholder="Coach Johnson"
                    />
                  </div>
                  <div>
                    <Label htmlFor="coachEmail">Coach Email</Label>
                    <Input
                      id="coachEmail"
                      type="email"
                      {...form.register("coachEmail")}
                      placeholder="coach@school.edu"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="coachPhone">Coach Phone</Label>
                  <Input
                    id="coachPhone"
                    {...form.register("coachPhone")}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Parent Information & Recruiting Goals</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentFirstName">Parent First Name *</Label>
                    <Input
                      id="parentFirstName"
                      {...form.register("parentFirstName")}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="parentLastName">Parent Last Name *</Label>
                    <Input
                      id="parentLastName"
                      {...form.register("parentLastName")}
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentEmail">Parent Email *</Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      {...form.register("parentEmail")}
                      placeholder="parent@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="parentPhone">Parent Phone *</Label>
                    <Input
                      id="parentPhone"
                      {...form.register("parentPhone")}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <Label>Interested Divisions</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {divisionOptions.map((division) => (
                      <div key={division} className="flex items-center space-x-2">
                        <Checkbox
                          id={division}
                          onCheckedChange={(checked) => {
                            const current = form.getValues("interestedDivisions") || [];
                            if (checked) {
                              form.setValue("interestedDivisions", [...current, division]);
                            } else {
                              form.setValue("interestedDivisions", current.filter(d => d !== division));
                            }
                          }}
                        />
                        <Label htmlFor={division} className="text-sm">{division}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Interested Regions</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {regionOptions.map((region) => (
                      <div key={region} className="flex items-center space-x-2">
                        <Checkbox
                          id={region}
                          onCheckedChange={(checked) => {
                            const current = form.getValues("interestedRegions") || [];
                            if (checked) {
                              form.setValue("interestedRegions", [...current, region]);
                            } else {
                              form.setValue("interestedRegions", current.filter(r => r !== region));
                            }
                          }}
                        />
                        <Label htmlFor={region} className="text-sm">{region}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="recruitingGoals">Recruiting Goals</Label>
                  <Textarea
                    id="recruitingGoals"
                    {...form.register("recruitingGoals")}
                    placeholder="What are your recruiting goals and preferences?"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    {...form.register("additionalInfo")}
                    placeholder="Any other information you'd like to share..."
                    rows={3}
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={step === 1}
              >
                Previous
              </Button>
              
              {step < 4 ? (
                <Button type="button" onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={createAthleteMutation.isPending}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {createAthleteMutation.isPending ? "Creating Profile..." : "Create Profile"}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}