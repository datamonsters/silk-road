import model.query as query

r = query.calc_road(query.roads)

m = 0
for x in r['j']:
    m = max(m, x[2])
    print(x)
