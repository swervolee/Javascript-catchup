# Quick Start Guide

Get started with JavaScript and React practice in 5 minutes!

## Setup (2 minutes)

```bash
# Clone the repository
git clone https://github.com/swervolee/Javascript-catchup.git
cd Javascript-catchup

# Install dependencies
npm install
```

## Your First Exercise (3 minutes)

### Step 1: Open an Exercise File

```bash
# Open the first JavaScript exercise
code javascript-fundamentals/01-variables-and-types.js
```

### Step 2: Read and Implement

You'll see TODOs like this:

```javascript
// TODO: Create a function that checks the type of a given value
function checkType(value) {
  // Your code here
}
```

Implement the function:

```javascript
function checkType(value) {
  return typeof value;
}
```

### Step 3: Run Tests

```bash
# Run all tests
npm test

# Or run tests in watch mode
npm run test:watch
```

### Step 4: Check Solutions (if needed)

```bash
# View the solution
code solutions/01-variables-and-types.js
```

## What's Next?

### JavaScript Path
```
01-variables-and-types.js  ← Start here
02-functions.js
03-arrays.js
04-objects.js
05-async-promises.js
06-es6-features.js
```

### React Path
```
01-components.jsx          ← Start here after JavaScript
02-state-and-hooks.jsx
03-effects.jsx
04-forms.jsx
05-advanced-hooks.jsx
06-custom-hooks.jsx
```

## Common Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Tips for Success

1. **Start Simple**: Begin with variables and types
2. **Practice Daily**: Even 30 minutes helps
3. **Read Tests**: They show expected behavior
4. **Experiment**: Try different approaches
5. **Check Solutions**: Learn from reference implementations

## Getting Help

### In this Repository
- `README.md` - Full documentation
- `LEARNING_GUIDE.md` - Week-by-week plan
- `javascript-fundamentals/README.md` - JavaScript guide
- `react-fundamentals/README.md` - React guide

### External Resources
- [MDN Web Docs](https://developer.mozilla.org/) - JavaScript reference
- [React Docs](https://react.dev/) - Official React documentation
- [JavaScript.info](https://javascript.info/) - Detailed tutorials

## Troubleshooting

### Tests Not Running?
```bash
# Make sure dependencies are installed
npm install

# Try clearing cache
npm test -- --clearCache
```

### Stuck on an Exercise?
1. Read the test file to understand requirements
2. Check the solution file for reference
3. Break the problem into smaller steps
4. Use console.log() to debug

### Need More Practice?
- Solve the same exercise in different ways
- Modify exercises to make them harder
- Create your own variations

## Project Structure

```
Javascript-catchup/
├── javascript-fundamentals/  # JavaScript exercises
├── react-fundamentals/       # React exercises
├── solutions/               # Reference solutions
│   └── __tests__/          # Test files
├── README.md               # Full documentation
├── LEARNING_GUIDE.md       # Study plan
└── package.json            # Dependencies
```

## Your Daily Routine

```bash
# Morning (15 min)
1. Read the exercise file
2. Review concepts

# Afternoon (30 min)
3. Implement solutions
4. Run tests

# Evening (15 min)
5. Compare with solutions
6. Note learnings
```

## Progress Checklist

Track your progress:

### JavaScript Fundamentals
- [ ] Variables and Types
- [ ] Functions
- [ ] Arrays
- [ ] Objects
- [ ] Async/Promises
- [ ] ES6+ Features

### React Fundamentals
- [ ] Components
- [ ] State and Hooks
- [ ] Effects
- [ ] Forms
- [ ] Advanced Hooks
- [ ] Custom Hooks

## Next Steps

After completing all exercises:

1. **Build Projects**: Apply what you learned
2. **Review Weak Areas**: Focus on challenging topics
3. **Learn Advanced Topics**: TypeScript, Testing, etc.
4. **Share Your Progress**: Help others learn

---

Ready to start? Open `javascript-fundamentals/01-variables-and-types.js` and begin coding! 🚀

Questions? Check out `LEARNING_GUIDE.md` for detailed guidance.
