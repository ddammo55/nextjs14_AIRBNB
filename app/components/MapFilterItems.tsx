'use client';
import React, { useCallback } from 'react';
import { categoryItems } from '@/app/lib/categoryItem'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function MapFilterItems() {
    const searchParams = useSearchParams();// URLSearchParams 객체를 가져옴
    const search = searchParams.get("filter");// URLSearchParams 객체에서 'filter' 매개변수를 가져옴
    const pathname = usePathname();// 현재 경로를 가져옴

    // 쿼리 문자열을 생성하는 콜백 함수
    const createQueryString = useCallback(
        (name: string, value: string) => {
            // 현재 쿼리 매개변수를 가져옴
            const params = new URLSearchParams(searchParams.toString());
            // 새로운 매개변수를 설정
            params.set(name, value);
            // 업데이트된 쿼리 문자열 반환
            return params.toString();

        }, [searchParams]
    )

    return (
        <div className=' flex gap-x-10 mt-5 w-full overflow-scroll no-scrollbar'>
            {categoryItems.map((item, index) => (//
                <Link
                    key={item.id}
                    href={pathname + "?" + createQueryString('filter', item.name)}// 쿼리 문자열을 생성하여 URL을 반환
                    className={
                        cn(
                            search === item.name
                                ? 'border-b-2 border-black pb-2 flex-shrink-0'
                                : 'opactiy-70 flex-shrink-0',
                            'flex flex-col gap-y-3 items-center'
                        )
                    }
                >
                    <div className=' relative w-6 h-6'>
                        <Image
                            src={item.imageUrl}
                            alt="Category image"
                            className='w-6 h-6'
                            width={24}
                            height={24}
                        />

                    </div>
                    <div className=' text-sm'>
                        {item.title}
                    </div>
                </Link>
            ))}
        </div>
    );
}

