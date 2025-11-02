import { ActivityType, ChannelType, TextChannel } from 'discord.js'
import { event, Events, registerCommands } from '../utils/index.js'
import commands from '../commands/index.js'
import { Keys } from '../keys.js'

// Log when the bot successfully logs in and export it
export default event(Events.ClientReady, async ({ log }, client) => {
    // Register the commands associated with the bot upon loggin in
    registerCommands(client, commands)

    // set status of the bot
    client.user.setActivity({
        name: 'Powered by Ollama',
        type: ActivityType.Custom
    })

    if (Keys.channelId) {
        const channel = await client.channels.fetch(Keys.channelId)
        if (channel && channel.type === ChannelType.GuildText) {
            (channel as TextChannel).send("Hello! I am now online and ready to chat.")
        }
    }

    log(`Logged in as ${client.user.username}.`)
})