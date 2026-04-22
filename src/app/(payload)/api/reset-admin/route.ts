import config from '@payload-config';
import { getPayload } from 'payload';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const validSecrets = [
    process.env.ADMIN_RESET_TOKEN,
    process.env.PAYLOAD_SECRET,
  ].filter(Boolean);

  if (!secret || !validSecrets.includes(secret)) {
    return NextResponse.json({
      error: 'Unauthorized',
      hint: 'Set ADMIN_RESET_TOKEN in Vercel env vars, then pass it as ?secret=...',
      tokenConfigured: {
        ADMIN_RESET_TOKEN: Boolean(process.env.ADMIN_RESET_TOKEN),
        PAYLOAD_SECRET: Boolean(process.env.PAYLOAD_SECRET),
      },
    }, { status: 401 });
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
