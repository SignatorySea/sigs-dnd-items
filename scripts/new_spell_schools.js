// Add a new Spell School that can be selected in Spell Items
/* Hooks.once("init", () => {
  CONFIG.DND5E.spellSchools.psionics = {
    label: "Psionics",
    icon: "…",
    fullKey: "psionics", // Full key used in enrichers
    reference: "" // UUID of journal entry page for rich tooltips
  };
}); */


Hooks.once("init", () => {
    CONFIG.DND5E.spellSchools.temporal = {
      label: "Temporal",
      icon: "…",
      fullKey: "temporal",
      reference: "" // UUID of journal entry page for rich tooltips
    };
});

Hooks.once("init", () => {
    CONFIG.DND5E.spellSchools.chaos = {
      label: "Chaos",
      icon: "…",
      fullKey: "chaos",
      reference: "" // UUID of journal entry page for rich tooltips
    };
});

Hooks.once("init", () => {
    CONFIG.DND5E.spellSchools.angelic = {
        label: "Angelic",
        icon: "…",
        fullKey: "angelic",
        reference: "" // UUID of journal entry page for rich tooltips
    };
});

