# Expense Tracker Application — React Native

> Expense tracker with backend in Firebase using "ReadTime Database".

Google automatically creates a REST API that 'sits in front of the database' but the app will handle requests to the database directly, which then inturn firebase translates to requests behind the scenes.

# Table of Contents

- [Expense Tracker Application — React Native](#expense-tracker-application--react-native)
- [Table of Contents](#table-of-contents)
- [Instructions](#instructions)
- [Firebase 'RealTime' backend database](#firebase-realtime-backend-database)
- [Application Images](#application-images)
- [Home (Recent Expenses)](#home-recent-expenses)
- [All Expenses](#all-expenses)
- [Add Expense](#add-expense)
- [Edit Expense](#edit-expense)

# Instructions

- Clone repo
- Install dependencies by running `npm install`
- Run `expo start` to run the application using [Expo](https://expo.dev/)
- Download the [Expo Go](https://expo.dev/) App for iOS/Android on the App Store/Google Play
- Scan the QR code on the terminal to launch the App in Development Mode on your phone

# Firebase 'RealTime' backend database

<p align="center" >
 <img src="./images/firebase-backend.png"  height="auto" width="100%">
</p>

> Simple database rule used used during development

```json
{
  "rules": {
    ".read": "now < 1659308400000", // 2022-8-1
    ".write": "now < 1659308400000" // 2022-8-1
  }
}
```

# Application Images

# Home (Recent Expenses)

> Recent expenses are expenses that have been logged within the last 7 days

<p align="center" >
 <img src="./images/1.jpg"  height="auto" width="100%">
</p>

# All Expenses

<p align="center" >
 <img src="./images/2.jpg"  height="auto" width="100%">
</p>

# Add Expense

<p align="center" >
 <img src="./images/3.jpg"  height="auto" width="100%">
</p>

# Edit Expense

<p align="center" >
 <img src="./images/4.jpg"  height="auto" width="100%">
</p>
