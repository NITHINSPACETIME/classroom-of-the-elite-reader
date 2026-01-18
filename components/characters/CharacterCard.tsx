import { motion } from "framer-motion";
import Image from "next/image";
import { Character, getClassColor, getClassGradient, getClassGlow } from "@/data/characters";


interface CharacterCardProps {
    character: Character;
    index: number;
    contextClass?: string;
    contextYear?: string;
}

export function CharacterCard({ character, index, contextClass, contextYear }: CharacterCardProps) {
    const initial = character.name.charAt(0).toUpperCase();


    let displayImage = character.image;
    if (contextYear && character.images) {
        if (contextYear === "1") {
            displayImage = character.images.year1 || character.image;
        } else if (contextYear === "2") {
            displayImage = character.images.year2 || character.images.year1 || character.image;
        } else if (contextYear === "3") {
            displayImage = character.images.year3 || character.images.year2 || character.images.year1 || character.image;
        }
    }

    let roleLabel = `Class ${character.currentClass}`;
    if (character.currentClass === "Teacher") {
        if (contextClass && character.homeroomClass === contextClass) {
            roleLabel = "Homeroom Teacher";
        } else if (contextClass) {
            roleLabel = "Subject Teacher";
        } else {
            roleLabel = "Faculty";
        }
    }

    // Filter displayed tags 
    const displayTags = character.tags?.filter(tag =>
        !contextClass || tag !== `Class ${contextClass}`
    ).slice(0, 3);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            className="group relative h-[500px] w-full perspective-1000"
        >
            <div className={`
                relative h-full w-full bg-zinc-950/90 backdrop-blur-md 
                border border-white/10 overflow-hidden transition-all duration-500 
                rounded-sm
                ${getClassGlow(character.currentClass)}
            `}>


                <div className="absolute -top-10 -right-10 text-[12rem] leading-none font-serif font-black text-white/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:text-white/[0.06] z-0">
                    {initial}
                </div>

                {/* Full Height Image */}
                <div className="absolute inset-0 h-full w-full">
                    {displayImage ? (
                        <Image
                            src={displayImage}
                            alt={character.name}
                            fill
                            className="object-cover object-top transition-all duration-700 will-change-transform group-hover:scale-105 filter saturate-[0.85] brightness-[0.9] group-hover:saturate-100 group-hover:brightness-100"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-900/50 text-white/5 text-9xl font-serif">
                            {initial}
                        </div>
                    )}


                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${getClassGradient(character.currentClass)} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">


                    <div className="absolute top-4 right-4 translate-y-0 opacity-100 lg:translate-y-[-10px] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300">
                        <span className={`text-[9px] font-mono font-bold tracking-[0.2em] uppercase px-3 py-1 border border-white/20 backdrop-blur-md bg-black/50 ${getClassColor(character.currentClass)}`}>
                            {roleLabel}
                        </span>
                    </div>

                    {/* Main Text Content -4r mobile mode */}
                    <div className="transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-2 opacity-100 lg:opacity-60 lg:group-hover:opacity-100 transition-opacity duration-300">
                            <span className="h-[1px] w-6 bg-white/50" />
                            <p className="text-[10px] font-mono tracking-widest uppercase text-white/70">
                                {character.id.split('-')[0]}
                            </p>
                        </div>

                        <h3 className="text-3xl font-bold text-white font-serif tracking-tight leading-none mb-1 lg:group-hover:text-transparent lg:group-hover:bg-clip-text lg:group-hover:bg-gradient-to-r lg:group-hover:from-white lg:group-hover:to-white/70 transition-all duration-300">
                            {character.name}
                        </h3>

                        <p className="text-sm font-serif italic text-white/40 mb-4 lg:group-hover:text-white/60 transition-colors">
                            {character.japaneseName}
                        </p>


                        <div className="h-auto lg:h-0 overflow-hidden lg:group-hover:h-auto transition-all duration-500">
                            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                                {displayTags?.map(tag => (
                                    <span key={tag} className="text-[9px] font-mono text-white/50 uppercase tracking-wider">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
