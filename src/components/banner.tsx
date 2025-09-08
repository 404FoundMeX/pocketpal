'use client';

import {
  Banner,
  BannerClose,
  BannerIcon,
  BannerTitle,
} from '~/components/ui/shadcn-io/banner';
import { CircleAlert } from 'lucide-react';

const BannerComponent = () => (
  <Banner className='w-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black px-4 py-2 flex items-center justify-center gap-3 font-medium shadow-md'>
    <BannerIcon icon={CircleAlert} />
    <BannerTitle>Application is in active development, main functionality is not available yet.</BannerTitle>
    <BannerClose />
  </Banner>
);

export default BannerComponent;
