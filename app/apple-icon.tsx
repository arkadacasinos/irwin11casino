import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: 'linear-gradient(135deg, #0a0e1a 0%, #1a2236 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#d4af37',
          fontFamily: 'Georgia, serif',
          fontWeight: 700,
          borderRadius: 24,
        }}
      >
        I
      </div>
    ),
    { ...size }
  )
}
