import 'server-only';

const dictionaries = {
    es: () => import('@/dictonaries/es.json').then((module) => module.default),
    en: () => import('@/dictonaries/en.json').then((module) => module.default),
    ca: () => import('@/dictonaries/ca.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'es' | 'en' | 'ca') => {
    return dictionaries[locale] ? dictionaries[locale]() : dictionaries['es']();
};