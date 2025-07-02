import { NextResponse } from "next/server";
import { users, db } from "@/app/lib/drizzle";

export async function POST(req: Request) {
    try {
        const { amount, name, email, phone } = await req.json();

        if (!amount || !name || !email || !phone) {
            return NextResponse.json(
                { error: "Missing required fields: amount, name, email, phone" },
                { status: 400 }
            );
        }

        if (!db) {
            throw new Error("Database connection not initialized");
        }
        const newUser = await db.insert(users).values({
            name,
            email,
            phone
        }).returning();
        
        return NextResponse.json({ 
            message: "Data received successfully",
            data: { amount, name, email, phone },
            user: newUser[0]
        });
    }
    catch(error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        if (!db) {
            throw new Error("Database connection not initialized");
        }
        const allUsers = await db.select().from(users);

        return NextResponse.json({ 
            message: "Users fetched successfully", 
            data: allUsers 
        });
    }
    catch(error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ 
            error: "Internal Server Error", 
            details: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}
