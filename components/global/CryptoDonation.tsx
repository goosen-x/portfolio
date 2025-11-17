'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { Copy, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

interface CryptoNetwork {
	name: string
	chainId: string
	symbol: string
	rpcUrl: string
	blockExplorer: string
}

const DONATION_ADDRESS = '0x434E086f7CdBFEDa6FfC62b616f626118A565E28'

const NETWORKS: CryptoNetwork[] = [
	{
		name: 'Ethereum',
		chainId: '0x1',
		symbol: 'ETH',
		rpcUrl: 'https://mainnet.infura.io/v3/',
		blockExplorer: 'https://etherscan.io'
	},
	{
		name: 'Polygon',
		chainId: '0x89',
		symbol: 'MATIC',
		rpcUrl: 'https://polygon-rpc.com',
		blockExplorer: 'https://polygonscan.com'
	},
	{
		name: 'BNB Chain',
		chainId: '0x38',
		symbol: 'BNB',
		rpcUrl: 'https://bsc-dataseed.binance.org',
		blockExplorer: 'https://bscscan.com'
	},
	{
		name: 'Arbitrum',
		chainId: '0xa4b1',
		symbol: 'ETH',
		rpcUrl: 'https://arb1.arbitrum.io/rpc',
		blockExplorer: 'https://arbiscan.io'
	}
]

export function CryptoDonation() {
	const t = useTranslations('CryptoDonation')
	const [selectedNetwork, setSelectedNetwork] = useState<CryptoNetwork>(
		NETWORKS[0]
	)
	const [amount, setAmount] = useState('')
	const [isConnected, setIsConnected] = useState(false)
	const [copied, setCopied] = useState(false)

	// Проверка подключения при загрузке
	useEffect(() => {
		checkConnection()
	}, [])

	// Проверка подключения MetaMask
	const checkConnection = async () => {
		if (typeof window.ethereum !== 'undefined') {
			try {
				const accounts = await window.ethereum.request({
					method: 'eth_accounts'
				})
				setIsConnected(accounts.length > 0)
				return accounts.length > 0
			} catch (error) {
				console.error('Error checking connection:', error)
				return false
			}
		}
		return false
	}

	// Подключение кошелька
	const connectWallet = async () => {
		console.log('Connecting wallet...')

		if (typeof window === 'undefined') {
			console.error('Window is undefined')
			return
		}

		if (!window.ethereum) {
			console.log('MetaMask not found')
			toast.error(t('noWallet'), {
				description: 'Please install MetaMask browser extension'
			})
			window.open('https://metamask.io/download/', '_blank')
			return
		}

		try {
			console.log('Requesting accounts...')
			const accounts = await window.ethereum.request({
				method: 'eth_requestAccounts'
			})
			console.log('Accounts:', accounts)

			if (accounts.length > 0) {
				setIsConnected(true)
				toast.success(t('walletConnected'))
			}
		} catch (error: any) {
			console.error('Error connecting wallet:', error)
			toast.error(t('connectionError'), {
				description: error.message || 'Failed to connect wallet'
			})
		}
	}

	// Переключение сети
	const switchNetwork = async (network: CryptoNetwork) => {
		if (!window.ethereum) return

		try {
			await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: network.chainId }]
			})
			setSelectedNetwork(network)
		} catch (error: any) {
			// Если сеть не добавлена, добавляем её
			if (error.code === 4902) {
				try {
					await window.ethereum.request({
						method: 'wallet_addEthereumChain',
						params: [
							{
								chainId: network.chainId,
								chainName: network.name,
								nativeCurrency: {
									name: network.symbol,
									symbol: network.symbol,
									decimals: 18
								},
								rpcUrls: [network.rpcUrl],
								blockExplorerUrls: [network.blockExplorer]
							}
						]
					})
					setSelectedNetwork(network)
				} catch (addError) {
					console.error('Error adding network:', addError)
					toast.error(t('networkError'))
				}
			}
		}
	}

	// Отправка доната
	const sendDonation = async () => {
		console.log('Send donation clicked, isConnected:', isConnected)

		if (!isConnected) {
			await connectWallet()
			return
		}

		if (!amount || parseFloat(amount) <= 0) {
			toast.error(t('enterAmount'))
			return
		}

		try {
			const accounts = await window.ethereum.request({ method: 'eth_accounts' })
			const valueInWei = Math.floor(parseFloat(amount) * 10 ** 18)
			const hexValue = '0x' + valueInWei.toString(16)

			console.log('Transaction params:', {
				to: DONATION_ADDRESS,
				from: accounts[0],
				value: hexValue,
				amount: amount
			})

			const transactionParameters = {
				to: DONATION_ADDRESS,
				from: accounts[0],
				value: hexValue
			}

			const txHash = await window.ethereum.request({
				method: 'eth_sendTransaction',
				params: [transactionParameters]
			})

			console.log('Transaction sent:', txHash)

			toast.success(t('donationSent'), {
				description: `Transaction: ${txHash.slice(0, 10)}...`
			})
			setAmount('')
		} catch (error: any) {
			console.error('Error sending donation:', error)

			// Handle user rejection
			if (error.code === 4001 || error.message?.includes('rejected') || error.message?.includes('denied')) {
				toast.error(t('transactionCancelled'), {
					description: t('transactionRejected')
				})
				return
			}

			// Handle other errors
			toast.error(t('transactionError'), {
				description: error.message || 'Transaction failed'
			})
		}
	}

	// Копирование адреса
	const copyAddress = () => {
		navigator.clipboard.writeText(DONATION_ADDRESS)
		setCopied(true)
		toast.success(t('addressCopied'))
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div className='w-full max-w-md mx-auto p-4 sm:p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 shadow-xl backdrop-blur-sm'>
			{/* Header */}
			<div className='mb-6'>
				<h3 className='text-xl sm:text-2xl font-bold mb-1 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent'>
					{t('title')}
				</h3>
				<p className='text-xs sm:text-sm text-muted-foreground'>{t('subtitle')}</p>
			</div>

			{/* Выбор сети */}
			<div className='mb-5'>
				<label className='text-xs sm:text-sm font-medium text-muted-foreground mb-3 block'>
					{t('selectNetwork')}
				</label>
				<div className='grid grid-cols-2 gap-2'>
					{NETWORKS.map(network => (
						<Button
							key={network.chainId}
							variant={
								selectedNetwork.chainId === network.chainId
									? 'default'
									: 'outline'
							}
							size='sm'
							onClick={() => switchNetwork(network)}
							className='h-10 sm:h-11 text-xs sm:text-sm font-medium transition-all hover:scale-105'
						>
							<span className='truncate'>{network.name}</span>
						</Button>
					))}
				</div>
			</div>

			{/* Ввод суммы */}
			<div className='mb-4'>
				<label className='text-xs sm:text-sm font-medium text-muted-foreground mb-2 block'>
					{t('amount')} ({selectedNetwork.symbol})
				</label>
				<div className='relative'>
					<input
						type='number'
						step='0.001'
						min='0'
						value={amount}
						onChange={e => setAmount(e.target.value)}
						className='w-full px-4 py-3 sm:py-3.5 text-base sm:text-lg font-semibold border-2 rounded-xl bg-background/50 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none'
						placeholder='0.01'
					/>
					<div className='absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground'>
						{selectedNetwork.symbol}
					</div>
				</div>
			</div>

			{/* Быстрые суммы */}
			<div className='grid grid-cols-4 gap-1.5 sm:gap-2 mb-5'>
				{['0.01', '0.05', '0.1', '0.5'].map(value => (
					<Button
						key={value}
						variant='outline'
						size='sm'
						onClick={() => setAmount(value)}
						className='h-9 sm:h-10 text-xs sm:text-sm font-medium hover:bg-accent/10 hover:border-accent/50 transition-all'
					>
						{value}
					</Button>
				))}
			</div>

			{/* Кнопка отправки */}
			<Button
				className='w-full mb-5 h-11 sm:h-12 text-sm sm:text-base font-semibold bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 transition-all hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed'
				onClick={e => {
					e.preventDefault()
					console.log('Button clicked!')
					sendDonation()
				}}
				disabled={!amount || parseFloat(amount) <= 0}
			>
				{isConnected ? t('sendDonation') : t('connectWallet')}
			</Button>

			{/* Адрес для ручной отправки */}
			<div className='border-t border-border/50 pt-4'>
				<p className='text-xs sm:text-sm text-muted-foreground mb-3 font-medium'>
					{t('manualTransfer')}
				</p>
				<div className='flex items-center gap-2 bg-muted/50 rounded-lg p-2 sm:p-3'>
					<code className='text-[10px] sm:text-xs font-mono bg-background/80 px-2 py-1.5 rounded flex-1 truncate border border-border/30'>
						{DONATION_ADDRESS}
					</code>
					<Button
						variant='ghost'
						size='sm'
						onClick={copyAddress}
						className='h-8 w-8 sm:h-9 sm:w-9 p-0 hover:bg-accent/10 transition-all flex-shrink-0'
					>
						{copied ? (
							<CheckCircle2 className='h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500' />
						) : (
							<Copy className='h-3.5 w-3.5 sm:h-4 sm:w-4' />
						)}
					</Button>
				</div>
			</div>
		</div>
	)
}

// Типы для window.ethereum
declare global {
	interface Window {
		ethereum?: any
	}
}
