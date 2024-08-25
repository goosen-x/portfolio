import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'>

export const ContactSection = ({ className, ...rest }: Props) => {
	return (
		<div className={className} {...rest}>
			ContactSection
		</div>
	)
}
