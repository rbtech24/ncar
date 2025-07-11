import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Eye, EyeOff, User, Users, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("athlete");
  const { toast } = useToast();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Here you would typically make an API call to authenticate the user
      // For demo purposes, we'll just show a success message
      toast({
        title: "Login Successful",
        description: `Welcome back! You've been logged in as ${activeTab}.`,
      });
      onClose();
      form.reset();
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Sign In to NCAR
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="athlete" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Athlete
              </TabsTrigger>
              <TabsTrigger value="parent" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Parent
              </TabsTrigger>
              <TabsTrigger value="coach" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Coach
              </TabsTrigger>
            </TabsList>

            <TabsContent value="athlete" className="space-y-4">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Athlete Login</CardTitle>
                  <CardDescription>
                    Access your athlete profile and recruiting dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="athlete-email">Email Address</Label>
                      <Input
                        id="athlete-email"
                        type="email"
                        placeholder="athlete@email.com"
                        {...form.register("email")}
                        className="w-full"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="athlete-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="athlete-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...form.register("password")}
                          className="w-full pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {form.formState.errors.password && (
                        <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
                      )}
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Sign In as Athlete
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="parent" className="space-y-4">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Parent Login</CardTitle>
                  <CardDescription>
                    Access your child's profile and recruiting progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="parent-email">Email Address</Label>
                      <Input
                        id="parent-email"
                        type="email"
                        placeholder="parent@email.com"
                        {...form.register("email")}
                        className="w-full"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parent-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="parent-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...form.register("password")}
                          className="w-full pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {form.formState.errors.password && (
                        <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
                      )}
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Sign In as Parent
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="coach" className="space-y-4">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Coach Login</CardTitle>
                  <CardDescription>
                    Access recruiting tools and athlete database
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="coach-email">Email Address</Label>
                      <Input
                        id="coach-email"
                        type="email"
                        placeholder="coach@university.edu"
                        {...form.register("email")}
                        className="w-full"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="coach-password">Password</Label>
                      <div className="relative">
                        <Input
                          id="coach-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...form.register("password")}
                          className="w-full pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {form.formState.errors.password && (
                        <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
                      )}
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Sign In as Coach
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">or</span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Don't have an account?
              </p>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="w-full" onClick={onClose}>
                  Create Athlete Profile
                </Button>
                <Button variant="outline" className="w-full" onClick={onClose}>
                  Create Parent Account
                </Button>
                <Button variant="outline" className="w-full" onClick={onClose}>
                  Create Coach Account
                </Button>
              </div>
            </div>

            <div className="text-center">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                Forgot your password?
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}