import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle booking submissions
  app.post("/api/bookings", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertBookingSchema.parse(req.body);
      
      // Store the booking in our storage
      const booking = await storage.createBooking(validatedData);
      
      // Return success response
      res.status(201).json({
        message: "Booking request submitted successfully",
        booking: {
          id: booking.id,
          submittedAt: booking.submittedAt,
          status: booking.status
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Error creating booking:", error);
        res.status(500).json({ 
          message: "An unexpected error occurred while processing your booking request"
        });
      }
    }
  });

  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact submission in our storage
      const contact = await storage.createContact(validatedData);
      
      // Return success response
      res.status(201).json({
        message: "Contact form submitted successfully",
        contact: {
          id: contact.id,
          submittedAt: contact.submittedAt
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          message: "An unexpected error occurred while processing your contact submission"
        });
      }
    }
  });

  // Get bookings by ID (for reference/lookup)
  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid booking ID" });
      }
      
      const booking = await storage.getBooking(id);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      
      res.json(booking);
    } catch (error) {
      console.error("Error fetching booking:", error);
      res.status(500).json({ message: "An error occurred while fetching the booking" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
