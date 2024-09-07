# Contributing to Considerate Cat Tarot - Version 2

Thank you for pouncing into **Considerate Cat Tarot - Version 2**! This guide
will help you make pawsitive contributions and keep our project purr-fectly
maintained.

## How to Contribute

### Submitting Pull Requests

1. **Link an Issue**:

   - Make sure your pull request is associated with a relevant issue. This helps
     us keep our paws on track and ensures that nothing gets overlooked. If
     there’s no issue to scratch, create one before submitting your pull
     request.

2. **Follow Formatting Guidelines**:

   - Our code should be formatted according to our Prettier configuration. We
     use a pre-commit hook to enforce this to make sure your code is fur-matted
     correctly while committing, so you shouldn't (in theory) need to worry
     about setting up Prettier if it isn't configured. (Check your commits!)

3. **Ensure Functionality**:

   - Test your changes to ensure all components are consistent in both the main
     application and Storybook. We need every fantastic feature to work smoothly
     in both environments.

4. **Use Built-Ins When Possible**:

   - Prefer using built-in components and utilities from our included
     frameworks. This helps maintain a consistent look and reduces our
     dependency clutter.

5. **Pre-Commit Hook**:
   - We use Husky to enforce Prettier formatting through a pre-commit hook. The
     hook will ensure your code is formatted correctly before you commit it, so
     make sure to let it purr before you push (note that whitespace only changes
     are not allowed).

### Setting Up Your Development Environment

1. **Install Dependencies**:
   ```bash
   npm install
   ```

## Setting Up Your Development Environment

2.  **Set Up Supabase** (recommended):

    - To get a local instance of Supabase purring smoothly, follow these steps:
    - Install Supabase CLI:
      [Supabase CLI Installation](https://supabase.com/docs/guides/cli)
    - Start a local Supabase instance:
      ```bash
      supabase start
      ```
    - Create a `.env.local` file in the root of your project and add your
      Supabase configuration. Example:

      ```dotenv
      SUPABASE_URL=your_supabase_url
      SUPABASE_ANON_KEY=your_supabase_anon_key
      ```

    - **Schema coming soon!**

## Versioning and Changelog

1.  **Semantic Versioning**:

    - We follow [Semantic Versioning](https://semver.org/). `MAJOR.MINOR.PATCH`:
    - **MAJOR**: For incompatible changes (Non-compatible changes to
      application/API).
    - **MINOR**: For backward-compatible new features (when we get a new toy).
    - **PATCH**: For backward-compatible bug fixes (when we tidy up the litter
      box).

2.  **Bumping Versions**:

    - Update the version in `package.json` to match the changes. Increment the
      minor version for new features and the patch version for bug fixes.

3.  **Updating the Changelog**:

    - Record your changes in the `CHANGELOG.md` file. Include a summary of new
      features, improvements, and fixes. "Unreleased" is the first item in the
      Changelog, please copy it and use it to note your changes for your pull
      request.

4.  **Branch Naming**:
    - Your format should include the intent, issue number, and as much of the
      issue title that makes sense.
    - E.G. `Issue: #42 Purrlaroid Footer Colors Have Bad Contrast`
      - Good Examples:
        - `#42-improve-purrlaroid-color-contrast`
        - `fixes-#42-footer-color-contrast`
        - `42-adjust-footer-color-contrast`
      - Bad Examples:
        - `CC-branch-purrlaroid-footer-colors`
        - `42-purrlaroid-component`
        - `branch-pr-issue-42`
    - Use this format to clearly associate the branch with a specific issue or
      task, ensuring that the issue number is included for easy reference.

## Additional Resources

- **Next.js Documentation**: [Next.js Docs](https://nextjs.org/docs)
- **React Documentation**: [React Docs](https://react.dev/)
- **Storybook Documentation**: [Storybook Docs](https://storybook.js.org/docs)
- **Supabase Documentation**: [Supabase Docs](https://supabase.com/docs)
- **MUI Documentation**: [MUI Docs](https://mui.com/getting-started/overview/)

May your coding be smooth and your contributions be claw-some!
