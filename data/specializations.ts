export type SpecializationType = 'Backend' | 'Quant' | 'Web3' | 'AI' | 'Web';

export interface Specialization {
    id: SpecializationType;
    title: string;
    description: string;
    icon: string;
    color: string;
}

export const specializations: Specialization[] = [
    {
        id: 'Backend',
        title: 'specializations.backend.title',
        description: 'specializations.backend.description',
        icon: 'Server',
        color: '#0070f3'
    },
    {
        id: 'Quant',
        title: 'specializations.quant.title',
        description: 'specializations.quant.description',
        icon: 'TrendingUp',
        color: '#f5a623'
    },
    {
        id: 'Web3',
        title: 'specializations.web3.title',
        description: 'specializations.web3.description',
        icon: 'Shield',
        color: '#7928ca'
    },
    {
        id: 'AI',
        title: 'specializations.ai.title',
        description: 'specializations.ai.description',
        icon: 'Cpu',
        color: '#00dfd8'
    },
    {
        id: 'Web',
        title: 'specializations.web.title',
        description: 'specializations.web.description',
        icon: 'Layout',
        color: '#ff0080'
    }
];
