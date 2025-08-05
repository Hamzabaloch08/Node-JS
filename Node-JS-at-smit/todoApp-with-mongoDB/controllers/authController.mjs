import { client } from "../config/db.mjs";
import { successResponse, errorResponse } from "../utils/responses.mjs";

const userCollection = client.db("todoDB").collection("users");

export const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !password) {
    return res.status(400).json(errorResponse("Required parameter(s) missing"));
  }

  try {
    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await userCollection.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      res.status(409).json(errorResponse("Email already registered"));
    } else {
      const insertResponse = await userCollection.insertOne({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: normalizedEmail,
        password: password.trim(), //todo: convert pass into hash
        createdOn: new Date(),
      });

      res.status(201).json(
        successResponse("User created", {
          email: normalizedEmail,
        })
      );
    }
  } catch (err) {
    console.error("signUp error:", err);
    return res.status(500).json(errorResponse("Server error"));
  }
};

export const login = async (req, res) => {
  
};

export const verifyEmail = async (req, res) => {};

export const forgotPasswordEmail = async (req, res) => {};
