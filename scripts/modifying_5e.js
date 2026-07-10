// Add a new Spell School that can be selected in Spell Items
/* Hooks.once("init", () => {
  CONFIG.DND5E.spellSchools.psionics = {
    label: "Psionics",
    icon: "…",
    fullKey: "psionics", // Full key used in enrichers
    reference: "" // UUID of journal entry page for rich tooltips
  };
}); */

// spellcasting config https://github.com/foundryvtt/dnd5e/blob/d5d675f565df50ec001cf1ebf3213e2ff0a9f2c8/module/config.mjs#L3009



Hooks.once("init", () => {

  dnd5e.applications.ChatLog5e.NOTIFY_DURATION = 10000; //increases the duration of the chat card popup
    //---------------------------------------------------
    // Dnd 5e Rules References!
    // --------------------------------------------------
    CONFIG.DND5E.rules.weaponammunition = "Compendium.sigs-dnd-items.rules.JournalEntry.3PDDa29bXVNGWX4p.JournalEntryPage.h2ce0NA3kxMdmshq";
    CONFIG.DND5E.rules.weaponfinesse = "Compendium.sigs-dnd-items.rules.JournalEntry.3PDDa29bXVNGWX4p.JournalEntryPage.OIKLEqOxp34orYHV";
    CONFIG.DND5E.rules.weaponheavy = "Compendium.sigs-dnd-items.rules.JournalEntry.3PDDa29bXVNGWX4p.JournalEntryPage.rRLLKlrlbjCZ0agA";
    CONFIG.DND5E.rules.weaponlight = "Compendium.sigs-dnd-items.rules.JournalEntry.3PDDa29bXVNGWX4p.JournalEntryPage.fuDsQOVs9rZ26skE";
    CONFIG.DND5E.rules.weaponloading = "Compendium.sigs-dnd-items.rules.JournalEntry.3PDDa29bXVNGWX4p.JournalEntryPage.rxPmF9Vi7CwJ5q0l";
    CONFIG.DND5E.rules.weaponrange = "Compendium.sigs-dnd-items.rules.JournalEntry.3PDDa29bXVNGWX4p.JournalEntryPage.AAwc6FEe3eOiHqgO";
    CONFIG.DND5E.rules.weaponreach = "Compendium.sigs-dnd-items.rules.JournalEntry.3PDDa29bXVNGWX4p.JournalEntryPage.cbVIfqiuUbhQvzzC";
    CONFIG.DND5E.rules.weaponthrown = "Compendium.sigs-dnd-items.rules.JournalEntry.3PDDa29bXVNGWX4p.JournalEntryPage.RcrxbGWBX92YAVMK";
    CONFIG.DND5E.rules.weapontwohanded = "Compendium.sigs-dnd-items.rules.JournalEntry.3PDDa29bXVNGWX4p.JournalEntryPage.nJm4m3BE8cR8CD8N";
    CONFIG.DND5E.rules.weaponversatile = "Compendium.sigs-dnd-items.rules.JournalEntry.3PDDa29bXVNGWX4p.JournalEntryPage.yxAPzqEA3jHfOlfq";


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

      //arcane fighting style feature for Warmage
       CONFIG.DND5E.featureTypes.class.subtypes.arcaneFightingStyle = "Arcane Fighting Style";
       CONFIG.DND5E.featureTypes.class.subtypes.warmageTricks = "Warmage Tricks";

      //arcane stitches class feature from Valda's Spire of Secrets
      //reanimator necromancer feature
      CONFIG.DND5E.featureTypes.class.subtypes.arcaneStitch = "Arcane Stitch";

      // Alchemist feature Types
      CONFIG.DND5E.featureTypes.class.subtypes.bombFormulae = "Bomb Formula";
      CONFIG.DND5E.featureTypes.class.subtypes.discoveries = "Discoveries";

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
        label: "Explosive",
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
      


      // ------------------------------------------
      // Rules Refrences for Valda's
      //-------------------------------------------
      CONFIG.DND5E.rules.monsterousgrafts = "Compendium.sigs-dnd-items.rules.JournalEntry.kZjsusjYH74QpyJB.JournalEntryPage.1X0d9VIycsVm43xs";

      // adds tool tip tag of "Weapon Property"
      CONFIG.DND5E.ruleTypes.weaponproperty = {label: "Weapon Property", reference: `weaponproperty`};


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
    
      //------------------------------------------
      //  Adding New Exotic Weapon Types
      // -------------------------------------------
        CONFIG.DND5E.weaponTypes.exoticMelee = "Exotic Melee";
        CONFIG.DND5E.weaponProficiencies.exoticMelee = "Exotic Melee";
        CONFIG.DND5E.weaponProficienciesMap.exoticMelee = "exoticMelee";
        CONFIG.DND5E.weaponTypeMap.exoticMelee = "melee";

        CONFIG.DND5E.weaponTypes.exoticRanged = "Exotic Ranged";
        CONFIG.DND5E.weaponProficiencies.exoticRanged = "Exotic Ranged";
        CONFIG.DND5E.weaponProficienciesMap.exoticRanged = "exoticRanged";
        CONFIG.DND5E.weaponTypeMap.exoticMelee = "ranged";

        CONFIG.DND5E.weaponIds.bomb = "Compendium.sigs-dnd-items.items.Item.IblKCTCsm2kShltx";

      // --------------------------------------
      // New Weapon Base types from Valda's
      // ---------------------------------------
      /* IDK I dont know if this is worth the massive effort

      CONFIG.DND5E.weaponIds.cestus = "Compendium.sigs-dnd-items.items.Item.MzmywET0XAF3LN1G";
      CONFIG.DND5E.weaponIds.clawgauntlet = "Compendium.sigs-dnd-items.items.Item.AcULqYWcwceWOmUI";
      CONFIG.DND5E.weaponIds.hookhand = "Compendium.sigs-dnd-items.items.Item.uzdVyHB4ahEbuCLm";
      CONFIG.DND5E.weaponIds.kama = "Compendium.sigs-dnd-items.items.Item.yXo97G6FqJeK2M0O";
      CONFIG.DND5E.weaponIds.machete = "Compendium.sigs-dnd-items.items.Item.GibS30rPlWnuYsty";
      CONFIG.DND5E.weaponIds.pickaxe = "Compendium.sigs-dnd-items.items.Item.7CgcsRyE9yCWN1DW";
      CONFIG.DND5E.weaponIds.punchingdagger = "Compendium.sigs-dnd-items.items.Item.3t4VrbIpnjBvGC4p";
      CONFIG.DND5E.weaponIds.shovel = "Compendium.sigs-dnd-items.items.Item.s4jNhz20TjhwbpaI";
      */

      // --------------------------------------------------
      // Investigator Subclass Occultist Spell Progression
      // --------------------------------------------------

      CONFIG.DND5E.spellcasting.investOccult = {
        label: "Pact Magic", //this line adds it under the pact magic label in the drop down
        type: "single",
        cantrips: true,
        prepares: false,
        progression: {
          occultist: {  //this section denotes the actual spell casting you are setting up
            label: "Occultist", 
            divisor: 1,
            roundUp: true
          }
        },
        table: {
          3: {slots: 1, level: 1},
          5: {slots: 2, level: 1},
          7: {slots: 2, level: 2},
          13: {slots: 2, level: 3},
          19: {slots: 2, level: 4}
        }
      };
    
      CONFIG.DND5E.spellcasting.dynamoEngineer = {
        label: "Pact Magic",
        type: "single",
        cantrips: false,
        prepares: true,
        progression: {
          dynamoEngineer: {
            label: "Dynamo Engineer",
            divisor: 1,
            roundUp: false
          }
        },
        table: {
          2: {slots: 2, level: 1},
          4: {slots: 3, level: 1},
          7: {slots: 4, level: 1},
          8: {slots: 4, level: 2},
          10: {slots: 5, level: 2},
          13: {slots: 5, level: 3},
          16: {slots: 6, level: 3},
          19: {slots: 7, level: 4}
        }
      };

      CONFIG.DND5E.spellcasting.martyr = {
        label: "Martyr", //this line adds it under the label in the drop down
        type: "multi",
        cantrips: false,
        prepares: false,
        progression: {
          martyr: {  //this section denotes the actual spell casting you are setting up
            label: "Martyr", 
            divisor: 2,
          }
        },
        table: [
          [],
          [1],
          [1],
          [1],
          [1, 1],
          [1, 1],
          [1, 1],
          [1, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1],
      ]};
});