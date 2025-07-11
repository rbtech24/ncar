import { pgTable, text, serial, integer, boolean, timestamp, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Parents/Guardians table
export const parents = pgTable("parents", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull(),
  relationship: text("relationship").notNull(), // Father, Mother, Guardian, etc.
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  athleteFirstName: text("athlete_first_name").notNull(),
  athleteLastName: text("athlete_last_name").notNull(),
  athleteGraduationYear: integer("athlete_graduation_year").notNull(),
  athleteSport: text("athlete_sport").notNull(),
  athletePosition: text("athlete_position"),
  athleteGPA: real("athlete_gpa"),
  athleteHeight: text("athlete_height"),
  athleteWeight: text("athlete_weight"),
  currentSchool: text("current_school").notNull(),
  coachName: text("coach_name"),
  coachEmail: text("coach_email"),
  coachPhone: text("coach_phone"),
  recruitingGoals: text("recruiting_goals"),
  additionalInfo: text("additional_info"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Athletes table
export const athletes = pgTable("athletes", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull(),
  dateOfBirth: text("date_of_birth").notNull(),
  graduationYear: integer("graduation_year").notNull(),
  currentGrade: text("current_grade").notNull(),
  sport: text("sport").notNull(),
  position: text("position"),
  height: text("height"),
  weight: text("weight"),
  gpa: real("gpa"),
  satScore: integer("sat_score"),
  actScore: integer("act_score"),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  currentSchool: text("current_school").notNull(),
  coachName: text("coach_name"),
  coachEmail: text("coach_email"),
  coachPhone: text("coach_phone"),
  parentFirstName: text("parent_first_name").notNull(),
  parentLastName: text("parent_last_name").notNull(),
  parentEmail: text("parent_email").notNull(),
  parentPhone: text("parent_phone").notNull(),
  athleticAchievements: text("athletic_achievements"),
  academicHonors: text("academic_honors"),
  extracurriculars: text("extracurriculars"),
  recruitingGoals: text("recruiting_goals"),
  interestedDivisions: text("interested_divisions").array(),
  interestedRegions: text("interested_regions").array(),
  videoLinks: text("video_links"),
  additionalInfo: text("additional_info"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Coaches table
export const coaches = pgTable("coaches", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull(),
  title: text("title").notNull(), // Head Coach, Assistant Coach, etc.
  collegeName: text("college_name").notNull(),
  division: text("division").notNull(), // D1, D2, D3, NAIA, JUCO
  conference: text("conference"),
  sport: text("sport").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  officePhone: text("office_phone"),
  websiteUrl: text("website_url"),
  recruitingRegions: text("recruiting_regions").array(),
  positionsRecruiting: text("positions_recruiting").array(),
  recruitingPriorities: text("recruiting_priorities"),
  academicRequirements: text("academic_requirements"),
  scholarshipInfo: text("scholarship_info"),
  campusVisitInfo: text("campus_visit_info"),
  additionalInfo: text("additional_info"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertParentSchema = createInsertSchema(parents).omit({
  id: true,
  createdAt: true,
});

export const insertAthleteSchema = createInsertSchema(athletes).omit({
  id: true,
  createdAt: true,
});

export const insertCoachSchema = createInsertSchema(coaches).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertParent = z.infer<typeof insertParentSchema>;
export type Parent = typeof parents.$inferSelect;
export type InsertAthlete = z.infer<typeof insertAthleteSchema>;
export type Athlete = typeof athletes.$inferSelect;
export type InsertCoach = z.infer<typeof insertCoachSchema>;
export type Coach = typeof coaches.$inferSelect;
