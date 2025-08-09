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
		<div className='w-full max-w-md mx-auto p-6 bg-card rounded-lg border'>
			<h3 className='text-xl font-semibold mb-4'>{t('title')}</h3>

			{/* Выбор сети */}
			<div className='mb-4'>
				<label className='text-sm text-muted-foreground mb-2 block'>
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
						>
							{network.name}
						</Button>
					))}
				</div>
			</div>

			{/* Ввод суммы */}
			<div className='mb-4'>
				<label className='text-sm text-muted-foreground mb-2 block'>
					{t('amount')} ({selectedNetwork.symbol})
				</label>
				<input
					type='number'
					step='0.001'
					min='0'
					value={amount}
					onChange={e => setAmount(e.target.value)}
					className='w-full px-3 py-2 border rounded-md bg-background'
					placeholder='0.01'
				/>
			</div>

			{/* Быстрые суммы */}
			<div className='grid grid-cols-4 gap-2 mb-4'>
				{['0.01', '0.05', '0.1', '0.5'].map(value => (
					<Button
						key={value}
						variant='outline'
						size='sm'
						onClick={() => setAmount(value)}
					>
						{value}
					</Button>
				))}
			</div>

			{/* Кнопка отправки */}
			<Button
				className='w-full mb-4'
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
			<div className='border-t pt-4'>
				<p className='text-sm text-muted-foreground mb-2'>
					{t('manualTransfer')}
				</p>
				<div className='flex items-center gap-2'>
					<code className='text-xs bg-muted px-2 py-1 rounded flex-1 truncate'>
						{DONATION_ADDRESS}
					</code>
					<Button variant='ghost' size='sm' onClick={copyAddress}>
						{copied ? (
							<CheckCircle2 className='h-4 w-4' />
						) : (
							<Copy className='h-4 w-4' />
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
