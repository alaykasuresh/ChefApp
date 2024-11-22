# ChefApp
# Changelog

## [Unreleased]
- Initial version of the app with basic features for Chef's Add/Remove Dishes Screen.
- Integrated image picker for selecting dish images.
- Added form fields for adding dish details (name, price, description).
- Implemented a simple Chef's login screen.
- Created a layout for the menu courses section with sample data.
- Designed Chef’s Selection section to display selected dishes.
- Styled the app with pastel colors, rounded corners, and subtle shadows.

- ## [1.0.0] - 2024-11-09
### Added
- **App Structure**: Added a `NavigationContainer` and a stack of screens for the app, including `Home`, `Menu`, `Starters`, `Main`, `Dessert`, `ChefSelections`, and `ChefPage`.
- **Home Screen**: Created a welcoming home screen with buttons to navigate to the menu or chef's control panel.
- **Menu Screen**: Introduced the `Menu` screen with categories for Starters, Main Dishes, and Desserts.
- **Dish Selection**: Added `ChefSelectionsScreen` to show detailed dish information when selected.
- **Dish Management**: Developed a `ChefPage` where the chef can add or remove dishes to/from the menu.
- **Image Upload**: Integrated `expo-image-picker` to allow chefs to pick images for dishes.
- **Dishes Data**: Added sample dish data (Starters, Mains, Desserts) with images, descriptions, and prices.

### Changed
- **UI Styling**: Updated the app's UI with a more refined style, using pastel colors and modern button designs.
- **Navigation Flow**: Streamlined the navigation between different sections like `Starters`, `Mains`, and `Desserts` to improve user experience.

### Fixed
- **General Bug Fixes**: Fixed minor layout issues in some components to ensure better responsiveness.

## [0.1.0] - 2024-11-10
### Added
- **Basic Structure**: Created the basic app structure, including the `NavigationContainer` and the navigation stack.
- **Static Screens**: Added initial static screens like `HomeScreen`, `MenuScreen`, and `ChefPage`.

## [1.0.0] - 2024-11-22
- **Initial release** with the following features:
  - Chef's Add/Remove Dishes screen with form inputs for dish name, price, description, and image.
  - Ability to select and display images for dishes using Expo ImagePicker.
  - Basic layout and styling for a professional, user-friendly interface.
  - Functional login screen for Chef's authentication.
  - Dynamic display of courses and dishes with image and price details.
  - Chef's Selection section to highlight featured dishes.

Version 1.5.0 (App Performance and Navigation Optimization)
Optimized navigation between screens to ensure smoother transitions.
Ensured better management of state when adding and removing dishes.
Cleaned up code by refactoring and organizing components for easier maintenance.
