# Creatures Great and Small - Website Project

**IMPORTANT: Always read and update this document after each development step.**

## Project Overview
A beautiful, modern website showcasing a South African artisan's scrap metal creatures. The site will feature his story, creations, and integrate with Instagram to display his latest work.

## Key Features
- About page highlighting the artisan's story and trade
- Gallery showcasing scrap metal creatures
- Special collection: "The Railway People" (made from reclaimed Knysna railway screws)
- Instagram feed integration with captions
- Contact functionality via email
- Social sharing capabilities (like/share Instagram posts)
- Mobile-first responsive design

## Tech Stack
- **Frontend**: Next.js with TypeScript and React
- **Database**: Supabase
- **Hosting**: Vercel (auto-deploy from main branch)
- **Version Control**: GitHub
- **Email**: Resend + Supabase built-in email
- **Styling**: TailwindCSS (responsive/mobile-first)

## Development Workflow
1. **Always check TypeScript errors** before pushing: `npm run type-check`
2. **Test on live Vercel domain** (not local development)
3. **Push to main branch** triggers auto-deployment
4. **Update this document** after each major step
5. **Follow separation of concerns** - keep presentation, business logic, and data access separate

## Project Structure Guidelines
```
/src
  /app                 # Next.js app router pages
  /components          # Reusable UI components
    /ui               # Basic UI elements (buttons, cards, etc.)
    /features         # Feature-specific components
  /lib                 # Business logic and utilities
  /services           # Data access layer (Supabase, APIs)
  /types              # TypeScript type definitions
  /styles             # Global styles
/public
  /images             # Static images
  /railway-people     # The Railway People collection images
```

## Development Steps

### Phase 1: Setup & Infrastructure
- [ ] Create GitHub repository
- [ ] Link to Vercel for auto-deployment
- [ ] Initialize Next.js with TypeScript
- [ ] Set up TailwindCSS
- [ ] Configure Supabase connection

### Phase 2: Core Features
- [ ] Create responsive layout and navigation
- [ ] Build About page with artisan's story
- [ ] Implement image gallery with Railway People collection
- [ ] Integrate Instagram API for feed display
- [ ] Add contact form functionality

### Phase 3: Enhancement & Polish
- [ ] Implement social sharing features
- [ ] Add image optimization and loading states
- [ ] Mobile optimization testing
- [ ] Performance optimization
- [ ] SEO optimization

### Phase 4: Deployment & Testing
- [ ] Test all features on live Vercel domain
- [ ] Cross-device testing
- [ ] Final TypeScript error checking
- [ ] Production deployment

## Environment Setup Required
- GitHub account and repository
- Vercel account linked to GitHub
- Supabase project
- Instagram API credentials
- Resend API key (for contact form)

## Testing Strategy
- **Primary testing**: Live Vercel deployment
- **Mobile testing**: Test on actual devices and browser dev tools
- **TypeScript**: Run `npm run type-check` before all commits
- **Performance**: Use Lighthouse for optimization

## Current Project Status
- **Phase**: Setup & Planning
- **Next Step**: Create GitHub repository and link to Vercel
- **Last Updated**: [Date to be updated after each step]

---
*This document should be updated after every development milestone to track progress and maintain project context.*