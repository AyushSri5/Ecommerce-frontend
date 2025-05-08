import { dbConnect } from '@/lib/dbConnect';
import Admission from '@/models/Admission';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const newAdmission = new Admission(body);
  await newAdmission.save();
  return NextResponse.json({ message: 'Admission successful' });
}
