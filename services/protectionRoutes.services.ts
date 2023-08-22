/* eslint-disable react-hooks/rules-of-hooks */

import { useRouter } from 'next/router'

export const canPass =  (data: any) => {
    const router =  useRouter()
    
    if (data) router.push('/about')

}