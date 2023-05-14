import './base.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Gamify | Yet another pretentious game store',
	description: 'Yet another pretentious game store',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='text-whites-platinum bg-blacks-eerie'>{children}</body>
		</html>
	)
}
