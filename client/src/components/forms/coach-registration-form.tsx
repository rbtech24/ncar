import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertCoachSchema, type InsertCoach } from "@shared/schema";
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

interface CoachRegistrationFormProps {
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

const titleOptions = ["Head Coach", "Assistant Coach", "Associate Coach", "Recruiting Coordinator", "Director"];
const divisionOptions = ["Division I", "Division II", "Division III", "NAIA", "NJCAA"];
const regionOptions = ["Northeast", "Southeast", "Midwest", "Southwest", "West", "Pacific"];

export default function CoachRegistrationForm({ onClose }: CoachRegistrationFormProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [step, setStep] = useState(1);

  const form = useForm<InsertCoach>({
    resolver: zodResolver(insertCoachSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      title: "",
      collegeName: "",
      division: "",
      conference: "",
      sport: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      officePhone: "",
      websiteUrl: "",
      recruitingRegions: [],
      positionsRecruiting: [],
      recruitingPriorities: "",
      academicRequirements: "",
      scholarshipInfo: "",
      campusVisitInfo: "",
      additionalInfo: "",
    },
  });

  const createCoachMutation = useMutation({
    mutationFn: (data: InsertCoach) => 
      apiRequest("/api/coaches", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }),
    onSuccess: () => {
      toast({
        title: "Registration Successful!",
        description: "Your coach profile has been created successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/coaches"] });
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

  const onSubmit = (data: InsertCoach) => {
    createCoachMutation.mutate(data);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
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
          <CardTitle className="text-2xl font-bold text-blue-600">Coach Registration</CardTitle>
          <CardDescription>
            Join NCAR to discover talented student-athletes for your program
          </CardDescription>
          <div className="flex items-center gap-2 mt-4">
            {[1, 2, 3].map((i) => (
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
                    placeholder="coach@university.edu"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      {...form.register("phone")}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="officePhone">Office Phone</Label>
                    <Input
                      id="officePhone"
                      {...form.register("officePhone")}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Select onValueChange={(value) => form.setValue("title", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select title" />
                    </SelectTrigger>
                    <SelectContent>
                      {titleOptions.map((title) => (
                        <SelectItem key={title} value={title}>
                          {title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    {...form.register("address")}
                    placeholder="123 University Ave"
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
                <h3 className="text-lg font-semibold">Institution Information</h3>
                <div>
                  <Label htmlFor="collegeName">College/University Name *</Label>
                  <Input
                    id="collegeName"
                    {...form.register("collegeName")}
                    placeholder="University of Georgia"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="division">Division *</Label>
                    <Select onValueChange={(value) => form.setValue("division", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select division" />
                      </SelectTrigger>
                      <SelectContent>
                        {divisionOptions.map((division) => (
                          <SelectItem key={division} value={division}>
                            {division}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="conference">Conference</Label>
                    <Input
                      id="conference"
                      {...form.register("conference")}
                      placeholder="SEC, ACC, Big Ten, etc."
                    />
                  </div>
                </div>
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
                  <Label htmlFor="websiteUrl">Program Website</Label>
                  <Input
                    id="websiteUrl"
                    {...form.register("websiteUrl")}
                    placeholder="https://www.university.edu/athletics"
                  />
                </div>
                <div>
                  <Label>Recruiting Regions</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {regionOptions.map((region) => (
                      <div key={region} className="flex items-center space-x-2">
                        <Checkbox
                          id={region}
                          onCheckedChange={(checked) => {
                            const current = form.getValues("recruitingRegions") || [];
                            if (checked) {
                              form.setValue("recruitingRegions", [...current, region]);
                            } else {
                              form.setValue("recruitingRegions", current.filter(r => r !== region));
                            }
                          }}
                        />
                        <Label htmlFor={region} className="text-sm">{region}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="positionsRecruiting">Positions Currently Recruiting</Label>
                  <Input
                    id="positionsRecruiting"
                    {...form.register("positionsRecruiting")}
                    placeholder="Point Guard, Pitcher, etc. (comma separated)"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Recruiting Information</h3>
                <div>
                  <Label htmlFor="recruitingPriorities">Recruiting Priorities</Label>
                  <Textarea
                    id="recruitingPriorities"
                    {...form.register("recruitingPriorities")}
                    placeholder="What are your main recruiting priorities and needs?"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="academicRequirements">Academic Requirements</Label>
                  <Textarea
                    id="academicRequirements"
                    {...form.register("academicRequirements")}
                    placeholder="GPA requirements, test scores, academic standards..."
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="scholarshipInfo">Scholarship Information</Label>
                  <Textarea
                    id="scholarshipInfo"
                    {...form.register("scholarshipInfo")}
                    placeholder="Available scholarships, financial aid information..."
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="campusVisitInfo">Campus Visit Information</Label>
                  <Textarea
                    id="campusVisitInfo"
                    {...form.register("campusVisitInfo")}
                    placeholder="Campus visit procedures, official/unofficial visits..."
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    {...form.register("additionalInfo")}
                    placeholder="Any other information about your program..."
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
              
              {step < 3 ? (
                <Button type="button" onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={createCoachMutation.isPending}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {createCoachMutation.isPending ? "Creating Profile..." : "Create Profile"}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}