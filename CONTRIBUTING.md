# Contributing to JavaScript-Catchup

Thank you for your interest in contributing! This guide will help you add exercises, improve solutions, or fix bugs.

## How to Contribute

### Adding New Exercises

1. **Choose a topic** that isn't already covered
2. **Create the exercise file** in the appropriate directory
3. **Follow the format**:
   ```javascript
   /**
    * Topic Name - Brief Description
    * 
    * Topics covered:
    * - Concept 1
    * - Concept 2
    */
   
   // TODO: Exercise description
   function exerciseName() {
     // Your code here
   }
   
   module.exports = { exerciseName };
   ```

4. **Create a solution file** in `solutions/`
5. **Write tests** in `solutions/__tests__/`
6. **Update README** if adding a new category

### Improving Solutions

1. **Check for bugs** in existing solutions
2. **Optimize code** while maintaining readability
3. **Add comments** for complex logic
4. **Ensure tests pass** after changes

### Writing Tests

Use Jest testing framework:

```javascript
describe('Feature Name', () => {
  describe('functionName', () => {
    test('should do something', () => {
      expect(functionName(input)).toBe(expected);
    });
  });
});
```

### Code Style Guidelines

**JavaScript:**
- Use 2 spaces for indentation
- Use semicolons
- Use camelCase for variables and functions
- Use PascalCase for classes
- Add comments for complex logic

**React:**
- Use functional components
- Use hooks for state management
- Destructure props
- Use meaningful component names

### Testing Your Changes

Before submitting:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Check test coverage
npm run test:coverage
```

### Submitting Changes

1. **Fork the repository**
2. **Create a branch**: `git checkout -b feature/my-exercise`
3. **Make your changes**
4. **Test thoroughly**
5. **Commit**: `git commit -m "Add exercise for topic X"`
6. **Push**: `git push origin feature/my-exercise`
7. **Create a Pull Request**

### Pull Request Guidelines

- **Title**: Clear and descriptive
- **Description**: Explain what and why
- **Tests**: Include tests for new features
- **Documentation**: Update relevant docs

Example PR description:
```markdown
## Description
Added exercises for Array.prototype methods

## Changes
- Added exercise file for advanced array methods
- Added solution file
- Added comprehensive tests
- Updated README with new exercise

## Testing
- All existing tests pass
- Added 10 new test cases
- Test coverage maintained at 100%
```

## Ideas for Contributions

### Beginner-Friendly
- Fix typos in documentation
- Improve code comments
- Add more test cases
- Update README examples

### Intermediate
- Add new exercises
- Improve existing solutions
- Write better explanations
- Create mini-projects

### Advanced
- Add TypeScript support
- Create integration tests
- Build CLI tool for exercises
- Add performance benchmarks

## Exercise Ideas Needed

### JavaScript
- [ ] Regular expressions
- [ ] Error handling patterns
- [ ] Recursion
- [ ] Functional programming
- [ ] Design patterns
- [ ] Data structures

### React
- [ ] Routing (React Router)
- [ ] State management (Redux)
- [ ] Testing components
- [ ] Performance optimization
- [ ] Accessibility
- [ ] Animation

## Questions?

Feel free to open an issue for:
- Questions about contributing
- Suggestions for improvements
- Bug reports
- Feature requests

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn
- Celebrate contributions

Thank you for helping make this resource better! 🙏
