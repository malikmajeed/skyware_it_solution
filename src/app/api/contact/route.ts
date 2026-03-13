import { NextRequest, NextResponse } from 'next/server';

const CONTACT_FORM_URL = process.env.CONTACT_FORM_URL || '';

export async function POST(request: NextRequest) {
  if (!CONTACT_FORM_URL) {
    return NextResponse.json(
      { success: false, error: 'Contact form is not configured.' },
      { status: 503 }
    );
  }

  try {
    const contentType = request.headers.get('content-type') || '';
    let formData: FormData;

    if (contentType.includes('application/json')) {
      const text = await request.text();
      const json = JSON.parse(text || '{}');
      formData = new FormData();
      formData.append('full-name', json.fullName ?? json.full_name ?? '');
      formData.append('email', json.email ?? '');
      formData.append('subject', json.subject ?? '');
      formData.append('message', json.message ?? '');
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      formData = await request.formData();
    } else {
      return NextResponse.json(
        { success: false, error: 'Unsupported content type.' },
        { status: 400 }
      );
    }

    const res = await fetch(CONTACT_FORM_URL, {
      method: 'POST',
      body: formData,
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: data.error || 'Failed to send message.' },
        { status: res.status }
      );
    }
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
