prodev-mobile-setup

Setup and practice projects for Mobile Development with React Native, TypeScript, and Expo.

📱 Task 1 — Create Your First Mobile App
Objective

The goal of this task was to set up and run the first mobile application using the Expo Router template, understand the file structure, and test the environment setup using the Expo Go mobile app.

Steps I Followed
1️⃣ Navigate to Project Directory

I opened my terminal and moved into the parent project folder:
cd prodev-mobile-setup

2️⃣ Set Up the Expo Project

I initialized a new Expo project using the latest Expo Router template:
npx create-expo-app@latest . --template tabs

3️⃣ Modified the Home Screen

I opened the file:
app/(tabs)/index.tsx

and changed the default text from:
<Text style={styles.title}>Welcome!</Text>

to:
<Text style={styles.title}>First App Created</Text>

4️⃣ Ran and Tested the Application

I started the Expo development server:
npx expo start

Then scanned the QR code in Expo Go on my Android device to preview the app.

5️⃣ Reset the Application

To test the project reset command, I ran:
npm run reset-project

This cleared the Metro Bundler cache and reloaded the app, forcing a clean rebuild.

🧭 Observations

The reset-project command helps fix issues caused by cached builds by clearing temporary files.

The app automatically recompiled after the reset.

The Expo Router template provides pre-configured navigation and tab structures.