import { connectToDatabase } from "@/app/lib/mongodb";
import Todo from "@/app/models/todo";
import { NextRequest, NextResponse } from "next/server";

// API Route: /api/v1/todo/[pid]
export async function GET(
  req: NextRequest,
  { params }: { params: { pid: string } }
) {
  try {
    const pid = params.pid; // รับค่า pid จาก params
    await connectToDatabase(); // เชื่อมต่อฐานข้อมูล

    // ค้นหา Todo ตาม _id
    const todoResult = await Todo.findById(pid);

    // หากไม่พบรายการ ให้ส่งข้อความแจ้งเตือน
    if (!todoResult) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    // ส่งคืนข้อมูลที่พบ
    return NextResponse.json({ success: true, data: todoResult });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err.message || "An error occurred",
    });
  }
}
