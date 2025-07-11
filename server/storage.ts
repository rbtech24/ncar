import { users, type User, type InsertUser, type Parent, type InsertParent, type Athlete, type InsertAthlete, type Coach, type InsertCoach } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Parent methods
  createParent(parent: InsertParent): Promise<Parent>;
  getParent(id: number): Promise<Parent | undefined>;
  getParentByEmail(email: string): Promise<Parent | undefined>;
  
  // Athlete methods
  createAthlete(athlete: InsertAthlete): Promise<Athlete>;
  getAthlete(id: number): Promise<Athlete | undefined>;
  getAthleteByEmail(email: string): Promise<Athlete | undefined>;
  
  // Coach methods
  createCoach(coach: InsertCoach): Promise<Coach>;
  getCoach(id: number): Promise<Coach | undefined>;
  getCoachByEmail(email: string): Promise<Coach | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private parents: Map<number, Parent>;
  private athletes: Map<number, Athlete>;
  private coaches: Map<number, Coach>;
  
  currentUserId: number;
  currentParentId: number;
  currentAthleteId: number;
  currentCoachId: number;

  constructor() {
    this.users = new Map();
    this.parents = new Map();
    this.athletes = new Map();
    this.coaches = new Map();
    this.currentUserId = 1;
    this.currentParentId = 1;
    this.currentAthleteId = 1;
    this.currentCoachId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Parent methods
  async createParent(insertParent: InsertParent): Promise<Parent> {
    const id = this.currentParentId++;
    const parent: Parent = { ...insertParent, id, createdAt: new Date() };
    this.parents.set(id, parent);
    return parent;
  }

  async getParent(id: number): Promise<Parent | undefined> {
    return this.parents.get(id);
  }

  async getParentByEmail(email: string): Promise<Parent | undefined> {
    return Array.from(this.parents.values()).find(parent => parent.email === email);
  }

  // Athlete methods
  async createAthlete(insertAthlete: InsertAthlete): Promise<Athlete> {
    const id = this.currentAthleteId++;
    const athlete: Athlete = { ...insertAthlete, id, createdAt: new Date() };
    this.athletes.set(id, athlete);
    return athlete;
  }

  async getAthlete(id: number): Promise<Athlete | undefined> {
    return this.athletes.get(id);
  }

  async getAthleteByEmail(email: string): Promise<Athlete | undefined> {
    return Array.from(this.athletes.values()).find(athlete => athlete.email === email);
  }

  // Coach methods
  async createCoach(insertCoach: InsertCoach): Promise<Coach> {
    const id = this.currentCoachId++;
    const coach: Coach = { ...insertCoach, id, createdAt: new Date() };
    this.coaches.set(id, coach);
    return coach;
  }

  async getCoach(id: number): Promise<Coach | undefined> {
    return this.coaches.get(id);
  }

  async getCoachByEmail(email: string): Promise<Coach | undefined> {
    return Array.from(this.coaches.values()).find(coach => coach.email === email);
  }
}

export const storage = new MemStorage();
