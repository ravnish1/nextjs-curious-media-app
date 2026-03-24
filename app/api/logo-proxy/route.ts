import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'Missing url param' }, { status: 400 })
  }

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CuriousMedia/1.0)',
        'Accept': 'image/png,image/svg+xml,image/jpeg,image/*,*/*',
      },
      // 5s timeout
      signal: AbortSignal.timeout(5000),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Upstream fetch failed' }, { status: 502 })
    }

    const contentType = res.headers.get('content-type') || 'image/png'
    const buffer = await res.arrayBuffer()

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
      },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to proxy image' }, { status: 502 })
  }
}
