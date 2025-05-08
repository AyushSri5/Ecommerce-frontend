'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const dummyStudents = [
  { id: 'S1', name: 'John Doe', location: 'Delhi' },
  { id: 'S2', name: 'Alice Smith', location: 'Mumbai' },
  { id: 'S3', name: 'Rahul Kumar', location: 'Bangalore' },
];

export default function StudentAttendancePage() {
  const [marked, setMarked] = useState<{ [id: string]: string }>({});

  const markAttendance = async (id: string, status: string) => {
    const res = await fetch('/api/attendance/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentId: id, status }),
    });

    const data = await res.json();
    // alert(`${data.message} for ${id}`);
    setMarked((prev) => ({ ...prev, [id]: status }));
  };

  return (
    <Card className="max-w-4xl mx-auto mt-10 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Student Attendance</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.location}</TableCell>
                <TableCell>
                  {marked[student.id] ? marked[student.id] : 'Not Marked'}
                </TableCell>
                <TableCell className="space-x-2">
                  <Button variant="default" size="sm" onClick={() => markAttendance(student.id, 'present')}>
                    Present
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => markAttendance(student.id, 'absent')}>
                    Absent
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
