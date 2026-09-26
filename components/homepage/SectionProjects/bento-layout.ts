export type TileMode = 'preview' | 'overlay' | 'icon'

export type BentoTileConfig = {
	/** Положение и размер плитки в сетке из шести колонок (от xl) */
	span: string
	mode: TileMode
	/** Плотная подпись для плиток высотой в один ряд: логотип и название в одну строку, без описания */
	dense?: boolean
}

/** Сетка на два столбца до xl и шесть колонок от xl. Плитки идут в порядке ProjectsData:
 *  mba, komponenta, digitalDyatel, healthshop, autozorro, rentmetal, businessPartner, pixeltool */
export const bentoGridClass = 'md:grid-cols-2 xl:grid-cols-6 xl:grid-rows-[18rem_12rem_15rem_15rem] xl:auto-rows-[15rem]'

export const bentoTiles: BentoTileConfig[] = [
	{ span: 'md:col-span-2 xl:col-start-1 xl:row-start-1 xl:col-span-4 xl:row-span-2', mode: 'preview' },
	{ span: 'xl:col-start-5 xl:row-start-1 xl:col-span-2', mode: 'preview', dense: true },
	{ span: 'xl:col-start-1 xl:row-start-3 xl:col-span-2 xl:row-span-2', mode: 'overlay' },
	{ span: 'xl:col-start-5 xl:row-start-2', mode: 'icon' },
	{ span: 'xl:col-start-5 xl:row-start-3 xl:col-span-2', mode: 'preview', dense: true },
	{ span: 'xl:col-start-3 xl:row-start-3 xl:col-span-2 xl:row-span-2', mode: 'overlay' },
	{ span: 'xl:col-start-6 xl:row-start-2', mode: 'icon' },
	{ span: 'md:col-span-2 xl:col-start-5 xl:row-start-4 xl:col-span-2', mode: 'preview', dense: true }
]
