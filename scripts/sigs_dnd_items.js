import activityIcons from "./activity_icon_defaults.js";
import valdasCustomization from "./valdas_customization.js";
import customize5e from "./customizing_5e.js";

Hooks.once("init", () => {

    activityIcons();

    valdasCustomization();

    customize5e();
    
    dnd5e.applications.ChatLog5e.NOTIFY_DURATION = 10000; //increases the duration of the chat card popup
});
