import asyncio
import discord
from discord.ext import commands
from discord import ButtonStyle, Embed, app_commands
from discord.ui import View
from testing import *


class myview(View):
    def __init__(self, msg):
        super().__init__(timeout=600)
        self.count = 1
        self.stopped = False
        self.msg = msg

    @discord.ui.button(label="start", style=ButtonStyle.green, emoji='👍')
    async def start(self, inter: discord.Interaction, button):
        button.disabled = True
        await inter.response.edit_message(view=self)
        gen = getwtf()
        while True:
            embed = Embed(title="Generating Random Data to Database",
                          description=f"generating {self.count} data to database")
            await self.msg.edit(embed=embed)
            self.count += 1
            await asyncio.sleep(2)
            await gen.one_row()
            if self.stopped:
                break

    @discord.ui.button(label="stop", style=ButtonStyle.red, emoji='💩')
    async def stop(self, inter: discord.Interaction, button):
        button.disabled = True
        await inter.response.edit_message(view=self)
        await inter.followup.send("stopped", ephemeral=True)
        self.stopped = True


class cogs1(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @app_commands.command(name="test", description="just testing")
    async def test(self, interaction: discord.Interaction):
        embed = Embed(title="Generating Random Data to Database",
                      description="generating x data to database")
        msg = await interaction.channel.send(embed=embed)
        await interaction.response.send_message("begin oprations", ephemeral=True)
        await interaction.followup.send(view=myview(msg))

    @commands.command()
    async def sync(self, ctx: commands.Context):
        ctx.bot.tree.copy_global_to(guild=ctx.guild)
        synced = await ctx.bot.tree.sync(guild=ctx.guild)
        await ctx.send(f"sync {synced} commands")


async def setup(bot):
    await bot.add_cog(cogs1(bot))
