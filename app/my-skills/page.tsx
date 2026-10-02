"use client";
import React, { useState } from "react";
import { SkillsData } from "@/constants";
import { motion } from "framer-motion";

const Page = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="min-h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center py-28 px-6 overflow-y-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="font-semibold text-white text-[40px] md:text-[50px]">
          Skills{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            &{" "}
          </span>
          Technologies
        </h1>
        <p className="text-gray-400 text-[16px] mt-2">
          Everything I work with — from frontend to deployment
        </p>
      </motion.div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl w-full">
        {SkillsData.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            onClick={() =>
              setActiveCategory(
                activeCategory === group.category ? null : group.category
              )
            }
            className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-white/25 hover:bg-white/10 transition-all duration-300"
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-br ${group.color} flex-shrink-0`}
              />
              <h2 className="text-white font-semibold text-lg">
                {group.category}
              </h2>
              <span className="ml-auto text-gray-400 text-xs">
                {group.skills.length} skills
              </span>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${group.color} text-white opacity-90`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Total skill count */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-gray-500 text-sm"
      >
        {SkillsData.reduce((acc, g) => acc + g.skills.length, 0)} skills across{" "}
        {SkillsData.length} categories
      </motion.p>
    </div>
  );
};

export default Page;