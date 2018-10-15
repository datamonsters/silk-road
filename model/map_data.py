import model.fn_matrix as f

cities = []
for i in range(f.cities.shape[0]):
    city = {
        "name": f.cities.iloc[i, 0],
        "lat": f.cities.iloc[i, 1],
        "lon": f.cities.iloc[i, 2],
        "id": len(cities)
    }
    # city['name'] = f.cities.iloc[i, 0]
    # city['lat'] = f.cities.iloc[i, 1]
    # city['lon'] = f.cities.iloc[i, 2]
    # city['id'] = len(cities)
    cities.append(city)

edges = []
for i in range(f.df_edges_list.shape[0]):
    edge = [ int(f.df_edges_list.iloc[i, 7]), int(f.df_edges_list.iloc[i, 8])]
    # edges[str(edge[0]) + ":" + str(edge[1])] = edge
    edges.append(edge)
