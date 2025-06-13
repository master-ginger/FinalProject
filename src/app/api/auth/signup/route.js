// app/api/auth/signup/route.js
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await dbConnect();

    const { email,
      firstName,
      lastName,
      age,
      phone,
      location,
      description,
      currentSavings,
      monthlyIncome,
      financialGoals,
      experienceLevel,
      password } = await req.json();
    const userExists = await User.findOne({ email: email.toLowerCase() });    
    if (userExists) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      firstName,
      lastName,
      age,
      phone,
      location,
      description,
      currentSavings,
      monthlyIncome,
      financialGoals,
      experienceLevel,
      password: hashedPassword,

    });

    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
