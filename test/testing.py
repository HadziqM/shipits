from base import *
import random
from datetime import datetime as dt


def rand_asc(num, range: int):
    li = [range, 0]
    a = random.choices(li)
    return num + a[0]


def rand_desc(num, range: int):
    li = [-range, 0]
    a = random.choices(li)
    return num + a[0]


def rand_cmp(num, range: int):
    li = [-range, 0, range]
    a = random.choices(li)
    return num + a[0]


def rand_float(num):
    li = [0.00001, 0, -0.00001]
    a = random.choices(li)
    return num + a[0]


class getwtf:
    def __init__(self):
        self.gps_n = 4.12321
        self.gps_w = 129.02311
        self.fuel = 3000
        self.stg = 1500
        self.stt = 1000
        self.srv = 500
        self.oil = 200
        self.temp = 70
        self.rpm = 400
        self.vib = 2000
        self.slantx = 10
        self.slanty = -10
        self.speed = 3
        self.distance = 4
        self.compas = -10

    async def one_row(self):
        self.gps_n = rand_float(self.gps_n)
        self.gps_w = rand_float(self.gps_w)
        self.fuel = rand_desc(self.fuel, 30)
        self.stg = rand_desc(self.stg, 10)
        self.stt = rand_desc(self.stt, 10)
        self.srv = rand_desc(self.srv, 10)
        self.oil = rand_cmp(self.oil, 50)
        self.temp = rand_cmp(self.temp, 5)
        self.rpm = rand_cmp(self.rpm, 80)
        self.vib = rand_cmp(self.vib, 100)
        self.slantx = rand_cmp(self.slantx, 8)
        self.slanty = rand_cmp(self.slanty, 8)
        self.speed = rand_cmp(self.speed, 1)
        self.distance = rand_asc(self.distance, 1)
        self.compas = rand_cmp(self.compas, 10)
        row = ["shipid", "gps_n", "gps_w", "fuel", "stg", "stt", "srv", "oil",
               "rpm", "vib", "temp", "slantx", "slanty", "speed", "distance", "updated", "compas"]
        val = [1, self.gps_n, self.gps_w, self.fuel, self.stg, self.stt, self.srv, self.oil,
               self.rpm, self.vib, self.temp, self.slantx, self.slanty, self.speed, self.distance, int(dt.timestamp(dt.now())), self.compas]
        await basicpg().new_row("senses", row, val)


# async def main():
#     test = getwtf()
#     for i in range(5):
#         await test.one_row()


# asyncio.run(main())
