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
        title: 'Backend Engineering',
        description: 'Highly scalable distributed systems and microservices architecture.',
        icon: 'Server',
        color: '#0070f3'
    },
    {
        id: 'Quant',
        title: 'Quant / Trading',
        description: 'low-mid frequency trading systems and algorithmic financial statistical models.',
        icon: 'TrendingUp',
        color: '#f5a623'
    },
    {
        id: 'Web3',
        title: 'Web3 / Blockchain',
        description: 'Smart contracts, DAO governance, and decentralized finance protocols.',
        icon: 'Shield',
        color: '#7928ca'
    },
    {
        id: 'AI',
        title: 'AI / ML Engineering',
        description: 'Neural Networks, Transformers, Computer Vision, data processing pipelines.',
        icon: 'Cpu',
        color: '#00dfd8'
    },
    {
        id: 'Web',
        title: 'Fullstack Web',
        description: 'Premium user interfaces with high performance and interactive animations.',
        icon: 'Layout',
        color: '#ff0080'
    }
];
