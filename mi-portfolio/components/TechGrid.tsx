'use client';
import React, { useState } from 'react';

interface Tech {
    name: string;
    color: string;
    logo: string;
    category: string;
}

interface TechGridProps {
    techs: Tech[];
    categories: {
        [key: string]: string;
    };
}

export default function TechGrid({ techs, categories }: TechGridProps) {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredTechs = activeCategory === 'all'
        ? techs
        : techs.filter(t => t.category === activeCategory);

    return (
        <div className="space-y-8">
            {/* Filtres Horitzontals Estil Google Images */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
                <button
                    onClick={() => setActiveCategory('all')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all whitespace-nowrap ${
                        activeCategory === 'all'
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-header-bg text-foreground border-border hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                >
                    <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center text-white text-[10px]">ALL</div>
                    <span className="text-sm font-medium">Tots</span>
                </button>

                {Object.entries(categories).map(([key, label]) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all whitespace-nowrap ${
                            activeCategory === key
                            ? 'bg-foreground text-background border-foreground'
                            : 'bg-header-bg text-foreground border-border hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                    >
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center text-white text-[10px] ${
                            key === 'languages' ? 'bg-orange-500' :
                            key === 'frontend' ? 'bg-blue-500' :
                            key === 'backend' ? 'bg-green-500' : 'bg-purple-500'
                        }`}>
                            {key[0].toUpperCase()}
                        </div>
                        <span className="text-sm font-medium">{label}</span>
                    </button>
                ))}
            </div>

            {/* Grid de Tecnologia - Totes seguides */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredTechs.map((tech) => (
                    <div key={tech.name} className="group relative aspect-video bg-border rounded-xl overflow-hidden border border-border hover:border-blue-400 transition-all cursor-pointer shadow-sm">
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-2">
                            <img
                                src={`https://img.shields.io/badge/${tech.name.toLowerCase()}-${tech.color}?style=for-the-badge&logo=${tech.logo}&logoColor=white`}
                                alt={tech.name}
                                className="w-full h-auto rounded-sm"
                            />
                            <span className="text-[10px] font-medium text-text-muted group-hover:text-foreground transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
