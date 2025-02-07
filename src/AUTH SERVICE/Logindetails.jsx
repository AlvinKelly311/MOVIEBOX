import { create } from "zustand";
import { supabase } from "../supabase/SupabaseClient";

// Signup
export const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  return { user, error };
};

// Login
export const login = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  return { user, error };
};

// Logout
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Get Current User
export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};
