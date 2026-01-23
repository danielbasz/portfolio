# EPCOR - Systems Analyst, Web Interview Prep

## Job Details
- **Position:** Systems Analyst, Web
- **Company:** EPCOR (Edmonton utility)
- **Track:** IT1 Developmental ($51.42/hr) or IT2 ($56.15/hr)
- **Location:** Edmonton, AB
- **Type:** Full-time, Permanent

---

## Your Situation

You're applying for the **IT1 developmental track** with:
- Strong frontend skills (Angular, React, JS, HTML, CSS)
- Enterprise Java experience (transferable to C#)
- No C#/.NET experience yet

**Strategy:** Demonstrate you can learn quickly by actually learning the basics before the interview.

---

## Technical Prep Plan

### Priority 1: C# Fundamentals (Your Main Gap)

Since you know Java, C# will feel familiar. Focus on:

- [ ] **Syntax differences from Java**
  - `string` vs `String`, `var` keyword, properties vs getters/setters
  - `using` statements (like try-with-resources)
  - Nullable types (`int?`, `string?`)
  - String interpolation (`$"Hello {name}"`)

- [ ] **C# specific features**
  - Properties (auto-properties, get/set)
  - LINQ (like Java Streams but more integrated)
  - async/await (similar to CompletableFuture)
  - Extension methods
  - Delegates and events

- [ ] **Practice**
  - Do 10-15 LeetCode easy/medium problems in C#
  - Build a small console app to get comfortable with syntax

**Resources:**
- [C# for Java Developers](https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/) - Microsoft docs
- [Learn C# in Y Minutes](https://learnxinyminutes.com/docs/csharp/) - Quick syntax overview
- YouTube: "C# Tutorial for Beginners" by Programming with Mosh

---

### Priority 2: ASP.NET MVC Basics

You know MVC from Angular/Java. ASP.NET MVC is the same pattern:

- [ ] **Core concepts**
  - Controllers (handle requests, return views or JSON)
  - Views (Razor syntax - HTML with C# embedded)
  - Models (data classes, view models)
  - Routing (attribute routing, conventional routing)

- [ ] **Common patterns**
  - Dependency injection (built into ASP.NET Core)
  - Entity Framework (like JPA/Hibernate for .NET)
  - Middleware pipeline
  - Configuration (appsettings.json)

- [ ] **Practice**
  - Build a simple CRUD web app with ASP.NET Core MVC
  - Follow Microsoft's official tutorial

**Resources:**
- [ASP.NET Core MVC Tutorial](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/) - Official Microsoft
- YouTube: "ASP.NET Core Crash Course" by Traversy Media

---

### Priority 3: Frontend (Reinforce What You Know)

You already know this, but brush up since it's core to the role:

- [ ] **Angular review**
  - Components, services, modules
  - RxJS observables
  - HTTP client
  - Routing

- [ ] **React review**
  - Components (functional + hooks)
  - State management (useState, useEffect)
  - Props and lifting state

- [ ] **JavaScript/TypeScript**
  - ES6+ features (arrow functions, destructuring, spread)
  - Promises and async/await
  - Array methods (map, filter, reduce)

- [ ] **CSS/Bootstrap**
  - Flexbox and Grid
  - Bootstrap grid system (container, row, col)
  - Bootstrap components (cards, modals, navbars)
  - Responsive design breakpoints

---

### Priority 4: Web Operations (Key for This Role)

This role is ops-heavy. Know these concepts:

- [ ] **Monitoring & Performance**
  - Application performance monitoring (APM) concepts
  - What metrics matter (response time, error rate, throughput)
  - Log analysis approaches
  - Browser dev tools for debugging

- [ ] **Deployments**
  - CI/CD pipeline concepts
  - Blue-green deployments, rolling deployments
  - Rollback strategies
  - Environment management (dev, staging, prod)

- [ ] **Troubleshooting**
  - How to diagnose a slow page
  - How to trace an error from browser to server to database
  - Common web issues (CORS, caching, session problems)

---

### Priority 5: Networking Basics

Job mentions "load balancers, firewalls, domains":

- [ ] **DNS**
  - How domain resolution works
  - A records, CNAME records
  - TTL and caching

- [ ] **Load Balancers**
  - What they do (distribute traffic)
  - Round-robin vs least connections
  - Health checks
  - Sticky sessions

- [ ] **Firewalls**
  - Inbound vs outbound rules
  - Ports (80, 443, 22)
  - Web Application Firewalls (WAF)

- [ ] **HTTPS/SSL**
  - How TLS handshake works (high level)
  - Certificates

---

### Priority 6: Database (Supporting Knowledge)

- [ ] **SQL fundamentals**
  - SELECT, JOIN types, GROUP BY, subqueries
  - Indexes and when to use them
  - Query optimization basics

- [ ] **Entity Framework basics**
  - Code-first vs database-first
  - Migrations
  - LINQ queries

---

## Behavioral Interview Prep

### STAR Stories to Prepare

Prepare specific stories for these scenarios:

1. **Learning a new technology quickly**
   - Example: Learning Angular at CRA, picking up new frameworks

2. **Troubleshooting a production issue**
   - Your on-call experience, investigating and finding root cause

3. **Working with non-technical stakeholders**
   - Translating requirements, explaining technical concepts

4. **Handling a tight deadline**
   - Sprint deliveries, balancing quality with speed

5. **Working in a team / collaboration**
   - Cross-functional work at CRA, code reviews, knowledge sharing

6. **Making a mistake and learning from it**
   - Everyone has one, shows self-awareness

### Questions They Might Ask

**Technical:**
- "Walk me through how you would troubleshoot a slow web page"
- "Explain MVC architecture"
- "How do you approach learning a new codebase?"
- "Describe your experience with production deployments"
- "What's your experience with monitoring and logging?"

**Behavioral:**
- "Tell me about a time you had to learn something quickly"
- "Describe a challenging bug you solved"
- "How do you handle conflicting priorities?"
- "Tell me about your experience with on-call support"
- "Why EPCOR? Why this role?"

**About the C# gap (be ready for this):**
- "You don't have C# experience. How would you get up to speed?"
- Answer: Mention Java similarity, your track record of learning quickly, and any C# prep you've already started

### Questions to Ask Them

- "What does a typical day look like for someone in this role?"
- "How is the team structured? How many developers?"
- "What's the balance between new development vs maintenance?"
- "What does the on-call rotation look like?"
- "What technologies are you most excited about adopting?"
- "What does success look like in the first 6 months?"

---

## Technical Assessment Prep

The job posting mentions a possible technical/practical assessment. Prepare for:

### Likely Formats

1. **Coding exercise** - Solve a problem in C# or JavaScript
2. **Debugging exercise** - Find and fix bugs in existing code
3. **System design light** - How would you build X feature?
4. **Troubleshooting scenario** - Given these symptoms, diagnose the issue

### Practice

- [ ] LeetCode easy/medium in C# (10-15 problems)
- [ ] LeetCode easy/medium in JavaScript (10-15 problems)
- [ ] Practice explaining your thought process out loud
- [ ] Review common debugging techniques

---

## Study Schedule Suggestion

### Week 1: C# Foundations
- Days 1-3: C# syntax, differences from Java
- Days 4-5: LINQ and async/await
- Days 6-7: Build a small console app, do LeetCode problems

### Week 2: ASP.NET MVC
- Days 1-3: Follow Microsoft's MVC tutorial
- Days 4-5: Build a simple CRUD app
- Days 6-7: Entity Framework basics

### Week 3: Frontend + Operations
- Days 1-2: Angular/React review
- Days 3-4: Bootstrap review, build a responsive page
- Days 5-7: Web ops concepts, networking basics

### Week 4: Interview Prep
- Days 1-2: Practice coding problems
- Days 3-4: Prepare STAR stories, practice out loud
- Days 5-6: Mock interviews (with a friend or rubber duck)
- Day 7: Rest and review notes

---

## Quick Reference: Java to C# Cheat Sheet

| Java | C# |
|------|-----|
| `System.out.println()` | `Console.WriteLine()` |
| `public int getValue()` | `public int Value { get; set; }` |
| `extends` | `:` |
| `implements` | `:` (same as extends) |
| `final` | `sealed` (class), `readonly` (field) |
| `@Override` | `override` (keyword) |
| `import` | `using` |
| `package` | `namespace` |
| `List<String>` | `List<string>` |
| Streams | LINQ |
| `try-with-resources` | `using` statement |
| `Optional<T>` | Nullable types `T?` |

---

## Resources Summary

### C#
- Microsoft C# docs
- "C# in a Nutshell" (book)
- Programming with Mosh (YouTube)

### ASP.NET
- Microsoft Learn tutorials
- Traversy Media (YouTube)

### General
- LeetCode (practice problems)
- ChatGPT/Claude for concept explanations

---

## Notes

- **Application Date:** January 2025
- **Status:** Preparing to apply
- **Key differentiator:** Communication skills + ability to learn quickly
- **Main gap to address:** C# and ASP.NET (learn basics before interview)

---

## Session Notes (January 2025)

### Application Materials Status
- **CV:** Updated with EPCOR-specific tweaks
  - Added Bootstrap to Web skills
  - Added on-call rotation + production support bullet
  - Revised dependency/security monitoring bullet
  - MVC in skills section
- **Cover Letter:** Complete, targeting IT1 developmental track
  - Addresses C# gap honestly
  - Emphasizes communication + adaptability
  - References EPCOR's mission to Edmontonians
- **Recommendation Letter (Hani Khamseh):** Ready, hold for later unless portal has extra upload field

### Key Context
- Daniel has 2.5 years enterprise experience at CRA (Angular, Java, Swing)
- Applying for IT1 developmental track (not IT2) since he's learning C#/.NET
- Spouse is a physician (mentioned in TELUS app, healthcare connection)
- Also applied to TELUS Health Java Developer role (different stack, better match)
- Strong communication skills are his differentiator
- Has one on-call experience story (production incident, root cause analysis)
- Minimal C# experience (only Unity game experiments)

### Next Steps
1. Submit application via Jobvite portal
2. Start C# study plan (Priority 1 in prep)
3. Build a small ASP.NET project to have something concrete to discuss
4. Practice behavioral stories out loud

### Files in JOB folder
- `Daniel Porto - CV - Other.md` - Base/general CV
- `Daniel Porto - CV - EPCOR.md` - EPCOR-specific CV (with Bootstrap, on-call, security bullets)
- `TELUS Health - Java Developer Prep.md` - Prep for TELUS role
- `EPCOR - Systems Analyst Web Prep.md` - This file

Good luck! You've got this.
