import React from 'react';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = React.createContext();

export function signOut() {
    SecureStore.deleteItemAsync('loginStatus');
    SecureStore.deleteItemAsync('profile_pic');
}

export function signIn() {
    const profile_pic = Math.floor(Math.random() * 8);
    SecureStore.setItemAsync('loginStatus', 'true');
    SecureStore.setItemAsync('profile_pic', profile_pic.toString());
}