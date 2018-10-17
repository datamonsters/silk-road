import model.query as query

r = query.calc_traffic(query.hash_query(query.roads))

m = 0
for x in r['j']:
    m = max(m, x[2])
    print(x)
