This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Assighnment One

- Objective: Create a simple To-Do List app that allows users to switch between light and dark themes. The app should demonstrate the use of `useContext` for theme management, `useCallback` and `useMemo` for performance optimization, and `useRef` for managing a to-do input field.
 
Requirements -
1. Theme Management with `useContext`
    a. Create a `ThemeContext` that manages light and dark themes.
    b. Use the context to apply the selected theme across the app.
    c. Implement a theme switcher button that toggles between light and dark themes
2. To-Do List Functionality
    a. Allow users to add new to-do items.
    b. Display the list of to-do items.
    c. Allow users to delete items from the list
3. Performance Optimization
    a. Use `useCallback` to optimize the performance of functions that are passed as props to
        child components (e.g. addToDo, removeToDo).
    b. Use `useMemo` to memoize the filtered list of to-dos based on some criteria (e.g. active vs completed tasks).
4. Managing input with `useRef`
    a. Use `useRef` to manage the input field for adding new to-dos.
    b. Automatically focus the input field after adding a to-do item.
 
Note -
This assignment should have proper folder structure.

# Assighnment Two

1. Crud Operations using Redux - Saga.

# Assighnment Three

1. Notifications -
	a. Remote notifications
	b. Local notification

# Assighnment Four

1. Build a chat application for minimum 2 users, where they can communicate with messages, (media is optional). On receiving the message, user should be notified.
2. Libraries - Redux, Redux Persist, RNSecureStorage


