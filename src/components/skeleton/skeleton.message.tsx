import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonAllMessage() {
  return (
    <div className='mt-3 w-72 space-y-4 p-2'>
      <Skeleton className='bg-gray-300 text-white p-2 rounded w-full border flex items-center gap-2 border-gray-300'>
        <Skeleton className='rounded-full h-12 w-12 bg-gray-200'></Skeleton>
        <Skeleton className='w-24 h-5 bg-gray-200'></Skeleton>
      </Skeleton>
    </div>
  );
}
