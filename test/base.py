from psql import *
import asyncpg


def clean(data: list, row):
    a = []
    for i in data:
        a.append(i.get(row))
    return a


def list2str(lis: list):
    a = "("
    for i in lis:
        a += str(i)
        a += ","
    return a[:-1]+")"


def list2strv(lis: list):
    a = "("
    for i in lis:
        if isinstance(i, str):
            a += f"'{i}',"
        else:
            a += f"{str(i)},"
    return a[:-1]+")"


class basicpg:
    def __init__(self):
        self.param = config('postgresql')

    async def get(self, table, row, condition_c=None, condition_v=None, sort=None):
        conn = await asyncpg.connect(**self.param)
        if condition_c:
            if isinstance(condition_v, str):
                sql = f"select {row} from {table} where {condition_c}='{condition_v}'"
            else:
                sql = f"select {row} from {table} where {condition_c}={condition_v}"
            res = await conn.fetchval(sql)
        else:
            if sort:
                sql = f"select {row} from {table} sort by {sort} descend"
            else:
                sql = f"select {row} from {table}"
            res = await conn.fetch(sql)
            res = clean(res, row)
        await conn.close()
        return res

    async def new_row(self, table, row: list, val: list):
        conn = await asyncpg.connect(**self.param)
        await conn.execute(f"Insert into {table}{list2str(row)} values{list2strv(val)}")
        await conn.close()

    async def run_sql(self, data):
        conn = await asyncpg.connect(**self.param)
        await conn.execute(data)
        await conn.close()

    async def change(self, table, row, val, condition_c=None, condition_v=None):
        conn = await asyncpg.connect(**self.param)
        if condition_c:
            if isinstance(condition_v, str):
                sql = f"update {table} set {row}={val} where {condition_c}='{condition_v}'"
                if isinstance(val, str):
                    sql = f"update {table} set {row}='{val}' where {condition_c}='{condition_v}'"
            else:
                sql = f"update {table} set {row}={val} where {condition_c}={condition_v}"
                if isinstance(val, str):
                    sql = f"update {table} set {row}='{val}' where {condition_c}={condition_v}"
        else:
            if isinstance(val, str):
                sql = f"update {table} set {row}='{val}'"
            else:
                sql = f"update {table} set {row}={val}"
        await conn.execute(sql)
        await conn.close()
