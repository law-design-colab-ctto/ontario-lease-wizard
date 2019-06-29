Ontario Lease Wizard, written in **React** using Create React App.

# Development
You should install [yarn](https://yarnpkg.com/lang/en/) first. Then, of course, run `yarn install` in the root directory.

`yarn start` will start the development server -- the SCSS in `src/App.scss` will compile to CSS and hot reload, too.

`yarn build` will create a production-ready version.

# Project sketch

The application itself is a wizard that walks you through the creation of the Ontario Standard Lease. The components on the page are as follows:

- Header (`components/header.js`)
- Navigation (`components/navigation.js`)
- Content (`components/content.js`)
- Footer (`components/footer.js`)

The header and footer have a set size of 90px, the rest of the components share a CSS grid layout (`.AppGrid` in the SCSS). The application is intended for screens with a minimum width of 960px and should scale up from there adequately.

The navigation will send a path to the router; the content component will watch the current route and change its current content accordingly (pulling from the `pages` directory). All the pages have a form layout that correlates and writes to the App's overall state.

The state is comprised of an array of objects, which store what is entered for each part of the wizard -- some parts of the wizard will write just one property to the object (the user's input), but most will also flip a boolean to `true` if that part of the form is `required`.

Watching the number of required objects in state currently set to `true` will adjust the display of progress (checkboxes in the navigation, a progress bar in the footer) accordingly.

# Todo

**Pages**

- [x] 1. Welcome page
- [ ] 2. Create profile *(reliant on back-end to finish the page)*
- [x] 3. Disclaimer
- [ ] 4. Who are you? *(only shows if profile exists, so requires back-end)*
- [x] 5. Tell us your concerns
- [ ] 6. Money: Rent
- [ ] 7. Money: Deposits
- [ ] 8. Money: Important dates
- [ ] 9. Money: Payment methods
- [ ] 10. Day to Day (landlord)
- [ ] 11. Day to Day (tenant)
- [ ] 12. Timeline
- [ ] 13. Parties
- [ ] 14. Parties: Changes to the Parties (landlord)
- [ ] 15. Parties: Changes to the Parties (tenant)
- [ ] 16. Additional Terms: Categories
- [ ] 17. Additional Terms: Terms
- [ ] 18. Additional Terms: Summary
- [ ] 19. Unit
- [ ] 20. End

**Infrastructure**

- [ ] 1. Exporting state to filled Ontario Lease PDF
- [ ] 2. Exporting state to pre-filled, tenant-based layout
- [ ] 3. Filtering the views to this layout
- [ ] 4. Creating a back-end to store the state as it's entered and associate with a user profile (see Pages, #2)

**User interface**

Doesn't include *page-specific* interfaces, like the sliders on Pages, #5 or the image upload UI on Unit (Pages, #19).

- [ ] 1. Progress bar in footer
- [x] 2. Adding the `active` class to the `svg.chevronRight` so that it animates rotating when a navigation option is selected.
- [ ] 3. Calendar modals.
- [ ] 4. Settings modal.

## Suggested milestones

The state should be developed first for single-session functionality before worrying about bolting on a back-end. This means developing each page component as necessary without those features. During this process, the user interface todos should be checked off. After the wizard is entirely completable, the export comes next. Finally, the back-end is established and users can create and store credentials.
