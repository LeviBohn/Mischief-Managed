# Coding Challenge - FrontEnd

# The Harry Potter Mischief Managed App

## Instructions

Use the Harry Potter API to get a list of characters and spells.  

API: [Harry Potter API](https://hp-api.onrender.com/)

## Requirements
Language: React, use Typescript if possible
Styling: Use your preferred approach to styling the app.  
The app should have a view to display the list of all characters, all students, all staff.
The user should be able to select a character to go to a details page for the character

The app should have a clear way to navigate between views
A user should be able to favorite characters
The user should be able to set their preferred house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw)
The app should make use of colors and fonts that make aesthetic sense

## Time constraint
Try to keep your development to around 4 hours.  We want to see your work, but we also don't want to take up a ton of your time.  Use judgement on what will help showcase your skills appropriately. 
If you run out of time, it is okay to not implement all of the requested features in the challenge

## Evaluation Criteria
Proper usage of React components and props
Effective handling of state and component lifecycle
Clean and maintainable code structure
Proper TypeScript type annotations
CSS styling and responsiveness
Implementation of required features and functionality

## How to Submit
Please make your code public and send a link to the github repository.

## Implementation Details

This project was implemented using:
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Router for navigation
- Context API for state management

### Features Implemented
- ✅ Character listing (all, students, staff)
- ✅ Character details view
- ✅ House selection with custom SVG crests
- ✅ Favorite characters system
- ✅ Spells catalog with search functionality
- ✅ Responsive design
- ✅ Harry Potter themed UI/UX
- ✅ Local storage for user preferences

### Running the Project

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Open http://localhost:5173 in your browser

### Project Structure
```
src/
  ├── components/      # React components
  ├── context/        # Context providers
  ├── services/       # API services
  ├── types/          # TypeScript definitions
  ├── styles/         # CSS and styling
  └── assets/         # Images and SVGs
```
