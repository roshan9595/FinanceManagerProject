import { AsyncStorage } from "react-native";

export const FIREBASE_API_KEY = "AIzaSyBaOXkb4NBTboxxQBXesO5MtXWIFLZihA4";
export const FIREBASE_AUTH_DOMAIN = "financemanager-1d039.firebaseapp.com";
export const FIREBASE_DATABASE_URL = "https://financemanager-1d039.firebaseio.com";
export const FIREBASE_PROJECT_ID = "financemanager-1d039";
export const FIREBASE_STORAGE_BUCKET = "financemanager-1d039.appspot.com";
export const FIREBASE_MESSAGING_SENDER_ID = "1053605504948";

export const _storeData = async (userId) => {
  try {
    await AsyncStorage.setItem('UserId', userId);
  } catch (error) {
    // Error saving data
    console.log(error)
  }
}

export const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('UserId');
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
   } catch (error) {
     // Error retrieving data
     console.log(error)
   }
}
  