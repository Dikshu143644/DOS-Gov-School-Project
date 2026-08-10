import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Mock fetching pending approvals for Super Admin
  const pendingQueue = [
    { id: 1, title: "Annual Cultural Fest 2026 Images", type: "Event", status: "pending" },
    { id: 2, title: "10th Std Time Table Update", type: "Notice", status: "pending" },
  ];
  
  return NextResponse.json({ status: 'success', data: pendingQueue });
}

export async function POST(request: Request) {
  try {
    const { action, approvalId } = await request.json();
    
    // In production, enforce that only Platform Admin can approve/reject
    // Update the Prisma ApprovalRequest model status

    if (action === 'approve') {
       return NextResponse.json({ status: 'success', message: `Approval ${approvalId} published successfully.` });
    }
    
    if (action === 'reject') {
       return NextResponse.json({ status: 'success', message: `Approval ${approvalId} rejected.` });
    }

    return NextResponse.json({ status: 'error', message: 'Invalid action.' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: 'Failed to process approval.' }, { status: 500 });
  }
}
