import type { CaseStudy } from './types'
import { mbaRu, mbaEn } from './mba'
import { componentaRu, componentaEn } from './componenta'
import { digitalDyatelRu, digitalDyatelEn } from './digital-dyatel'
import { healthshopRu, healthshopEn } from './healthshop'
import { autozorroRu, autozorroEn } from './autozorro'
import { rentmetalRu, rentmetalEn } from './rentmetal'
import { businessPartnerRu, businessPartnerEn } from './business-partner'
import { pixeltoolRu, pixeltoolEn } from './pixeltool'

export type { CaseBlock, CaseStudy } from './types'

export const caseStudies: Partial<Record<string, { ru: CaseStudy; en: CaseStudy }>> = {
	mba: { ru: mbaRu, en: mbaEn },
	komponenta: { ru: componentaRu, en: componentaEn },
	digitalDyatel: { ru: digitalDyatelRu, en: digitalDyatelEn },
	healthshop: { ru: healthshopRu, en: healthshopEn },
	autozorro: { ru: autozorroRu, en: autozorroEn },
	rentmetal: { ru: rentmetalRu, en: rentmetalEn },
	businessPartner: { ru: businessPartnerRu, en: businessPartnerEn },
	pixeltool: { ru: pixeltoolRu, en: pixeltoolEn }
}
