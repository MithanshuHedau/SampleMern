const express = require("express");
const mongoose = require("mongoose");
const dataUser = require("../model/dataUser");

const AddUser = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }
  try {
    const newUser = new dataUser({ title, description });
    await newUser.save();
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const allUser = async (req, res) => {
  try {
    const users = await dataUser.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const singleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await dataUser.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const user = await dataUser.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.title = title || user.title;
    user.description = description || user.description;
    await user.save();
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await dataUser.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { AddUser, allUser, singleUser, editUser, deleteUser };
