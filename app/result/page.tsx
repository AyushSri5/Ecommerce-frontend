'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const dummyResults = [
  {
    id: 'S1',
    name: 'John Doe',
    class: '10th',
    location: 'Delhi',
    subjects: {
      Math: 89,
      Science: 92,
      English: 85,
      Hindi: 88,
      SST: 90,
    },
  },
  {
    id: 'S2',
    name: 'Priya Singh',
    class: '10th',
    location: 'Mumbai',
    subjects: {
      Math: 76,
      Science: 81,
      English: 79,
      Hindi: 74,
      SST: 80,
    },
  },
  {
    id: 'S3',
    name: 'Ravi Mehra',
    class: '10th',
    location: 'Chennai',
    subjects: {
      Math: 93,
      Science: 95,
      English: 91,
      Hindi: 89,
      SST: 94,
    },
  },
];

export default function StudentResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-emerald-50 py-10 px-6">
      <Card className="max-w-6xl mx-auto shadow-xl backdrop-blur-md bg-white/90">
        <CardHeader>
          <CardTitle className="text-2xl text-center">📊 Student Results Overview</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Math</TableHead>
                <TableHead>Science</TableHead>
                <TableHead>English</TableHead>
                <TableHead>Hindi</TableHead>
                <TableHead>SST</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyResults.map((student) => {
                const scores = Object.values(student.subjects);
                const total = scores.reduce((a, b) => a + b, 0);
                const grade =
                  total >= 450
                    ? 'A+'
                    : total >= 400
                    ? 'A'
                    : total >= 350
                    ? 'B'
                    : total >= 300
                    ? 'C'
                    : 'D';

                return (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.location}</TableCell>
                    {Object.values(student.subjects).map((mark, i) => (
                      <TableCell key={i}>{mark}</TableCell>
                    ))}
                    <TableCell className="font-bold">{total}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          grade === 'A+' ? 'success' : grade === 'A' ? 'default' : grade === 'B' ? 'secondary' : 'destructive'
                        }
                      >
                        {grade}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

