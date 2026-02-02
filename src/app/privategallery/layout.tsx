
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Private Gallery Collection | Jewelry AI',
    description: 'Private collection of our finest AI-generated jewelry photography and videography.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
