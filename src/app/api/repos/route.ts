import { NextResponse } from "next/server";

export async function GET() {
    try {
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}