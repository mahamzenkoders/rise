import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonAllMessage() {
  return (
    <div className='mt-3 w-72 space-y-4 p-2'>
      <Skeleton className='bg-gray-200 text-white p-2 rounded lg:w-full w-screen border flex items-center gap-2 border-gray-100'>
        <Skeleton className='rounded-full h-12 w-12 bg-gray-100'></Skeleton>
        <Skeleton className='w-24 h-5 bg-gray-100'></Skeleton>
      </Skeleton>
    </div>
  );
}
