import config from '@payload-config';
import { getPayload } from 'payload';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (!secret || secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const payload = await getPayload({ config });

    const adminEmail = 'admin@zvk.de';
    const adminPassword = 'Admin123!Zvk';

    const existingUser = await payload.find({
      collection: 'users',
      where: {
        email: { equals: adminEmail },
      },
    });

    if (existingUser.docs.length > 0) {
      await payload.update({
        collection: 'users',
        id: existingUser.docs[0].id,
        data: {
          password: adminPassword,
        },
      });
    } else {
      await payload.create({
        collection: 'users',
        data: {
          email: adminEmail,
          password: adminPassword,
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Admin user ready',
      email: adminEmail,
      password: adminPassword,
      loginUrl: 'https://payload-zvk.vercel.app/admin',
      warning: 'Please change this password after first login and delete this route!',
    });
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to reset admin',
      details: error instanceof Error ? error.message : String(error),
    }, { status: 500 });
  }
}
