import { env } from '@/lib/config/env';
import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { Metadata } from 'next';

type CompoundPageProps = {
  params: { [key: string]: string };
};

export async function generateMetadata({
  params
}: CompoundPageProps): Promise<Metadata> {
  const { chain_id, proposal_id } = params;

  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: 'FOR'
      },
      {
        label: 'AGAINST'
      },
      {
        label: 'ABSTAIN'
      }
    ],
    image: {
      src: `${env.NEXT_PUBLIC_URL}/api/images/proposal/${chain_id}/${proposal_id}`,
      aspectRatio: '1:1'
    },
    postUrl: `${env.NEXT_PUBLIC_URL}/api/proposal/${chain_id}/${proposal_id}`
  });

  return {
    title: 'DAO Voting',
    description: 'LFG',
    openGraph: {
      title: 'DAO Voting',
      description: 'LFG'
    },
    other: {
      ...frameMetadata
    }
  };
}

export default async function CompoundPage() {
  return (
    <>
      <h1>Compound Page</h1>
    </>
  );
}