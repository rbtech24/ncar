import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertParentSchema, type InsertParent } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

interface ParentRegistrationFormProps {
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

const relationshipOptions = ["Father", "Mother", "Guardian", "Stepfather", "Stepmother", "Grandparent", "Other"];

export default function ParentRegistrationForm({ onClose }: ParentRegistrationFormProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [step, setStep] = useState(1);

  const form = useForm<InsertParent>({
    resolver: zodResolver(insertParentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      relationship: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      athleteFirstName: "",
      athleteLastName: "",
      athleteGraduationYear: new Date().getFullYear() + 1,
      athleteSport: "",
      athletePosition: "",
      athleteGPA: undefined,
      athleteHeight: "",
      athleteWeight: "",
      currentSchool: "",
      coachName: "",
      coachEmail: "",
      coachPhone: "",
      recruitingGoals: "",
      additionalInfo: "",
    },
  });

  const createParentMutation = useMutation({
    mutationFn: (data: InsertParent) => 
      apiRequest("/api/parents", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }),
    onSuccess: () => {
      toast({
        title: "Registration Successful!",
        description: "Your parent profile has been created successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/parents"] });
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

  const onSubmit = (data: InsertParent) => {
    createParentMutation.mutate(data);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
          <CardTitle className="text-2xl font-bold text-blue-600">Parent Registration</CardTitle>
          <CardDescription>
            Help your athlete get recruited by creating your parent profile
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
                <h3 className="text-lg font-semibold">Your Information</h3>
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
                <div>
                  <Label htmlFor="relationship">Relationship to Athlete *</Label>
                  <Select onValueChange={(value) => form.setValue("relationship", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      {relationshipOptions.map((rel) => (
                        <SelectItem key={rel} value={rel}>
                          {rel}
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
                <h3 className="text-lg font-semibold">Athlete Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="athleteFirstName">Athlete First Name *</Label>
                    <Input
                      id="athleteFirstName"
                      {...form.register("athleteFirstName")}
                      placeholder="Sarah"
                    />
                  </div>
                  <div>
                    <Label htmlFor="athleteLastName">Athlete Last Name *</Label>
                    <Input
                      id="athleteLastName"
                      {...form.register("athleteLastName")}
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="athleteGraduationYear">Graduation Year *</Label>
                    <Input
                      id="athleteGraduationYear"
                      type="number"
                      {...form.register("athleteGraduationYear", { valueAsNumber: true })}
                      placeholder="2025"
                    />
                  </div>
                  <div>
                    <Label htmlFor="athleteSport">Sport *</Label>
                    <Select onValueChange={(value) => form.setValue("athleteSport", value)}>
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
                </div>
                <div>
                  <Label htmlFor="athletePosition">Position/Event</Label>
                  <Input
                    id="athletePosition"
                    {...form.register("athletePosition")}
                    placeholder="Point Guard, Pitcher, etc."
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="athleteHeight">Height</Label>
                    <Input
                      id="athleteHeight"
                      {...form.register("athleteHeight")}
                      placeholder="5'10&quot;"
                    />
                  </div>
                  <div>
                    <Label htmlFor="athleteWeight">Weight</Label>
                    <Input
                      id="athleteWeight"
                      {...form.register("athleteWeight")}
                      placeholder="150 lbs"
                    />
                  </div>
                  <div>
                    <Label htmlFor="athleteGPA">GPA</Label>
                    <Input
                      id="athleteGPA"
                      type="number"
                      step="0.01"
                      {...form.register("athleteGPA", { valueAsNumber: true })}
                      placeholder="3.8"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="currentSchool">Current School *</Label>
                  <Input
                    id="currentSchool"
                    {...form.register("currentSchool")}
                    placeholder="Atlanta High School"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Coach & Additional Information</h3>
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
                <div>
                  <Label htmlFor="recruitingGoals">Recruiting Goals</Label>
                  <Textarea
                    id="recruitingGoals"
                    {...form.register("recruitingGoals")}
                    placeholder="Tell us about your recruiting goals and preferences..."
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
              
              {step < 3 ? (
                <Button type="button" onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={createParentMutation.isPending}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {createParentMutation.isPending ? "Creating Profile..." : "Create Profile"}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}