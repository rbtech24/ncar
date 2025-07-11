import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertParentSchema, insertAthleteSchema, insertCoachSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Parent routes
  app.post("/api/parents", async (req, res) => {
    try {
      const parentData = insertParentSchema.parse(req.body);
      const parent = await storage.createParent(parentData);
      res.json(parent);
    } catch (error) {
      res.status(400).json({ error: "Invalid parent data" });
    }
  });

  app.get("/api/parents/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const parent = await storage.getParent(id);
      if (!parent) {
        return res.status(404).json({ error: "Parent not found" });
      }
      res.json(parent);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });

  // Athlete routes
  app.post("/api/athletes", async (req, res) => {
    try {
      const athleteData = insertAthleteSchema.parse(req.body);
      const athlete = await storage.createAthlete(athleteData);
      res.json(athlete);
    } catch (error) {
      res.status(400).json({ error: "Invalid athlete data" });
    }
  });

  app.get("/api/athletes/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const athlete = await storage.getAthlete(id);
      if (!athlete) {
        return res.status(404).json({ error: "Athlete not found" });
      }
      res.json(athlete);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });

  // Coach routes
  app.post("/api/coaches", async (req, res) => {
    try {
      const coachData = insertCoachSchema.parse(req.body);
      const coach = await storage.createCoach(coachData);
      res.json(coach);
    } catch (error) {
      res.status(400).json({ error: "Invalid coach data" });
    }
  });

  app.get("/api/coaches/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const coach = await storage.getCoach(id);
      if (!coach) {
        return res.status(404).json({ error: "Coach not found" });
      }
      res.json(coach);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
