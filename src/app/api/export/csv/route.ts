import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // In production, verify JWT and RBAC (Clerk/Admin only)
  
  // Mock data fetching from Prisma for Master Roster
  const rosterData = [
    { id: 1, name: "Rahul Sharma", role: "Student", class: "11th Arts", attendance: "98%" },
    { id: 2, name: "Pravin Patil", role: "Teacher", class: "1st-5th", attendance: "100%" }
  ];

  const csvRows = [
    ["ID", "Name", "Role", "Class/Assignment", "Attendance"],
    ...rosterData.map(row => [row.id, row.name, row.role, row.class, row.attendance])
  ];

  const csvContent = csvRows.map(e => e.join(",")).join("\n");

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="master_roster_export.csv"',
    },
  });
}
