'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

// Modal Component
const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold text-center">Admission Submitted!</h2>
        <p className="text-center mt-2">The student admission has been successfully processed.</p>
        <div className="mt-4 flex justify-center">
          <Button onClick={onClose} className="w-full">Close</Button>
        </div>
      </div>
    </div>
  );
};

export default function AdmissionPage() {
  const [form, setForm] = useState({
    userId: '',
    admissionDate: '',
    class: '',
    guardianDetails: '',
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch('/api/admission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (res.status === 200) {
      setModalOpen(true); // Show modal on successful submission
    } else {
      alert(data.message);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-emerald-100 px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        {/* Left side with image */}
        <div className="hidden md:block">
          <Image
            src="/admission-illustration.jpg"
            alt="School Admission"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right side with form */}
        <Card className="w-full bg-white/90 backdrop-blur-md shadow-lg p-6 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Student Admission Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              name="userId"
              placeholder="Student Name"
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
            <Input
              name="admissionDate"
              type="date"
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
            <Input
              name="class"
              placeholder="Class (e.g. 5th Grade)"
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
            <Input
              name="guardianDetails"
              placeholder="Guardian's Name & Contact"
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            />
            <Button onClick={handleSubmit} className="w-full mt-4">Submit Admission</Button>
          </CardContent>
        </Card>
      </div>

      {/* Modal on successful admission */}
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}
