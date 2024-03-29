import { fetchProposalDocuments } from '@/lib/utils/fetcher';
import { ImageResponse } from 'next/og';
import { unstable_noStore as noStore } from 'next/cache';

const logoMapping: { [key: number]: string } = {
  10: 'https://cryptologos.cc/logos/optimism-ethereum-op-logo.png',
  8453: 'https://altcoinsbox.com/wp-content/uploads/2023/02/base-logo-in-blue.png',
  42170: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png'
};

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  noStore();
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            position: 'relative',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: 'white'
          }}
        >
          <img
            src='https://res.cloudinary.com/duhvlptwp/image/upload/v1710643646/logo_vvrapm.jpg'
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ),
      {
        headers: { 'Content-type': 'image/jpeg' }
      }
    );
  } catch (err) {}
}
