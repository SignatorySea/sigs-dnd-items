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

      //-----------------------------------------------
      // weapon properties from Valda's
      // ---------------------------------------------
      CONFIG.DND5E.itemProperties.automatic = {
        label: "Automatic",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("automatic");

      CONFIG.DND5E.itemProperties.concealable = {
        label: "Concealable",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("concealable");

      CONFIG.DND5E.itemProperties.double = {
        label: "Double",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("double");

      CONFIG.DND5E.itemProperties.dry = {
        label: "Dry",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("dry");

      CONFIG.DND5E.itemProperties.elegant = {
        label: "Elegant",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("elegant");

      CONFIG.DND5E.itemProperties.explosive = {
        label: "explosive",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("explosive");

       CONFIG.DND5E.itemProperties.fist = {
        label: "Fist",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("fist");

      CONFIG.DND5E.itemProperties.foregrip = {
        label: "Foregrip",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("foregrip");

      CONFIG.DND5E.itemProperties.heat = {
        label: "Heat",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("heat");

      CONFIG.DND5E.itemProperties.massive = {
        label: "Massive",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("massive");
      
      CONFIG.DND5E.itemProperties.misfire = {
        label: "Misfire",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("misfire");

      CONFIG.DND5E.itemProperties.mounted = {
        label: "Mounted",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("mounted");

      CONFIG.DND5E.itemProperties.parrying = {
        label: "Parrying",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("parrying");

      CONFIG.DND5E.itemProperties.rocket = {
        label: "Rocket",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("rocket");

      CONFIG.DND5E.itemProperties.scatter = {
        label: "Scatter",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("scatter");

      CONFIG.DND5E.itemProperties.sighted = {
        label: "Sighted",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("sighted");

      CONFIG.DND5E.itemProperties.superheavy = {
        label: "Superheavy",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("superheavy");

      CONFIG.DND5E.itemProperties.switch = {
        label: "Switch",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("switch");

      CONFIG.DND5E.itemProperties.tension = {
        label: "Tension",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("tension");

      CONFIG.DND5E.itemProperties.trip = {
        label: "Trip",
        isPhysical: false
      },
      CONFIG.DND5E.validProperties.weapon.add("trip");

      CONFIG.DND5E.itemProperties.twinshot = {
        label: "Twinshot",
        isPhysical: true
      };
      CONFIG.DND5E.validProperties.weapon.add("twinshot");
      
      // adds tool tip tag of "Weapon Property"
      CONFIG.DND5E.ruleTypes.weaponproperty = {label: "Weapon Property", reference: `weaponproperty`};

      // ------------------------------------------
      // Rules Refrences for Valda's
      //-------------------------------------------
      CONFIG.DND5E.rules.monsterousgrafts = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.1X0d9VIycsVm43xs";

      //weapon properties rules pages
      CONFIG.DND5E.rules.weaponautomatic = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.CXNOAHXIHNxGJnSF";
      CONFIG.DND5E.rules.weaponconcealable = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.d8mWMB88szioRljV";
      CONFIG.DND5E.rules.weapondouble = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.IkcUKqVErkRVlY5P";
      CONFIG.DND5E.rules.weapondry = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.omIGHSkCR321lrFu";
      CONFIG.DND5E.rules.weaponelegant = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.7T1HHyigJ1Ro0zm8";
      CONFIG.DND5E.rules.weaponexplosive = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.EX1JDIWUdovrhoVU";
      CONFIG.DND5E.rules.weaponfist = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.CseQEjLBEkCfwZ67";
      CONFIG.DND5E.rules.weaponforegrip = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.N4rvCAiF6jaESN10";
      CONFIG.DND5E.rules.weaponheat = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.pUvPDFqvwQhNWOXD";
      CONFIG.DND5E.rules.weaponmassive = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.2xm2EbFGOBp7zCGQ";
      CONFIG.DND5E.rules.weaponmisfire = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.34Xo9C8m0xvg99rt";
      CONFIG.DND5E.rules.weaponmounted = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.gosntc7hTrvN3A4x";
      CONFIG.DND5E.rules.weaponparrying = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.mtvYjanffpONNFus";
      CONFIG.DND5E.rules.weaponrocket = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.pzPwbmZx8CTT1ivU";
      CONFIG.DND5E.rules.weaponscatter = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.yDUU3WIgSJIZWrjj";
      CONFIG.DND5E.rules.weaponsighted = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.X9IF9zFoNC34JyYZ";
      CONFIG.DND5E.rules.weaponsuperheavy = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.KtCTIfNsGQTmree3";
      CONFIG.DND5E.rules.weaponswitch = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.R89UmnkqW9FD7GwF";
      CONFIG.DND5E.rules.weapontension = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.RYxP8tI0dYkZytl3";
      CONFIG.DND5E.rules.weapontrip = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.KemjPHZjbawB0Brh";
      CONFIG.DND5E.rules.weapontwinshot = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.WoVc7BbGGcJg8V2y";
    
    
    });
/*
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
    }; */