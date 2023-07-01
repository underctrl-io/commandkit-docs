---
title: CommandKit setup
---

This is a simple overview of how to set up CommandKit with all the available options. You'd usually set this up in your entry point file (e.g. `index.js`) where you have access to your Discord client object.

```js
// index.js
const { CommandKit } = require('commandkit');
const { Client, IntentsBitField } = require('discord.js');
const path = require('path');

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

new CommandKit({
  client,
  commandsPath: path.join(__dirname, 'commands'),
  eventsPath: path.join(__dirname, 'events'),
  validationsPath: path.join(__dirname, 'validations'),
  devGuildIds: ['DEV_SERVER_ID_1', 'DEV_SERVER_ID_2'],
  devUserIds: ['DEV_USER_ID_1', 'DEV_USER_ID_2'],
});

client.login('your_bot_token');
```

### Required properties

- `client` - Your Discord.js client object

### Optional properties

- `commandsPath` - Path to the commands folder.
- `eventsPath` - Path to your events folder.
- `validationsPath` - Path to the validations folder. This will only work if `commandsPath` was provided.
- `devGuildIds` - Array of development server IDs. Used to register and run developer only commands in specific servers.
- `devUserIds` - Array of developer user IDs. Used to ensure developer only commands can only be ran by these users.

**It's highly recommended to use the "path" library to define your paths to avoid any file import issues.**
