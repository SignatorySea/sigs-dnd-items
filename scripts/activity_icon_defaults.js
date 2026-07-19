export default function activityIcons(){

  const activityIcons = {
    attack:   "icons/skills/melee/strike-sword-steel-yellow.webp",
    cast:     "icons/magic/fire/flame-burning-hand-orange.webp",
    check:    "icons/skills/social/peace-luck-insult.webp",
    damage:   "icons/magic/fire/flame-burning-embers-orange.webp",
    enchant:  "icons/magic/symbols/runes-etched-steel-blade.webp",
    forward:  "icons/magic/movement/trail-streak-zigzag-teal.webp",
    heal:     "icons/magic/life/cross-explosion-burst-green.webp",
    save:     "icons/magic/light/beam-impact-deflect-teal.webp",
    summon:   "icons/magic/movement/chevrons-down-yellow.webp",
    transform:"icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
    utility:  "icons/skills/movement/ball-spinning-blue.webp",
  };

  // Apply icons to activityTypes
   for (const [key, img] of Object.entries(activityIcons)) {
    const activity = CONFIG.DND5E.activityTypes[key];
    activity.documentClass.metadata.img = img
  }

};
