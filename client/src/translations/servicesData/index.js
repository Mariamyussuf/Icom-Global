import { servicesFr } from './fr';
import { servicesZh } from './zh';

export const serviceTranslations = {
  fr: servicesFr,
  zh: servicesZh,
  en: {},
};

export function getLocalizedService(service, language = 'en') {
  if (!service) return service;
  const langKey = language?.toLowerCase() || 'en';
  const dict = serviceTranslations[langKey]?.[service.slug];
  if (!dict) return service;

  return {
    ...service,
    title: dict.title || service.title,
    shortDesc: dict.shortDesc || service.shortDesc,
    overview: dict.overview || service.overview,
    subServices: dict.subServices && dict.subServices.length > 0 ? dict.subServices : service.subServices,
    benefits: dict.benefits && dict.benefits.length > 0
      ? service.benefits.map((b, idx) => ({
          ...b,
          ...(dict.benefits[idx] || {})
        }))
      : service.benefits,
    process: dict.process && dict.process.length > 0
      ? service.process.map((p, idx) => ({
          ...p,
          ...(dict.process[idx] || {})
        }))
      : service.process,
  };
}
