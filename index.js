import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockData = {
  "123456": {
    name: "Max Mustermann",
    studiengang: "Informatik",
    semester: 3,
    noten: [
      { modul: "Mathematik", note: "1.3" },
      { modul: "Programmierung", note: "2.0" },
      { modul: "Datenbanken", note: "1.7" },
    ],
  },
};

export default function StudentGrades() {
  const [matrikelnummer, setMatrikelnummer] = useState("");
  const [studentData, setStudentData] = useState(null);

  const fetchGrades = () => {
    if (mockData[matrikelnummer]) {
      setStudentData(mockData[matrikelnummer]);
    } else {
      setStudentData(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 bg-white shadow-xl">
        <h1 className="text-xl font-bold mb-4">Prüfungsergebnisse abrufen</h1>
        <Input
          placeholder="Matrikelnummer eingeben"
          value={matrikelnummer}
          onChange={(e) => setMatrikelnummer(e.target.value)}
        />
        <Button className="mt-4 w-full" onClick={fetchGrades}>
          Abrufen
        </Button>
      </Card>

      {studentData && (
        <Card className="w-full max-w-md mt-6 p-6 bg-white shadow-xl">
          <h2 className="text-lg font-bold">{studentData.name}</h2>
          <p>Studiengang: {studentData.studiengang}</p>
          <p>Semester: {studentData.semester}</p>
          <h3 className="font-semibold mt-4">Noten:</h3>
          <ul>
            {studentData.noten.map((item, index) => (
              <li key={index}>{item.modul}: {item.note}</li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
