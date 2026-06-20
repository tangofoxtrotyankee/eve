import { discordChannel } from "eve/channels/discord";

// Interface channel only — Discord submits messages and approval choices to Lee.
// Business logic lives in company/, processes/, and decision_trees/.
// See processes/discord_interface.md.
export default discordChannel();
