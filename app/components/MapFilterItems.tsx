'use client';
import React from 'react';
import { categoryItems } from '@/app/lib/categoryItem'
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function MapFilterItems() {
    const searchParams = useSearchParams();
    const search = searchParams.get('filter');
    console.log(search);
    return (
        <div className=' flex gap-x-10 mt-5 w-full overflow-scroll no-scrollbar'>
            {categoryItems.map((item, index) => (
                <Link key={item.id} href="">
                    <div className=' relative w-6 h-6'>
                        <Image
                            src={item.imageUrl}
                            alt="Category image"
                            className='w-6 h-6'
                            width={24}
                            height={24}
                        />

                    </div>
                </Link>
            ))}
        </div>
    );
}

