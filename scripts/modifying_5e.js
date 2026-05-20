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

  //new spell schools
  CONFIG.DND5E.spellSchools.angelic = {
        label: "Angelic",
        icon: "…",
        fullKey: "angelic",
        reference: "" // UUID of journal entry page for rich tooltips
    };
  CONFIG.DND5E.spellSchools.chaos = {
      label: "Chaos",
      icon: "…",
      fullKey: "chaos",
      reference: "" // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.spellSchools.chronomancy = {
      label: "Chronomancy",
      icon: "…",
      fullKey: "chronomancy",
      reference: "" // UUID of journal entry page for rich tooltips
    };

    //Valda's Spire of Secrets
    CONFIG.DND5E.spellSchools.renaissance = {
        label: "Renaissance",
        icon: "…",
        fullKey: "renaissance",
        reference: "" // UUID of journal entry page for rich tooltips
    };


    //Grafting Feature type from Valda's Spire of Secrets
    CONFIG.DND5E.featureTypes.grafts = {
      label: "Monstrous Grafts",
      subtypes:{
        arm: "Arms",
        external: "External",
        head: "Head",
        internal: "Internal",
        legs: "Legs"
      }
      };

      //arcane stitches class feature from Valda's Spire of Secrets
      //reanimator necromancer feature
      CONFIG.DND5E.featureTypes.class.subtypes.arcaneStitch = "Arcane Stitch";

      //weapon properties from Valda's
       CONFIG.DND5E.itemProperties.fist = {
        label: "Fist",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("fist");
});


