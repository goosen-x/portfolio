import Link from 'next/link'
import { Package2 } from 'lucide-react'
import { BsLightningCharge } from 'react-icons/bs'

export const LogoLink = () => {
	return (
		<Link
			href='/'
			className='flex items-center gap-2 text-lg font-semibold md:text-base'
		>
			<BsLightningCharge className=' text-blue-400' />
			<span className='sr-only'>Acme Inc</span>
		</Link>
	)
}
