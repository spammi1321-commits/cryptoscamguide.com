import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Search, ChevronDown } from "lucide-react";
import { scamCategories, type ScamData, type ScamCategory } from "@/data/scams";
import ScamModal from "./ScamModal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const INITIAL_DISPLAY_COUNT = 12;

const ScamsCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedScam, setSelectedScam] = useState<ScamData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredScams = selectedCategory === "all"
    ? scamCategories.flatMap(cat => cat.scams)
    : scamCategories.find(cat => cat.id === selectedCategory)?.scams || [];

  const searchedScams = searchQuery
    ? filteredScams.filter(scam => 
        scam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scam.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredScams;

  const displayedScams = showAll ? searchedScams : searchedScams.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreScams = searchedScams.length > INITIAL_DISPLAY_COUNT;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <section id="scams" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,hsl(210_100%_52%/0.05),transparent_50%)]" />

      <div className="container px-4 md:px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-alert/10 text-alert text-sm font-semibold mb-4">
            Know Your Enemy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            The Scam <span className="gradient-text-alert">Library</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            30+ documented crypto scam techniques. Click any card to learn the attack pattern and your defense strategy.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search scams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          {/* Desktop: flex wrap centered */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300",
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              All Scams
            </button>
            {scamCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                aria-label={`Filter by ${category.name}`}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300",
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <category.icon className={cn("w-4 h-4", selectedCategory === category.id ? "" : category.color)} aria-hidden="true" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Mobile: grid layout */}
          <div className="grid grid-cols-3 gap-2 sm:hidden">
            <button
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl font-medium text-xs transition-all duration-300",
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <span className="text-lg">📋</span>
              <span>All</span>
            </button>
            {scamCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                aria-label={`Filter by ${category.name}`}
                className={cn(
                  "flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl font-medium text-xs transition-all duration-300",
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <category.icon className={cn("w-5 h-5", selectedCategory === category.id ? "" : category.color)} aria-hidden="true" />
                <span className="text-center leading-tight">{category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </motion.div>


        {/* Results count */}
        <div className="text-center mb-8">
          <span className="text-sm text-muted-foreground">
            Showing {displayedScams.length} of {searchedScams.length} scam{searchedScams.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Scam cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {displayedScams.map((scam) => {
              const category = scamCategories.find(cat => cat.id === scam.category);
              return (
                <motion.button
                  key={scam.id}
                  variants={cardVariants}
                  onClick={() => setSelectedScam(scam)}
                  aria-label={`Learn about ${scam.title} scam - ${scam.riskLevel} risk`}
                  className="group relative bg-card rounded-xl border border-border/50 p-5 card-interactive overflow-hidden text-left"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />
                  <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className={cn("p-2.5 rounded-lg bg-secondary/50", category?.color)}>
                        {category && <category.icon className="w-5 h-5" />}
                      </div>
                      <span
                        className={cn(
                          "text-xs font-semibold px-2.5 py-1 rounded-full",
                          scam.riskLevel === "Critical" && "bg-alert/30 text-red-300",
                          scam.riskLevel === "High" && "bg-orange-500/30 text-orange-300",
                          scam.riskLevel === "Medium" && "bg-yellow-500/30 text-yellow-300"
                        )}
                      >
                        {scam.riskLevel}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold font-display mb-2 group-hover:text-primary transition-colors duration-300">
                      {scam.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                      {scam.shortDesc}
                    </p>

                    {/* Category tag */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                        {category?.name}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn more
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Show More Button */}
        {hasMoreScams && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex justify-center mt-10"
          >
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              Show More ({searchedScams.length - INITIAL_DISPLAY_COUNT} more)
              <ChevronDown className="w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {searchedScams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No scams found matching your search.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <ScamModal
        isOpen={!!selectedScam}
        onClose={() => setSelectedScam(null)}
        scam={selectedScam}
      />
    </section>
  );
};

export default ScamsCatalog;
