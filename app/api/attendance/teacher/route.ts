import { dbConnect } from '@/lib/dbConnect';
import Attendance from '@/models/Attendance';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const attendance = new Attendance({ ...body, role: 'teacher' });
  await attendance.save();
  return NextResponse.json({ message: 'Teacher attendance recorded' });
}