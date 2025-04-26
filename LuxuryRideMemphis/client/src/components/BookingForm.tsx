import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const bookingSchema = z.object({
  serviceType: z.string().min(1, { message: "Please select a service type" }),
  pickupDate: z.string().min(1, { message: "Please select a pickup date" }),
  pickupTime: z.string().min(1, { message: "Please select a pickup time" }),
  pickupLocation: z.string().min(3, { message: "Please enter a pickup location" }),
  dropoffLocation: z.string().min(3, { message: "Please enter a dropoff location" }),
  passengers: z.string().min(1, { message: "Please enter number of passengers" }),
  vehicleType: z.string().min(1, { message: "Please select a vehicle type" }),
  name: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const BookingForm = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(1);
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: "",
      pickupDate: "",
      pickupTime: "",
      pickupLocation: "",
      dropoffLocation: "",
      passengers: "",
      vehicleType: "",
      name: "",
      email: "",
      phone: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormValues) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Request Submitted",
        description: "We'll contact you shortly to confirm your reservation.",
      });
      form.reset();
      setFormStep(1);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `There was a problem submitting your booking: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    if (formStep === 1) {
      setFormStep(2);
    } else {
      bookingMutation.mutate(data);
    }
  };

  return (
    <div className="bg-secondary bg-opacity-80 p-6 rounded-lg border border-primary">
      <h3 className="text-2xl font-playfair font-bold text-primary mb-4 text-center">Book Your Ride</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {formStep === 1 ? (
            <>
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Service Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-800 text-white border-gray-700">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="airport">Airport Transfer</SelectItem>
                        <SelectItem value="corporate">Corporate Travel</SelectItem>
                        <SelectItem value="wedding">Wedding Transportation</SelectItem>
                        <SelectItem value="night-out">Night Out</SelectItem>
                        <SelectItem value="special-event">Special Event</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="pickupDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Pickup Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="bg-gray-800 text-white border-gray-700" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="pickupTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Pickup Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} className="bg-gray-800 text-white border-gray-700" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="pickupLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Pickup Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} className="bg-gray-800 text-white border-gray-700" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="dropoffLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Dropoff Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} className="bg-gray-800 text-white border-gray-700" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="passengers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Passengers</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="1" 
                          max="20" 
                          {...field} 
                          className="bg-gray-800 text-white border-gray-700" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="vehicleType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Vehicle Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-800 text-white border-gray-700">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="sedan">Luxury Sedan</SelectItem>
                          <SelectItem value="suv">Executive SUV</SelectItem>
                          <SelectItem value="stretch">Stretch Limousine</SelectItem>
                          <SelectItem value="van">Luxury Van</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>
          ) : (
            <>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-gray-800 text-white border-gray-700" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} className="bg-gray-800 text-white border-gray-700" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} className="bg-gray-800 text-white border-gray-700" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-white text-sm mt-2">
                <p>Service: {form.getValues("serviceType")}</p>
                <p>Date/Time: {form.getValues("pickupDate")} at {form.getValues("pickupTime")}</p>
                <p>Vehicle: {form.getValues("vehicleType")} for {form.getValues("passengers")} passengers</p>
              </div>
            </>
          )}

          <div className="flex gap-2">
            {formStep === 2 && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setFormStep(1)}
                className="bg-transparent border-primary text-primary hover:bg-primary hover:text-black w-full"
              >
                Back
              </Button>
            )}
            <Button 
              type="submit" 
              className="w-full btn-hover-effect"
              disabled={bookingMutation.isPending}
            >
              {bookingMutation.isPending ? "Processing..." : formStep === 1 ? "Next" : "Get Quote"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
