import discord
import asyncio
from discord.ext import commands
from discord import Intents
from definition import *
from psql import config

token = config("discord")["token"]

intents = Intents.all()


bot = commands.Bot(command_prefix="%", intents=intents)


async def main():
    print("start")
    discord.utils.setup_logging()
    await bot.load_extension('cogs_1')
    await bot.start(token=token)


asyncio.run(main())
